"use client";

import { navigation, site } from "@/content/site";
import { useNarrativeStore } from "@/stores/narrative";

export function SiteNav() {
  const activeSection = useNarrativeStore((state) => state.activeSection);

  return (
    <header className="site-header">
      <a
        className="site-name"
        href="#top"
        aria-label={`RG / 26, ${site.name}, back to top`}
      >
        RG<span aria-hidden="true">/</span>26
      </a>
      <nav aria-label="Page sections">
        <ol className="site-index">
          {navigation.map((item, index) => (
            <li key={item.id}>
              <a
                href={`#${item.id}`}
                aria-current={
                  activeSection === item.id ? "location" : undefined
                }
              >
                <span aria-hidden="true">
                  {String(index + 1).padStart(2, "0")}
                </span>
                {item.label}
              </a>
            </li>
          ))}
        </ol>
      </nav>
    </header>
  );
}
