"use client";

import { useState } from "react";
import { Navbar } from "@/components/layout/navbar";
import { Footer } from "@/components/layout/footer";
import { ScrollProgress } from "@/components/layout/scroll-progress";
import { CustomCursor } from "@/components/layout/custom-cursor";
import { LoadingScreen } from "@/components/layout/loading-screen";
import { CommandPalette } from "@/components/layout/command-palette";
import { HeroSection } from "@/components/sections/hero";
import { AboutSection } from "@/components/sections/about";
import { ExpertiseSection } from "@/components/sections/expertise";
import { ExperienceSection } from "@/components/sections/experience";
import { CertificationsSection } from "@/components/sections/certifications";
import { ProjectsSection } from "@/components/sections/projects";
import { ServicesSection } from "@/components/sections/services";
import { SkillsDashboardSection } from "@/components/sections/skills-dashboard";
import { LanguagesSection } from "@/components/sections/languages";
import { TestimonialsSection } from "@/components/sections/testimonials";
import { ContactSection } from "@/components/sections/contact";

export function HomePage() {
  const [commandOpen, setCommandOpen] = useState(false);

  return (
    <>
      <LoadingScreen />
      <ScrollProgress />
      <CustomCursor />
      <Navbar onOpenCommand={() => setCommandOpen(true)} />
      <CommandPalette open={commandOpen} onOpenChange={setCommandOpen} />

      <main>
        <HeroSection />
        <AboutSection />
        <ExpertiseSection />
        <ExperienceSection />
        <CertificationsSection />
        <ProjectsSection />
        <ServicesSection />
        <SkillsDashboardSection />
        <LanguagesSection />
        <TestimonialsSection />
        <ContactSection />
      </main>

      <Footer />
    </>
  );
}
