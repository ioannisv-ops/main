"use client";

import { motion } from "framer-motion";
import { Download, Calendar, Mail, ChevronDown } from "lucide-react";
import { heroContent, siteConfig, targetClients } from "@/data/site-config";
import { Button } from "@/components/ui/button";
import { ParticleBackground } from "@/components/effects/particle-background";
import { WorldMapBackground } from "@/components/effects/world-map-background";

export function HeroSection() {
  return (
    <section className="relative flex min-h-screen items-center overflow-hidden">
      <div className="absolute inset-0 grid-bg" />
      <WorldMapBackground />
      <ParticleBackground />

      <div className="absolute inset-0 bg-gradient-to-b from-background/20 via-background/60 to-background" />

      <div className="container-max relative z-10 section-padding pt-32">
        <div className="max-w-4xl">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-accent/30 bg-accent/5 px-4 py-1.5 text-sm text-accent">
              <span className="relative flex h-2 w-2">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-accent opacity-75" />
                <span className="relative inline-flex h-2 w-2 rounded-full bg-accent" />
              </span>
              Mission Ready · Available for Consulting
            </div>

            <h1 className="font-display text-4xl font-bold leading-tight tracking-tight md:text-5xl lg:text-6xl xl:text-7xl">
              <span className="text-gradient">{heroContent.headline.split(" ").slice(0, 2).join(" ")}</span>
              <br />
              {heroContent.headline.split(" ").slice(2).join(" ")}
            </h1>

            <p className="mt-6 max-w-2xl text-lg text-muted-foreground md:text-xl">
              {heroContent.subtitle}
            </p>

            <div className="mt-10 flex flex-wrap gap-4">
              <Button size="lg" asChild>
                <a href={siteConfig.cvPath} download>
                  <Download className="h-4 w-4" />
                  Download CV
                </a>
              </Button>
              <Button variant="secondary" size="lg" asChild>
                <a href="#contact">
                  <Calendar className="h-4 w-4" />
                  Schedule Consultation
                </a>
              </Button>
              <Button variant="outline" size="lg" asChild>
                <a href="#contact">
                  <Mail className="h-4 w-4" />
                  Contact Me
                </a>
              </Button>
            </div>

            <div className="mt-16 grid grid-cols-3 gap-6 border-t border-border pt-8 md:max-w-lg">
              {heroContent.stats.map((stat, i) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.3 + i * 0.1 }}
                >
                  <p className="font-display text-2xl font-bold text-accent md:text-3xl">
                    {stat.value}
                  </p>
                  <p className="mt-1 text-xs text-muted-foreground md:text-sm">
                    {stat.label}
                  </p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1 }}
          className="mt-20 hidden lg:block"
        >
          <p className="mb-4 text-xs uppercase tracking-widest text-muted-foreground">
            Trusted by organizations across sectors
          </p>
          <div className="flex flex-wrap gap-3">
            {targetClients.slice(0, 6).map((client) => (
              <span
                key={client}
                className="rounded-lg border border-border bg-card/50 px-4 py-2 text-xs text-muted-foreground"
              >
                {client}
              </span>
            ))}
          </div>
        </motion.div>
      </div>

      <motion.a
        href="#about"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 text-muted-foreground transition-colors hover:text-accent"
        aria-label="Scroll to about section"
      >
        <ChevronDown className="h-6 w-6 animate-bounce" />
      </motion.a>
    </section>
  );
}
