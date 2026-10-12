
import { Heart, Target, Lightbulb } from "lucide-react";
import profile from "../data/profile";

export default function About() {
  return (
    <section id="about" className="section">
      <div className="section-heading">
        <span className="eyebrow">GET TO KNOW ME</span>
        <h2>About <span className="gradient-text">Me</span></h2>
        <p>A little about my journey and what motivates me.</p>
      </div>

      <div className="about-grid">
        <div className="about-copy glass-card">
          <h3>My story</h3>
          <p>{profile.about}</p>

          <h3 className="subheading">My interests</h3>
          <div className="tag-list">
            {profile.interests.map((item) => (
              <span className="tag" key={item}>{item}</span>
            ))}
          </div>
        </div>

        <div className="goal-list">
          <article className="goal-card">
            <div className="icon-box purple"><Heart /></div>
            <div>
              <h3>What I enjoy</h3>
              <p>Learning new technologies and turning ideas into working applications.</p>
            </div>
          </article>

          <article className="goal-card">
            <div className="icon-box orange"><Target /></div>
            <div>
              <h3>My professional goals</h3>
              <ul>
                {profile.goals.map((goal) => <li key={goal}>{goal}</li>)}
              </ul>
            </div>
          </article>

          <article className="goal-card">
            <div className="icon-box green"><Lightbulb /></div>
            <div>
              <h3>My approach</h3>
              <p>Learn step by step, practise regularly, and improve through projects.</p>
            </div>
          </article>
        </div>
      </div>
    </section>
  );
}
