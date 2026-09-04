export type SectionId =
  | "top"
  | "about"
  | "practice"
  | "work"
  | "research"
  | "community"
  | "contact";

export type ProjectId = "nexuml" | "nexufl" | "pfedmarl" | "asn-database";

type Link = {
  label: string;
  href: string;
};

type SiteContent = {
  name: string;
  alternateName: string;
  url: string;
  title: string;
  description: string;
  locale: string;
  hero: {
    hook: readonly [string, string];
    identity: string;
    statement: string;
  };
  about: readonly string[];
  hobbies: readonly string[];
  portrait: {
    path: string;
    alt: string | null;
  };
  roles: readonly {
    organization: string;
    role: string;
    href: string;
    description: string;
  }[];
  practice: readonly string[];
  projects: readonly {
    id: ProjectId;
    name: string;
    type: string;
    description: string;
    href: string;
    linkLabel: string;
  }[];
  research: readonly string[];
  community: readonly {
    name: string;
    role: string;
    description: string;
    href: string;
  }[];
  profiles: readonly Link[];
  affiliations: readonly { name: string; href: string }[];
  legal: {
    email: string;
    phone: string;
    address: readonly string[];
    privacyUpdated: string;
  };
};

export const navigation: readonly { id: SectionId; label: string }[] = [
  { id: "about", label: "About" },
  { id: "practice", label: "Practice" },
  { id: "work", label: "Work" },
  { id: "research", label: "Research" },
  { id: "community", label: "Community" },
  { id: "contact", label: "Contact" },
];

export const site = {
  name: "René Glitza",
  alternateName: "Rene Glitza",
  url: "https://jearde.github.io",
  title: "René Glitza — Researcher, Builder, Founder",
  description:
    "René Glitza builds distributed and private AI systems, from federated-learning research and Kubernetes training infrastructure to industrial applications.",
  locale: "en_US",
  hero: {
    hook: ["Nerd with a", "shirt."],
    identity: "Researcher. Builder. Founder.",
    statement:
      "I build AI systems that learn from distributed, private, real-world data.",
  },
  about: [
    "I work where machine-learning research meets systems engineering and industrial reality. My focus is not only the model, but the path that makes it reproducible, distributed, and useful.",
    "That path has taken me from acoustic condition monitoring and federated learning to open-source software, startup building, electronics, measurement systems, and the infrastructure that lets experiments become dependable practice.",
  ],
  hobbies: ["Espresso", "Sailing", "Open-source smart home"],
  portrait: {
    path: "/images/rene-glitza.webp",
    alt: null,
  },
  roles: [
    {
      organization: "Ruhr University Bochum",
      role: "Research",
      href: "https://www.ika.ruhr-uni-bochum.de/ika/team/glitza.html.en",
      description:
        "Adaptive and personalized Federated Learning, reinforcement learning, heterogeneous and limited-label data, anomaly detection, and acoustic condition monitoring.",
    },
    {
      organization: "NexuFed AI",
      role: "Co-Founder",
      href: "https://www.nexufed.ai",
      description:
        "Collaborative, private Industrial AI: systems that learn across organizations without requiring their raw data to be centralized.",
    },
    {
      organization: "AI-Gruppe",
      role: "Applied engineering",
      href: "https://gruppe.ai",
      description:
        "Software, electronics, measurement systems, condition monitoring, predictive maintenance, and technical projects moving into real use.",
    },
  ],
  practice: [
    "Research question",
    "Reusable ML system",
    "Kubernetes training infrastructure",
    "Industrial application",
  ],
  projects: [
    {
      id: "nexuml",
      name: "NexuML",
      type: "Open-source ML systems",
      description:
        "A modular PyTorch framework for composable machine-learning pipelines, typed reusable components, and reproducible experiments.",
      href: "https://github.com/NexuFed/NexuML",
      linkLabel: "Explore NexuML on GitHub",
    },
    {
      id: "nexufl",
      name: "NexuFL",
      type: "Federated-learning infrastructure",
      description:
        "Adaptive infrastructure for distributed, private learning across research and production environments.",
      href: "https://www.nexufed.ai",
      linkLabel: "Visit NexuFed AI",
    },
    {
      id: "pfedmarl",
      name: "pFedMARL",
      type: "ICASSP 2026 reproduction",
      description:
        "TD3-based cooperative multi-agent reinforcement learning for adaptive aggregation with non-IID DCASE Task 2 data.",
      href: "https://github.com/NexuFed/pFedMARL",
      linkLabel: "Explore pFedMARL on GitHub",
    },
    {
      id: "asn-database",
      name: "ASN Database",
      type: "Acoustic research data",
      description:
        "A public database of simulated room impulse responses for acoustic sensor networks in complex multi-source environments.",
      href: "https://github.com/Jearde/asn-database",
      linkLabel: "Explore ASN Database on GitHub",
    },
  ],
  research: [
    "Adaptive and personalized Federated Learning",
    "Reinforcement Learning for distributed systems",
    "Industrial AI and acoustic condition monitoring",
    "Edge AI with heterogeneous, limited-label data",
    "Reproducible MLOps and Kubernetes AI-training clusters",
  ],
  community: [
    {
      name: "Practical Data Science Congress",
      role: "Organizer",
      description:
        "A meeting place for people turning data-science methods into practical systems and shared technical understanding.",
      href: "https://pdsc.skunkforce.org/",
    },
    {
      name: "open Skunkforce e.V.",
      role: "Vice Chairman",
      description:
        "An open technical community creating room for exchange, experimentation, and projects that benefit from collective effort.",
      href: "https://skunkforce.org",
    },
    {
      name: "VDE Rhein-Ruhr e.V.",
      role: "Young Professionals Representative",
      description:
        "Connecting students and early-career engineers through regional exchange, technical events, and the wider VDE Young Net.",
      href: "https://www.vde-rhein-ruhr.de/youngnet",
    },
  ],
  profiles: [
    { label: "GitHub", href: "https://github.com/Jearde" },
    { label: "LinkedIn", href: "https://www.linkedin.com/in/rene-glitza/" },
    { label: "ORCID", href: "https://orcid.org/0009-0002-6437-5912" },
  ],
  affiliations: [
    {
      name: "Ruhr University Bochum",
      href: "https://www.ika.ruhr-uni-bochum.de/ika/team/glitza.html.en",
    },
    { name: "NexuFed AI", href: "https://www.nexufed.ai" },
    { name: "AI-Gruppe", href: "https://gruppe.ai" },
    { name: "open Skunkforce e.V.", href: "https://skunkforce.org" },
    { name: "VDE Rhein-Ruhr e.V.", href: "https://www.vde-rhein-ruhr.de" },
  ],
  legal: {
    email: "rene.glitza@nexufed.ai",
    phone: "+49 234 32 18591",
    address: [
      "c/o Auto-Intern GmbH",
      "Building B29",
      "Herner Str. 299",
      "44809 Bochum",
      "Germany",
    ],
    privacyUpdated: "4 September 2026",
  },
} satisfies SiteContent;
