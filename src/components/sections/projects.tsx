"use client";

import { motion } from "framer-motion";
import { ExternalLink, FileText, BookOpen } from "lucide-react";
import { FaGithub } from "react-icons/fa";
import { projects } from "@/data/site-config";
import { SectionHeader } from "@/components/ui/section-header";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

export function ProjectsSection() {
  return (
    <section id="projects" className="section-padding">
      <div className="container-max">
        <SectionHeader
          title="Projects & Portfolio"
          subtitle="Selected work across cybersecurity, infrastructure, automation, and research"
        />

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {projects.map((project, i) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08 }}
            >
              <Card className="group flex h-full flex-col overflow-hidden transition-all hover:border-accent/30">
                <div className="relative flex h-40 items-center justify-center bg-gradient-to-br from-accent/5 to-accent-secondary/5 border-b border-border">
                  <div className="absolute inset-0 grid-bg opacity-50" />
                  <Badge variant="default" className="relative z-10">
                    {project.category}
                  </Badge>
                </div>
                <CardHeader>
                  <CardTitle className="text-lg">{project.title}</CardTitle>
                  <CardDescription>{project.description}</CardDescription>
                </CardHeader>
                <CardContent className="mt-auto">
                  <div className="mb-4 flex flex-wrap gap-1.5">
                    {project.technologies.map((tech) => (
                      <Badge key={tech} variant="muted" className="text-[10px]">
                        {tech}
                      </Badge>
                    ))}
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {project.github && (
                      <Button variant="ghost" size="sm" asChild>
                        <a href={project.github} target="_blank" rel="noopener noreferrer">
                          <FaGithub className="h-3 w-3" />
                          GitHub
                        </a>
                      </Button>
                    )}
                    <Button variant="ghost" size="sm" asChild>
                      <a href={project.docs}>
                        <FileText className="h-3 w-3" />
                        Docs
                      </a>
                    </Button>
                    <Button variant="ghost" size="sm" asChild>
                      <a href={project.caseStudy}>
                        <BookOpen className="h-3 w-3" />
                        Case Study
                        <ExternalLink className="h-3 w-3" />
                      </a>
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
