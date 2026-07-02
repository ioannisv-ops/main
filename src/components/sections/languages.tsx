"use client";

import { motion } from "framer-motion";
import { Globe } from "lucide-react";
import { languages } from "@/data/site-config";
import { SectionHeader } from "@/components/ui/section-header";
import { Card, CardContent } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";

export function LanguagesSection() {
  return (
    <section id="languages" className="section-padding bg-card/30">
      <div className="container-max">
        <SectionHeader
          title="Languages"
          subtitle="Professional communication across international environments"
          align="center"
        />

        <div className="mx-auto grid max-w-2xl gap-6 md:grid-cols-2">
          {languages.map((lang, i) => (
            <motion.div
              key={lang.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
            >
              <Card>
                <CardContent className="p-6">
                  <div className="mb-4 flex items-center gap-3">
                    <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-accent/10">
                      <Globe className="h-5 w-5 text-accent" />
                    </div>
                    <div>
                      <h3 className="font-display font-semibold">{lang.name}</h3>
                      <p className="text-sm text-muted-foreground">{lang.level}</p>
                    </div>
                  </div>
                  <Progress value={lang.proficiency} />
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
