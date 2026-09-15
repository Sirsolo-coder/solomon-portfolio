"use client";

import { useState } from "react";

const projects = [
  {
    title: "Levetor Hub",
    category: "Full-Stack E-Commerce",
    description:
      "Full-stack e-commerce platform with product management, customer authentication, orders, Paystack payment integration, Firebase notifications and an administrative backend.",
    tags: ["Flask", "Python", "Paystack", "Firebase"],
    link: "https://github.com/Sirsolo-coder/levetor-hub",
    available: true,
  },
  {
    title: "Levetor Hub Mobile",
    category: "Flutter Mobile App",
    description:
      "Flutter mobile shopping application connected to the Levetor Hub backend, featuring products, cart, authentication, orders and customer account management.",
    tags: ["Flutter", "Dart", "REST API", "Android"],
    link: "https://github.com/Sirsolo-coder/levetor-hub-mobile",
    available: true,
  },
  {
    title: "AI Solar Power System Estimator",
    category: "AI & Renewable Energy",
    description:
      "AI-powered solar estimation solution designed to help users estimate solar system requirements and generate professional system reports.",
    tags: ["Python", "Flask", "AI", "ReportLab"],
    link: "#",
    available: false,
  },
  {
    title: "Physics Solutions AI Calculator",
    category: "AI & Education",
    description:
      "AI-assisted physics problem-solving application designed to support students and learners with calculations and explanations.",
    tags: ["Python", "AI", "Hugging Face", "Flask"],
    link: "#",
    available: false,
  },
  {
    title: "NexBot AI Voice Companion",
    category: "Conversational AI",
    description:
      "AI voice companion built to demonstrate conversational AI, voice interaction and modern AI application development.",
    tags: ["Python", "Gradio", "Hugging Face", "AI"],
    link: "#",
    available: false,
  },
  {
    title: "Wildlife Conservation Computer Vision",
    category: "Computer Vision",
    description:
      "Computer vision project focused on wildlife conservation in Côte d'Ivoire, developed as part of an applied AI learning project.",
    tags: ["Computer Vision", "Python", "TensorFlow", "AI"],
    link: "#",
    available: false,
  },
];

const skills = [
  "Python",
  "Flask",
  "Flutter",
  "Dart",
  "JavaScript",
  "TypeScript",
  "SQL",
  "Firebase",
  "REST APIs",
  "Paystack",
  "Pandas",
  "NumPy",
  "Power BI",
  "Git & GitHub",
  "AI / Machine Learning",
  "Data Analysis",
];

const services = [
  {
    number: "01",
    title: "Web Development",
    description:
      "Modern, responsive websites and full-stack web applications for businesses, organizations and individuals.",
  },
  {
    number: "02",
    title: "Mobile App Development",
    description:
      "Cross-platform Flutter applications with authentication, APIs, databases, payments and modern user interfaces.",
  },
  {
    number: "03",
    title: "AI Solutions",
    description:
      "AI-powered tools, intelligent assistants, automation and practical machine-learning applications.",
  },
  {
    number: "04",
    title: "Data Analytics",
    description:
      "Data cleaning, analysis, visualization and business insights using Python, SQL, Excel and Power BI.",
  },
];

