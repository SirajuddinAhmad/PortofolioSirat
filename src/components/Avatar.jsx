import { profile } from "../data/portfolio";

export default function Avatar({ className = "" }) {
  return (
    <span className={`avatar ${className}`.trim()} aria-hidden="true">
      <span>{profile.initials}</span>
    </span>
  );
}
