import Image from "next/image";
import { Icon } from "@iconify/react";
import folderSrcOpen from "@iconify-icons/material-icon-theme/folder-src-open";
import reactTs from "@iconify-icons/material-icon-theme/react-ts";
import {
  ArrowDownRight,
  ArrowRight,
  Braces,
  BriefcaseBusiness,
  Code2,
  ExternalLink,
  FileCode2,
  Folder,
  GraduationCap,
  Mail,
  MapPin,
  Sparkles,
} from "lucide-react";

const sections = [
  { id: "about", label: "about.tsx", icon: reactTs },
  { id: "work", label: "selected-work.tsx", icon: reactTs },
  { id: "experience", label: "experience.tsx", icon: reactTs },
  { id: "education", label: "education.tsx", icon: reactTs },
  { id: "skills", label: "toolkit.tsx", icon: reactTs },
  { id: "contact", label: "contact.tsx", icon: reactTs },
];

const skills = [
  { group: "AI & agents", items: "LangGraph · LangChain · RAG · LLM evaluation · Structured outputs" },
  { group: "Languages", items: "Python · TypeScript · JavaScript · SQL · C# (familiar)" },
  { group: "Frontend", items: "React · Next.js · Angular · Redux Toolkit · Tailwind CSS" },
  { group: "Backend & data", items: "FastAPI · Node.js · .NET Core · PostgreSQL · REST APIs" },
  { group: "Build & ship", items: "Docker · GitHub Actions · Bitbucket · pytest · Cypress · Jest" },
];

