import { Lock } from "lucide-react";

export default function BrowserFrame({ label, children, className = "" }) {
  return (
    <div className={`browser ${className}`.trim()}>
      <div className="browser__bar" aria-hidden="true">
        <span className="browser__dots">
          <i />
          <i />
          <i />
        </span>
        <span className="browser__url">
          <Lock size={9} strokeWidth={2.4} />
          <span>{label}</span>
        </span>
        <span className="browser__spacer" />
      </div>
      <div className="browser__screen">{children}</div>
    </div>
  );
}
