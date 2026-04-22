import { PERSONAL_INFO } from "@/data/data";
import { GitHub } from "@/components/icons/Github";
import { LinkedIn } from "@/components/icons/Linkedin";

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="w-full max-w-215 mx-auto px-4 sm:px-6 md:px-8 lg:px-0 py-8 mt-2">
      <div className="border-t border-border/50 pt-8 flex flex-col sm:flex-row items-center justify-between gap-4">

        <div className="flex flex-col items-center sm:items-start gap-1">
          <p className="text-sm font-semibold text-foreground">
            Andy<span className="text-indigo-500">Gonzales</span>
            <span className="text-muted-foreground/60 font-normal">.dev</span>
          </p>
          <p className="text-xs text-muted-foreground/60">
            © {currentYear} · Todos los derechos reservados
          </p>
        </div>

        <nav aria-label="Redes sociales" className="flex items-center gap-3">
          <a
            href={`mailto:${PERSONAL_INFO.email}`}
            className="text-xs text-muted-foreground hover:text-foreground transition-colors duration-200 font-medium"
          >
            Contacto
          </a>
          <div className="w-px h-3.5 bg-border" />
          <a
            href={PERSONAL_INFO.github}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub"
            className="p-2 rounded-lg text-muted-foreground hover:text-foreground hover:bg-muted transition-all duration-200"
          >
            <GitHub className="size-4" />
          </a>
          <a
            href={PERSONAL_INFO.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn"
            className="p-2 rounded-lg text-muted-foreground hover:text-foreground hover:bg-muted transition-all duration-200"
          >
            <LinkedIn className="size-4" />
          </a>
        </nav>
      </div>
    </footer>
  );
}
