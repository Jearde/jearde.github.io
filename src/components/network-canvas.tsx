"use client";

import { useEffect, useRef } from "react";

import type { ProjectId, SectionId } from "@/content/site";
import { useNarrativeStore } from "@/stores/narrative";

type Point = { x: number; y: number };
type Node = Point & { targets: readonly [Point, Point, Point, Point] };

const MAX_NODES = 60;
const MAX_PIXELS = 4_000_000;
const projectRegions: Record<ProjectId, Point> = {
  nexuml: { x: 0.2, y: 0.3 },
  nexufl: { x: 0.72, y: 0.24 },
  pfedmarl: { x: 0.34, y: 0.72 },
  "asn-database": { x: 0.78, y: 0.7 },
};

const sectionState: Record<SectionId, 0 | 1 | 2 | 3> = {
  top: 0,
  about: 1,
  practice: 1,
  work: 2,
  research: 2,
  community: 3,
  contact: 3,
};

function random(seed: number) {
  let value = seed;
  return () => {
    value = (value * 1664525 + 1013904223) >>> 0;
    return value / 4294967296;
  };
}

function buildNodes(): Node[] {
  const next = random(260904);
  const centers = [
    { x: 0.2, y: 0.3 },
    { x: 0.72, y: 0.24 },
    { x: 0.34, y: 0.72 },
    { x: 0.78, y: 0.7 },
  ];

  return Array.from({ length: MAX_NODES }, (_, index) => {
    const angle = (index / MAX_NODES) * Math.PI * 2;
    const center = centers[index % centers.length];
    const independent = { x: 0.08 + next() * 0.84, y: 0.1 + next() * 0.8 };
    const clustered = {
      x: center.x + (next() - 0.5) * 0.2,
      y: center.y + (next() - 0.5) * 0.18,
    };
    const connected = {
      x: 0.13 + ((index * 7) % 13) / 15.5,
      y: 0.16 + ((index * 11) % 9) / 12,
    };
    const radius = 0.18 + (index % 7) * 0.035;
    const expanded = {
      x: 0.5 + Math.cos(angle) * radius,
      y: 0.5 + Math.sin(angle) * radius,
    };

    return {
      ...independent,
      targets: [independent, clustered, connected, expanded],
    };
  });
}

