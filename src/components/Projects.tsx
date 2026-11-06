"use client";

import { useState, useMemo } from "react";
import Image from "next/image";
import { Reveal } from "@/components/Reveal";
import { Section } from "@/components/Section";
import { SectionHeading } from "@/components/SectionHeading";
import { ArrowUpRightIcon, GithubIcon } from "@/components/icons";
import { profile, projects, type Project } from "@/data/profile";

const INITIAL_PROJECT_LIMIT = 5;

const DISCIPLINES = [
  { id: "All", label: "All Works", code: "00" },
  { id: "Web", label: "Web", code: "01" },
  { id: "UI/UX", label: "UI/UX", code: "02" },
  { id: "Network & IT", label: "Network & IT", code: "03" },
  { id: "Blender", label: "Blender", code: "04" },
  { id: "Media", label: "Media", code: "05" },
] as const;

function ProjectStage({ project }: { project: Project }) {
  const mediaItems = useMemo(() => {
    const items: {
      type: "image" | "video";
      src: string;
      alt: string;
      label: string;
    }[] = [
      {
        type: "image",
        src: project.cover.src,
        alt: project.cover.alt,
        label: "Overview",
      },
    ];

    if (project.video) {
      items.push({
        type: "video",
        src: project.video,
        alt: `${project.title} video demo`,
        label: "Live Demo (Video)",
      });
    }

    if (project.gallery && project.gallery.length > 0) {
      project.gallery.forEach((g) => {
        items.push({
          type: "image",
          src: g.src,
          alt: g.alt,
          label: g.label,
        });
      });
    }

    return items;
  }, [project]);

  const [activeIndex, setActiveIndex] = useState(0);
  const currentMedia = mediaItems[activeIndex] ?? mediaItems[0];

  return (
    <div className="space-y-3">
      <div className="relative aspect-[16/10] w-full overflow-hidden border border-line bg-canvas">
        {currentMedia.type === "video" ? (
          <video
            key={currentMedia.src}
            src={currentMedia.src}
            poster={project.cover.src}
            autoPlay
            loop
            muted
            playsInline
            controls
            className="h-full w-full object-cover object-top"
          />
        ) : (
          <>
            <Image
              key={currentMedia.src}
              src={currentMedia.src}
              alt={currentMedia.alt}
              fill
              unoptimized
              sizes="(min-width: 1024px) 55vw, 100vw"
              className="object-cover object-center transition-all duration-500"
            />
            <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-canvas/25 via-transparent to-transparent" />
          </>
        )}
      </div>

      {mediaItems.length > 1 && (
        <div className="flex flex-wrap items-center gap-2">
          {mediaItems.map((item, idx) => {
            const isActive = idx === activeIndex;
            return (
              <button
                key={item.label}
                type="button"
                onClick={() => setActiveIndex(idx)}
                className={`inline-flex items-center gap-2 border px-3 py-1.5 font-mono text-[8px] uppercase tracking-[0.16em] transition-colors cursor-pointer ${
                  isActive
                    ? "border-accent bg-accent/15 text-accent"
                    : "border-line bg-canvas/60 text-faint hover:border-ink/30 hover:text-ink"
                }`}
              >
                {item.type === "video" && (
                  <span className="h-1.5 w-1.5 rounded-full bg-accent animate-pulse" />
                )}
                <span>
                  {String(idx + 1).padStart(2, "0")} · {item.label}
                </span>
              </button>
            );
          })}
        </div>
      )}
    </div>
  );
}

