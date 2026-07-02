"use client";

import { motion } from "framer-motion";
import { aboutContent } from "@/data/site-config";
import { SectionHeader } from "@/components/ui/section-header";
import { Card, CardContent } from "@/components/ui/card";

export function AboutSection() {
  return (
    <section id="about" className="section-padding">
      <div className="container-max">
        <SectionHeader
          title={aboutContent.title}
          subtitle={aboutContent.subtitle}
        />

        <div className="grid gap-12 lg:grid-cols-2">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="space-y-6"
          >
            {aboutContent.bio.map((paragraph, i) => (
              <p key={i} className="text-muted-foreground leading-relaxed">
                {paragraph}
              </p>
            ))}

            <div className="grid grid-cols-2 gap-4 pt-4">
              {[
                { label: "Cyber + Physical Integration", value: "Unified Approach" },
                { label: "Operational Experience", value: "Field-Tested" },
              ].map((item) => (
                <Card key={item.label} className="p-4">
                  <p className="text-xs text-accent">{item.value}</p>
                  <p className="mt-1 text-sm font-medium">{item.label}</p>
                </Card>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h3 className="mb-6 font-display text-xl font-semibold">
              Professional Journey
            </h3>
            <div className="relative space-y-0">
              <div className="absolute left-[7px] top-2 h-[calc(100%-16px)] w-px bg-gradient-to-b from-accent via-accent-secondary to-transparent" />
              {aboutContent.timeline.map((item, i) => (
                <motion.div
                  key={item.year}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className="relative pb-8 pl-8 last:pb-0"
                >
                  <div className="absolute left-0 top-1.5 h-3.5 w-3.5 rounded-full border-2 border-accent bg-background" />
                  <Card>
                    <CardContent className="p-5">
                      <p className="text-xs font-medium text-accent">{item.year}</p>
                      <h4 className="mt-1 font-display font-semibold">{item.title}</h4>
                      <p className="text-sm text-muted-foreground">{item.organization}</p>
                      <p className="mt-2 text-sm text-muted-foreground">{item.description}</p>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
