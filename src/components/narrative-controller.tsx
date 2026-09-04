"use client";

import { useEffect } from "react";

import type { ProjectId, SectionId } from "@/content/site";
import { setActiveProject, setActiveSection } from "@/stores/narrative";

const isProjectId = (value: string | undefined): value is ProjectId =>
  value === "nexuml" ||
  value === "nexufl" ||
  value === "pfedmarl" ||
  value === "asn-database";

export function NarrativeController() {
  useEffect(() => {
    const sections = Array.from(
      document.querySelectorAll<HTMLElement>("[data-narrative-section]"),
    );
    const observer = new IntersectionObserver(
      () => {
        const readingLine = window.innerHeight * 0.4;
        const active =
          sections.find((section) => {
            const bounds = section.getBoundingClientRect();
            return bounds.top <= readingLine && bounds.bottom > readingLine;
          }) ?? sections[0];
        setActiveSection(active.id as SectionId);
      },
      { threshold: [0, 0.3, 0.6] },
    );

    sections.forEach((section) => {
      observer.observe(section);
    });

    const projectFrom = (target: EventTarget | null) =>
      target instanceof Element
        ? target.closest<HTMLElement>("[data-project]")
        : null;

    const activate = (event: Event) => {
      const project = projectFrom(event.target)?.dataset.project;
      if (isProjectId(project)) setActiveProject(project);
    };

    const clear = (event: FocusEvent | PointerEvent) => {
      const current = projectFrom(event.target);
      const next = projectFrom(event.relatedTarget);
      if (current && current !== next) setActiveProject(null);
    };

    document.addEventListener("pointerover", activate);
    document.addEventListener("pointerout", clear);
    document.addEventListener("focusin", activate);
    document.addEventListener("focusout", clear);

    return () => {
      observer.disconnect();
      document.removeEventListener("pointerover", activate);
      document.removeEventListener("pointerout", clear);
      document.removeEventListener("focusin", activate);
      document.removeEventListener("focusout", clear);
    };
  }, []);

  return null;
}
