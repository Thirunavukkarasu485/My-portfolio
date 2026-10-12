import Projects from "./components/Projects";
import { getProjects } from "./api";
import "./App.css";
import profile from "./data/profile.js";

import { useState, useEffect } from "react";


function App() {
  
const [projects, setProjects] = useState([]);

useEffect(() => {
  getProjects()
    .then((data) => {
      setProjects(data);
    })
    .catch((error) => {
      console.error("Error fetching projects:", error);
    });
}, []);

  return (
    <div className="portfolio">
      {/* Navigation */}
      <header className="navbar">
        <a href="#home" className="brand">
          THIRU<span>.</span>
        </a>

        <nav>
          <a href="#home">Home</a>
          <a href="#about">About</a>
          <a href="#skills">Skills</a>
          <a href="#projects">Projects</a>
          <a href="#education">Education</a>
          <a href="#contact">Contact</a>
        </nav>

        <a href="#contact" className="nav-button">
          Let's Talk <span>↗</span>
        </a>
      </header>

      <main>
        {/* Hero */}
        <section id="home" className="hero section-container">
          <div className="hero-content">
            <div className="availability">
              <span className="status-dot"></span>
              COMPUTER SCIENCE ENGINEERING STUDENT
            </div>

            <p className="hero-greeting">
              {profile.greeting || "Hello, I'm"}
            </p>

            <h1>
              {profile.name}
              <span className="gradient-text">.</span>
            </h1>

            <h2>
              Aspiring <span className="gradient-text">
                {profile.role || "Full-Stack Developer"}
              </span>
            </h2>

            <p className="hero-description">
              {profile.introduction}
            </p>

            <div className="hero-buttons">
              <a href="#projects" className="button button-primary">
                Explore My Work <span>↗</span>
              </a>

              <a href="#contact" className="button button-secondary">
                Contact Me
              </a>
            </div>

            <div className="hero-stats">
              <div>
                <strong>01</strong>
                <span>Curious Mind</span>
              </div>
              <div>
                <strong>02</strong>
                <span>Creative Builder</span>
              </div>
              <div>
                <strong>03</strong>
                <span>Always Learning</span>
              </div>
            </div>
          </div>

          <div className="hero-visual">
            <div className="orbit orbit-one"></div>
            <div className="orbit orbit-two"></div>

            <div className="profile-card">
              {profile.photo ? (
                <img
                  src={profile.photo}
                  alt={profile.name}
                  className="profile-image"
                />
              ) : (
                <div className="profile-placeholder">
                  {profile.name
                    .split(" ")
                    .map((word) => word[0])
                    .slice(0, 2)
                    .join("")}
                </div>
              )}

              <div className="profile-card-caption">
                <span>HELLO, WORLD!</span>
                <h3>Building the future</h3>
                <p>One project at a time.</p>
              </div>
            </div>

            <div className="floating-card floating-card-top">
              <span className="floating-icon">✦</span>
              <div>
                <strong>Creative</strong>
                <small>Problem Solver</small>
              </div>
            </div>

            <div className="floating-card floating-card-bottom">
              <span className="code-icon">&lt;/&gt;</span>
              <div>
                <strong>Developer</strong>
                <small>In the making</small>
              </div>
            </div>
          </div>
        </section>

        {/* About */}
        <section id="about" className="section-container section-block">
          <div className="section-heading">
            <span className="section-label">01 / ABOUT ME</span>
            <h2>
              More than code.
              <br />
              <span className="gradient-text">A mindset to create.</span>
            </h2>
          </div>

          <div className="about-grid">
            <article className="glass-card about-card">
              <span className="card-symbol">✦</span>
              <h3>Who I Am</h3>
              <p>{profile.about}</p>
              <p>{profile.objective}</p>
            </article>

            <article className="glass-card">
              <span className="card-symbol">◎</span>
              <h3>My Interests</h3>
              <div className="tag-list">
                {profile.interests.map((interest) => (
                  <span className="tag" key={interest}>
                    {interest}
                  </span>
                ))}
              </div>
            </article>

            <article className="glass-card">
              <span className="card-symbol">↗</span>
              <h3>My Goals</h3>
              <ul className="goal-list">
                {profile.goals.map((goal) => (
                  <li key={goal}>
                    <span>✓</span> {goal}
                  </li>
                ))}
              </ul>
            </article>
          </div>
        </section>

        {/* Skills */}
        <section id="skills" className="section-container section-block">
          <div className="section-heading">
            <span className="section-label">02 / MY TOOLKIT</span>
            <h2>
              Skills I'm <span className="gradient-text">building.</span>
            </h2>
            <p>
              Technologies I'm learning and using to turn ideas into
              useful applications.
            </p>
          </div>

          <div className="skills-grid">
            {profile.skills.map((skill, index) => (
              <article className="skill-card" key={skill.name}>
                <span className="skill-number">
                  {String(index + 1).padStart(2, "0")}
                </span>
                <h3>{skill.name}</h3>
                <span className="skill-category">{skill.category}</span>
                <div className="skill-line">
                  <span></span>
                </div>
              </article>
            ))}
          </div>
        </section>

        {/* Projects */}
        <section id="projects" className="section-container section-block">
          <div className="section-heading">
            <span className="section-label">03 / SELECTED WORK</span>
            <h2>
              Ideas into <span className="gradient-text">reality.</span>
            </h2>
            <p>
              Projects that represent my learning journey and
              problem-solving mindset.
            </p>
          </div>

          <div className="projects-grid">
            {profile.projects.map((project, index) => (
              <article className="project-card" key={project.title}>
                <div className={`project-visual project-visual-${index % 3}`}>
                  <span className="project-index">
                    PROJECT / {String(index + 1).padStart(2, "0")}
                  </span>
                  <span className="project-art">
                    {["⌘", "▦", "✳"][index % 3]}
                  </span>
                  <span className="project-arrow">↗</span>
                </div>

                <div className="project-info">
                  <span className="project-kicker">FEATURED PROJECT</span>
                  <h3>{project.title}</h3>
                  <p>{project.description}</p>

                  <div className="tag-list">
                    {project.technologies.map((technology) => (
                      <span className="tag" key={technology}>
                        {technology}
                      </span>
                    ))}
                  </div>

                  {project.github && (
                    <a
                      className="project-link"
                      href={project.github}
                      target="_blank"
                      rel="noreferrer"
                    >
                      View on GitHub <span>↗</span>
                    </a>
                  )}
                </div>
              </article>
            ))}
          </div>
        </section>

        {/* Education */}
        <section
          id="education"
          className="section-container section-block"
        >
          <div className="section-heading">
            <span className="section-label">04 / EDUCATION</span>
            <h2>
              Learning for <span className="gradient-text">tomorrow.</span>
            </h2>
          </div>

          <div className="education-list">
            {profile.education.map((item, index) => (
              <article className="education-card" key={item.course}>
                <div className="education-icon">✦</div>
                <div>
                  <span className="project-kicker">
                    EDUCATION / 0{index + 1}
                  </span>
                  <h3>{item.course}</h3>
                  <p>{item.institution}</p>
                  <span className="education-year">{item.year}</span>
                </div>
              </article>
            ))}
          </div>
        </section>

        {/* Contact */}
        <section
          id="contact"
          className="section-container section-block"
        >
          <div className="contact-panel">
            <span className="section-label">05 / GET IN TOUCH</span>
            <h2>
              Have an idea?
              <br />
              <span className="gradient-text">Let's build it.</span>
            </h2>

            <p>
              I'm always interested in learning, collaborating, and
              exploring new opportunities in software development.
            </p>

            <div className="contact-buttons">
              {profile.email &&
                profile.email !== "YOUR_EMAIL@example.com" && (
                  <a
                    className="button button-primary"
                    href={`mailto:${profile.email}`}
                  >
                    Email Me <span>↗</span>
                  </a>
                )}

              {profile.github && (
                <a
                  className="button button-secondary"
                  href={profile.github}
                  target="_blank"
                  rel="noreferrer"
                >
                  GitHub ↗
                </a>
              )}

              {profile.linkedin && (
                <a
                  className="button button-secondary"
                  href={profile.linkedin}
                  target="_blank"
                  rel="noreferrer"
                >
                  LinkedIn ↗
                </a>
              )}
            </div>
          </div>
        </section>
      </main>

      <footer className="footer">
        <a href="#home" className="brand">
          THIRU<span>.</span>
        </a>
        <p>Designed with curiosity. Built with code.</p>
        <a href="#home" className="back-to-top">
          Back to top ↑
        </a>
      </footer>
    </div>
  );
}

export default App;
