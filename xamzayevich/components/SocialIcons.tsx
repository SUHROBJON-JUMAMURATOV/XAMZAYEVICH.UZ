import { Github, Instagram, Linkedin, Mail, Send } from "lucide-react";
import { site } from "@/data/site";

const items = [
  { key: "github", label: "GitHub", Icon: Github },
  { key: "telegram", label: "Telegram", Icon: Send },
  { key: "linkedin", label: "LinkedIn", Icon: Linkedin },
  { key: "instagram", label: "Instagram", Icon: Instagram },
  { key: "email", label: "Email", Icon: Mail },
] as const;

export default function SocialIcons() {
  return (
    <ul className="flex items-center gap-3">
      {items.map(({ key, label, Icon }) => {
        const href = site.socials[key];
        if (!href) return null;
        return (
          <li key={key}>
            <a
              href={href}
              aria-label={label}
              target={key === "email" ? undefined : "_blank"}
              rel="noopener noreferrer"
              className="glass grid h-10 w-10 place-items-center rounded-full text-muted transition-colors hover:text-white"
            >
              <Icon size={17} />
            </a>
          </li>
        );
      })}
    </ul>
  );
}
