import { ArrowRight, ExternalLink, GitBranch, Mail } from 'lucide-react'
import './App.css'

const featuredProjects = [
  {
    title: 'Nimbus Notes',
    description:
      'A full-stack productivity app with collaborative note editing, tags, and markdown preview.',
    stack: ['React', 'TypeScript', 'Node.js', 'MongoDB'],
  },
  {
    title: 'Transit Pulse',
    description:
      'A smart dashboard that predicts bus arrival times and visualizes route congestion in real time.',
    stack: ['Next.js', 'Python', 'FastAPI', 'PostgreSQL'],
  },
  {
    title: 'HireLens',
    description:
      'An AI-assisted resume analyzer that scores CVs against role requirements and gives feedback.',
    stack: ['React', 'Express', 'OpenAI API', 'Tailwind'],
  },
]

const capabilities = [
  'Frontend Development',
  'Backend APIs',
  'UI/UX Prototyping',
  'Database Design',
  'Cloud Deployment',
  'Testing & Quality',
]

function App() {
  return (
    <main className="portfolio">
      <div className="ambient ambient-left" aria-hidden="true"></div>
      <div className="ambient ambient-right" aria-hidden="true"></div>

      <header className="topbar">
        <p className="brand">Yasith Tharuka</p>
        <nav>
          <a href="#projects">Projects</a>
          <a href="#skills">Skills</a>
          <a href="#contact">Contact</a>
        </nav>
      </header>

      <section className="hero">
        <p className="eyebrow">Software Engineering Undergraduate</p>
        <h1>Building clean digital products with speed, style, and strategy.</h1>
        <p className="hero-copy">
          I design and develop web experiences that look premium, load fast,
          and solve real user problems.
        </p>
        <div className="hero-actions">
          <a href="#projects" className="button primary">
            View Work <ArrowRight size={16} />
          </a>
          <a href="#contact" className="button ghost">
            Let&apos;s Collaborate
          </a>
        </div>
      </section>

      <section className="about card">
        <h2>About Me</h2>
        <p>
          I am focused on modern web engineering with a strong eye for visual
          detail. My approach combines product thinking, technical depth, and a
          commitment to maintainable code.
        </p>
      </section>

      <section id="projects" className="projects">
        <div className="section-header">
          <p className="eyebrow">Selected Work</p>
          <h2>Featured Projects</h2>
        </div>
        <div className="project-grid">
          {featuredProjects.map((project) => (
            <article className="project-card card" key={project.title}>
              <h3>{project.title}</h3>
              <p>{project.description}</p>
              <ul>
                {project.stack.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
              <a href="#contact" className="project-link">
                Explore Case Study <ExternalLink size={14} />
              </a>
            </article>
          ))}
        </div>
      </section>

      <section id="skills" className="skills card">
        <div className="section-header">
          <p className="eyebrow">Core Strengths</p>
          <h2>Capabilities</h2>
        </div>
        <div className="chip-grid">
          {capabilities.map((skill) => (
            <span key={skill} className="chip">
              {skill}
            </span>
          ))}
        </div>
      </section>

      <section id="contact" className="contact card">
        <div>
          <p className="eyebrow">Get In Touch</p>
          <h2>Have a project in mind?</h2>
          <p>
            I am available for internships, freelance opportunities, and
            student collaborations.
          </p>
        </div>
        <div className="contact-actions">
          <a href="mailto:yasith@example.com" className="button primary">
            <Mail size={16} /> Email Me
          </a>
          <a
            href="https://github.com"
            className="button ghost"
            target="_blank"
            rel="noreferrer"
          >
            <GitBranch size={16} /> GitHub
          </a>
        </div>
      </section>

      <footer>
        <p>2026 Yasith Tharuka. Crafted with React + TypeScript.</p>
      </footer>
    </main>
  )
}

export default App
