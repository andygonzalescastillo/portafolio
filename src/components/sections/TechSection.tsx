import { Layers } from "lucide-react";
import { useEffect, useRef } from "react";
import { TECHNOLOGIES } from "@/data/data";
import type { TechKey } from "@/data/data";
import { SectionHeader } from "@/components/SectionHeader";
import { Java } from "@/components/icons/Java";
import { Spring } from "@/components/icons/Spring";
import { React as ReactLogo } from "@/components/icons/React";
import { MySQL } from "@/components/icons/MySql";
import { MicrosoftSQLServer } from "@/components/icons/SqlServer";
import { HTML5 } from "@/components/icons/Html";
import { CSS } from "@/components/icons/Css";
import { JavaScript } from "@/components/icons/JavaScript";
import { TypeScript } from "@/components/icons/TypeScript";
import { TailwindCSS } from "@/components/icons/Tailwind";
import { C as CSharpLogo } from "@/components/icons/Csharp";
import { Git } from "@/components/icons/Git";
import { GitHub } from "@/components/icons/Github";
import { Kotlin } from "@/components/icons/KotlinIcon";
import { Swift } from "@/components/icons/Swift";
import { Redis } from "@/components/icons/Redis";
import { PostgreSQL } from "@/components/icons/Postgres";
import { Docker } from "@/components/icons/Docker";

const iconMap: Record<TechKey, React.ElementType> = {
  JAVA: Java,
  SPRING: Spring,
  REACT: ReactLogo,
  MYSQL: MySQL,
  SQL_SERVER: MicrosoftSQLServer,
  POSTGRESQL: PostgreSQL,
  DOCKER: Docker,
  REDIS: Redis,
  HTML: HTML5,
  CSS: CSS,
  JAVASCRIPT: JavaScript,
  TYPESCRIPT: TypeScript,
  TAILWIND: TailwindCSS,
  CSHARP: CSharpLogo,
  GIT: Git,
  GITHUB: GitHub,
  KOTLIN: Kotlin,
  SWIFT: Swift,
};

const ITEM_WIDTH = 152;

export function TechSection() {
  const duplicatedTech = [...TECHNOLOGIES, ...TECHNOLOGIES];
  const trackRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const totalWidth = ITEM_WIDTH * TECHNOLOGIES.length;
    trackRef.current?.style.setProperty("--carousel-total-w", `${totalWidth}px`);
  }, []);

  return (
    <div className="py-14 border-t border-border/50">

      <SectionHeader icon={Layers} title="Tecnologías" />

      <div className="relative overflow-hidden rounded-2xl border border-border/50 bg-card/40 dark:bg-card/30 backdrop-blur-sm py-1">

        <div className="absolute left-0 top-0 h-full w-20 bg-linear-to-r from-card/80 dark:from-card/60 to-transparent z-10 pointer-events-none rounded-l-2xl" />
        <div className="absolute right-0 top-0 h-full w-20 bg-linear-to-l from-card/80 dark:from-card/60 to-transparent z-10 pointer-events-none rounded-r-2xl" />

        <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-72 h-20 bg-indigo-500/6 dark:bg-indigo-500/8 blur-3xl rounded-full pointer-events-none" />

        <div ref={trackRef} className="flex items-center gap-0 py-6 animate-carousel min-w-max">
          {duplicatedTech.map((tech, index) => {
            const IconComponent = iconMap[tech.key];
            return (
              <div
                key={`${tech.key}-${index}`}
                className="flex flex-col items-center gap-3 w-38 group cursor-default"
              >
                <div className="relative p-3 rounded-xl transition-all duration-300 group-hover:bg-indigo-500/8 dark:group-hover:bg-indigo-500/12">
                  {IconComponent && (
                    <IconComponent className="size-10 sm:size-12 transition-transform duration-300 group-hover:scale-110 group-hover:-translate-y-0.5 relative z-10 drop-shadow-sm" />
                  )}
                </div>
                <span className="text-xs font-medium text-muted-foreground group-hover:text-foreground transition-colors duration-200">
                  {tech.name}
                </span>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
