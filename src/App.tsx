import { ThemeProvider } from "@/components/theme-provider"
import { TooltipProvider } from "@/components/ui/tooltip"
import { Header } from "@/components/Header"
import { HeroSection } from "@/components/sections/HeroSection"
import { AboutSection } from "@/components/sections/AboutSection"
import { TechSection } from "@/components/sections/TechSection"
import { ProjectsSection } from "@/components/sections/ProjectsSection"
import { FormacionSection } from "@/components/sections/FormacionSection"
import { Footer } from "@/components/Footer"
import { SectionContainer } from "@/components/SectionContainer"

function App() {

  return (
    <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
      <TooltipProvider>
        <div className="min-h-screen flex flex-col">
          <Header />

          <main className="flex-1 pt-36 pb-16">
            <SectionContainer id="inicio">
              <HeroSection />
            </SectionContainer>

            <SectionContainer id="sobre-mi">
              <AboutSection />
            </SectionContainer>

            <SectionContainer id="tecnologias">
              <TechSection />
            </SectionContainer>

            <SectionContainer id="proyectos">
              <ProjectsSection />
            </SectionContainer>

            <SectionContainer id="formacion">
              <FormacionSection />
            </SectionContainer>
          </main>

          <Footer />
        </div>
      </TooltipProvider>
    </ThemeProvider>
  )
}

export default App