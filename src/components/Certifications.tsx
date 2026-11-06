"use client";

import { useState, useEffect, useMemo } from "react";
import Image from "next/image";
import { Reveal } from "@/components/Reveal";
import { Section } from "@/components/Section";
import { SectionHeading } from "@/components/SectionHeading";
import { ArrowUpRightIcon } from "@/components/icons";
import { certifications, education } from "@/data/profile";

const INITIAL_DISPLAY_COUNT = 5;

export function Certifications() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [activeCategory, setActiveCategory] = useState<string>("All");

  const featuredCerts = certifications.slice(0, INITIAL_DISPLAY_COUNT);
  const remainingCount = Math.max(0, certifications.length - INITIAL_DISPLAY_COUNT);

  // Ambil daftar kategori unik secara otomatis dari data sertifikat
  const categories = useMemo(() => {
    const unique = Array.from(new Set(certifications.map((c) => c.category)));
    return ["All", ...unique];
  }, []);

  // Filter sertifikat di dalam modal berdasarkan kategori yang dipilih
  const filteredCerts = useMemo(() => {
    if (activeCategory === "All") return certifications;
    return certifications.filter((c) => c.category === activeCategory);
  }, [activeCategory]);

  // Kunci scroll body & dengarkan tombol ESC saat popup terbuka
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") setIsModalOpen(false);
    };

    if (isModalOpen) {
      document.body.style.overflow = "hidden";
      window.addEventListener("keydown", handleKeyDown);
    } else {
      document.body.style.overflow = "";
    }

    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [isModalOpen]);

  return (
    <Section id="certifications">
      <SectionHeading
        index="05"
        label="Credentials"
        title={
          <>
            Always one{" "}
            <span className="font-serif italic text-accent">certification</span>{" "}
            ahead.
          </>
        }
        description={`${certifications.length} credentials across networking, security, databases and code. Open any entry to view the original PDF.`}
      />

      <div className="mt-14 lg:mt-20 lg:grid lg:grid-cols-12 lg:gap-12">
        <div className="lg:col-span-9 lg:col-start-4">
          {/* Education Block */}
          <Reveal>
            <div className="border-y border-line py-8 sm:py-10">
              <div className="grid gap-8 md:grid-cols-[1fr_auto] md:items-end">
                <div>
                  <p className="font-mono text-[9px] uppercase tracking-[0.24em] text-accent">
                    Education
                  </p>
                  <h3 className="mt-3 text-3xl tracking-[-0.04em] text-ink sm:text-4xl">
                    {education.degree}
                  </h3>
                  <p className="mt-2 text-sm text-muted">
                    {education.school} · {education.faculty}
                  </p>
                  <p className="mt-0.5 text-sm text-faint">
                    {education.location}
                  </p>
                </div>

                <div className="flex gap-8 sm:gap-12">
                  <div>
                    <p className="font-mono text-[8px] uppercase tracking-[0.2em] text-faint">
                      GPA
                    </p>
                    <p className="mt-1 font-serif text-3xl italic text-ink sm:text-4xl">
                      {education.gpa}
                    </p>
                  </div>
                  <div>
                    <p className="font-mono text-[8px] uppercase tracking-[0.2em] text-faint">
                      Graduated
                    </p>
                    <p className="mt-2 text-sm text-ink/80">28 Oct 2026</p>
                  </div>
                </div>
              </div>
            </div>
          </Reveal>

          {/* Header Bar */}
          <Reveal delay={80}>
            <div className="mt-12 flex items-baseline justify-between gap-4">
              <div className="flex items-baseline gap-3">
                <h3 className="font-mono text-[9px] uppercase tracking-[0.24em] text-muted">
                  Selected certificates
                </h3>
                <span className="font-mono text-[9px] tracking-[0.16em] text-faint">
                  Showing {featuredCerts.length} of {certifications.length}
                </span>
              </div>

              {remainingCount > 0 && (
                <button
                  type="button"
                  onClick={() => setIsModalOpen(true)}
                  className="group inline-flex items-center gap-1.5 font-mono text-[9px] uppercase tracking-[0.2em] text-accent transition-opacity hover:opacity-80 cursor-pointer"
                >
                  <span>View full archive ({certifications.length})</span>
                  <ArrowUpRightIcon className="h-3 w-3 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                </button>
              )}
            </div>
          </Reveal>

          {/* 5 Featured Certificates + 1 "Show More" Archive Card */}
          <div className="mt-6 grid gap-x-5 gap-y-4 md:grid-cols-3 md:gap-y-9">
            {featuredCerts.map((cert, index) => (
              <Reveal key={cert.file} delay={index * 30}>
                <CertificateCard cert={cert} />
              </Reveal>
            ))}

            {remainingCount > 0 && (
              <Reveal delay={featuredCerts.length * 30}>
                <button
                  type="button"
                  onClick={() => setIsModalOpen(true)}
                  className="group flex h-full w-full flex-col justify-between border border-dashed border-line bg-panel/30 p-5 text-left transition-all duration-300 hover:border-accent/60 hover:bg-panel/80 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-accent cursor-pointer"
                >
                  <div className="flex w-full items-center justify-between">
                    <span className="font-mono text-[8px] uppercase tracking-[0.24em] text-muted group-hover:text-accent">
                      Full Archive
                    </span>
                    <span className="flex h-7 w-7 items-center justify-center border border-line bg-canvas text-ink/70 transition-all duration-300 group-hover:border-accent group-hover:text-accent">
                      <ArrowUpRightIcon className="h-3.5 w-3.5 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                    </span>
                  </div>

                  <div className="my-6">
                    <p className="font-serif text-3xl italic text-ink sm:text-4xl">
                      +{remainingCount} more
                    </p>
                    <p className="mt-1.5 text-xs leading-relaxed text-muted">
                      Explore all {certifications.length} verified credentials &
                      original PDF documents.
                    </p>
                  </div>

                  <div className="w-full border-t border-line/60 pt-3">
                    <span className="font-mono text-[8px] uppercase tracking-[0.2em] text-accent">
                      Show all certificates →
                    </span>
                  </div>
                </button>
              </Reveal>
            )}
          </div>
        </div>
      </div>

      {/* Modal Popup */}
      {isModalOpen && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 md:p-10"
          role="dialog"
          aria-modal="true"
          aria-labelledby="modal-archive-title"
        >
          {/* Backdrop */}
          <div
            className="fixed inset-0 bg-canvas/85 backdrop-blur-md transition-opacity animate-fadeIn"
            onClick={() => setIsModalOpen(false)}
          />

          {/* Modal Container */}
          <div className="relative z-10 flex max-h-[88vh] w-full max-w-6xl flex-col overflow-hidden border border-line bg-canvas shadow-2xl">
            {/* Modal Header */}
            <div className="flex flex-col gap-5 border-b border-line bg-panel/40 px-6 py-5 sm:flex-row sm:items-center sm:justify-between sm:px-8">
              <div>
                <div className="flex items-center gap-2.5">
                  <span className="font-mono text-[9px] uppercase tracking-[0.24em] text-accent">
                    05 / Archive
                  </span>
                  <span className="h-px w-3 bg-line" />
                  <span className="font-mono text-[9px] uppercase tracking-[0.18em] text-faint">
                    {filteredCerts.length} {filteredCerts.length === 1 ? "File" : "Files"}
                  </span>
                </div>
                <h2
                  id="modal-archive-title"
                  className="mt-1.5 text-2xl tracking-[-0.03em] text-ink sm:text-3xl"
                >
                  All <span className="font-serif italic text-accent">Certifications</span>
                </h2>
              </div>

              <button
                type="button"
                onClick={() => setIsModalOpen(false)}
                className="self-start sm:self-auto inline-flex items-center gap-2 border border-line bg-canvas px-3.5 py-2 font-mono text-[9px] uppercase tracking-[0.2em] text-muted transition-colors hover:border-accent hover:text-ink cursor-pointer"
                aria-label="Close modal"
              >
                <span>Close</span>
                <span className="text-[10px] text-faint">[ESC]</span>
              </button>
            </div>

            {/* Category Filter Bar */}
            {categories.length > 2 && (
              <div className="flex items-center gap-2 overflow-x-auto border-b border-line px-6 py-3 sm:px-8 no-scrollbar">
                {categories.map((category) => {
                  const isActive = activeCategory === category;
                  return (
                    <button
                      key={category}
                      type="button"
                      onClick={() => setActiveCategory(category)}
                      className={`shrink-0 border px-3 py-1 font-mono text-[8px] uppercase tracking-[0.18em] transition-all cursor-pointer ${
                        isActive
                          ? "border-accent bg-accent/10 text-accent"
                          : "border-line bg-transparent text-faint hover:border-ink/30 hover:text-ink"
                      }`}
                    >
                      {category}
                    </button>
                  );
                })}
              </div>
            )}

            {/* Modal Body (Scrollable Grid) */}
            <div className="overflow-y-auto p-6 sm:p-8">
              <div className="grid gap-x-5 gap-y-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
                {filteredCerts.map((cert) => (
                  <CertificateCard key={cert.file} cert={cert} />
                ))}
              </div>
            </div>
          </div>
        </div>
      )}
    </Section>
  );
}