export function NetworkCanvas() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const sectionRef = useRef<SectionId>(
    useNarrativeStore.getState().activeSection,
  );
  const projectRef = useRef<ProjectId | null>(
    useNarrativeStore.getState().activeProject,
  );

  useEffect(() => {
    const canvas = canvasRef.current;
    const context = canvas?.getContext("2d");
    if (!canvas || !context) return;

    const nodes = buildNodes();
    const pointer = { x: -1, y: -1 };
    const motion = window.matchMedia("(prefers-reduced-motion: reduce)");
    const finePointer = window.matchMedia("(hover: hover) and (pointer: fine)");
    let width = 0;
    let height = 0;
    let nodeCount = MAX_NODES;
    let frame = 0;
    let resizeFrame = 0;
    let lastPaint = 0;

    const resize = () => {
      width = window.innerWidth;
      height = window.innerHeight;
      nodeCount = width < 640 ? 32 : MAX_NODES;
      const scale = Math.min(
        window.devicePixelRatio || 1,
        Math.sqrt(MAX_PIXELS / Math.max(1, width * height)),
      );
      canvas.width = Math.floor(width * scale);
      canvas.height = Math.floor(height * scale);
      canvas.style.width = `${width}px`;
      canvas.style.height = `${height}px`;
      context.setTransform(scale, 0, 0, scale, 0, 0);
      canvas.dataset.nodeCount = String(nodeCount);
      canvas.dataset.bufferPixels = String(canvas.width * canvas.height);
    };

    const draw = (isStatic = false) => {
      const state = motion.matches ? 1 : sectionState[sectionRef.current];
      const quiet = sectionRef.current === "contact" ? 0.55 : 1;
      const region = projectRef.current
        ? projectRegions[projectRef.current]
        : null;
      const positions: Point[] = [];

      context.clearRect(0, 0, width, height);
      canvas.dataset.motion = motion.matches ? "reduced" : "animated";
      canvas.dataset.frameCount = String(
        Number(canvas.dataset.frameCount ?? 0) + 1,
      );
      canvas.dataset.renderState = [
        "independent",
        "clustered",
        "connected",
        "expanded",
      ][state];

      for (let index = 0; index < nodeCount; index += 1) {
        const node = nodes[index];
        const target = node.targets[state];
        const ease = isStatic ? 1 : 0.045;
        node.x += (target.x - node.x) * ease;
        node.y += (target.y - node.y) * ease;

        let x = node.x * width;
        let y = node.y * height;
        if (finePointer.matches && pointer.x >= 0) {
          const dx = x - pointer.x;
          const dy = y - pointer.y;
          const distance = Math.hypot(dx, dy);
          if (distance < 120 && distance > 0) {
            const force = (1 - distance / 120) * 7;
            x += (dx / distance) * force;
            y += (dy / distance) * force;
          }
        }
        positions.push({ x, y });
      }

      const linkDistance = width < 640 ? 105 : 145;
      context.lineWidth = 0.75;
      for (let left = 0; left < positions.length; left += 1) {
        for (let right = left + 1; right < positions.length; right += 1) {
          const a = positions[left];
          const b = positions[right];
          const distance = Math.hypot(a.x - b.x, a.y - b.y);
          if (distance > linkDistance) continue;
          context.strokeStyle = `rgba(13, 162, 231, ${
            (1 - distance / linkDistance) * 0.13 * quiet
          })`;
          context.beginPath();
          context.moveTo(a.x, a.y);
          context.lineTo(b.x, b.y);
          context.stroke();
        }
      }

      positions.forEach((point, index) => {
        const normalized = { x: point.x / width, y: point.y / height };
        const emphasized =
          region &&
          Math.hypot(normalized.x - region.x, normalized.y - region.y) < 0.18;
        context.fillStyle = emphasized
          ? "rgba(32, 203, 152, 0.72)"
          : `rgba(255, 255, 255, ${(index % 5 === 0 ? 0.42 : 0.22) * quiet})`;
        context.beginPath();
        context.arc(point.x, point.y, emphasized ? 2.5 : 1.35, 0, Math.PI * 2);
        context.fill();
      });
    };

    const animate = (time: number) => {
      const interval = width < 640 ? 1000 / 30 : 1000 / 45;
      if (time - lastPaint >= interval) {
        draw();
        lastPaint = time;
      }
      frame = requestAnimationFrame(animate);
    };

    const start = () => {
      cancelAnimationFrame(frame);
      if (document.hidden || motion.matches) {
        draw(true);
      } else {
        frame = requestAnimationFrame(animate);
      }
    };

    const onResize = () => {
      cancelAnimationFrame(resizeFrame);
      resizeFrame = requestAnimationFrame(() => {
        resize();
        start();
      });
    };
    const onPointerMove = (event: PointerEvent) => {
      pointer.x = event.clientX;
      pointer.y = event.clientY;
    };
    const onPointerLeave = () => {
      pointer.x = -1;
      pointer.y = -1;
    };
    const onVisibility = () => start();
    const unsubscribe = useNarrativeStore.subscribe((state) => {
      sectionRef.current = state.activeSection;
      projectRef.current = state.activeProject;
      canvas.dataset.activeProject = state.activeProject ?? "";
      if (motion.matches) draw(true);
    });

    resize();
    canvas.dataset.activeProject = projectRef.current ?? "";
    start();
    window.addEventListener("resize", onResize, { passive: true });
    window.addEventListener("pointermove", onPointerMove, { passive: true });
    document.documentElement.addEventListener("pointerleave", onPointerLeave);
    document.addEventListener("visibilitychange", onVisibility);
    motion.addEventListener("change", start);

    return () => {
      cancelAnimationFrame(frame);
      cancelAnimationFrame(resizeFrame);
      window.removeEventListener("resize", onResize);
      window.removeEventListener("pointermove", onPointerMove);
      document.documentElement.removeEventListener(
        "pointerleave",
        onPointerLeave,
      );
      document.removeEventListener("visibilitychange", onVisibility);
      motion.removeEventListener("change", start);
      unsubscribe();
    };
  }, []);

  return (
    <div className="network-layer" aria-hidden="true">
      <canvas ref={canvasRef} className="network-canvas" />
    </div>
  );
}
