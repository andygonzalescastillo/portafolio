import { FolderOpen, ExternalLink, ChevronDown, ChevronUp, Globe } from "lucide-react";
import { useEffect, useRef, useState } from "react";
import { PROJECTS, getTechByKey } from "@/data/data";
import type { Project } from "@/data/data";
import { GitHub } from "@/components/icons/Github";
import { Badge } from "@/components/ui/badge";
import { Button, buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { ProjectDetailModal } from "./ProjectDetailModal";
import { SectionHeader } from "@/components/SectionHeader";

const INITIAL_VISIBLE = 4;

export function ProjectsSection() {
  const [showAll, setShowAll] = useState(false);
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const gridRef = useRef<HTMLDivElement>(null);

  const visibleProjects = showAll ? PROJECTS : PROJECTS.slice(0, INITIAL_VISIBLE);
  const hasMore = PROJECTS.length > INITIAL_VISIBLE;

  useEffect(() => {
    const cards = gridRef.current?.querySelectorAll<HTMLElement>(".project-card-animate");
    if (!cards) return;
    const observers: IntersectionObserver[] = [];
    cards.forEach((card, i) => {
      const observer = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) {
            const delay = i >= INITIAL_VISIBLE ? (i - INITIAL_VISIBLE) * 60 : i * 60;
            setTimeout(() => card.classList.add("card-visible"), delay);
            observer.unobserve(card);
          }
        },
        { threshold: 0.1 }
      );
      observer.observe(card);
      observers.push(observer);
    });
    return () => observers.forEach((o) => o.disconnect());
  }, [visibleProjects]);

  const handleToggle = () => {
    if (showAll) {
      const section = gridRef.current?.closest("section");
      if (section) {
        const top = section.getBoundingClientRect().top + window.scrollY - 100;
        window.scrollTo({ top, behavior: "smooth" });
      }
      setTimeout(() => setShowAll(false), 500);
    } else {
      setShowAll(true);
    }
  };

  return (
    <div className="py-14 border-t border-border/50">

      <SectionHeader icon={FolderOpen} title="Proyectos" className="mb-10">
        {hasMore && (
          <span className="ml-auto text-xs text-muted-foreground bg-muted/60 border border-border/50 px-2.5 py-1 rounded-full">
            {PROJECTS.length} proyectos
          </span>
        )}
      </SectionHeader>

      <div ref={gridRef} className="grid grid-cols-1 md:grid-cols-2 gap-5">
        {visibleProjects.map((project) => (
          <article
            key={project.title}
            className="project-card-animate group relative flex flex-col rounded-2xl border border-border/60 bg-card/50 dark:bg-card/40 overflow-hidden hover:border-indigo-500/40 hover:shadow-lg hover:shadow-indigo-500/8 dark:hover:shadow-indigo-500/10 transition-all duration-300 backdrop-blur-sm cursor-pointer"
            onClick={() => setSelectedProject(project)}
            role="button"
            tabIndex={0}
            onKeyDown={(e) => { if (e.key === "Enter" || e.key === " ") setSelectedProject(project); }}
            aria-label={`Ver detalles de ${project.title}`}
          >
            <div className="relative overflow-hidden aspect-video border-b border-border/50">
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-linear-to-t from-black/55 via-black/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />

              <div className="absolute top-3 right-3 flex gap-2 opacity-0 group-hover:opacity-100 transition-all duration-200 translate-y-1 group-hover:translate-y-0">
                {project.github && (
                  <span
                    className="p-2 rounded-lg bg-background/90 backdrop-blur-sm border border-border/60 shadow-sm"
                    aria-label="Tiene código en GitHub"
                  >
                    <GitHub className="size-4" />
                  </span>
                )}
                {project.links && project.links.length > 0 && (
                  <span
                    className="p-2 rounded-lg bg-indigo-600/90 backdrop-blur-sm border border-indigo-500/50 shadow-sm"
                    aria-label="Tiene demo en vivo"
                  >
                    <Globe className="size-4 text-white" />
                  </span>
                )}
              </div>

              <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none">
                <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-background/90 dark:bg-background/80 backdrop-blur-md border border-border/60 text-sm font-medium text-foreground shadow-lg">
                  <ExternalLink className="size-3.5" />
                  Ver detalles
                </span>
              </div>
            </div>

            <div className="flex flex-col flex-1 p-5 gap-3">
              <div>
                <h3 className="font-semibold text-foreground text-base group-hover:text-indigo-600 dark:group-hover:text-indigo-400 transition-colors duration-200 leading-snug mb-2">
                  {project.title}
                </h3>
                <p className="text-[13.5px] text-muted-foreground leading-[1.75] tracking-[0.01em] line-clamp-2">
                  {project.description}
                </p>
              </div>

              <div className="flex items-center justify-between gap-3 mt-auto pt-2 border-t border-border/40">
                <div className="flex flex-wrap gap-1.5">
                  {project.tags.slice(0, 3).map((tagKey) => {
                    const tech = getTechByKey(tagKey);
                    return (
                      <Badge key={tagKey} variant="secondary"
                        className={`${tech.badgeClass} text-xs px-2 py-0.5 font-medium border-0`}>
                        {tech.name}
                      </Badge>
                    );
                  })}
                  {project.tags.length > 3 && (
                    <Badge variant="outline" className="text-xs px-2 py-0.5 text-muted-foreground">
                      +{project.tags.length - 3}
                    </Badge>
                  )}
                </div>
                {project.links && project.links.length > 0 ? (
                  <span className="inline-flex items-center gap-1.5 text-xs font-medium text-indigo-600 dark:text-indigo-400 shrink-0">
                    <Globe className="size-3.5" />
                    Demo
                  </span>
                ) : (
                  <span className="inline-flex items-center gap-1.5 text-xs text-muted-foreground shrink-0">
                    <GitHub className="size-3.5" />
                    Código
                  </span>
                )}
              </div>
            </div>
          </article>
        ))}
      </div>

      <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-3">
        {hasMore && (
          <Button
            onClick={handleToggle}
            variant="outline"
            className={cn(
              "rounded-full h-11 px-6 gap-2 text-sm font-medium transition-all duration-200",
              "border-indigo-500/40 bg-indigo-500/8 text-indigo-600 dark:text-indigo-400",
              "hover:bg-indigo-500/15 hover:border-indigo-500/60 hover:text-indigo-700 dark:hover:text-indigo-300 hover:shadow-md hover:shadow-indigo-500/10"
            )}
          >
            {showAll ? (
              <>
                <ChevronUp className="size-4" />
                Ocultar proyectos
              </>
            ) : (
              <>
                <ChevronDown className="size-4" />
                Ver más proyectos
                <span className="ml-0.5 text-xs opacity-60">+{PROJECTS.length - INITIAL_VISIBLE}</span>
              </>
            )}
          </Button>
        )}

        <a
          href="https://github.com/andygonzalescastillo"
          target="_blank"
          rel="noopener noreferrer"
          className={cn(
            buttonVariants({ variant: "outline" }),
            "rounded-full h-11 px-6 gap-2.5 group border-border/60 hover:border-indigo-500/40 hover:bg-indigo-500/5 transition-all duration-200"
          )}
        >
          <GitHub className="size-4" />
          <span className="text-sm font-medium">Ver más en GitHub</span>
          <ExternalLink className="size-3.5 opacity-50 group-hover:opacity-100 transition-opacity" />
        </a>
      </div>

      <ProjectDetailModal
        project={selectedProject}
        open={selectedProject !== null}
        onOpenChange={(open) => { if (!open) setSelectedProject(null); }}
      />
    </div>
  );
}
