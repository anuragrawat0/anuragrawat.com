import { Profile } from "./profile";
import { Introduction } from "@/components/sections/introduction";
import { InfoSection } from "@/components/sections/info";

export function Hero() {
  return (
    <section id="home">
      <Profile />

      <Introduction />

      <InfoSection />
    </section>
  );
}