export default function Home() {
  const [menuOpen, setMenuOpen] = useState(false);

  const closeMenu = () => setMenuOpen(false);

  return (
    <main>
      <nav className="navbar">
        <a href="#home" className="logo" onClick={closeMenu}>
          Solomon<span>.</span>
        </a>

        <button
          className="menu-button"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label={menuOpen ? "Close navigation" : "Open navigation"}
          aria-expanded={menuOpen}
        >
          {menuOpen ? "×" : "☰"}
        </button>

        <div className={`nav-links ${menuOpen ? "open" : ""}`}>
          <a href="#home" onClick={closeMenu}>
            Home
          </a>
          <a href="#about" onClick={closeMenu}>
            About
          </a>
          <a href="#skills" onClick={closeMenu}>
            Skills
          </a>
          <a href="#projects" onClick={closeMenu}>
            Projects
          </a>
          <a href="#services" onClick={closeMenu}>
            Services
          </a>
          <a href="#contact" onClick={closeMenu}>
            Contact
          </a>
        </div>
      </nav>

      <section id="home" className="hero section">
        <div className="hero-content">
          <p className="eyebrow">AI • SOFTWARE • DATA</p>

          <h1>
            AI-Powered Software
            <span>Developer.</span>
          </h1>

          <p className="hero-subtitle">
            Full-Stack Web & Mobile Developer | Data Scientist
          </p>

          <p className="hero-text">
            I build practical software solutions that combine artificial
            intelligence, modern web and mobile technologies, backend systems,
            data analytics and automation to solve real-world problems.
          </p>

          <div className="hero-buttons">
            <a href="#projects" className="button primary">
              View My Projects
            </a>

            <a href="#contact" className="button secondary">
              Hire Me
            </a>
          </div>

          <div className="social-links">
            <a
              href="https://github.com/Sirsolo-coder"
              target="_blank"
              rel="noreferrer"
            >
              GitHub ↗
            </a>

            <a
              href="https://linkedin.com/in/sunday-solomon-ele-ojo-569688380"
              target="_blank"
              rel="noreferrer"
            >
              LinkedIn ↗
            </a>

            <a href="mailto:sundaysolomoneleojo@gmail.com">Email ↗</a>
          </div>
        </div>

        <div className="hero-card">
          <div className="code-window">
            <div className="window-top" aria-hidden="true">
              <span></span>
              <span></span>
              <span></span>
            </div>

            <pre>{`const developer = {
  name: "Solomon Sunday",
  role: "Software Developer",
  focus: [
    "AI",
    "Full-Stack",
    "Mobile",
    "Data"
  ],
  build: true
};`}</pre>
          </div>
        </div>
      </section>

      <section id="about" className="section">
        <div className="section-heading">
          <p className="eyebrow">ABOUT ME</p>
          <h2>Building technology with purpose.</h2>
        </div>

        <div className="about-grid">
          <div>
            <p className="large-text">
              I&apos;m <strong>Solomon Sunday Ele-ojo</strong>, an AI-powered
              software developer, full-stack web and mobile developer, and data
              scientist based in Lokoja, Kogi State, Nigeria.
            </p>

            <p>
              My background in Physics gives me a strong foundation in
              analytical thinking, mathematics, scientific problem solving and
              research. I combine that foundation with software engineering,
              artificial intelligence and data science to develop useful
              digital products.
            </p>

            <p>
              I enjoy building systems from idea to implementation — from
              backend APIs and databases to responsive websites, Flutter
              applications, AI tools and data-driven solutions.
            </p>
          </div>

          <div className="info-card">
            <div>
              <span>Education</span>
              <strong>B.Sc. Physics</strong>
            </div>

            <div>
              <span>Location</span>
              <strong>Lokoja, Nigeria</strong>
            </div>

            <div>
              <span>Specialization</span>
              <strong>AI & Software Development</strong>
            </div>

            <div>
              <span>Availability</span>
              <strong>Open to Opportunities</strong>
            </div>
          </div>
        </div>
      </section>

      <section id="skills" className="section section-dark">
        <div className="section-heading">
          <p className="eyebrow">TECHNICAL SKILLS</p>
          <h2>Tools I use to build.</h2>
        </div>

        <div className="skills-grid">
          {skills.map((skill) => (
            <div className="skill" key={skill}>
              {skill}
            </div>
          ))}
        </div>
      </section>

      <section id="projects" className="section">
        <div className="section-heading">
          <p className="eyebrow">FEATURED PROJECTS</p>
          <h2>Selected work.</h2>
          <p>
            A selection of software, AI, mobile and data projects I&apos;ve
            worked on.
          </p>
        </div>

        <div className="projects-grid">
          {projects.map((project, index) => (
            <article className="project-card" key={project.title}>
              <div className="project-top">
                <span className="project-number">
                  {String(index + 1).padStart(2, "0")}
                </span>
                <span className="project-category">{project.category}</span>
              </div>

              <h3>{project.title}</h3>

              <p>{project.description}</p>

              <div className="tags">
                {project.tags.map((tag) => (
                  <span key={tag}>{tag}</span>
                ))}
              </div>

              {project.available ? (
                <a
                  href={project.link}
                  target="_blank"
                  rel="noreferrer"
                  className="project-link"
                >
                  View on GitHub ↗
                </a>
              ) : (
                <span className="project-link project-link-disabled">
                  Project in development
                </span>
              )}
            </article>
          ))}
        </div>
      </section>

      <section id="services" className="section section-dark">
        <div className="section-heading">
          <p className="eyebrow">SERVICES</p>
          <h2>How I can help.</h2>
        </div>

        <div className="services-grid">
          {services.map((service) => (
            <div className="service-card" key={service.number}>
              <div className="service-icon">{service.number}</div>

              <h3>{service.title}</h3>

              <p>{service.description}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="section experience-section">
        <div className="section-heading">
          <p className="eyebrow">BACKGROUND</p>
          <h2>Technology meets science.</h2>
        </div>

        <div className="timeline">
          <div className="timeline-item">
            <span>Education</span>
            <h3>B.Sc. Physics</h3>
            <p>
              Built a strong foundation in mathematics, scientific computing,
              analytical reasoning, modelling and research.
            </p>
          </div>

          <div className="timeline-item">
            <span>Experience</span>
            <h3>Kogi State Broadcasting Corporation</h3>
            <p>
              Engineering-focused industrial experience involving technical
              systems, electronics, technology and practical problem solving.
            </p>
          </div>

          <div className="timeline-item">
            <span>Current Focus</span>
            <h3>AI, Software & Data</h3>
            <p>
              Developing full-stack applications, mobile products, AI
              solutions, data projects and technology-driven business ideas.
            </p>
          </div>
        </div>
      </section>

      <section id="contact" className="contact-section">
        <div className="contact-content">
          <p className="eyebrow">LET&apos;S WORK TOGETHER</p>

          <h2>
            Have an idea?
            <br />
            Let&apos;s build it.
          </h2>

          <p>
            I&apos;m available for software development, AI, data science,
            mobile applications, backend development, freelance projects and
            technology collaborations.
          </p>

          <a
            href="mailto:sundaysolomoneleojo@gmail.com"
            className="button primary"
          >
            Start a Conversation
          </a>

          <div className="contact-links">
            <a href="mailto:sundaysolomoneleojo@gmail.com">
              sundaysolomoneleojo@gmail.com
            </a>

            <a
              href="https://github.com/Sirsolo-coder"
              target="_blank"
              rel="noreferrer"
            >
              GitHub
            </a>

            <a
              href="https://linkedin.com/in/sunday-solomon-ele-ojo-569688380"
              target="_blank"
              rel="noreferrer"
            >
              LinkedIn
            </a>
          </div>
        </div>
      </section>

      <footer>
        <p>© {new Date().getFullYear()} Solomon Sunday Ele-ojo.</p>
        <p>Built with Next.js.</p>
      </footer>
    </main>
  );
}