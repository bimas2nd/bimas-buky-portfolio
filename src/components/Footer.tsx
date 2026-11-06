import { profile } from "@/data/profile";

export function Footer() {
  return (
    <footer className="border-t border-line px-5 py-8 sm:px-8 lg:px-12">
      <div className="mx-auto flex w-full max-w-[1500px] flex-col gap-6 sm:flex-row sm:items-center sm:justify-between">
        <div className="flex items-center gap-3">
          <span className="flex h-7 w-7 items-center justify-center border border-ink/20 font-mono text-[8px] tracking-[0.12em] text-ink">
            {profile.initials}
          </span>
          <div>
            <p className="text-xs text-ink/80">{profile.name}</p>
            <p className="mt-0.5 font-mono text-[8px] uppercase tracking-[0.16em] text-faint">
              © 2026 · All rights reserved
            </p>
          </div>
        </div>

        <p className="font-mono text-[8px] uppercase tracking-[0.16em] text-faint">
          Designed &amp; built in Jakarta · Next.js / Tailwind
        </p>

        <div className="flex flex-wrap items-center gap-x-5 gap-y-3">
          <a
            href={`mailto:${profile.email}`}
            className="link-underline font-mono text-[8px] uppercase tracking-[0.16em] text-muted transition-colors hover:text-ink"
          >
            Email
          </a>
          <a
            href={profile.github}
            target="_blank"
            rel="noreferrer"
            className="link-underline font-mono text-[8px] uppercase tracking-[0.16em] text-muted transition-colors hover:text-ink"
          >
            GitHub
          </a>
          <a
            href={profile.linkedin}
            target="_blank"
            rel="noreferrer"
            className="link-underline font-mono text-[8px] uppercase tracking-[0.16em] text-muted transition-colors hover:text-ink"
          >
            LinkedIn
          </a>
          <a
            href="#home"
            className="group inline-flex items-center gap-1.5 font-mono text-[8px] uppercase tracking-[0.16em] text-ink"
          >
            Top
            <span className="text-accent transition-transform duration-300 group-hover:-translate-y-0.5">
              ↑
            </span>
          </a>
        </div>
      </div>
    </footer>
  );
}
