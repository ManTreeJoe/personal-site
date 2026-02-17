import { Github, Linkedin, Youtube, Instagram } from "lucide-react";
import { socialLinks } from "@/lib/data";
import type { SocialLink } from "@/types";

function XIcon({ size = 20 }: { size?: number }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="currentColor"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
    </svg>
  );
}

const iconMap: Record<string, React.ComponentType<{ size?: number }>> = {
  github: Github,
  linkedin: Linkedin,
  youtube: Youtube,
  instagram: Instagram,
  x: XIcon,
};

interface SocialLinksProps {
  size?: number;
  links?: SocialLink[];
}

export default function SocialLinks({ size = 20, links }: SocialLinksProps) {
  const items = links ?? socialLinks;
  return (
    <div className="flex items-center gap-4">
      {items.map((link) => {
        const Icon = iconMap[link.icon];
        return (
          <a
            key={link.name}
            href={link.url}
            target="_blank"
            rel="noopener noreferrer"
            className="text-text-secondary hover:text-accent transition-colors duration-300"
            aria-label={link.name}
          >
            {Icon && <Icon size={size} />}
          </a>
        );
      })}
    </div>
  );
}
