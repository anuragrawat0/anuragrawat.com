"use client";
import { CSSProperties, useRef, useState } from "react";
import Image from "next/image";
import { RotatingTitle } from "./rotating-title";
type Profile = {
  name: string;
  role: string;
  image: string;
};

const profiles: Profile[] = [
  {
    name: "Anurag Rawat",
    role: "Software Engineer",
    image: "/images/profile.jpg",
  },
  {
    name: "nocturdev",
    role: "Software Engineer",
    image: "/images/profile-alt.jpg",
  },
];

export function ProfileSwitcher() {
  const [activeProfile, setActiveProfile] = useState(0);
  const [glitch, setGlitch] = useState(false);
  const soundRef = useRef<HTMLAudioElement | null>(null);

  function switchProfile() {
    const sound =
      soundRef.current ??
      new Audio("/audio/garage-glitch-fx-transitions-9-311811.mp3");

    soundRef.current = sound;
    sound.currentTime = 0;
    void sound.play().catch(() => {});

    setGlitch(true);
    setActiveProfile((prev) => (prev === 0 ? 1 : 0));

    setTimeout(() => setGlitch(false), 120);
  }

  const profile = profiles[activeProfile];

  return (
    <div className="flex items-end gap-3">
      <div
        className={`glitch-image-frame rounded-[12px] border border-neutral-400 p-[4px] transition duration-300 hover:brightness-90 dark:border-neutral-600 ${
          glitch ? "is-glitching" : ""
        }`}
        style={
          {
            "--glitch-image": `url("${profile.image}")`,
          } as CSSProperties
        }
      >
        <Image
          src={profile.image}
          alt="Profile"
          width={100}
          height={100}
          priority
          className={`rounded-[8px] size-[90px] select-none`}

        />
      </div>

      <div className="flex h-full flex-col justify-between py-1 select-none">
        <button
          type="button"
          onClick={switchProfile}
          aria-label="Switch profile"
          className="mt-1 w-fit cursor-pointer text-muted-foreground transition-colors duration-300 hover:text-foreground"
        >
          <svg
            stroke="currentColor"
            fill="currentColor"
            strokeWidth={0}
            viewBox="0 0 512 512"
            width={12}
            height={12}
            aria-hidden="true"
            className={
              activeProfile === 1
                ? "text-foreground"
                : "rotate-[120deg] text-muted-foreground transition-all duration-300"
            }
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d={
                activeProfile === 1
                  ? "M448 256c0-106-86-192-192-192l0 384c106 0 192-86 192-192zM0 256a256 256 0 1 1 512 0A256 256 0 1 1 0 256z"
                  : "M222.7 32.1c5 16.9-4.6 34.8-21.5 39.8C121.8 95.6 64 169.1 64 256c0 106 86 192 192 192s192-86 192-192c0-86.9-57.8-160.4-137.1-184.1c-16.9-5-26.6-22.9-21.5-39.8s22.9-26.6 39.8-21.5C434.9 42.1 512 140 512 256c0 141.4-114.6 256-256 256S0 397.4 0 256C0 140 77.1 42.1 182.9 10.6c16.9-5 34.8 4.6 39.8 21.5z"
              }
            />
          </svg>
        </button>

        <div>
          <h1 className="relative inline-flex min-w-[157px] items-center text-[1.55rem] font-sans font-medium leading-[1.08] tracking-tight text-foreground sm:text-[1.75rem]">
            <span
              className={glitch ? "glitch-text" : ""}
              data-text={profile.name}
            >
              {profile.name}
            </span>

            {profile.name === "nocturdev" && (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width={20}
                height={20}
                viewBox="0 0 20 20"
                className="ml-0.5 mt-1 text-blue-500"
                fill="currentColor"
                aria-label="Verified"
                role="img"
              >
                <path d="m17.999,10c0-1.097-.567-2.113-1.465-2.707.215-1.054-.103-2.174-.878-2.95-.775-.776-1.896-1.094-2.95-.878-.593-.897-1.609-1.464-2.706-1.464s-2.113.567-2.706,1.464c-1.053-.216-2.174.102-2.95.878s-1.093,1.896-.878,2.949c-.897.593-1.465,1.61-1.465,2.707s.567,2.113 1.465,2.707c-.215,1.054-.102,2.174.878,2.95.776.776,1.898,1.092,2.95.878.593.897,1.609,1.464,2.706,1.464s2.113-.568,2.706-1.465c1.059.214,2.176-.103,2.95-.878.776-.776,1.094-1.896.878-2.95.897-.593,1.465-1.609,1.465-2.707Z" />
                <path
                  d="m6.2 10.2 2.3 2.3 5.2-5.2"
                  fill="none"
                  stroke="white"
                  strokeWidth={1.8}
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            )}
          </h1>

          <RotatingTitle
            titles={["Software Engineer", "Freelancer", "Backend Developer"]}
          />
        </div>
      </div>
    </div>
  );
}
