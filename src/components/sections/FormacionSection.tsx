import { GraduationCap, CalendarDays, MapPin, ExternalLink } from "lucide-react";
import { FORMACION } from "@/data/data";
import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { SectionHeader } from "@/components/SectionHeader";

export function FormacionSection() {
  return (
    <div className="py-14 border-t border-border/50">

      <SectionHeader icon={GraduationCap} title="Formación" className="mb-10" />

      <div className="relative">
        {/* Línea vertical */}
        <div className="absolute left-2.75 top-3 bottom-3 w-px bg-linear-to-b from-indigo-500/60 via-indigo-500/20 to-transparent" />

        <ol className="space-y-6">
          {FORMACION.map((item, index) => (
            <li key={`${item.titulo}-${index}`} className="relative flex gap-6 pl-8 group/item">

              <div className="absolute left-0 top-4 w-5.5 h-5.5 rounded-full bg-background border-2 border-indigo-500 flex items-center justify-center shadow-[0_0_12px_rgba(99,102,241,0.4)] transition-transform duration-300 group-hover/item:scale-125">
                <div className="w-2 h-2 rounded-full bg-indigo-500" />
              </div>

              {/* Card */}
              <div className="flex-1 group rounded-2xl border border-border/60 bg-card/50 dark:bg-card/40 p-6 hover:border-indigo-500/40 hover:bg-card/70 dark:hover:bg-card/60 hover:shadow-lg hover:shadow-indigo-500/8 hover:-translate-y-0.5 transition-all duration-300 backdrop-blur-sm">

                <div className="flex flex-wrap items-start justify-between gap-3 mb-3">
                  <div>
                    <h3 className="text-base sm:text-lg font-bold text-indigo-600 dark:text-indigo-400 leading-snug">
                      {item.titulo}
                    </h3>
                    <p className="text-sm font-semibold text-foreground mt-0.5">
                      {item.institucion}
                    </p>
                  </div>

                  <span className="inline-flex items-center gap-1.5 text-xs font-medium text-muted-foreground bg-muted/60 border border-border/50 px-2.5 py-1 rounded-full shrink-0">
                    <CalendarDays className="size-3" />
                    {item.periodo}
                  </span>
                </div>

                <p className="flex items-center gap-1.5 text-xs text-muted-foreground mb-3">
                  <MapPin className="size-3" />
                  {item.lugar}
                </p>

                <p className="text-[13.5px] text-muted-foreground leading-[1.75] tracking-[0.01em]">
                  {item.descripcion}
                </p>

                {item.certificadoPath && (
                  <div className="mt-4 pt-3 border-t border-border/40">
                    <a
                      href={item.certificadoPath}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={cn(
                        buttonVariants({ variant: "outline", size: "sm" }),
                        "rounded-full h-8 px-4 gap-2 text-xs border-indigo-500/30 text-indigo-600 dark:text-indigo-400 hover:bg-indigo-500/8 hover:border-indigo-500/50 hover:text-indigo-700 dark:hover:text-indigo-300 transition-all duration-200"
                      )}
                    >
                      Ver constancia
                      <ExternalLink className="size-3" />
                    </a>
                  </div>
                )}
              </div>
            </li>
          ))}
        </ol>
      </div>
    </div>
  );
}