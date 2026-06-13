import { projects } from "../data/data";

export default function Projects() {
  return (
    <section className="section" id="projects">
      <div className="section-header">
        <span className="section-num">01</span>
        <h2 className="section-title">SELECTED WORK</h2>
        <div className="section-line" />
      </div>

      <div className="projects-grid">
        {projects.map((p, i) => {
          const content = (
            <>
              <div>
                <div className="project-tag">{p.tag}</div>
                <div className="project-title">{p.title}</div>
                <div className="project-desc">{p.desc}</div>
                <div className="project-stack">
                  {p.stack.map((t) => (
                    <span className="project-tech" key={t}>{t}</span>
                  ))}
                </div>
              </div>
              {p.featured && <div />}
              {p.href ? (
                <div className="project-arrow">↗</div>
              ) : (
                <div className="project-arrow project-arrow--soon">In progress</div>
              )}
            </>
          );

          const cardClass = `project-card ${p.featured ? "featured" : ""} ${
            !p.href ? "no-link" : ""
          }`;

          return p.href ? (
            <a
              key={i}
              href={p.href}
              target="_blank"
              rel="noopener noreferrer"
              className={cardClass}
            >
              {content}
            </a>
          ) : (
            <div key={i} className={cardClass}>
              {content}
            </div>
          );
        })}
      </div>
    </section>
  );
}