"use client";

import {
  SiGithub,
  SiX,
  SiDiscord,
} from "react-icons/si";
import { FaLinkedin } from "react-icons/fa";

const socialLinks = [
  {
    name: "GitHub",
    href: "https://github.com/YOUR_USERNAME",
    icon: SiGithub,
  },
  {
    name: "Twitter",
    href: "https://x.com/YOUR_USERNAME",
    icon: SiX,
  },
  {
    name: "LinkedIn",
    href: "https://www.linkedin.com/in/YOUR_USERNAME",
    icon: FaLinkedin,
  },
  {
    name: "Discord",
    href: "https://discord.com/users/YOUR_ID",
    icon: SiDiscord,
  },
];

export function SocialLinks() {
  return (
    <div className="flex flex-wrap items-center gap-[7px]">
      {socialLinks.map((social) => {
        const Icon = social.icon;

        return (
          <a
            key={social.name}
            href={social.href}
            target="_blank"
            rel="noopener noreferrer"
            className="group flex items-center gap-1.5 rounded-[6px] bg-muted px-2 py-1 text-sm font-medium text-foreground transition-colors duration-200 hover:bg-muted-foreground/10"
          >
            <Icon className="size-4" />
            <span>{social.name}</span>
          </a>
        );
      })}
    </div>
  );
}