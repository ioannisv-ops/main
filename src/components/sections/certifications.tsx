"use client";

import { motion } from "framer-motion";
import { Award } from "lucide-react";
import { certifications } from "@/data/site-config";
import { SectionHeader } from "@/components/ui/section-header";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

export function CertificationsSection() {
  return (
    <section id="certifications" className="section-padding bg-card/30">
      <div className="container-max">
        <SectionHeader
          title="Certifications & Training"
          subtitle="Professional credentials and continuous development across security disciplines"
        />

        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {certifications.map((cert, i) => (
            <motion.div
              key={cert.id}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.05 }}
            >
              <Card className="group h-full transition-all hover:border-accent/30">
                <CardContent className="flex flex-col items-center p-6 text-center">
                  <div className="mb-4 flex h-14 w-14 items-center justify-center rounded-full border-2 border-accent/30 bg-accent/5 transition-colors group-hover:border-accent group-hover:bg-accent/10">
                    <Award className="h-6 w-6 text-accent" />
                  </div>
                  <h3 className="font-display text-sm font-semibold">{cert.name}</h3>
                  <p className="mt-1 text-xs text-muted-foreground">{cert.issuer}</p>
                  <div className="mt-3 flex items-center gap-2">
                    <Badge variant={cert.status === "planned" ? "planned" : "success"}>
                      {cert.status === "planned" ? "Planned" : cert.year}
                    </Badge>
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
