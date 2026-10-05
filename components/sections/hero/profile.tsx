import { ProfileSwitcher } from "./profile-switch";

export function Profile() {
  return (
    <section className="relative">
      <div
        aria-hidden="true"
        className="absolute bottom-0 left-1/2 h-px w-screen -translate-x-1/2 bg-border"
      />
      <div className="flex items-stretch justify-between p-3 sm:p-4">
        <ProfileSwitcher />

        {/* Viewer count */}
        <div className="flex flex-col items-end justify-between font-sans">
          <div
            title="Visitor Count"
            className="flex select-none items-center gap-1.5 font-medium text-muted-foreground transition-all duration-300 hover:text-foreground"
          >
            <svg
              viewBox="0 0 16 16"
              width={17}
              height={17}
              fill="currentColor"
              aria-hidden="true"
            >
              <path d="M16 8s-3-5.5-8-5.5S0 8 0 8s3 5.5 8 5.5S16 8 16 8M1.173 8a13 13 0 0 1 1.66-2.043C4.12 4.668 5.88 3.5 8 3.5s3.879 1.168 5.168 2.457A13 13 0 0 1 14.828 8q-.086.13-.195.288c-.335.48-.83 1.12-1.465 1.755C11.879 11.332 10.119 12.5 8 12.5s-3.879-1.168-5.168-2.457A13 13 0 0 1 1.172 8z" />
              <path d="M8 5.5a2.5 2.5 0 1 0 0 5 2.5 2.5 0 0 0 0-5M4.5 8a3.5 3.5 0 1 1 7 0 3.5 3.5 0 0 1-7 0" />
            </svg>
            <span className="text-xs tabular-nums sm:text-sm">4.5k</span>
          </div>
        </div>
      </div>
    </section>
  );
}