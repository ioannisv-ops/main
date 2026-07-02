"use client";

import { motion } from "framer-motion";
import { Shield, Building2, Target } from "lucide-react";
import { expertiseCategories } from "@/data/site-config";
import { SectionHeader } from "@/components/ui/section-header";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const iconMap = {
  Shield,
  Building2,
  Target,
} as const;

export function ExpertiseSection() {
  return (
    <section id="expertise" className="section-padding bg-card/30">
      <div className="container-max">
        <SectionHeader
          title="Core Expertise"
          subtitle="Integrated capabilities across digital, physical, and protective security domains"
        />

        <div className="grid gap-8 lg:grid-cols-3">
          {expertiseCategories.map((category, i) => {
            const Icon = iconMap[category.icon as keyof typeof iconMap] || Shield;
            return (
              <motion.div
                key={category.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.15 }}
              >
                <Card className="group h-full transition-all duration-300 hover:border-accent/30 hover:glow-accent">
                  <CardHeader>
                    <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-accent/10 border border-accent/20 transition-colors group-hover:bg-accent/20">
                      <Icon className="h-6 w-6 text-accent" />
                    </div>
                    <CardTitle>{category.title}</CardTitle>
                    <CardDescription>{category.description}</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="flex flex-wrap gap-2">
                      {category.skills.map((skill) => (
                        <Badge key={skill} variant="muted">
                          {skill}
                        </Badge>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
