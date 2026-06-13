import { useState, useEffect, useRef } from "react";
import { skillGroups } from "../data/data";

function SkillBar({ name, pct }) {
  const ref = useRef(null);
  const [active, setActive] = useState(false);

  useEffect(() => {
    const obs = new IntersectionObserver(
      ([e]) => {
        if (e.isIntersecting) {
          setActive(true);
          obs.disconnect();
        }
      },
      { threshold: 0.5 }
    );
    if (ref.current) obs.observe(ref.current);
    return () => obs.disconnect();
  }, []);

  return (
    <div className="skill-item" ref={ref}>
      <div className="skill-name-row">
        <span className="skill-name">{name}</span>
        <span className="skill-pct">{pct}%</span>
      </div>
      <div className="skill-bar">
        <div
          className={`skill-fill ${active ? "animate" : ""}`}
          style={{ width: `${pct}%` }}
        />
      </div>
    </div>
  );
}

export default function Skills() {
  return (
    <section className="section" id="skills">
      <div className="section-header">
        <span className="section-num">02</span>
        <h2 className="section-title">SKILLS</h2>
        <div className="section-line" />
      </div>

      <div className="skills-layout">
        <p className="skills-intro">
          "Still learning, always open. I focus on the fundamentals and build
          from there — clean markup, maintainable CSS, and React that actually
          makes sense."
        </p>
        <div className="skills-grid">
          {skillGroups.map((g) => (
            <div key={g.title}>
              <div className="skill-group-title">{g.title}</div>
              {g.skills.map((s) => (
                <SkillBar key={s.name} name={s.name} pct={s.pct} />
              ))}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
