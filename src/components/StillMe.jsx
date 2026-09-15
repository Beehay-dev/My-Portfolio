import { useRef, useState } from "react";

const ANNOTATION_TAGS = ["Atlas Capture", "Turing", "OpenTrain"];
const MEDIA_TAGS = ["Apex Visual Studio PH", "2021–2026"];

function Corners() {
  return (
    <>
      <span className="stillme-corner tl" />
      <span className="stillme-corner tr" />
      <span className="stillme-corner bl" />
      <span className="stillme-corner br" />
    </>
  );
}

function StillMeCard({ tags, title, desc, stat, note }) {
  return (
    <div className="stillme-card">
      <div className="stillme-tags">
        {tags.map((t) => (
          <span className="stillme-pill" key={t}>{t}</span>
        ))}
      </div>
      <h3 className="stillme-card-title">{title}</h3>
      <p className="stillme-card-desc">{desc}</p>
      {stat && (
        <div className="stillme-stat">
          <span className="stillme-stat-num">{stat.value}</span>
          <span className="stillme-stat-label">{stat.label}</span>
        </div>
      )}
      {note && <span className="stillme-note">{note}</span>}
    </div>
  );
}

export default function StillMe() {
  const [open, setOpen] = useState(false);
  const animKey = useRef(0);

  const openReveal = () => {
    animKey.current += 1;
    setOpen(true);
  };
  const closeReveal = () => setOpen(false);

  return (
    <>
      {/* the name, annotated like a detected subject */}
      <div
        className="stillme-name-frame"
        onClick={openReveal}
        role="button"
        tabIndex={0}
        onKeyDown={(e) => (e.key === "Enter" || e.key === " ") && openReveal()}
      >
        <Corners />
        <h1 className="hero-name">
          Alao<br /><span>Breakthrough</span><br />Hepzibah
        </h1>
        <span className="stillme-tag">
          <span className="stillme-dot" />
          Still Me
          <span className="stillme-tag-sub">— other footage detected</span>
        </span>
      </div>

      {/* full-screen reveal */}
      <div className={`stillme-overlay ${open ? "is-open" : ""}`} aria-hidden={!open}>
        {open && <div key={animKey.current} className="stillme-scan" />}
        <button className="stillme-exit" onClick={closeReveal}>
          ← Back to portfolio
        </button>

        <div className="stillme-inner" key={animKey.current}>
          <div className="stillme-head">
            <span className="stillme-eyebrow">03 · Still Me</span>
            <h2 className="stillme-title">Same Person.<br />Other Footage.</h2>
            <p className="stillme-subhead">
              The eye behind the annotation work and the eye behind the
              camera — both trained on the same thing: paying attention
              to detail.
            </p>
          </div>

          <div className="stillme-grid">
            <StillMeCard
              tags={ANNOTATION_TAGS}
              title="AI Data Annotation & QC"
              desc="Video annotation and quality review for AI training pipelines — labeling actions, writing captions, and checking other annotators' work against rubric standards."
              stat={{ value: "50+", label: "Videos Annotated" }}
              note="Status: Ongoing"
            />
            <StillMeCard
              tags={MEDIA_TAGS}
              title="Event & Media Coverage"
              desc="Video coverage and live-streaming for events, conferences, and seminars as Cinematographer — the same framing instinct now shows up in the annotation work."
              note="Role: Cinematographer"
            />
          </div>
        </div>
      </div>
    </>
  );
}
