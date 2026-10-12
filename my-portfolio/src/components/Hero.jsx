import { ArrowDown, Mail, UserRound } from "lucide-react";
import profile from "../data/profile";

export default function Hero() {
  const initials = profile.name
    .split(" ")
    .map((word) => word[0])
    .join("")
    .slice(0, 2);

  return (
    <section id="home" className="hero section">
      <div className="hero-content">
        <span className="eyebrow">
          <span className="status-dot" /> Welcome to my portfolio
        </span>

        <h1>
          {profile.greeting}
          <br />
          <span className="gradient-text">{profile.name}</span>
        </h1>

        <h2>{profile.role}</h2>
        <p className="hero-intro">{profile.introduction}</p>

        <div className="objective">
          <strong>My career objective</strong>
          <p>{profile.objective}</p>
        </div>

        <div className="hero-actions">
          <a href="#projects" className="btn btn-primary">
            Explore my work <ArrowDown size={18} />
          </a>
          <a href="#contact" className="btn btn-outline">
            <Mail size={18} /> Contact me
          </a>
        </div>

        <div className="social-links">
          {profile.linkedin && (
  <a href={profile.linkedin} target="_blank" rel="noreferrer"
    aria-label="LinkedIn profile">
    <Linkedin />
  </a>
)}
          {profile.linkedin && (
            <a href={profile.linkedin} target="_blank" rel="noreferrer"
              aria-label="LinkedIn profile">
              <Linkedin />
            </a>
          )}
        </div>
      </div>

      <div className="hero-visual">
        <div className="orbit orbit-one" />
        <div className="orbit orbit-two" />
        <div className="profile-frame">
          {profile.photo ? (
            <img src={profile.photo} alt={profile.name} />
          ) : (
            <div className="photo-placeholder">
              <UserRound size={78} strokeWidth={1.3} />
              <span>{initials}</span>
            </div>
          )}
        </div>
        <div className="floating-tag tag-top">Creative thinker ✦</div>
        <div className="floating-tag tag-bottom">Building the future 🚀</div>
      </div>

      <a href="#about" className="scroll-hint" aria-label="Scroll to About">
        <ArrowDown size={18} />
      </a>
    </section>
  );
}
