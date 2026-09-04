import { existsSync } from "node:fs";
import { join } from "node:path";

import Image from "next/image";

import { NarrativeController } from "@/components/narrative-controller";
import { NetworkCanvas } from "@/components/network-canvas";
import { SiteNav } from "@/components/site-nav";
import { site } from "@/content/site";

const basePath = process.env.PAGES_BASE_PATH ?? "";
const hasPortrait =
  Boolean(site.portrait.alt) &&
  existsSync(join(process.cwd(), "public", site.portrait.path));

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "ProfilePage",
      "@id": `${site.url}/#profile`,
      url: site.url,
      name: site.title,
      mainEntity: { "@id": `${site.url}/#person` },
    },
    {
      "@type": "Person",
      "@id": `${site.url}/#person`,
      name: site.name,
      alternateName: site.alternateName,
      url: site.url,
      description: site.description,
      sameAs: site.profiles.map((profile) => profile.href),
      affiliation: site.affiliations.map((affiliation) => ({
        "@type": "Organization",
        name: affiliation.name,
        url: affiliation.href,
      })),
      knowsAbout: site.research,
      ...(hasPortrait ? { image: `${site.url}${site.portrait.path}` } : {}),
    },
  ],
};

export default function Home() {
  return (
    <>
      <a className="skip-link" href="#main-content">
        Skip to main content
      </a>
      <NetworkCanvas />
      <div className="page-shell">
        <SiteNav />
        <main id="main-content">
          <section id="top" className="hero" data-narrative-section>
            <div className="hero-meta">
              <p className="eyebrow">{site.name}</p>
              <p className="coordinate" title="Bochum, Germany">
                51.48° N / 7.22° E
              </p>
            </div>
            <h1>
              <span>{site.hero.hook[0]}</span>
              <span>
                {site.hero.hook[1]}
                <span className="tie" aria-hidden="true">
                  {" "}
                  👔
                </span>
              </span>
            </h1>
            <div className="hero-bottom">
              <p className="hero-identity">{site.hero.identity}</p>
              <p className="hero-statement">{site.hero.statement}</p>
            </div>
          </section>

          <section id="about" className="section about" data-narrative-section>
            <header className="section-heading">
              <p className="section-number">01 / Signal</p>
              <h2>Between the model and the world.</h2>
            </header>
            <div className="about-copy">
              {site.about.map((paragraph) => (
                <p key={paragraph}>{paragraph}</p>
              ))}
            </div>
            <figure className="portrait">
              {hasPortrait ? (
                <Image
                  src={`${basePath}${site.portrait.path}`}
                  alt={site.portrait.alt ?? ""}
                  width={960}
                  height={1200}
                  sizes="(max-width: 768px) 100vw, 36vw"
                />
              ) : (
                <div
                  className="portrait-placeholder"
                  role="img"
                  aria-label="Portrait pending approval"
                >
                  <span>Portrait asset required</span>
                  <span>04:05 / pending approval</span>
                </div>
              )}
              <figcaption>Research / systems / industrial practice</figcaption>
            </figure>
          </section>

          <section
            id="practice"
            className="section practice"
            data-narrative-section
          >
            <header className="section-heading compact">
              <p className="section-number">02 / Practice</p>
              <h2>One chain. Three contexts.</h2>
            </header>
            <ol className="role-sequence">
              {site.roles.map((role, index) => (
                <li key={role.organization}>
                  <p className="role-index">
                    {String(index + 1).padStart(2, "0")}
                  </p>
                  <div>
                    <p className="role-label">{role.role}</p>
                    <h3>
                      <a href={role.href}>{role.organization}</a>
                    </h3>
                  </div>
                  <p>{role.description}</p>
                </li>
              ))}
            </ol>
            <ol
              className="practice-flow"
              aria-label="Research to industry workflow"
            >
              {site.practice.map((step, index) => (
                <li key={step}>
                  <span>{String(index + 1).padStart(2, "0")}</span>
                  <p>{step}</p>
                </li>
              ))}
            </ol>
            <p className="practice-note">
              I build reproducible MLOps workflows and Kubernetes-based
              AI-training clusters that connect distributed workloads, data
              paths, and experiment tracking to the systems they must eventually
              serve.
            </p>
          </section>

          <section id="work" className="section work" data-narrative-section>
            <header className="section-heading sticky-heading">
              <p className="section-number">03 / Selected systems</p>
              <h2>Work that travels.</h2>
            </header>
            <ol className="project-index">
              {site.projects.map((project, index) => (
                <li key={project.id} data-project={project.id}>
                  <div className="project-topline">
                    <span>{String(index + 1).padStart(2, "0")}</span>
                    <span>{project.type}</span>
                  </div>
                  <h3>{project.name}</h3>
                  <p>{project.description}</p>
                  <a href={project.href}>{project.linkLabel} ↗</a>
                </li>
              ))}
            </ol>
          </section>

          <section
            id="research"
            className="section research"
            data-narrative-section
          >
            <header className="section-heading compact">
              <p className="section-number">04 / Questions</p>
              <h2>Learning under real constraints.</h2>
            </header>
            <p className="research-lede">
              How do systems learn when data cannot move freely, labels are
              scarce, environments differ, and deployment is more than a
              benchmark?
            </p>
            <ul className="research-list">
              {site.research.map((topic) => (
                <li key={topic}>{topic}</li>
              ))}
            </ul>
          </section>

          <section
            id="community"
            className="section community"
            data-narrative-section
          >
            <header className="section-heading compact">
              <p className="section-number">05 / Community</p>
              <h2>Systems scale through people.</h2>
            </header>
            <div className="community-list">
              {site.community.map((item) => (
                <article key={item.name}>
                  <p>{item.role}</p>
                  <h3>
                    <a href={item.href}>{item.name}</a>
                  </h3>
                  <p>{item.description}</p>
                </article>
              ))}
            </div>
          </section>

          <section
            id="contact"
            className="section contact"
            data-narrative-section
          >
            <p className="section-number">06 / Continue</p>
            <h2>Bring a hard problem.</h2>
            <p>
              I am interested in collaborations where research quality,
              infrastructure, and practical constraints all matter.
            </p>
            <ul className="profile-links">
              {site.profiles.map((profile) => (
                <li key={profile.label}>
                  <a href={profile.href}>{profile.label} ↗</a>
                </li>
              ))}
            </ul>
          </section>
        </main>

        <footer className="site-footer">
          <div className="legal-disclosures">
            <details id="imprint">
              <summary>Imprint</summary>
              <div>
                {site.legal.imprint.map((paragraph) => (
                  <p key={paragraph}>{paragraph}</p>
                ))}
              </div>
            </details>
            <details id="privacy">
              <summary>Privacy</summary>
              <div>
                {site.legal.privacy.map((paragraph) => (
                  <p key={paragraph}>{paragraph}</p>
                ))}
              </div>
            </details>
          </div>
          <p>René Glitza / Bochum / 2026</p>
        </footer>
      </div>
      <NarrativeController />
      <script type="application/ld+json">
        {JSON.stringify(jsonLd).replace(/</g, "\\u003c")}
      </script>
    </>
  );
}
