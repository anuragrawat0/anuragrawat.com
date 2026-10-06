import { FileText, Mail } from "lucide-react";

import { SocialLinks } from "./social-links";

export function Introduction() {
  return (
    <section className="relative w-full font-sans">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute bottom-0 left-1/2 w-screen -translate-x-1/2 border-b border-border"
      />

      <div className="box-border w-full px-4 py-4">
        <div className="flex flex-col gap-2">
          <p>
            Hey, I'm Anurag, a software engineer who enjoys building practical,
            modern web applications with a focus on backend systems,
            performance, and clean user experiences. I like turning ideas into
            products that are simple to use, reliable, and thoughtfully built.
          </p>

          <p>
            I'm comfortable working across different technologies and choosing
            the right tools for the problem rather than sticking to one stack.
            I'm always learning, experimenting with new technologies, and
            looking for opportunities to build better things.
          </p>
        </div>

        <div className="flex flex-wrap gap-2 pt-5">
          <a
            href="/resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="flex w-fit items-center gap-1.5 rounded-[9px] border border-2 bg-foreground px-2.5 py-1.5 text-sm font-medium text-background transition-colors duration-300 hover:opacity-90"
          >
            <FileText className="size-4" />
            Resume
          </a>

          <a
            href="mailto:anuragrawat0608@gmail.com"
            className="flex w-fit items-center gap-1.5 rounded-[9px] border border-2 bg-muted px-2.5 py-1.5 text-sm font-medium text-foreground transition-colors duration-300 hover:bg-muted-foreground/10"
          >
            <Mail className="size-[18px]" />
            Send an email
          </a>
        </div>

        <div className="pt-5">
          <SocialLinks />
        </div>
      </div>
    </section>
  );
}
