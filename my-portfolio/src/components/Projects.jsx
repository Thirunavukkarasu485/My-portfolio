import { ExternalLink, FolderCode } from "lucide-react";
import profile from "../data/profile";
import { getProjects } from "../api";

export default function Projects() {
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    const fetchProjects = async () => {
      try {
        const data = await getProjects();
        setProjects(data);
      } catch (error) {
        console.error("Error fetching projects:", error);
      }
    };

    fetchProjects();
  }, []);

  return (
    <section id="projects" className="section">
      <div className="section-heading">
        <span className="eyebrow">THINGS I HAVE BUILT</span>

        <h2>
          Featured <span className="gradient-text">Projects</span>
        </h2>

        <p>Practical projects that help me apply what I learn.</p>
      </div>

      <div className="project-grid">
        {profile.projects.map((project, index) => (
          <article className="project-card" key={project.title}>
            <div className={`project-banner project-banner-${index % 3}`}>
              <span className="project-number">
                {String(index + 1).padStart(2, "0")}
              </span>

              <FolderCode size={54} strokeWidth={1.2} />

              <span className="project-label">PROJECT</span>
            </div>

            <div className="project-body">
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
                  <span>View on GitHub</span>
                  <ExternalLink size={15} />
                </a>
              )}
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