/* Reusable Sub-component agar kode tetap DRY dan rapi */
function CertificateCard({
  cert,
}: {
  cert: (typeof certifications)[number];
}) {
  return (
    <a
      href={cert.file}
      target="_blank"
      rel="noreferrer"
      className="group grid grid-cols-[96px_1fr] items-center gap-4 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-accent md:block"
      aria-label={`Open ${cert.title} certificate PDF`}
    >
      <div className="relative aspect-[4/3] w-24 shrink-0 overflow-hidden border border-line bg-panel md:w-full">
        <Image
          src={cert.thumbnail}
          alt={`${cert.title} certificate preview`}
          fill
          sizes="(max-width: 767px) 96px, 260px"
          className="object-cover opacity-80 transition duration-700 group-hover:scale-[1.03] group-hover:opacity-100"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-canvas/45 via-transparent to-transparent" />
        <span className="absolute bottom-2 right-2 hidden h-8 w-8 items-center justify-center border border-ink/20 bg-canvas/70 text-ink/70 backdrop-blur-sm transition-colors group-hover:border-accent group-hover:text-accent md:flex">
          <ArrowUpRightIcon className="h-3.5 w-3.5" />
        </span>
      </div>

      <div className="min-w-0 md:mt-3">
        <p className="text-sm leading-snug text-ink/85 transition-colors group-hover:text-ink line-clamp-2">
          {cert.title}
        </p>
        <p className="mt-1 font-mono text-[8px] uppercase tracking-[0.14em] text-faint">
          {cert.issuer}
        </p>
        <div className="mt-1.5 flex flex-wrap items-center gap-x-2.5 gap-y-1 font-mono text-[8px] uppercase tracking-[0.14em] text-faint">
          <span>{cert.category}</span>
          <span className="h-px w-2 bg-faint/40" />
          <span>{cert.year}</span>
          <span className="h-px w-2 bg-faint/40" />
          <span>PDF · {cert.pages} pages</span>
          <ArrowUpRightIcon className="ml-auto h-3.5 w-3.5 text-accent md:hidden" />
        </div>
      </div>
    </a>
  );
}