export default function Home() {
  return (
    <main className="app-shell">
      <header className="titlebar">
        <a className="brand-mark" href="#about" aria-label="Farhan Masud home">
          <Braces size={17} strokeWidth={1.8} />
        </a>
        <div className="titlebar-path">
          <span>farhan-masud</span>
          <span className="path-slash">/</span>
          <span className="path-muted">portfolio</span>
        </div>
        <div className="titlebar-actions">
          <a href="mailto:f.mahin7@gmail.com" aria-label="Email Farhan" title="Email Farhan">
            <Mail size={16} />
          </a>
          <a href="https://github.com/fmahin7-ship-it" target="_blank" rel="noreferrer" aria-label="GitHub" title="GitHub">
            <ExternalLink size={15} />
          </a>
          <div className="window-controls" aria-hidden="true">
            <span className="window-dot window-dot-close" />
            <span className="window-dot window-dot-minimize" />
            <span className="window-dot window-dot-expand" />
          </div>
        </div>
      </header>

      <div className="workspace">
        <aside className="activity-rail" aria-label="Quick navigation">
          <a href="#about" className="rail-icon" aria-label="About"><Code2 size={21} /></a>
          <a href="#work" className="rail-icon" aria-label="Selected work"><Folder size={20} /></a>
          <a href="#experience" className="rail-icon" aria-label="Experience"><BriefcaseBusiness size={20} /></a>
          <a href="#education" className="rail-icon" aria-label="Education"><GraduationCap size={21} /></a>
          <a href="#contact" className="rail-icon rail-bottom" aria-label="Contact"><Mail size={20} /></a>
        </aside>

        <nav className="explorer" aria-label="Portfolio sections">
          <div className="explorer-heading">EXPLORER</div>
          <div className="explorer-project"><span className="chevron">⌄</span> FARHAN-MASUD</div>
          <div className="tree-folder"><Icon icon={folderSrcOpen} aria-hidden="true" /> portfolio</div>
          <div className="tree-files">
            {sections.map(({ id, label, icon }) => (
              <a key={id} href={`#${id}`} className="tree-file">
                <Icon icon={icon} aria-hidden="true" />
                <span>{label}</span>
              </a>
            ))}
          </div>
          <div className="explorer-note">
            <span className="note-spark"><Sparkles size={13} /></span>
            <span>Currently exploring<br /><strong>AI &amp; agent engineering</strong></span>
          </div>
        </nav>

        <div className="editor">
          <nav className="tabbar" aria-label="Section shortcuts">
            <a href="#about" className="editor-tab"><FileCode2 size={14} /> about.tsx</a>
            <a href="#work" className="editor-tab"><FileCode2 size={14} /> selected-work.tsx</a>
            <a href="#experience" className="editor-tab"><FileCode2 size={14} /> experience.tsx</a>
          </nav>
          <div className="breadcrumbs"><span>src</span><span>/</span><span>portfolio</span><span>/</span><span className="crumb-current">about.tsx</span></div>

          <div className="editor-content">
            <section className="hero" id="about">
              <div className="hero-copy">
                <div className="eyebrow"><span className="status-light" /> SOFTWARE / AI ENGINEER <span className="eyebrow-divider">·</span> 5+ YEARS</div>
                <h1>Farhan<br /><span>Masud</span><i>.</i></h1>
                <p className="hero-lede">I build thoughtful software, and AI systems that are ready for the real world.</p>
                <p className="hero-detail">From multi-tenant products to agentic workflows, I care about the craft behind systems people can rely on.</p>
                <div className="hero-actions">
                  <a className="button-primary" href="#work">Explore selected work <ArrowDownRight size={16} /></a>
                  <a className="text-link" href="mailto:f.mahin7@gmail.com">Get in touch <ArrowRight size={15} /></a>
                </div>
              </div>
              <div className="hero-visual">
                <Image src="/farhan.jpg" alt="Portrait of Farhan Masud, software and AI engineer" fill priority sizes="(max-width: 720px) 100vw, 42vw" className="portrait-image" />
                <div className="visual-shade" />
                <div className="visual-coordinate"><MapPin size={13} /> MELBOURNE, AU</div>
                <div className="visual-caption"><span>Currently building</span><strong>AI that works<br />beyond the demo.</strong></div>
                <div className="visual-index">FARHAN MASUD&nbsp; · &nbsp;SOFTWARE / AI</div>
              </div>
            </section>

            <div className="quick-facts" aria-label="At a glance">
              <div><span className="fact-value">05<span>+</span></span><span className="fact-label">years building software</span></div>
              <div><span className="fact-value">AI<span> × </span>product</span><span className="fact-label">the problems I like solving</span></div>
              <div><span className="fact-value">AU<span> / </span>Global</span><span className="fact-label">based in Melbourne</span></div>
            </div>

            <section className="content-section" id="work">
              <div className="section-heading"><div><span className="section-kicker">01 / WHAT I&apos;M BUILDING</span><h2>Selected work</h2></div><span className="section-aside">A little less hype. A lot more engineering.</span></div>
              <article className="project-entry project-featured">
                <div className="project-topline"><span className="project-number">01</span><span className="project-status project-live"><span /> LIVE · HUMAN-REVIEWED</span></div>
                <div className="project-title-row"><h3>Dispute Investigator <span>/ E-COMMERCE AI</span></h3><span className="project-date">Agent project</span></div>
                <p className="project-description">An investigation desk that brings order, payment, carrier, warehouse, and customer-history evidence together before a person decides an e-commerce dispute.</p>
                <div className="project-details">
                  <div className="detail-block"><span className="detail-label">THE SYSTEM</span><p>A bounded tool-using agent retrieves policy with pgvector RAG and returns a structured finding with supporting evidence.</p></div>
                  <div className="detail-block"><span className="detail-label">HUMAN OVERSIGHT</span><p>A manager reviews the recommendation, can hear a voice brief, then approves, holds, or requests information. Refunds are not automated; demo cases use synthetic data.</p></div>
                </div>
                <div className="project-links"><a href="https://dispute-investigation-agent.vercel.app/" target="_blank" rel="noreferrer">Open live desk <ExternalLink size={14} /></a><a href="https://github.com/fmahin7-ship-it/Dispute-Investigation-Agent" target="_blank" rel="noreferrer">View source <ExternalLink size={14} /></a></div>
                <div className="tag-row"><span>Next.js</span><span>Node.js</span><span>PostgreSQL</span><span>pgvector RAG</span><span>OpenAI</span></div>
              </article>
              <article className="project-entry">
                <div className="project-topline"><span className="project-number">02</span><span className="project-status"><span /> IN PROGRESS · DEAKIN CAPSTONE</span></div>
                <div className="project-title-row"><h3>InnovAIte <span>/ AAIE</span></h3><span className="project-date">Jun 2026 — Now</span></div>
                <p className="project-description">An assessment-feedback agent designed around reliable steps, not a single prompt. I lead the AI engineering work across the agent workflow and its evaluation loop.</p>
                <div className="project-details">
                  <div className="detail-block"><span className="detail-label">THE SYSTEM</span><p>LangGraph workflow for validation, retrieval, rubric evaluation, drafting, and a quality gate with revision.</p></div>
                  <div className="detail-block"><span className="detail-label">THE CARE</span><p>Persistent, assignment-scoped RAG with Chroma, citation checks, structured outputs, and a meta-rubric judge.</p></div>
                </div>
                <div className="tag-row"><span>Python</span><span>FastAPI</span><span>LangGraph</span><span>RAG</span><span>pytest</span></div>
              </article>
              <article className="project-entry">
                <div className="project-topline"><span className="project-number">03</span><span className="project-status project-live"><span /> LIVE PRODUCT</span></div>
                <div className="project-title-row"><h3>UddoktaHut</h3><span className="project-date">Feb 2025 — Now</span></div>
                <p className="project-description">A multi-tenant AI commerce platform where every merchant gets an isolated store, dashboard, and public storefront.</p>
                <div className="project-details">
                  <div className="detail-block"><span className="detail-label">AI COPILOT</span><p>Business questions answered through scoped tools and streaming responses, with plan-based entitlements and usage limits.</p></div>
                  <div className="detail-block project-links"><a href="https://uddoktahut.com/" target="_blank" rel="noreferrer">Visit live product <ExternalLink size={14} /></a><a href="https://github.com/fmahin7-ship-it/Uddoktahut" target="_blank" rel="noreferrer">View source <ExternalLink size={14} /></a></div>
                </div>
                <div className="tag-row"><span>Next.js</span><span>Node.js</span><span>PostgreSQL</span><span>AI tools</span></div>
              </article>
            </section>

            <section className="content-section" id="experience">
              <div className="section-heading"><div><span className="section-kicker">02 / WHERE I&apos;VE BEEN</span><h2>Experience</h2></div></div>
              <article className="timeline-entry">
                <div className="timeline-marker"><span /></div>
                <div className="timeline-content"><div className="timeline-heading"><div><h3>Senior Frontend Developer</h3><span className="company-name">Optimizely</span></div><span className="timeline-date">Aug 2024 — Mar 2026</span></div>
                  <ul><li>Built responsive, Figma-driven features for client CMS platforms using Vanilla JavaScript and React, while optimizing page performance to cut load times by 45%.</li><li>Implemented A/B testing frameworks within client CMS platforms and supported audience targeting, increasing engagement by 38%.</li><li>Refactored modular JavaScript and integrated CI/CD pipelines, reducing frontend issues by 40%.</li><li>Integrated frontend features with backend REST APIs and carried out Cypress end-to-end testing with QA.</li></ul>
                  <div className="tag-row"><span>JavaScript</span><span>React</span><span>CMS</span><span>CI/CD</span></div>
                </div>
              </article>
              <article className="timeline-entry">
                <div className="timeline-marker"><span /></div>
                <div className="timeline-content"><div className="timeline-heading"><div><h3>Software Engineer</h3><span className="company-name">SELISE Digital Platforms</span></div><span className="timeline-date">Aug 2020 — Jul 2024</span></div>
                  <ul><li>Built responsive insurance applications for 50K+ users with React, Angular, and .NET Core 6, integrating REST and GraphQL APIs with MongoDB.</li><li>Designed business dashboards with pie charts and data visualizations; refined UI components, navigation, and cross-browser layouts for clearer, more accessible workflows.</li><li>Implemented permission-controlled impersonation so authorized users could search, upload files, and perform restricted file deletion on another user&apos;s behalf.</li><li>Built a real-time XML-to-JSON conversion flow with WebSockets and push notifications, reducing UI processing time from 8s to 1.5s.</li><li>Reduced redundant frontend API calls by 40%; used Redux Toolkit and NgRx for application state, Cypress for component and E2E testing, and CI/CD for automated deployments.</li></ul>
                  <div className="tag-row"><span>Angular</span><span>React</span><span>.NET Core</span><span>WebSockets</span></div>
                </div>
              </article>
            </section>

            <section className="content-section lower-grid">
              <div id="education" className="education-block"><span className="section-kicker">03 / STILL LEARNING</span><h2>Education</h2><div className="education-entry"><div className="education-icon"><GraduationCap size={18} /></div><div><h3>Master of Artificial Intelligence</h3><span>Deakin University</span><p>Feb 2026 — Ongoing <span>·</span> Expected 2027</p></div></div></div>
              <div id="skills" className="skills-block"><span className="section-kicker">04 / TOOLS OF THE TRADE</span><h2>Toolkit</h2><div className="skill-list">{skills.map(({ group, items }) => <div className="skill-row" key={group}><span>{group}</span><p>{items}</p></div>)}</div></div>
            </section>

            <section className="contact-section" id="contact">
              <span className="section-kicker">05 / THE NEXT GOOD THING</span>
              <h2>Let&apos;s build<br />something <em>useful.</em></h2>
              <p>Interested in thoughtful AI engineering, dependable products, and the details that make both work.</p>
              <div className="contact-links"><a className="button-primary" href="mailto:f.mahin7@gmail.com"><Mail size={16} /> Say hello <ArrowRight size={15} /></a><a href="tel:+61451208775">+61 451 208 775</a><a href="https://www.linkedin.com/in/farhanmasud07/" target="_blank" rel="noreferrer">LinkedIn <ExternalLink size={14} /></a><a href="https://github.com/fmahin7-ship-it" target="_blank" rel="noreferrer">GitHub <ExternalLink size={14} /></a></div>
            </section>

            <footer className="editor-footer"><span><span className="footer-live" /> Made with care in Melbourne</span><span>Python&nbsp; · &nbsp;TypeScript&nbsp; · &nbsp;Curiosity</span><span>© 2026 Farhan Masud</span></footer>
          </div>
          <div className="statusbar"><span><MapPin size={13} /> Melbourne, Australia</span><span>AI &amp; software engineering</span><span className="status-right">Python&nbsp; · &nbsp;TypeScript&nbsp; · &nbsp;PostgreSQL</span></div>
        </div>
      </div>
    </main>
  );
}
