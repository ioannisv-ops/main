"use client";

import { motion } from "framer-motion";
import { MapPin, Briefcase } from "lucide-react";
import { experience } from "@/data/site-config";
import { SectionHeader } from "@/components/ui/section-header";
import { Badge } from "@/components/ui/badge";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

export function ExperienceSection() {
  return (
    <section id="experience" className="section-padding">
      <div className="container-max">
        <SectionHeader
          title="Professional Experience"
          subtitle="A track record of delivering security outcomes in technical and operational environments"
        />

        <div className="relative">
          <div className="absolute left-4 top-0 hidden h-full w-px bg-border md:block lg:left-8" />

          <Accordion type="single" collapsible className="space-y-4">
            {experience.map((job, i) => (
              <motion.div
                key={job.id}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
              >
                <AccordionItem
                  value={job.id}
                  className="glass-card rounded-xl border px-6 md:ml-12 lg:ml-16"
                >
                  <AccordionTrigger className="hover:no-underline">
                    <div className="flex flex-col items-start gap-2 text-left md:flex-row md:items-center md:gap-6">
                      <div className="hidden md:absolute md:-left-12 md:flex md:h-8 md:w-8 md:items-center md:justify-center md:rounded-full md:border-2 md:border-accent md:bg-background lg:-left-16">
                        <Briefcase className="h-4 w-4 text-accent" />
                      </div>
                      <div>
                        <h3 className="font-display text-lg font-semibold">{job.role}</h3>
                        <p className="text-sm text-accent">{job.company}</p>
                      </div>
                      <div className="flex items-center gap-4 text-xs text-muted-foreground md:ml-auto md:mr-4">
                        <span>{job.period}</span>
                        <span className="flex items-center gap-1">
                          <MapPin className="h-3 w-3" />
                          {job.location}
                        </span>
                      </div>
                    </div>
                  </AccordionTrigger>
                  <AccordionContent>
                    <p className="mb-4">{job.summary}</p>

                    <div className="mb-4">
                      <h4 className="mb-2 text-sm font-semibold text-accent">Key Achievements</h4>
                      <ul className="list-inside list-disc space-y-1 text-sm">
                        {job.achievements.map((a) => (
                          <li key={a}>{a}</li>
                        ))}
                      </ul>
                    </div>

                    <div className="mb-4">
                      <h4 className="mb-2 text-sm font-semibold text-accent">Responsibilities</h4>
                      <ul className="list-inside list-disc space-y-1 text-sm">
                        {job.responsibilities.map((r) => (
                          <li key={r}>{r}</li>
                        ))}
                      </ul>
                    </div>

                    <div>
                      <h4 className="mb-2 text-sm font-semibold text-accent">Technologies</h4>
                      <div className="flex flex-wrap gap-2">
                        {job.technologies.map((tech) => (
                          <Badge key={tech} variant="secondary">
                            {tech}
                          </Badge>
                        ))}
                      </div>
                    </div>
                  </AccordionContent>
                </AccordionItem>
              </motion.div>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  );
}
