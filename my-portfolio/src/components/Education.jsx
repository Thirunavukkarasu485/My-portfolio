import { GraduationCap } from "lucide-react";
import profile from "../data/profile";

export default function Education() {
  return (
    <section id="education" className="section section-tinted">
      <div className="section-heading">
        <span className="eyebrow">MY LEARNING JOURNEY</span>
        <h2>Education <span className="gradient-text">& Training</span></h2>
        <p>The academic foundation behind my development journey.</p>
      </div>

      <div className="education-list">
        {profile.education.map((item) => (
          <article className="education-card" key={item.course}>
            <div className="education-icon"><GraduationCap size={28} /></div>
            <div>
              <span className="education-year">{item.year}</span>
              <h3>{item.course}</h3>
              <p>{item.institution}</p>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
