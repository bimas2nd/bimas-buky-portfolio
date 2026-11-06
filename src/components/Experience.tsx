"use client";

import { useState, useMemo } from "react";
import { Reveal } from "@/components/Reveal";
import { Section } from "@/components/Section";
import { SectionHeading } from "@/components/SectionHeading";
import { ArrowUpRightIcon } from "@/components/icons";
import {
  experience,
  organizations,
  profile,
  type ExperienceItem,
} from "@/data/profile";

type TrackType = "professional" | "leadership" | "all";

// Daftar kata kunci teknis untuk diekstrak otomatis dari poin deskripsi kerja
const TECH_KEYWORDS = [
  "MySQL",
  "Wazuh",
  "Wireshark",
  "Python",
  "Go",
  "Java",
  "C++",
  "MikroTik",
  "LAN",
  "Wi-Fi",
  "LSP",
  "SQL",
  "Database Systems",
  "Web Programming",
  "Cybersecurity",
  "Networking",
];

function extractHighlights(points: string[]): string[] {
  const combined = points.join(" ");
  return TECH_KEYWORDS.filter((kw) =>
    new RegExp(`\\b${kw.replace(/[+]/g, "\\$&")}\\b`, "i").test(combined)
  );
}

function TimelineItem({
  item,
  index,
  isPrimary,
}: {
  item: ExperienceItem;
  index: number;
  isPrimary?: boolean;
}) {
  const detectedSkills = useMemo(
    () => extractHighlights(item.points),
    [item.points]
  );

  return (
    <article className="group relative grid gap-6 border-b border-line py-9 transition-colors duration-300 hover:bg-panel/20 sm:px-4 md:grid-cols-[210px_1fr] md:gap-10 md:py-11">
      {/* Left Accent Hover Bar */}
      <span className="pointer-events-none absolute top-0 bottom-0 left-0 w-[2px] bg-accent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />

      {/* Left Column: Index, Period & Role Type */}
      <div className="flex flex-row items-center justify-between gap-4 md:flex-col md:items-start md:justify-start">
        <div>
          <div className="flex items-center gap-2.5">
            <span className="font-mono text-[8.5px] uppercase tracking-[0.2em] text-faint transition-colors group-hover:text-accent">
              /{String(index + 1).padStart(2, "0")}
            </span>
            {isPrimary && (
              <span className="inline-flex items-center gap-1 border border-accent/40 bg-accent/10 px-1.5 py-0.5 font-mono text-[7px] uppercase tracking-[0.18em] text-accent">
                <span className="h-1 w-1 rounded-full bg-accent" />
                Recent
              </span>
            )}
          </div>

          <p className="mt-2 font-mono text-[9.5px] uppercase leading-relaxed tracking-[0.18em] text-ink/90">
            {item.period}
          </p>
        </div>

        <div className="flex items-center gap-2 md:mt-3">
          <span className="border border-line bg-panel/60 px-2.5 py-1 font-mono text-[7.5px] uppercase tracking-[0.2em] text-muted">
            {item.type}
          </span>
        </div>
      </div>

      {/* Right Column: Role, Company, Impact Points & Auto-Detected Stack */}
      <div>
        <div className="flex flex-col justify-between gap-2 sm:flex-row sm:items-baseline">
          <h3 className="text-2xl tracking-[-0.035em] text-ink transition-colors duration-300 group-hover:text-accent sm:text-3xl">
            {item.role}
          </h3>
          <p className="font-mono text-[9px] uppercase tracking-[0.18em] text-faint">
            {item.location}
          </p>
        </div>

        <p className="mt-1.5 font-serif text-lg italic text-muted">
          {item.company}
        </p>

        {/* Key Responsibilities / Impact */}
        <ul className="mt-6 space-y-3">
          {item.points.map((point) => (
            <li
              key={point}
              className="flex items-start gap-3.5 text-sm leading-relaxed text-muted transition-colors group-hover:text-ink/85"
            >
              <span className="mt-[10px] h-px w-3.5 shrink-0 bg-accent/80 transition-all duration-300 group-hover:w-5 group-hover:bg-accent" />
              <span>{point}</span>
            </li>
          ))}
        </ul>

        {/* Auto-Extracted Domain & Tech Badges for HR Skimming */}
        {detectedSkills.length > 0 && (
          <div className="mt-6 flex flex-wrap items-center gap-1.5 border-t border-line/50 pt-4">
            <span className="mr-1.5 font-mono text-[7.5px] uppercase tracking-[0.2em] text-faint">
              Applied:
            </span>
            {detectedSkills.map((skill) => (
              <span
                key={skill}
                className="border border-line bg-canvas px-2 py-0.5 font-mono text-[7.5px] uppercase tracking-[0.14em] text-ink/80 transition-colors group-hover:border-accent/40"
              >
                {skill}
              </span>
            ))}
          </div>
        )}
      </div>
    </article>
  );
}

