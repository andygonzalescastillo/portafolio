import { type ReactNode, useEffect, useRef } from "react";
import { cn } from "@/lib/utils";

interface SectionContainerProps {
  id: string;
  children: ReactNode;
  className?: string;
}

export function SectionContainer({ id, children, className }: SectionContainerProps) {
  const ref = useRef<HTMLElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          el.classList.add("section-visible");
          observer.unobserve(el);
        }
      },
      { threshold: 0.07 }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <section
      ref={ref}
      id={id}
      className={cn(
        "w-full max-w-215 mx-auto px-4 sm:px-6 md:px-8 lg:px-0 scroll-mt-20 section-animate",
        className
      )}
    >
      {children}
    </section>
  );
}
