import type { ReactNode } from "react";
import { Reveal } from "@/components/Reveal";

export function SectionHeading({
  index,
  label,
  title,
  description,
}: {
  index: string;
  label: string;
  title: ReactNode;
  description?: ReactNode;
}) {
  return (
    <div className="grid gap-8 lg:grid-cols-12 lg:gap-12">
      <Reveal className="lg:col-span-3">
        <div className="flex items-center gap-3 lg:sticky lg:top-28">
          <span className="font-mono text-[11px] tracking-[0.08em] text-accent">
            {index}
          </span>
          <span className="h-px w-8 bg-accent/60" />
          <span className="font-mono text-[10px] uppercase tracking-[0.28em] text-muted">
            {label}
          </span>
        </div>
      </Reveal>

      <div className="lg:col-span-9">
        <Reveal>
          <h2 className="max-w-4xl text-[clamp(2.35rem,4.6vw,4.7rem)] font-normal leading-[0.98] tracking-[-0.045em] text-ink">
            {title}
          </h2>
        </Reveal>
        {description ? (
          <Reveal delay={90}>
            <p className="mt-6 max-w-2xl text-base leading-relaxed text-muted sm:text-lg">
              {description}
            </p>
          </Reveal>
        ) : null}
      </div>
    </div>
  );
}
