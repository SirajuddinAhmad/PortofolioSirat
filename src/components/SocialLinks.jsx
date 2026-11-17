import { Mail, MessageCircle } from "lucide-react";
import { socials } from "../data/portfolio";
import GitHubIcon from "./GitHubIcon";

const ICONS = {
  github: GitHubIcon,
  email: Mail,
  whatsapp: MessageCircle,
};

export default function SocialLinks({ showLabels = false, className = "" }) {
  return (
    <ul className={`social-links ${className}`.trim()}>
      {socials.map((social) => {
        const Icon = ICONS[social.id];
        const isExternal = social.id !== "email";

        return (
          <li key={social.id}>
            <a
              className={`social-link ${showLabels ? "social-link--labelled" : ""}`.trim()}
              href={social.href}
              target={isExternal ? "_blank" : undefined}
              rel={isExternal ? "noreferrer" : undefined}
              aria-label={showLabels ? undefined : social.label}
              title={showLabels ? undefined : social.label}
            >
              <Icon size={18} />
              {showLabels ? <span>{social.label}</span> : null}
            </a>
          </li>
        );
      })}
    </ul>
  );
}
