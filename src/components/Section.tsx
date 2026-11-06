import type { ReactNode } from "react";

export function Section({
  id,
  children,
  className = "",
}: {
  id: string;
  children: ReactNode;
  className?: string;
}) {
  return (
    <section
      id={id}
      className={`relative scroll-mt-20 border-t border-line px-5 py-20 sm:px-8 sm:py-28 lg:px-12 lg:py-36 ${className}`}
    >
      <div className="mx-auto w-full max-w-[1500px]">{children}</div>
    </section>
  );
}
