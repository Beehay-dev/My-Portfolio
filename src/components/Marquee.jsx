import { marqueeItems } from "../data/data";

export default function Marquee() {
  return (
    <div className="marquee-wrap">
      <div className="marquee">
        {[...marqueeItems, ...marqueeItems].map((item, i) => (
          <div className="marquee-item" key={i}>
            <div className="marquee-dot" />
            {item}
          </div>
        ))}
      </div>
    </div>
  );
}
