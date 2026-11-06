import { Reveal } from "@/components/Reveal";
import { Section } from "@/components/Section";
import { SectionHeading } from "@/components/SectionHeading";
import { TechIcon, techIconLabel } from "@/components/tech-icons";
import { skillGroups } from "@/data/profile";

export function Skills() {
  const totalSkills = skillGroups.reduce(
    (total, group) => total + group.items.length,
    0
  );

  return (
    <Section id="skills">
      <SectionHeading
        index="02"
        label="Skills"
        title={
          <>
            A stack that spans{" "}
            <span className="font-serif italic text-accent">product</span> and
            infrastructure.
          </>
        }
        description="Six core disciplines applied daily — from high-performance frontend interfaces down to relational database systems, AI integration, and secure network infrastructure."
      />

      <div className="mt-14 lg:mt-20">
        <Reveal>
          <div className="flex flex-wrap items-center justify-between gap-4 border-t border-line pt-4">
            <p className="font-mono text-[9px] uppercase tracking-[0.2em] text-faint">
              Toolkit / {String(skillGroups.length).padStart(2, "0")} disciplines
            </p>
            <p className="font-mono text-[9px] uppercase tracking-[0.18em] text-accent">
              {totalSkills} verified competencies
            </p>
          </div>
        </Reveal>

        {/* Skill Cards Grid */}
        <div className="mt-6 grid gap-px border border-line bg-line md:grid-cols-2 xl:grid-cols-3">
          {skillGroups.map((group, index) => (
            <Reveal key={group.id} delay={index * 45} className="h-full">
              <article className="group relative flex h-full flex-col bg-canvas p-6 transition-all duration-300 hover:bg-panel/40 lg:p-8">
                {/* Top Corner Accent on Hover */}
                <span className="pointer-events-none absolute top-0 left-0 h-0.5 w-0 bg-accent transition-all duration-300 group-hover:w-full" />

                <div className="flex items-center justify-between gap-4">
                  <span className="font-mono text-[9px] tracking-[0.16em] text-faint">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                  <span className="border border-line bg-panel/60 px-2 py-0.5 font-mono text-[7.5px] uppercase tracking-[0.18em] text-muted">
                    {String(group.items.length).padStart(2, "0")} competencies
                  </span>
                </div>

                <h3 className="mt-8 text-[clamp(1.4rem,2vw,1.85rem)] leading-none tracking-[-0.04em] text-ink transition-colors duration-300 group-hover:text-accent">
                  {group.title}
                </h3>

                {/* Tech Icons Row */}
                <div className="mt-6 flex flex-wrap gap-2">
                  {group.icons.map((icon) => (
                    <span
                      key={icon}
                      title={techIconLabel(icon)}
                      className="flex h-9 w-9 items-center justify-center border border-line bg-panel/30 text-ink/80 transition-all duration-300 group-hover:border-accent/40 group-hover:bg-accent/10 group-hover:text-accent"
                    >
                      <TechIcon name={icon} className="h-4.5 w-4.5" />
                    </span>
                  ))}
                </div>

                {/* Skill Items List */}
                <p className="mt-auto pt-8 text-sm leading-[1.8] text-muted">
                  {group.items.join("  /  ")}
                </p>
              </article>
            </Reveal>
          ))}
        </div>

        {/* Bottom Infrastructure Note */}
        <Reveal delay={120}>
          <div className="mt-8 flex flex-col justify-between gap-2 border-t border-line/60 pt-5 sm:flex-row sm:items-center">
            <p className="font-mono text-[9px] uppercase leading-relaxed tracking-[0.18em] text-faint">
              Comfortable across Linux Ubuntu, Docker, Nginx, Wazuh SIEM and cloud deployment workflows.
            </p>
            <span className="font-mono text-[8.5px] uppercase tracking-[0.18em] text-accent shrink-0">
              Production Ready
            </span>
          </div>
        </Reveal>
      </div>
    </Section>
  );
}