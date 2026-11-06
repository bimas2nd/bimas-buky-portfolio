"use client";

import { useEffect, useState } from "react";
import {
  ArrowUpRightIcon,
  CloseIcon,
  DownloadIcon,
  MenuIcon,
} from "@/components/icons";
import { navItems, profile } from "@/data/profile";

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 16);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    if (!open) return;

    const previousOverflow = document.body.style.overflow;
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") setOpen(false);
    };

    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", onKeyDown);

    return () => {
      document.body.style.overflow = previousOverflow;
      window.removeEventListener("keydown", onKeyDown);
    };
  }, [open]);

  return (
    <>
      <header
        className={`fixed inset-x-0 top-0 z-50 border-b transition-colors duration-300 ${
          scrolled || open
            ? "border-line bg-canvas/95 backdrop-blur-xl"
            : "border-transparent bg-transparent"
        }`}
      >
        <div className="mx-auto flex h-16 w-full max-w-[1500px] items-center justify-between px-5 sm:h-20 sm:px-8 lg:px-12">
          <a
            href="#home"
            onClick={() => setOpen(false)}
            className="group flex items-center gap-3"
            aria-label={`${profile.name} — home`}
          >
            <span className="flex h-8 w-8 items-center justify-center border border-ink/25 font-mono text-[9px] tracking-[0.12em] text-ink transition-colors duration-300 group-hover:border-accent group-hover:text-accent">
              {profile.initials}
            </span>
            <span className="leading-none">
              <span className="block text-sm font-medium tracking-[-0.01em] text-ink">
                {profile.name}
              </span>
              <span className="mt-1 hidden font-mono text-[8px] uppercase tracking-[0.22em] text-muted sm:block">
                Full-stack engineer
              </span>
            </span>
          </a>

          <nav aria-label="Primary" className="hidden items-center gap-7 md:flex">
            {navItems.map((item, index) => (
              <a
                key={item.href}
                href={item.href}
                className="group flex items-baseline gap-2 font-mono text-[10px] uppercase tracking-[0.2em] text-muted transition-colors hover:text-ink"
              >
                <span className="text-[8px] text-faint transition-colors group-hover:text-accent">
                  0{index + 1}
                </span>
                {item.label}
              </a>
            ))}
          </nav>

          <div className="flex items-center gap-4">
            <span className="hidden items-center gap-2 font-mono text-[9px] uppercase tracking-[0.18em] text-muted xl:inline-flex">
              <span className="h-1.5 w-1.5 bg-accent" />
              Open to work
            </span>
            <a
              href="#contact"
              className="group hidden items-center gap-1.5 font-mono text-[10px] uppercase tracking-[0.18em] text-ink md:inline-flex"
            >
              Let&apos;s talk
              <ArrowUpRightIcon className="h-3.5 w-3.5 text-accent transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
            </a>
            <button
              type="button"
              className="flex h-10 w-10 items-center justify-center border border-line text-ink transition-colors hover:border-accent hover:text-accent md:hidden"
              aria-expanded={open}
              aria-controls="mobile-menu"
              aria-label={open ? "Close menu" : "Open menu"}
              onClick={() => setOpen((value) => !value)}
            >
              {open ? (
                <CloseIcon className="h-5 w-5" />
              ) : (
                <MenuIcon className="h-5 w-5" />
              )}
            </button>
          </div>
        </div>
      </header>

      <div
        id="mobile-menu"
        aria-hidden={!open}
        className={`fixed inset-0 z-40 bg-canvas transition-all duration-500 md:hidden ${
          open
            ? "visible opacity-100"
            : "invisible pointer-events-none opacity-0"
        }`}
      >
        <div className="flex h-full flex-col justify-between overflow-y-auto px-5 pb-8 pt-24 sm:px-8">
          <nav aria-label="Mobile" className="flex flex-col">
            {navItems.map((item, index) => (
              <a
                key={item.href}
                href={item.href}
                onClick={() => setOpen(false)}
                className="group flex items-baseline justify-between border-b border-line py-4"
              >
                <span className="flex items-baseline gap-4">
                  <span className="font-mono text-[10px] tracking-[0.12em] text-accent">
                    0{index + 1}
                  </span>
                  <span className="text-4xl tracking-[-0.045em] text-ink transition-colors group-hover:text-accent sm:text-5xl">
                    {item.label}
                  </span>
                </span>
                <ArrowUpRightIcon className="h-5 w-5 text-muted transition-all duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-accent" />
              </a>
            ))}
          </nav>

          <div className="pt-10">
            <p className="font-mono text-[9px] uppercase tracking-[0.24em] text-muted">
              Get in touch
            </p>
            <a
              href={`mailto:${profile.email}`}
              onClick={() => setOpen(false)}
              className="mt-2 block break-all text-xl tracking-[-0.02em] text-ink"
            >
              {profile.email}
            </a>

            <div className="mt-8 grid grid-cols-2 gap-3">
              <a
                href={profile.cv}
                download
                onClick={() => setOpen(false)}
                className="flex items-center justify-between border border-line p-4 font-mono text-[9px] uppercase tracking-[0.16em] text-ink transition-colors hover:border-accent hover:text-accent"
              >
                Download CV
                <DownloadIcon className="h-4 w-4" />
              </a>
              <a
                href={profile.linkedin}
                target="_blank"
                rel="noreferrer"
                onClick={() => setOpen(false)}
                className="flex items-center justify-between border border-line p-4 font-mono text-[9px] uppercase tracking-[0.16em] text-ink transition-colors hover:border-accent hover:text-accent"
              >
                LinkedIn
                <ArrowUpRightIcon className="h-4 w-4" />
              </a>
            </div>

            <p className="mt-8 font-serif text-2xl italic text-muted">
              Based in South Jakarta, GMT+7.
            </p>
          </div>
        </div>
      </div>
    </>
  );
}
