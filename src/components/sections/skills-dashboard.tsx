"use client";

import { motion } from "framer-motion";
import { skillMetrics } from "@/data/site-config";
import { SectionHeader } from "@/components/ui/section-header";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";

export function SkillsDashboardSection() {
  return (
    <section id="skills" className="section-padding">
      <div className="container-max">
        <SectionHeader
          title="Skills Dashboard"
          subtitle="Proficiency across integrated security domains"
        />

        <div className="grid gap-8 lg:grid-cols-2">
          <Card>
            <CardHeader>
              <CardTitle>Domain Proficiency</CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              {skillMetrics.map((skill, i) => (
                <motion.div
                  key={skill.category}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.08 }}
                >
                  <div className="mb-2 flex items-center justify-between">
                    <span className="text-sm font-medium">{skill.category}</span>
                    <span className="text-sm text-accent">{skill.level}%</span>
                  </div>
                  <Progress value={skill.level} indicatorColor={skill.color} />
                </motion.div>
              ))}
            </CardContent>
          </Card>

          <div className="grid grid-cols-2 gap-4">
            {[
              { label: "Security Assessments", value: "50+", sub: "Completed" },
              { label: "Incident Responses", value: "100+", sub: "Handled" },
              { label: "Facilities Secured", value: "25+", sub: "Audited" },
              { label: "Training Sessions", value: "30+", sub: "Delivered" },
            ].map((metric, i) => (
              <motion.div
                key={metric.label}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
              >
                <Card className="h-full text-center">
                  <CardContent className="flex flex-col items-center justify-center p-6">
                    <p className="font-display text-3xl font-bold text-gradient">
                      {metric.value}
                    </p>
                    <p className="mt-1 text-sm font-medium">{metric.label}</p>
                    <p className="text-xs text-muted-foreground">{metric.sub}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
