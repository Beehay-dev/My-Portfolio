export default function Hero() {
  return (
    <section className="hero">
      <div className="grid-overlay" />
      <div className="hero-left">
        <div className="hero-eyebrow">Frontend Developer · Open to opportunities</div>
        <h1 className="hero-name">
            Alao<br /><span>Breakthrough</span><br />Hepzibah
          </h1>
        <p className="hero-desc">
          I build clean, responsive interfaces with React and vanilla
           CSS.
          Focused on writing readable code, sweating the UI details,
          and growing into a well-rounded frontend engineer.
        </p>
      </div>
      <div className="hero-right">
        <div className="hero-stat">
          <div className="hero-stat-num">1+</div>
          <div className="hero-stat-label">Years Coding</div>
        </div>
        <div className="hero-stat">
          <div className="hero-stat-num">10+</div>
          <div className="hero-stat-label">Projects Built</div>
        </div>
        <div className="hero-stat">
          <div className="hero-stat-num">100%</div>
          <div className="hero-stat-label">Frontend Focused</div>
        </div>
      </div>
      <div className="hero-scroll">
        <div className="hero-scroll-line" />
        SCROLL
      </div>
    </section>
  );
}
