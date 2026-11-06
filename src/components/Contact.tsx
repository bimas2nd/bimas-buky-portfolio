import { Reveal } from "@/components/Reveal";
import { Section } from "@/components/Section";
import {
  ArrowUpRightIcon,
  DownloadIcon,
  GithubIcon,
  LinkedinIcon,
} from "@/components/icons";
import { profile } from "@/data/profile";

export function Contact() {
  return (
    <Section id="contact">
      <div className="lg:grid lg:grid-cols-12 lg:gap-12">
        <Reveal className="lg:col-span-3">
          <div className="flex items-center gap-3 lg:sticky lg:top-28">
            <span className="font-mono text-[11px] tracking-[0.08em] text-accent">
              06
            </span>
            <span className="h-px w-8 bg-accent/60" />
            <span className="font-mono text-[10px] uppercase tracking-[0.28em] text-muted">
              Contact
            </span>
          </div>
        </Reveal>

        <div className="mt-10 lg:col-span-9 lg:mt-0">
          <Reveal>
            <p className="flex items-center gap-2.5 font-mono text-[9px] uppercase tracking-[0.22em] text-muted">
              <span className="h-1.5 w-1.5 bg-accent" />
              Available for full-stack &amp; IT roles
            </p>
            <h2 className="mt-6 text-[clamp(2.8rem,8.6vw,8.5rem)] font-normal leading-[0.84] tracking-[-0.06em] text-ink">
              Let&apos;s build
              <br />
              <span className="font-serif italic tracking-[-0.025em]">
                something real.
              </span>
            </h2>
          </Reveal>

          <Reveal delay={90}>
            <p className="mt-8 max-w-xl text-base leading-relaxed text-muted sm:text-lg">
              I&apos;m open to junior full-stack, backend and IT roles —
              especially where clean product work meets secure infrastructure.
              The fastest way to reach me is email.
            </p>
          </Reveal>

          <Reveal delay={160}>
            <a
              href={`mailto:${profile.email}`}
              className="group mt-12 flex items-center justify-between gap-5 border-y border-line py-5 sm:py-6"
            >
              <span className="break-all text-lg tracking-[-0.02em] text-ink sm:text-2xl">
                {profile.email}
              </span>
              <span className="flex h-10 w-10 shrink-0 items-center justify-center border border-ink/20 text-ink transition-colors duration-300 group-hover:border-accent group-hover:text-accent">
                <ArrowUpRightIcon className="h-5 w-5 transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
              </span>
            </a>
          </Reveal>

          <div className="mt-12 grid gap-10 sm:grid-cols-3">
            <Reveal delay={80}>
              <p className="font-mono text-[8px] uppercase tracking-[0.24em] text-faint">
                Elsewhere
              </p>
              <div className="mt-4 flex flex-col items-start gap-3">
                <a
                  href={profile.github}
                  target="_blank"
                  rel="noreferrer"
                  className="group inline-flex items-center gap-2 text-sm text-ink/80 transition-colors hover:text-ink"
                >
                  <GithubIcon className="h-3.5 w-3.5 text-accent" />
                  <span className="link-underline">{profile.githubLabel}</span>
                  <ArrowUpRightIcon className="h-3 w-3 text-faint transition-colors group-hover:text-accent" />
                </a>
                <a
                  href={profile.linkedin}
                  target="_blank"
                  rel="noreferrer"
                  className="group inline-flex items-center gap-2 text-sm text-ink/80 transition-colors hover:text-ink"
                >
                  <LinkedinIcon className="h-3.5 w-3.5 text-accent" />
                  <span className="link-underline">{profile.linkedinLabel}</span>
                  <ArrowUpRightIcon className="h-3 w-3 text-faint transition-colors group-hover:text-accent" />
                </a>
              </div>
            </Reveal>

            <Reveal delay={140}>
              <p className="font-mono text-[8px] uppercase tracking-[0.24em] text-faint">
                Based in
              </p>
              <p className="mt-4 text-sm text-ink/80">South Jakarta</p>
              <p className="mt-1 text-sm text-muted">
                Indonesia · {profile.timezone}
              </p>
            </Reveal>

            <Reveal delay={200}>
              <p className="font-mono text-[8px] uppercase tracking-[0.24em] text-faint">
                Documents
              </p>
              <a
                href={profile.cv}
                download
                className="group mt-4 inline-flex items-center gap-2 text-sm text-ink/80 transition-colors hover:text-ink"
              >
                <DownloadIcon className="h-3.5 w-3.5 text-accent" />
                <span className="link-underline">Download CV</span>
                <span className="font-mono text-[8px] uppercase tracking-[0.14em] text-faint">
                  PDF
                </span>
              </a>
            </Reveal>
          </div>
        </div>
      </div>
    </Section>
  );
}
