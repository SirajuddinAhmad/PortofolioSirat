import { Sparkles } from "lucide-react";

const ITEMS = [
  "Web Development",
  "UI/UX Design",
  "Digital Archive",
  "IT Support",
  "Graphic Design",
  "Landing Page",
];

export default function Marquee() {
  const items = [...ITEMS, ...ITEMS];

  return (
    <div className="marquee" aria-hidden="true">
      <div className="marquee__track">
        {items.map((item, index) => (
          <span className="marquee__item" key={`${item}-${index}`}>
            {item}
            <Sparkles size={12} />
          </span>
        ))}
      </div>
    </div>
  );
}
