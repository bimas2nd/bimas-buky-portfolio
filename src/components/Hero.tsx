"use client";

import { useRef, useState, useEffect } from "react";
import Image from "next/image";
import {
  ArrowDownIcon,
  ArrowUpRightIcon,
  GithubIcon,
} from "@/components/icons";
import { profile } from "@/data/profile";

export function Hero() {
  const desktopImgRef = useRef<HTMLDivElement>(null);
  const mobileImgRef = useRef<HTMLDivElement>(null);
  const [jakartaTime, setJakartaTime] = useState<string>("");

  // Live clock untuk kesan interaktif & profesional
  useEffect(() => {
    const updateClock = () => {
      const now = new Date();
      const formatter = new Intl.DateTimeFormat("en-GB", {
        timeZone: "Asia/Jakarta",
        hour: "2-digit",
        minute: "2-digit",
        hour12: false,
      });
      setJakartaTime(`${formatter.format(now)} WIB`);
    };

    updateClock();
    const interval = setInterval(updateClock, 30000);
    return () => clearInterval(interval);
  }, []);

  const handleMouseMove = (
    e: React.MouseEvent<HTMLDivElement>,
    ref: React.RefObject<HTMLDivElement | null>
  ) => {
    if (!ref.current) return;
    const rect = ref.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    ref.current.style.setProperty("--x", `${x}px`);
    ref.current.style.setProperty("--y", `${y}px`);
  };

  return (
    <section
      id="home"
      className="relative overflow-hidden border-b border-line pt-20 lg:pt-0"
    >
      {/* Subtle Ambient Glow & Architectural Grid */}
      <div className="pointer-events-none absolute -top-48 left-1/3 -z-10 h-[480px] w-[680px] -translate-x-1/2 bg-accent/8 opacity-50 blur-[120px]" />
      <div className="pointer-events-none absolute inset-0 -z-20 bg-[linear-gradient(to_right,#80808008_1px,transparent_1px),linear-gradient(to_bottom,#80808008_1px,transparent_1px)] bg-[size:32px_32px]" />

      <div className="mx-auto grid min-h-[100svh] w-full max-w-[1500px] grid-cols-1 lg:grid-cols-12">
        {/* LEFT COLUMN: MAIN EDITORIAL CONTENT */}
        <div className="relative order-1 flex flex-col justify-between px-5 pb-10 pt-6 sm:px-8 lg:order-1 lg:col-span-7 lg:px-12 lg:pb-12 lg:pt-28">
          {/* Top Metadata Bar */}
          <div
            className="hero-fade flex items-center justify-between border-b border-line/60 pb-4"
            style={{ animationDelay: "180ms" }}
          >
            <div className="flex items-center gap-2.5">
              <span className="font-mono text-[8.5px] uppercase tracking-[0.24em] text-accent">
                00 / Index
              </span>
              <span className="h-px w-3 bg-line" />
              <span className="font-mono text-[8.5px] uppercase tracking-[0.2em] text-muted">
                {profile.role}
              </span>
            </div>

            <div className="hidden items-center gap-3 font-mono text-[8.5px] uppercase tracking-[0.2em] text-faint sm:flex">
              <span>{profile.location}</span>
              {jakartaTime && (
                <>
                  <span>·</span>
                  <span className="text-ink/80">{jakartaTime}</span>
                </>
              )}
            </div>
          </div>

          {/* Center Display Typography & Value Proposition */}
          <div className="my-auto py-12 lg:py-16">
            <p
              className="hero-fade font-mono text-[9.5px] uppercase tracking-[0.26em] text-accent"
              style={{ animationDelay: "280ms" }}
            >
              Full-Stack Engineering · Cyber Security · Network Infrastructure
            </p>

            <h1 className="mt-4 text-[clamp(3.75rem,8.8vw,8.25rem)] font-normal leading-[0.84] tracking-[-0.065em] text-ink">
              <span className="hero-line block overflow-hidden pb-1">
                <span className="block" style={{ animationDelay: "100ms" }}>
                  {profile.firstName}
                </span>
              </span>
              <span className="hero-line block overflow-hidden pb-3">
                <span
                  className="block font-serif italic tracking-[-0.025em]"
                  style={{ animationDelay: "190ms" }}
                >
                  {profile.lastName}
                  <span className="text-accent">.</span>
                </span>
              </span>
            </h1>

            <p
              className="hero-fade mt-6 max-w-xl text-base leading-relaxed text-muted sm:text-lg"
              style={{ animationDelay: "480ms" }}
            >
              {profile.tagline}
            </p>

            {/* Primary HR Actions: Selected Work + Resume/CV + Direct Links */}
            <div
              className="hero-fade mt-9 flex flex-wrap items-center gap-3 sm:gap-4"
              style={{ animationDelay: "620ms" }}
            >
              <a
                href="#projects"
                className="group inline-flex items-center gap-2.5 border border-ink bg-ink px-5 py-3 font-mono text-[9.5px] uppercase tracking-[0.2em] text-canvas transition-all duration-300 hover:border-accent hover:bg-accent hover:text-canvas"
              >
                <span>Explore Works</span>
                <ArrowUpRightIcon className="h-3.5 w-3.5 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </a>

              <a
                href={profile.cv}
                target="_blank"
                rel="noreferrer"
                className="group inline-flex items-center gap-2.5 border border-line bg-panel/40 px-5 py-3 font-mono text-[9.5px] uppercase tracking-[0.2em] text-ink transition-all duration-300 hover:border-accent hover:text-accent"
              >
                <span>Download CV / Resume</span>
                <ArrowUpRightIcon className="h-3.5 w-3.5 text-accent transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </a>

              <div className="flex items-center gap-4 pl-1 sm:pl-3">
                <a
                  href={profile.github}
                  target="_blank"
                  rel="noreferrer"
                  aria-label="GitHub Profile"
                  className="inline-flex items-center gap-1.5 font-mono text-[9px] uppercase tracking-[0.18em] text-muted transition-colors hover:text-ink"
                >
                  <GithubIcon className="h-3.5 w-3.5" />
                  <span>GitHub</span>
                </a>
                <span className="h-3 w-px bg-line" />
                <a
                  href={profile.linkedin}
                  target="_blank"
                  rel="noreferrer"
                  aria-label="LinkedIn Profile"
                  className="inline-flex items-center gap-1 font-mono text-[9px] uppercase tracking-[0.18em] text-muted transition-colors hover:text-ink"
                >
                  <span>LinkedIn</span>
                  <ArrowUpRightIcon className="h-3 w-3 text-faint" />
                </a>
              </div>
            </div>
          </div>

          {/* Bottom HR Highlights Strip */}
          <div
            className="hero-fade border-t border-line pt-6"
            style={{ animationDelay: "760ms" }}
          >
            <div className="flex items-end justify-between gap-6">
              <div className="grid grid-cols-2 gap-x-8 gap-y-4 sm:grid-cols-3 sm:gap-x-10">
                <div>
                  <p className="font-mono text-[8px] uppercase tracking-[0.22em] text-faint">
                    Education
                  </p>
                  <p className="mt-1.5 text-xs font-medium text-ink/90">
                    S.Kom (Informatika) ·{" "}
                    <span className="font-serif italic text-accent">
                      3.82 GPA
                    </span>
                  </p>
                </div>

                <div>
                  <p className="font-mono text-[8px] uppercase tracking-[0.22em] text-faint">
                    Core Stack
                  </p>
                  <p className="mt-1.5 text-xs text-ink/85">
                    Next.js, TypeScript, Python & SQL
                  </p>
                </div>

                <div className="col-span-2 sm:col-span-1">
                  <p className="font-mono text-[8px] uppercase tracking-[0.22em] text-faint">
                    Verified Track
                  </p>
                  <p className="mt-1.5 text-xs text-ink/85">
                    13 Projects · 15 Certifications
                  </p>
                </div>
              </div>

              <a
                href="#about"
                className="group hidden shrink-0 items-center gap-2 font-mono text-[9px] uppercase tracking-[0.2em] text-faint transition-colors hover:text-ink lg:flex"
              >
                <span>Scroll</span>
                <ArrowDownIcon className="h-3.5 w-3.5 text-accent transition-transform duration-300 group-hover:translate-y-0.5" />
              </a>
            </div>
          </div>
        </div>

        {/* MOBILE PORTRAIT HEADER */}
        <div className="order-first flex items-end justify-between gap-5 border-b border-line px-5 pb-5 pt-4 sm:px-8 lg:hidden">
          <div className="space-y-1.5">
            <p className="font-mono text-[8px] uppercase tracking-[0.22em] text-accent">
              Bimas Buky · S.Kom
            </p>
            <p className="font-mono text-[8px] uppercase tracking-[0.18em] text-muted">
              {profile.role}
            </p>
            <p className="font-mono text-[8px] uppercase tracking-[0.18em] text-faint">
              South Jakarta · {jakartaTime || profile.timezone}
            </p>
          </div>

          <figure className="group relative aspect-[4/5] w-[36%] max-w-[148px] shrink-0">
            <div
              ref={mobileImgRef}
              onMouseMove={(e) => handleMouseMove(e, mobileImgRef)}
              className="relative h-full w-full overflow-hidden border border-line bg-panel"
            >
              <Image
                src={profile.portrait}
                alt={`Portrait of ${profile.name}`}
                fill
                priority
                quality={90}
                sizes="(min-width: 640px) 148px, 36vw"
                className="object-cover object-[50%_30%] transition-transform duration-700 group-hover:scale-105"
              />
            </div>
          </figure>
        </div>

        {/* RIGHT COLUMN: DESKTOP EDITORIAL PORTRAIT */}
        <div className="relative order-2 hidden border-l border-line bg-panel/15 lg:col-span-5 lg:flex lg:flex-col lg:justify-between lg:p-10 xl:p-12">
          {/* Top Dossier Label */}
          <div className="flex items-center justify-between border-b border-line/60 pb-4 font-mono text-[8.5px] uppercase tracking-[0.2em] text-faint">
            <span>Profile Dossier</span>
            <span className="text-accent">Universitas Gunadarma</span>
          </div>

          {/* Center Framed Portrait */}
          <figure className="group my-auto mx-auto w-full max-w-[330px] xl:max-w-[360px]">
            <div className="relative p-2.5 border border-line/80 bg-canvas/60">
              {/* Subtle Corner Accents */}
              <span className="pointer-events-none absolute -top-px -left-px h-2.5 w-2.5 border-t border-l border-accent" />
              <span className="pointer-events-none absolute -top-px -right-px h-2.5 w-2.5 border-t border-r border-accent" />
              <span className="pointer-events-none absolute -bottom-px -left-px h-2.5 w-2.5 border-b border-l border-accent" />
              <span className="pointer-events-none absolute -bottom-px -right-px h-2.5 w-2.5 border-b border-r border-accent" />

              <div
                ref={desktopImgRef}
                onMouseMove={(e) => handleMouseMove(e, desktopImgRef)}
                className="relative aspect-[4/5] overflow-hidden border border-line bg-panel"
              >
                <div
                  className="pointer-events-none absolute -inset-px z-20 opacity-0 transition-opacity duration-500 group-hover:opacity-100"
                  style={{
                    background: `radial-gradient(320px circle at var(--x, 50%) var(--y, 50%), rgba(255, 255, 255, 0.14), transparent 65%)`,
                    mixBlendMode: "overlay",
                  }}
                />

                <Image
                  src={profile.portrait}
                  alt={`Portrait of ${profile.name}`}
                  fill
                  priority
                  quality={92}
                  sizes="(min-width: 1280px) 360px, 330px"
                  className="object-cover object-center transition-transform duration-700 ease-out group-hover:scale-[1.03]"
                />
                <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-canvas/35 via-transparent to-transparent" />
              </div>
            </div>

            <figcaption className="mt-3.5 flex items-center justify-between px-1 font-mono text-[8px] uppercase tracking-[0.2em] text-faint">
              <span>{profile.name} · S.Kom</span>
              <span className="text-muted">2+ Yrs Experience</span>
            </figcaption>
          </figure>

          {/* Bottom Quick Contact Bar */}
          <div className="flex items-center justify-between border-t border-line/60 pt-4 font-mono text-[8.5px] uppercase tracking-[0.18em] text-muted">
            <span>Direct Inquiry</span>
            <a
              href={`mailto:${profile.email}`}
              className="text-ink transition-colors hover:text-accent"
            >
              {profile.email} ↗
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}