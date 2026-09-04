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
              <p className="coordinate" title="Bochum, Germany">
                51.47° N / 7.25° E
              </p>
            </div>
            <h1>
              <span className="hero-person">{site.name}</span>
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
            <div className="off-hours">
              <h3>Off hours</h3>
              <ul>
                {site.hobbies.map((hobby) => (
                  <li key={hobby}>{hobby}</li>
                ))}
              </ul>
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
              <div className="legal-copy">
                <h3>Information pursuant to § 5 DDG</h3>
                <h4>Service provider</h4>
                <address className="legal-address">
                  <strong>{site.name}</strong>
                  {site.legal.address.map((line) => (
                    <span key={line}>{line}</span>
                  ))}
                </address>
                <h4>Contact</h4>
                <p>
                  Email:{" "}
                  <a href={`mailto:${site.legal.email}`}>{site.legal.email}</a>
                </p>
                <p>
                  Phone:{" "}
                  <a href={`tel:${site.legal.phone.replaceAll(" ", "")}`}>
                    {site.legal.phone}
                  </a>
                </p>
              </div>
            </details>
            <details id="privacy">
              <summary>Privacy</summary>
              <div className="legal-copy">
                <h3>Privacy notice</h3>
                <p>Last updated: {site.legal.privacyUpdated}</p>

                <section>
                  <h4>1. Controller</h4>
                  <p>
                    The controller responsible for processing personal data on
                    this website is:
                  </p>
                  <address className="legal-address">
                    <strong>{site.name}</strong>
                    {site.legal.address.map((line) => (
                      <span key={line}>{line}</span>
                    ))}
                    <a href={`mailto:${site.legal.email}`}>
                      {site.legal.email}
                    </a>
                  </address>
                </section>

                <section>
                  <h4>2. Hosting and access data</h4>
                  <p>
                    This website is hosted through GitHub Pages. When you access
                    it, GitHub may process technical connection data such as
                    your IP address, request date and time, requested resource,
                    referrer, browser, operating system, and device information.
                    This processing is technically necessary to deliver the
                    site, maintain its stability and security, and prevent
                    abuse.
                  </p>
                  <p>
                    To the extent that this processing is attributable to me,
                    its legal basis is Article 6(1)(f) GDPR. My legitimate
                    interest is the secure and reliable publication of this
                    website. The recipient is GitHub, Inc., 88 Colin P. Kelly
                    Jr. Street, San Francisco, CA 94107, United States. GitHub
                    also identifies GitHub B.V., Prins Bernhardplein 200, 1097
                    JB Amsterdam, the Netherlands, as a European contact entity.
                  </p>
                  <p>
                    GitHub states that data may be processed in the United
                    States and other countries and describes the applicable
                    transfer safeguards, including standard contractual clauses
                    and the EU-US Data Privacy Framework, in its{" "}
                    <a href="https://docs.github.com/en/site-policy/privacy-policies/github-general-privacy-statement">
                      privacy statement
                    </a>
                    . I do not maintain my own visitor logs. GitHub determines
                    retention according to the processing purpose and applicable
                    legal obligations described in that statement.
                  </p>
                </section>

                <section>
                  <h4>3. Cookies and tracking</h4>
                  <p>
                    This website does not use analytics, advertising, tracking,
                    a contact form, a newsletter, or an owner-operated database.
                    Its code does not set or read cookies or browser storage.
                    All fonts, scripts, images, and presentation assets are
                    served as local site files. No consent banner is used
                    because the site does not deploy non-essential cookies or
                    similar technology.
                  </p>
                </section>

                <section>
                  <h4>4. Contact by email</h4>
                  <p>
                    If you contact me by email, I process your email address,
                    the content of your message, and any other information you
                    provide in order to respond. The legal basis is Article
                    6(1)(f) GDPR, or Article 6(1)(b) GDPR where your request
                    concerns a contract or steps before entering into one. The
                    recipient category is the technical email service provider.
                    Correspondence is deleted when it is no longer needed for
                    the request unless a legal retention duty or the
                    establishment, exercise, or defense of legal claims requires
                    longer retention.
                  </p>
                </section>

                <section>
                  <h4>5. External links</h4>
                  <p>
                    External services receive a request only after you activate
                    a link. The destination provider then processes connection
                    data under its own responsibility and privacy notice.
                  </p>
                </section>

                <section>
                  <h4>6. Your rights</h4>
                  <p>
                    Subject to the statutory conditions, you may request access,
                    rectification, erasure, restriction of processing, and data
                    portability. You may object at any time to processing based
                    on Article 6(1)(f) GDPR for reasons arising from your
                    particular situation. Contact me using the email address
                    above.
                  </p>
                  <p>
                    You also have the right to lodge a complaint with a data
                    protection supervisory authority. The supervisory authority
                    responsible in North Rhine-Westphalia is the{" "}
                    <a href="https://www.ldi.nrw.de/">
                      State Commissioner for Data Protection and Freedom of
                      Information North Rhine-Westphalia
                    </a>
                    .
                  </p>
                </section>

                <section>
                  <h4>7. Automated decisions</h4>
                  <p>
                    No automated decision-making or profiling takes place
                    through this website.
                  </p>
                </section>
              </div>
            </details>
          </div>
          <p>René Glitza / Bochum / 2026</p>
        </footer>
      </div>
      <NarrativeController />
    </>
  );
}