export function Projects() {
  const [activeDiscipline, setActiveDiscipline] = useState<string>("All");
  const [showAllProjects, setShowAllProjects] = useState<boolean>(false);
  const [expandedTitle, setExpandedTitle] = useState<string | null>(
    projects[0]?.title ?? null
  );

  // Semua project sesuai kategori aktif
  const filteredProjects = useMemo(() => {
    if (activeDiscipline === "All") return projects;
    return projects.filter(
      (p) => p.category.toLowerCase() === activeDiscipline.toLowerCase()
    );
  }, [activeDiscipline]);

  // Batasi 5 item jika belum klik "See all"
  const visibleProjects = useMemo(() => {
    if (showAllProjects) return filteredProjects;
    return filteredProjects.slice(0, INITIAL_PROJECT_LIMIT);
  }, [filteredProjects, showAllProjects]);

  const hiddenCount = Math.max(
    0,
    filteredProjects.length - INITIAL_PROJECT_LIMIT
  );

  const handleDisciplineChange = (id: string) => {
    setActiveDiscipline(id);
    setShowAllProjects(false); // Reset kembali ke tampilan ringkas (5 item) saat pindah tab
    const list =
      id === "All"
        ? projects
        : projects.filter((p) => p.category.toLowerCase() === id.toLowerCase());
    setExpandedTitle(list[0]?.title ?? null);
  };

  return (
    <Section id="projects">
      <SectionHeading
        index="04"
        label="Selected work"
        title={
          <>
            Work built to{" "}
            <span className="font-serif italic text-accent">hold up</span>.
          </>
        }
        description="A curated index across Web, UI/UX, Network & IT Support, Blender 3D and Media. Select any work below to inspect the visual walkthrough, video demo and technical breakdown."
      />

      <div className="mt-14 lg:mt-20 lg:grid lg:grid-cols-12 lg:gap-12">
        <div className="lg:col-span-9 lg:col-start-4">
          {/* Discipline Index Navigation */}
          <Reveal>
            <div className="flex flex-col justify-between gap-6 border-b border-line pb-4 sm:flex-row sm:items-end">
              <div className="flex flex-wrap gap-x-6 gap-y-3">
                {DISCIPLINES.map((item) => {
                  const isActive = activeDiscipline === item.id;
                  const count =
                    item.id === "All"
                      ? projects.length
                      : projects.filter(
                          (p) =>
                            p.category.toLowerCase() === item.id.toLowerCase()
                        ).length;

                  return (
                    <button
                      key={item.id}
                      type="button"
                      onClick={() => handleDisciplineChange(item.id)}
                      className={`group relative pb-2 text-left transition-colors cursor-pointer ${
                        isActive ? "text-ink" : "text-faint hover:text-muted"
                      }`}
                    >
                      <span className="block font-mono text-[7.5px] uppercase tracking-[0.2em] text-accent/80">
                        /{item.code} · {count}
                      </span>
                      <span className="mt-0.5 block font-mono text-[9.5px] uppercase tracking-[0.18em]">
                        {item.label}
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

              <a
                href={profile.github}
                target="_blank"
                rel="noreferrer"
                className="group inline-flex shrink-0 items-center gap-2 pb-2 font-mono text-[9px] uppercase tracking-[0.18em] text-muted transition-colors hover:text-ink"
              >
                <GithubIcon className="h-3.5 w-3.5" />
                <span>All repositories</span>
                <ArrowUpRightIcon className="h-3 w-3 text-accent transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
              </a>
            </div>
          </Reveal>

          {/* Editorial Accordion List */}
          {visibleProjects.length > 0 ? (
            <>
              <div className="divide-y divide-line border-b border-line">
                {visibleProjects.map((project, index) => {
                  const isExpanded = expandedTitle === project.title;

                  return (
                    <Reveal key={project.title} delay={index * 35}>
                      <article>
                        <button
                          type="button"
                          onClick={() =>
                            setExpandedTitle((prev) =>
                              prev === project.title ? null : project.title
                            )
                          }
                          aria-expanded={isExpanded}
                          className="group flex w-full items-baseline justify-between gap-4 py-7 text-left transition-colors hover:bg-panel/25 sm:px-3 sm:py-9 cursor-pointer"
                        >
                          <div className="flex items-baseline gap-4 sm:gap-8">
                            <span className="font-mono text-[9px] uppercase tracking-[0.2em] text-faint group-hover:text-accent">
                              {String(index + 1).padStart(2, "0")}
                            </span>

                            <div>
                              <div className="flex flex-wrap items-center gap-2.5">
                                <span className="font-mono text-[8px] uppercase tracking-[0.22em] text-accent">
                                  {project.category}
                                </span>
                                <span className="h-px w-2.5 bg-line" />
                                <span className="font-mono text-[8px] uppercase tracking-[0.16em] text-faint">
                                  {project.context}
                                </span>
                                {project.video && (
                                  <>
                                    <span className="h-px w-2.5 bg-line" />
                                    <span className="font-mono text-[7.5px] uppercase tracking-[0.18em] text-accent/90">
                                      ● Video Demo
                                    </span>
                                  </>
                                )}
                              </div>

                              <h3
                                className={`mt-2 text-2xl tracking-[-0.04em] transition-colors sm:text-4xl ${
                                  isExpanded
                                    ? "font-serif italic text-accent"
                                    : "text-ink group-hover:text-ink/80"
                                }`}
                              >
                                {project.title}
                              </h3>
                            </div>
                          </div>

                          <div className="flex shrink-0 items-center gap-6">
                            <div className="hidden text-right md:block">
                              <p className="font-mono text-[8.5px] uppercase tracking-[0.16em] text-muted">
                                {project.role}
                              </p>
                              <p className="mt-1 font-mono text-[8px] tracking-[0.14em] text-faint">
                                {project.period}
                              </p>
                            </div>

                            <span
                              className={`flex h-8 w-8 items-center justify-center border font-mono text-xs transition-all duration-300 ${
                                isExpanded
                                  ? "rotate-45 border-accent bg-accent text-canvas"
                                  : "border-line bg-panel/40 text-ink group-hover:border-accent group-hover:text-accent"
                              }`}
                            >
                              +
                            </span>
                          </div>
                        </button>

                        {/* Expanded Content */}
                        {isExpanded && (
                          <div className="pb-10 pt-2 sm:px-3">
                            <div className="border border-line bg-panel/30 p-5 sm:p-8">
                              <div className="grid gap-8 lg:grid-cols-12">
                                <div className="lg:col-span-7">
                                  <ProjectStage project={project} />
                                </div>

                                <div className="flex flex-col justify-between lg:col-span-5">
                                  <div>
                                    <div className="flex items-center justify-between border-b border-line pb-3">
                                      <span className="font-mono text-[8px] uppercase tracking-[0.22em] text-accent">
                                        Project Breakdown
                                      </span>
                                      <span className="font-mono text-[8px] uppercase tracking-[0.16em] text-faint">
                                        {project.role} · {project.period}
                                      </span>
                                    </div>

                                    <p className="mt-4 text-sm leading-relaxed text-ink/90">
                                      {project.description}
                                    </p>

                                    {project.highlights.length > 0 && (
                                      <div className="mt-5 space-y-2 border-t border-line/60 pt-4">
                                        <p className="font-mono text-[8px] uppercase tracking-[0.2em] text-faint">
                                          Key Highlights
                                        </p>
                                        <ul className="space-y-2">
                                          {project.highlights.map((point) => (
                                            <li
                                              key={point}
                                              className="flex items-start gap-2.5 text-xs leading-relaxed text-muted"
                                            >
                                              <span className="mt-1.5 h-1 w-1 shrink-0 bg-accent" />
                                              <span>{point}</span>
                                            </li>
                                          ))}
                                        </ul>
                                      </div>
                                    )}
                                  </div>

                                  <div className="mt-6 border-t border-line pt-4">
                                    <p className="font-mono text-[7.5px] uppercase tracking-[0.2em] text-faint">
                                      Tech Stack
                                    </p>
                                    <div className="mt-2.5 flex flex-wrap gap-1.5">
                                      {project.stack.map((tech) => (
                                        <span
                                          key={tech}
                                          className="border border-line bg-canvas px-2.5 py-1 font-mono text-[7.5px] uppercase tracking-[0.14em] text-ink/80"
                                        >
                                          {tech}
                                        </span>
                                      ))}
                                    </div>

                                    {project.links.length > 0 && (
                                      <div className="mt-5 flex flex-wrap gap-3">
                                        {project.links.map((link) => (
                                          <a
                                            key={link.label}
                                            href={link.href}
                                            target={
                                              link.external
                                                ? "_blank"
                                                : undefined
                                            }
                                            rel={
                                              link.external
                                                ? "noreferrer"
                                                : undefined
                                            }
                                            className="group/btn inline-flex items-center gap-2 border border-accent/50 bg-accent/10 px-4 py-2 font-mono text-[8.5px] uppercase tracking-[0.18em] text-accent transition-all hover:bg-accent hover:text-canvas"
                                          >
                                            <span>{link.label}</span>
                                            <ArrowUpRightIcon className="h-3.5 w-3.5 transition-transform duration-300 group-hover/btn:-translate-y-0.5 group-hover/btn:translate-x-0.5" />
                                          </a>
                                        ))}
                                      </div>
                                    )}
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        )}
                      </article>
                    </Reveal>
                  );
                })}
              </div>

              {/* See All / Show Less Editorial Trigger Bar */}
              {filteredProjects.length > INITIAL_PROJECT_LIMIT && (
                <Reveal delay={120}>
                  <div className="mt-8 flex flex-col items-start justify-between gap-4 border border-dashed border-line bg-panel/25 p-5 sm:flex-row sm:items-center sm:px-7">
                    <div>
                      <p className="font-mono text-[8.5px] uppercase tracking-[0.2em] text-faint">
                        Showing {visibleProjects.length} of{" "}
                        {filteredProjects.length} documented works
                      </p>
                      <p className="mt-1 text-sm text-muted">
                        {showAllProjects
                          ? "All works across Web, UI/UX, Network & IT, Blender and Media are currently expanded."
                          : `${hiddenCount} more works across UI/UX, Network & IT, Blender 3D and Media are archived below.`}
                      </p>
                    </div>

                    <button
                      type="button"
                      onClick={() => setShowAllProjects((prev) => !prev)}
                      className="group inline-flex shrink-0 items-center gap-3 border border-accent/50 bg-accent/10 px-5 py-2.5 font-mono text-[9px] uppercase tracking-[0.2em] text-accent transition-all hover:bg-accent hover:text-canvas cursor-pointer"
                    >
                      <span>
                        {showAllProjects
                          ? "Show less (Top 05)"
                          : `See all ${filteredProjects.length} works (+${hiddenCount})`}
                      </span>
                      <span className="font-mono text-xs transition-transform duration-300 group-hover:translate-x-0.5">
                        {showAllProjects ? "↑" : "↓"}
                      </span>
                    </button>
                  </div>
                </Reveal>
              )}
            </>
          ) : (
            <div className="border-b border-line py-14">
              <p className="font-serif text-2xl italic text-ink">
                Case study in preparation
              </p>
              <p className="mt-1.5 font-mono text-[8.5px] uppercase tracking-[0.18em] text-faint">
                Selected works for {activeDiscipline} are currently being
                archived.
              </p>
            </div>
          )}
        </div>
      </div>
    </Section>
  );
}