import { ExperienceEntry } from "./experience-entry";

export function Experience() {
  return (
    <section id="work" className=" font-sans relative w-full">
      {/* Experience heading */}
       <header className="relative px-4">
         <div
           aria-hidden="true"
           className="pointer-events-none absolute left-1/2 top-0 w-screen -translate-x-1/2 border-t border-border"
         />
         <div
           aria-hidden="true"
           className="pointer-events-none absolute bottom-0 left-1/2 w-screen -translate-x-1/2 border-t border-border"
         />
        <h2 className="py-2 text-3xl font-medium tracking-tight font-sans">
          Experience
        </h2>
      </header>

      <ExperienceEntry />
    </section>
  );
}