export function Experience() {
  const [activeTrack, setActiveTrack] = useState<TrackType>("professional");

  const tracks = [
    {
      id: "professional" as const,
      code: "01",
      label: "Professional Experience",
      count: experience.length,
    },
    {
      id: "leadership" as const,
      code: "02",
      label: "Leadership & Lab Instruction",
      count: organizations.length,
    },
    {
      id: "all" as const,
      code: "03",
      label: "Full Timeline",
      count: experience.length + organizations.length,
    },
  ];

  const displayedItems = useMemo(() => {
    if (activeTrack === "professional") return experience;
    if (activeTrack === "leadership") return organizations;
    return [...experience, ...organizations];
  }, [activeTrack]);

  return (
    <Section id="experience">
      <SectionHeading
        index="03"
        label="Experience"
        title={
          <>
            Where I&apos;ve{" "}
            <span className="font-serif italic text-accent">shipped</span>,
            secured and supported.
          </>
        }
        description="Hands-on track record across university laboratory engineering, network & security operations, technical instruction, and media production."
      />

      <div className="mt-14 lg:mt-20 lg:grid lg:grid-cols-12 lg:gap-12">
        <div className="lg:col-span-9 lg:col-start-4">
          {/* Executive Summary Strip for Recruiters */}
          <Reveal>
            <div className="grid grid-cols-2 gap-4 border border-line bg-panel/25 p-5 sm:grid-cols-4 sm:gap-6 sm:p-6">
              <div>
                <p className="font-mono text-[7.5px] uppercase tracking-[0.22em] text-faint">
                  Track Record
                </p>
                <p className="mt-1 font-serif text-2xl italic text-ink sm:text-3xl">
                  2+ Years
                </p>
                <p className="mt-0.5 font-mono text-[8px] uppercase tracking-[0.14em] text-muted">
                  Active Engineering & IT
                </p>
              </div>

              <div>
                <p className="font-mono text-[7.5px] uppercase tracking-[0.22em] text-faint">
                  Primary Environment
                </p>
                <p className="mt-1 font-serif text-2xl italic text-ink sm:text-3xl">
                  LabTI UG
                </p>
                <p className="mt-0.5 font-mono text-[8px] uppercase tracking-[0.14em] text-muted">
                  Universitas Gunadarma
                </p>
              </div>

              <div>
                <p className="font-mono text-[7.5px] uppercase tracking-[0.22em] text-faint">
                  Core Focus
                </p>
                <p className="mt-1 font-serif text-2xl italic text-accent sm:text-3xl">
                  Full-Stack
                </p>
                <p className="mt-0.5 font-mono text-[8px] uppercase tracking-[0.14em] text-muted">
                  & Security Ops (SIEM)
                </p>
              </div>

              <div className="flex flex-col justify-between">
                <p className="font-mono text-[7.5px] uppercase tracking-[0.22em] text-faint">
                  Full Dossier
                </p>
                <a
                  href={profile.cv}
                  target="_blank"
                  rel="noreferrer"
                  className="group mt-2 inline-flex items-center gap-1.5 font-mono text-[8.5px] uppercase tracking-[0.18em] text-accent transition-colors hover:text-ink"
                >
                  <span>Open CV PDF</span>
                  <ArrowUpRightIcon className="h-3 w-3 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                </a>
                <p className="mt-0.5 font-mono text-[8px] uppercase tracking-[0.14em] text-faint">
                  Verified References
                </p>
              </div>
            </div>
          </Reveal>

          {/* Track Switcher Tabs */}
          <Reveal delay={60}>
            <div className="mt-10 flex flex-wrap items-end justify-between gap-4 border-b border-line pb-4">
              <div className="flex flex-wrap gap-x-7 gap-y-3">
                {tracks.map((track) => {
                  const isActive = activeTrack === track.id;
                  return (
                    <button
                      key={track.id}
                      type="button"
                      onClick={() => setActiveTrack(track.id)}
                      className={`group relative pb-2 text-left transition-colors cursor-pointer ${
                        isActive ? "text-ink" : "text-faint hover:text-muted"
                      }`}
                    >
                      <span className="block font-mono text-[7.5px] uppercase tracking-[0.2em] text-accent/80">
                        /{track.code} · {String(track.count).padStart(2, "0")}{" "}
                        Roles
                      </span>
                      <span className="mt-0.5 block font-mono text-[9.5px] uppercase tracking-[0.18em]">
                        {track.label}
                      </span>
                      <span
                        className={`absolute bottom-0 left-0 h-[1.5px] bg-accent transition-all duration-300 ${
                          isActive ? "w-full" : "w-0 group-hover:w-1/2"
                        }`}
                      />
                    </button>
                  );
                })}
              </div>

              <span className="hidden font-mono text-[8px] uppercase tracking-[0.2em] text-faint sm:block">
                Chronological Order
              </span>
            </div>
          </Reveal>

          {/* Timeline List */}
          <div>
            {displayedItems.map((item, index) => (
              <Reveal
                key={`${activeTrack}-${item.company}-${item.role}`}
                delay={index * 45}
              >
                <TimelineItem
                  item={item}
                  index={index}
                  isPrimary={index === 0 && activeTrack !== "leadership"}
                />
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </Section>
  );
}