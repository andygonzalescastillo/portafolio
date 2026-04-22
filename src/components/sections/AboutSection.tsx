import { User, Briefcase, Zap, Target } from "lucide-react";
import { SectionHeader } from "@/components/SectionHeader";

const highlights = [
  {
    icon: Briefcase,
    label: "Backend",
    desc: "Java · Spring Boot",
    color: "text-indigo-500",
    bg: "bg-indigo-500/8 dark:bg-indigo-500/10",
    border: "border-indigo-500/15",
  },
  {
    icon: Zap,
    label: "Bases de datos",
    desc: "PostgreSQL · SQL Server",
    color: "text-violet-500",
    bg: "bg-violet-500/8 dark:bg-violet-500/10",
    border: "border-violet-500/15",
  },
  {
    icon: Target,
    label: "Frontend",
    desc: "React · TypeScript",
    color: "text-sky-500",
    bg: "bg-sky-500/8 dark:bg-sky-500/10",
    border: "border-sky-500/15",
  },
];

export function AboutSection() {
  return (
    <div className="py-14 border-t border-border/50">
      <SectionHeader icon={User} title="Sobre mí" />
      <div className="grid md:grid-cols-[1fr_auto] gap-8 md:gap-12 items-start">
        <div className="space-y-4 text-[15px] sm:text-[15.5px] leading-[1.8] tracking-[0.01em] text-muted-foreground">
          <p>
            Desarrollador{" "}
            <strong className="text-foreground font-semibold">Backend</strong> con formación en{" "}
            <strong className="text-foreground font-semibold">Desarrollo de Software</strong> y enfoque en
            construir aplicaciones robustas con{" "}
            <strong className="text-indigo-600 dark:text-indigo-400 font-semibold">Java</strong> y{" "}
            <strong className="text-indigo-600 dark:text-indigo-400 font-semibold">Spring Boot</strong>.
          </p>
          <p>
            Trabajo con <strong className="text-foreground font-semibold">PostgreSQL</strong> y{" "}
            <strong className="text-foreground font-semibold">SQL Server</strong> en el backend, y
            complemento con{" "}
            <strong className="text-foreground font-semibold">React</strong> en el frontend para
            entregar soluciones completas.
          </p>
          <p>
            Me motiva resolver problemas reales a través del código, aprender tecnologías nuevas
            y colaborar en equipos donde pueda crecer profesionalmente.
          </p>
          <p>
            Abierto a{" "}
            <strong className="text-indigo-600 dark:text-indigo-400 font-semibold">nuevas oportunidades</strong>{" "}
            donde pueda seguir desarrollándome como profesional.
          </p>
        </div>

        <ul className="flex md:flex-col gap-3 flex-wrap">
          {highlights.map(({ icon: Icon, label, desc, color, bg, border }) => (
            <li
              key={label}
              className={`flex items-center gap-3 px-4 py-3 rounded-xl border ${bg} ${border} min-w-40 transition-all duration-300 hover:-translate-y-1 hover:shadow-md`}
            >
              <div className={`${color} shrink-0`}>
                <Icon className="size-4" />
              </div>
              <div>
                <p className={`text-sm font-semibold ${color}`}>{label}</p>
                <p className="text-xs text-muted-foreground mt-0.5">{desc}</p>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}