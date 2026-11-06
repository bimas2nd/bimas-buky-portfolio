import { Reveal } from "@/components/Reveal";
import { Section } from "@/components/Section";
import { SectionHeading } from "@/components/SectionHeading";
import { ArrowUpRightIcon } from "@/components/icons";
import { profile } from "@/data/profile";

export function About() {
  return (
    <Section id="about">
      <SectionHeading
        index="01"
        label="About"
        title={
          <>
            Engineer by training.{" "}
            <span className="font-serif italic text-accent">Builder</span> by
            habit.
          </>
        }
        description="I care about the whole path a product takes — from the interface someone taps, through the data model, down to the network it runs on."
      />

      <div className="mt-14 grid gap-12 lg:mt-20 lg:grid-cols-12 lg:gap-12">
        <Reveal className="lg:col-span-6 lg:col-start-4">
          <p className="text-[clamp(1.15rem,1.65vw,1.45rem)] leading-[1.65] text-ink/85">
            {profile.summary}
          </p>

          <dl className="mt-12 border-t border-line">
            {profile.stats.map((stat) => (
              <div
                key={stat.label}
                className="grid grid-cols-[110px_1fr] gap-4 border-b border-line py-4 sm:grid-cols-[150px_1fr]"
              >
                <dt className="font-mono text-[9px] uppercase tracking-[0.2em] text-faint">
                  {stat.label}
                </dt>
                <dd className="text-sm leading-relaxed text-ink/80">
                  {stat.value}
                </dd>
              </div>
            ))}
          </dl>
        </Reveal>

        <div className="lg:col-span-3 lg:col-start-10">
          <Reveal delay={120} className="border-l border-accent pl-5">
            <p className="font-mono text-[9px] uppercase tracking-[0.24em] text-accent">
              Currently
            </p>
            <p className="mt-3 text-sm leading-relaxed text-ink/75">
              {profile.currently}
            </p>
          </Reveal>

          <Reveal delay={200} className="mt-10 border-t border-line pt-5">
            <p className="font-mono text-[9px] uppercase tracking-[0.24em] text-faint">
              Availability
            </p>
            <p className="mt-3 flex items-start gap-2.5 text-sm text-ink/80">
              <span className="mt-[7px] h-1.5 w-1.5 shrink-0 bg-accent" />
              {profile.availability}
            </p>
            <a
              href={`mailto:${profile.email}`}
              className="group mt-6 inline-flex items-center gap-2 text-sm text-ink"
            >
              <span className="link-underline">Start a conversation</span>
              <ArrowUpRightIcon className="h-3.5 w-3.5 text-accent transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
            </a>
          </Reveal>
        </div>
      </div>
    </Section>
  );
}
