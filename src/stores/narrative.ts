import { create } from "zustand";

import type { ProjectId, SectionId } from "@/content/site";

type NarrativeState = {
  activeSection: SectionId;
  activeProject: ProjectId | null;
};

export const useNarrativeStore = create<NarrativeState>(() => ({
  activeSection: "top",
  activeProject: null,
}));

export const setActiveSection = (activeSection: SectionId) =>
  useNarrativeStore.setState({ activeSection });

export const setActiveProject = (activeProject: ProjectId | null) =>
  useNarrativeStore.setState({ activeProject });
