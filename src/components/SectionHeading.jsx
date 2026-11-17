import Reveal from "./Reveal";

export default function SectionHeading({ index, label, title, description, className = "" }) {
  return (
    <Reveal as="header" className={`section-heading ${className}`.trim()}>
      <div className="section-heading__meta">
        <span className="section-heading__index">{index}</span>
        <span className="section-heading__line" aria-hidden="true" />
        <span className="section-heading__label">{label}</span>
      </div>
      <div className="section-heading__row">
        <h2 className="section-heading__title">{title}</h2>
        {description ? <p className="section-heading__description">{description}</p> : null}
      </div>
    </Reveal>
  );
}
