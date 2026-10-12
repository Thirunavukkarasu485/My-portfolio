import { Code2 } from "lucide-react";
import profile from "../data/profile";

export default function Skills() {
  const categories = [...new Set(profile.skills.map((skill) => skill.category))];

  return (
    <section id="skills" className="section section-tinted">
      <div className="section-heading">
        <span className="eyebrow">WHAT I WORK WITH</span>
        <h2>Technical <span className="gradient-text">Skills</span></h2>
        <p>Technologies I am learning and using in my projects.</p>
      </div>

      <div className="skill-groups">
        {categories.map((category, index) => (
          <article className="skill-card glass-card" key={category}>
            <div className={`icon-box skill-icon skill-${index % 4}`}>
              <Code2 />
            </div>
            <h3>{category}</h3>
            <div className="skill-items">
              {profile.skills
                .filter((skill) => skill.category === category)
                .map((skill) => (
                  <span className="skill-pill" key={skill.name}>
                    {skill.name}
                  </span>
                ))}
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
