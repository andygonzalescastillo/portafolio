import { MapPin, Mail, FileText, ArrowRight } from "lucide-react";
import { GitHub } from "@/components/icons/Github";
import { LinkedIn } from "@/components/icons/Linkedin";
import { PERSONAL_INFO } from "@/data/data";
import { Avatar, AvatarFallback, AvatarImage, AvatarBadge } from "@/components/ui/avatar";
import { buttonVariants } from "@/components/ui/button";
import { Tooltip, TooltipContent, TooltipTrigger } from "@/components/ui/tooltip";
import { cn } from "@/lib/utils";

export function HeroSection() {
  const { name, role, email, location, avatar, flagIcon, cvPath, github, linkedin } = PERSONAL_INFO;

  return (
    <div className="flex flex-col md:flex-row gap-8 md:gap-12 items-center md:items-start pt-6 pb-16">

      <figure className="relative shrink-0 group hero-avatar">
        <div className="absolute inset-0 rounded-full bg-indigo-500/20 blur-xl scale-110 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
        <Avatar className="w-28 sm:w-36 md:w-44 h-28 sm:h-36 md:h-44 ring-2 ring-border/60 shadow-2xl shadow-black/10 relative overflow-visible">
          <AvatarImage src={avatar} alt={`Foto de ${name}`} className="object-cover" />
          <AvatarFallback className="text-4xl font-bold bg-indigo-500/10 text-indigo-500">AG</AvatarFallback>
          <AvatarBadge
            className="w-5! h-5! sm:w-6! sm:h-6! bg-emerald-500 ring-2! ring-background shadow-[0_0_10px_rgba(16,185,129,0.7)] bottom-2! right-2! sm:bottom-3! sm:right-3!"
            title="Disponible"
          />
        </Avatar>
      </figure>

      <header className="text-left space-y-4 flex-1">

        <div className="hero-badge inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-600 dark:text-emerald-400 text-xs font-medium">
          <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
          Disponible para trabajar
        </div>

        <div className="hero-title">
          <h1 className="text-foreground text-4xl sm:text-5xl font-bold tracking-tight mb-2 leading-tight">
            {name.split(" ").slice(0, 2).join(" ")}
            <br />
            <span className="text-muted-foreground/70 font-medium text-3xl sm:text-4xl">
              {name.split(" ").slice(2).join(" ")}
            </span>
          </h1>
          <p className="text-base sm:text-lg text-muted-foreground/90 font-medium tracking-wide">
            {role}
            <span className="mx-2 text-border">·</span>
            <span className="inline-flex items-center gap-1.5 text-sm text-muted-foreground/70">
              <MapPin className="size-3.5" />
              {location}
              <img width="16" height="16" src={flagIcon} alt="Bandera de Perú" className="size-4 rounded-sm" />
            </span>
          </p>
        </div>

        <nav className="pt-1 hero-actions">
          <ul className="flex flex-wrap gap-3">
            <li>
              <Tooltip>
                <TooltipTrigger>
                  <a
                    href={`mailto:${email}`}
                    aria-label={`Enviar correo a ${email}`}
                    className={cn(
                      buttonVariants({ variant: "default" }),
                      "rounded-full h-10 px-5 gap-2 bg-indigo-600 hover:bg-indigo-700 dark:bg-indigo-500 dark:hover:bg-indigo-600 text-white shadow-lg shadow-indigo-500/25 hover:shadow-indigo-500/40 transition-all duration-200 hover:-translate-y-0.5"
                    )}
                  >
                    <Mail className="size-4" />
                    Contactar
                    <ArrowRight className="size-3.5 opacity-70" />
                  </a>
                </TooltipTrigger>
                <TooltipContent><p>{email}</p></TooltipContent>
              </Tooltip>
            </li>

            <li>
              <Tooltip>
                <TooltipTrigger>
                  <a
                    href={cvPath}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="Ver Curriculum"
                    className={cn(
                      buttonVariants({ variant: "outline" }),
                      "rounded-full h-10 px-5 gap-2 hover:border-indigo-500/40 hover:bg-indigo-500/5 transition-all duration-200 hover:-translate-y-0.5"
                    )}
                  >
                    <FileText className="size-4" />
                    Curriculum
                  </a>
                </TooltipTrigger>
                <TooltipContent><p>Ver CV</p></TooltipContent>
              </Tooltip>
            </li>

            <li className="flex items-center">
              <div className="w-px h-6 bg-border" />
            </li>

            <li>
              <Tooltip>
                <TooltipTrigger>
                  <a
                    href={github}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="Perfil de GitHub"
                    className={cn(
                      buttonVariants({ variant: "ghost", size: "icon" }),
                      "rounded-full size-10 text-muted-foreground hover:text-foreground hover:bg-muted transition-all duration-200 hover:-translate-y-0.5"
                    )}
                  >
                    <GitHub className="size-5" />
                  </a>
                </TooltipTrigger>
                <TooltipContent><p>GitHub</p></TooltipContent>
              </Tooltip>
            </li>

            <li>
              <Tooltip>
                <TooltipTrigger>
                  <a
                    href={linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="Perfil de LinkedIn"
                    className={cn(
                      buttonVariants({ variant: "ghost", size: "icon" }),
                      "rounded-full size-10 text-muted-foreground hover:text-[#0A66C2] hover:bg-[#0A66C2]/10 transition-all duration-200 hover:-translate-y-0.5"
                    )}
                  >
                    <LinkedIn className="size-5" />
                  </a>
                </TooltipTrigger>
                <TooltipContent><p>LinkedIn</p></TooltipContent>
              </Tooltip>
            </li>
          </ul>
        </nav>
      </header>
    </div>
  );
}
