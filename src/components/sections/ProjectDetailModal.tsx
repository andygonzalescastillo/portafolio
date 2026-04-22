import { ExternalLink, Globe } from "lucide-react";
import { GitHub } from "@/components/icons/Github";
import { Badge } from "@/components/ui/badge";
import { buttonVariants } from "@/components/ui/button";
import { getTechByKey } from "@/data/data";
import type { Project } from "@/data/data";
import { cn } from "@/lib/utils";
import { Dialog, DialogContent, DialogTitle, DialogDescription, } from "@/components/ui/dialog";

interface ProjectDetailModalProps {
  project: Project | null;
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

export function ProjectDetailModal({ project, open, onOpenChange }: ProjectDetailModalProps) {
  if (!project) return null;

  const hasLinks = project.links && project.links.length > 0;

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent
        className="sm:max-w-2xl p-0 overflow-hidden gap-0"
        showCloseButton={true}
      >
        <div className="relative overflow-hidden aspect-video">
          <img
            src={project.image}
            alt={project.title}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-linear-to-t from-black/60 via-black/10 to-transparent" />

          <div className="absolute bottom-0 left-0 right-0 p-5 sm:p-6">
            <DialogTitle className="text-xl sm:text-2xl font-bold text-white leading-tight drop-shadow-lg">
              {project.title}
            </DialogTitle>
          </div>
        </div>

        <div className="p-5 sm:p-6 space-y-5 max-h-[50vh] overflow-y-auto">
          <div>
            <h3 className="text-xs font-semibold uppercase tracking-wider text-muted-foreground mb-2.5">
              Descripción
            </h3>
            <DialogDescription className="text-[14px] text-foreground/90 leading-[1.8] tracking-[0.01em]">
              {project.description}
            </DialogDescription>
          </div>

          <div>
            <h3 className="text-xs font-semibold uppercase tracking-wider text-muted-foreground mb-2.5">
              Tecnologías
            </h3>
            <div className="flex flex-wrap gap-2">
              {project.tags.map((tagKey) => {
                const tech = getTechByKey(tagKey);
                return (
                  <Badge
                    key={tagKey}
                    variant="secondary"
                    className={`${tech.badgeClass} text-xs px-2.5 py-1 font-medium border-0`}
                  >
                    {tech.name}
                  </Badge>
                );
              })}
            </div>
          </div>

          <div className="flex flex-col sm:flex-row flex-wrap gap-3 pt-2">
            {hasLinks && project.links!.map((link) => (
              <a
                key={link.url}
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
                className={cn(
                  buttonVariants({ variant: "default" }),
                  "rounded-xl h-11 px-6 gap-2.5 text-sm font-semibold transition-all duration-200",
                  "bg-indigo-600 text-white hover:bg-indigo-700",
                  "shadow-md shadow-indigo-500/25 hover:shadow-lg hover:shadow-indigo-500/30"
                )}
              >
                <Globe className="size-4" />
                {link.label}
                <ExternalLink className="size-3.5 opacity-70" />
              </a>
            ))}
            {project.github && (
              <a
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                className={cn(
                  buttonVariants({ variant: "outline" }),
                  "rounded-xl h-11 px-6 gap-2.5 text-sm font-medium transition-all duration-200",
                  "border-border/60 bg-card/80 text-foreground",
                  "hover:border-indigo-500/40 hover:bg-indigo-500/5"
                )}
              >
                <GitHub className="size-4" />
                Ver Código Fuente
                <ExternalLink className="size-3.5 opacity-50" />
              </a>
            )}
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
}
