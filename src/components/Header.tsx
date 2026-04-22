import { useState, useEffect } from "react";
import { Menu } from "lucide-react";
import { NAV_LINKS } from "@/data/data";
import { ModeToggle } from "@/components/mode-toggle";
import { buttonVariants } from "@/components/ui/button";
import { Sheet, SheetTrigger, SheetContent, SheetHeader, SheetTitle, SheetClose } from "@/components/ui/sheet";
import { Separator } from "@/components/ui/separator";
import { cn } from "@/lib/utils";

export function Header() {
  const [activeSection, setActiveSection] = useState<string>("");
  const [sheetOpen, setSheetOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);

      const docH = document.documentElement.scrollHeight - window.innerHeight;
      setScrollProgress(docH > 0 ? (window.scrollY / docH) * 100 : 0);

      const sections = document.querySelectorAll("section[id]");
      const scrollPosition = window.scrollY + 120;

      sections.forEach((section) => {
        const sectionTop = (section as HTMLElement).offsetTop;
        const sectionHeight = section.clientHeight;
        const sectionId = section.getAttribute("id") || "";
        if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
          setActiveSection(sectionId);
        }
      });
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    setSheetOpen(false);
    if (href.startsWith("#")) {
      const elem = document.getElementById(href.substring(1));
      if (elem) {
        const top = elem.getBoundingClientRect().top + window.scrollY - 80;
        window.scrollTo({ top, behavior: "smooth" });
      }
    }
  };

  return (
    <header
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-500 px-4",
        scrolled
          ? "bg-background/80 backdrop-blur-xl border-b border-border/60 shadow-sm shadow-black/5"
          : "bg-transparent"
      )}
    >
      {/* Scroll progress bar */}
      <div
        className="absolute bottom-0 left-0 h-0.5 bg-linear-to-r from-indigo-500 to-violet-500 transition-all duration-100 ease-out"
        style={{ width: `${scrollProgress}%` }}
      />

      <div className="max-w-215 mx-auto flex items-center justify-between h-18">
        {/* Logo */}
        <a
          href="#inicio"
          onClick={(e) => handleNavClick(e, "#inicio")}
          className="group flex items-center gap-2"
        >
          <span className="text-lg font-bold tracking-tight">
            <span className="text-foreground">Andy</span>
            <span className="bg-linear-to-r from-indigo-500 to-violet-500 bg-clip-text text-transparent">
              Gonzales
            </span>
            <span className="text-muted-foreground/60 font-normal text-sm hidden sm:inline">.dev</span>
          </span>
        </a>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-1">
          {NAV_LINKS.map((link) => {
            const isActive = activeSection === link.href.substring(1);
            return (
              <a
                key={link.text}
                href={link.href}
                onClick={(e) => handleNavClick(e, link.href)}
                className={cn(
                  "relative px-4 py-2 text-sm font-medium rounded-full transition-all duration-200",
                  isActive ? "text-indigo-600 dark:text-indigo-400 bg-indigo-500/8 dark:bg-indigo-500/10" : "text-muted-foreground hover:text-foreground hover:bg-muted/60"
                )}
              >
                {link.text}
                {isActive && (
                  <span className="absolute bottom-1 left-1/2 -translate-x-1/2 w-4 h-1 rounded-full bg-indigo-500 transition-all duration-300" />
                )}
              </a>
            );
          })}
          <div className="w-px h-5 bg-border mx-2" />
          <ModeToggle />
        </nav>

        {/* Mobile */}
        <div className="flex items-center gap-2 md:hidden">
          <ModeToggle />
          <Sheet open={sheetOpen} onOpenChange={setSheetOpen}>
            <SheetTrigger>
              <button className={cn(buttonVariants({ variant: "ghost", size: "icon" }), "rounded-xl")}>
                <Menu className="size-5" />
                <span className="sr-only">Menú</span>
              </button>
            </SheetTrigger>

            <SheetContent side="right" className="w-72 bg-background/95 backdrop-blur-xl">
              <SheetHeader className="mb-2">
                <SheetTitle className="text-left text-base font-bold">
                  <span className="text-foreground">Andy</span>
                  <span className="bg-linear-to-r from-indigo-500 to-violet-500 bg-clip-text text-transparent">Gonzales</span>
                  <span className="text-muted-foreground/60 font-normal">.dev</span>
                </SheetTitle>
              </SheetHeader>

              <Separator className="mb-3" />

              <nav>
                <ul className="flex flex-col gap-1 px-1">
                  {NAV_LINKS.map((link) => {
                    const isActive = activeSection === link.href.substring(1);
                    return (
                      <li key={link.text}>
                        <SheetClose>
                          <a
                            href={link.href}
                            onClick={(e) => handleNavClick(e, link.href)}
                            className={cn(
                              "flex items-center w-full rounded-xl px-4 py-3 text-sm font-medium transition-all duration-200",
                              isActive
                                ? "bg-indigo-500/10 text-indigo-600 dark:text-indigo-400"
                                : "text-muted-foreground hover:bg-muted hover:text-foreground"
                            )}
                          >
                            {link.text}
                          </a>
                        </SheetClose>
                      </li>
                    );
                  })}
                </ul>
              </nav>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
}