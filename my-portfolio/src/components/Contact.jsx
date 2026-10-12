import { useState } from "react";
import { Mail, Send, Github, Linkedin } from "lucide-react";
import profile from "../data/profile";

export default function Contact() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [error, setError] = useState("");

  function handleSubmit(event) {
    event.preventDefault();
    setError("");

    const recipient = profile.email;
    if (!recipient || recipient === "YOUR_EMAIL@example.com") {
      setError("Please add your real email in src/data/profile.js first.");
      return;
    }

    const subject = encodeURIComponent(`Portfolio message from ${form.name}`);
    const body = encodeURIComponent(
      `Name: ${form.name}\nEmail: ${form.email}\n\n${form.message}`
    );

    window.location.href =
      `mailto:${recipient}?subject=${subject}&body=${body}`;
  }

  function updateField(event) {
    setForm({ ...form, [event.target.name]: event.target.value });
  }

  return (
    <section id="contact" className="section">
      <div className="section-heading">
        <span className="eyebrow">LET'S CONNECT</span>
        <h2>Contact <span className="gradient-text">Me</span></h2>
        <p>Have an opportunity or idea? Feel free to get in touch.</p>
      </div>

      <div className="contact-grid">
        <div className="contact-info glass-card">
          <div className="icon-box purple"><Mail /></div>
          <h3>Let's talk</h3>
          <p>
            I am interested in learning, collaborating, and discussing
            software development projects.
          </p>

          <a className="email-link" href={`mailto:${profile.email}`}>
            <Mail size={18} /> {profile.email}
          </a>

          <div className="contact-socials">
            {profile.github && (
              <a href={profile.github} target="_blank" rel="noreferrer"
                aria-label="GitHub"><Github /></a>
            )}
            {profile.linkedin && (
              <a href={profile.linkedin} target="_blank" rel="noreferrer"
                aria-label="LinkedIn"><Linkedin /></a>
            )}
          </div>
        </div>

        <form className="contact-form glass-card" onSubmit={handleSubmit}>
          <label htmlFor="name">Your name</label>
          <input id="name" name="name" value={form.name}
            onChange={updateField} placeholder="Enter your name" required />

          <label htmlFor="email">Your email</label>
          <input id="email" name="email" type="email" value={form.email}
            onChange={updateField} placeholder="you@example.com" required />

          <label htmlFor="message">Your message</label>
          <textarea id="message" name="message" value={form.message}
            onChange={updateField} placeholder="Write your message..."
            rows="5" required />

          {error && <p className="form-error" role="alert">{error}</p>}

          <button className="btn btn-primary submit-btn" type="submit">
            Prepare email <Send size={17} />
          </button>
          <p className="form-note">
            Your email application will open to send the message.
          </p>
        </form>
      </div>
    </section>
  );
}
