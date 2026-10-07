import {
  SiHtml5,
  SiCss,
  SiJavascript,
  SiTypescript,
  SiReact,
  SiNodedotjs,
  SiFlask,
  SiFastapi,
  SiExpress,
  SiBun,
  SiTrpc,
  SiMongodb,
  SiPostgresql,
  SiMysql,
  SiRedis,
  SiGit,
  SiGithub,
  SiDocker,
  SiAnthropic,
  SiCursor,
  SiGithubactions,
} from "react-icons/si";

import { Code2 } from "lucide-react";

import { SkillBadge } from "./skill-badge";

const skillGroups = [
  {
    number: "01",
    title: "Languages",
    skills: [
      {
        name: "HTML",
        icon: SiHtml5,
        href: "https://developer.mozilla.org/en-US/docs/Web/HTML",
      },
      {
        name: "CSS",
        icon: SiCss,
        href: "https://developer.mozilla.org/en-US/docs/Web/CSS",
      },
      {
        name: "Python",
        icon: Code2,
        href: "https://www.python.org/",
      },
      {
        name: "JavaScript",
        icon: SiJavascript,
        href: "https://developer.mozilla.org/en-US/docs/Web/JavaScript",
      },
      {
        name: "TypeScript",
        icon: SiTypescript,
        href: "https://www.typescriptlang.org/",
      },
    ],
  },

  {
    number: "02",
    title: "Frameworks",
    skills: [
      {
        name: "React",
        icon: SiReact,
        href: "https://react.dev/",
      },
      {
        name: "Node.js",
        icon: SiNodedotjs,
        href: "https://nodejs.org/",
      },
      {
        name: "Flask",
        icon: SiFlask,
        href: "https://flask.palletsprojects.com/",
      },
      {
        name: "FastAPI",
        icon: SiFastapi,
        href: "https://fastapi.tiangolo.com/",
      },
      {
        name: "Express",
        icon: SiExpress,
        href: "https://expressjs.com/",
      },
      {
        name: "Bun",
        icon: SiBun,
        href: "https://bun.sh/",
      },
      {
        name: "tRPC",
        icon: SiTrpc,
        href: "https://trpc.io/",
      },
    ],
  },

  {
    number: "03",
    title: "Databases",
    skills: [
      {
        name: "MongoDB",
        icon: SiMongodb,
        href: "https://www.mongodb.com/",
      },
      {
        name: "NeonDB",
        icon: SiPostgresql,
        href: "https://neon.com/",
      },
      {
        name: "PostgreSQL",
        icon: SiPostgresql,
        href: "https://www.postgresql.org/",
      },
      {
        name: "MySQL",
        icon: SiMysql,
        href: "https://www.mysql.com/",
      },
      {
        name: "DynamoDB",
        icon: Code2,
        href: "https://aws.amazon.com/dynamodb/",
      },
      {
        name: "Redis",
        icon: SiRedis,
        href: "https://redis.io/",
      },
    ],
  },

  {
    number: "04",
    title: "Developer Tools",
    skills: [
      {
        name: "Git",
        icon: SiGit,
        href: "https://git-scm.com/",
      },
      {
        name: "GitHub",
        icon: SiGithub,
        href: "https://github.com/",
      },
      {
        name: "Docker",
        icon: SiDocker,
        href: "https://www.docker.com/",
      },
      {
        name: "Claude",
        icon: SiAnthropic,
        href: "https://claude.ai/",
      },
      {
        name: "Codex",
        icon: Code2,
        href: "https://openai.com/codex/",
      },
      {
        name: "VS Code",
        icon: Code2,
        href: "https://code.visualstudio.com/",
      },
      {
        name: "Cursor",
        icon: SiCursor,
        href: "https://www.cursor.com/",
      },
      {
        name: "Kilocode",
        icon: Code2,
        href: "https://kilocode.ai/",
      },
      {
        name: "CI/CD",
        icon: SiGithubactions,
        href: "https://github.com/features/actions",
      },
      {
        name: "AWS",
        icon: Code2,
        href: "https://aws.amazon.com/",
      },
    ],
  },

  {
    number: "05",
    title: "Design",
    skills: [
      {
        name: "Figma",
        icon: Code2,
        href: "https://www.figma.com/",
      },
      {
        name: "Photoshop",
        icon: Code2,
        href: "https://www.adobe.com/products/photoshop.html",
      },
    ],
  },
];

export function Skills() {
  return (
    <section id="skills" className="w-full font-sans">
      {/* Section heading */}
      <header className="relative px-4">
        <h2 className="py-2 text-3xl font-medium tracking-tight">Skills</h2>
        <FullWidthDivider />
      </header>

      {/* Skill rows */}
      <div className="relative [--badge-height:--spacing(6)] [--col-left-width:--spacing(48)]">
        <div
          className="pointer-events-none absolute inset-y-0 left-(--col-left-width) -z-1 w-px border-r border-dashed border-border max-sm:hidden"
          aria-hidden="true"
        />

        {skillGroups.map((group) => (
          <div
            key={group.title}
            className="grid items-start gap-y-2 border-b border-border py-4 last:border-none sm:grid-cols-[var(--col-left-width)_1fr]"
          >
            <div className="pl-4 text-sm leading-6">
              <span
                className="mr-1.5 font-mono text-muted-foreground/80 select-none"
                aria-hidden="true"
              >
                {group.number}
              </span>

              {group.title}
            </div>

            <div className="flex flex-wrap gap-1.5 px-4">
              {group.skills.map((skill) => (
                <SkillBadge
                  key={skill.name}
                  name={skill.name}
                  icon={skill.icon}
                  href={skill.href}
                />
              ))}
            </div>

          </div>
        ))}
      </div>
    </section>
  );
}

function FullWidthDivider() {
  return (
    <div
      aria-hidden="true"
      className="pointer-events-none absolute bottom-0 left-1/2 w-screen -translate-x-1/2 border-b border-border"
    />
  );
}
