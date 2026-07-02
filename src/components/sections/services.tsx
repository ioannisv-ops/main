"use client";

import { motion } from "framer-motion";
import {
  ShieldCheck,
  ClipboardCheck,
  AlertTriangle,
  Building2,
  Camera,
  KeyRound,
  UserCheck,
  Anchor,
  GraduationCap,
  RefreshCw,
  Siren,
} from "lucide-react";
import { services } from "@/data/site-config";
import { SectionHeader } from "@/components/ui/section-header";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";

const iconMap = {
  ShieldCheck,
  ClipboardCheck,
  AlertTriangle,
  Building2,
  Camera,
  KeyRound,
  UserCheck,
  Anchor,
  GraduationCap,
  RefreshCw,
  Siren,
} as const;

export function ServicesSection() {
  return (
    <section id="services" className="section-padding bg-card/30">
      <div className="container-max">
        <SectionHeader
          title="Consulting Services"
          subtitle="Strategic security consulting tailored to your organization's risk profile"
        />

        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((service, i) => {
            const Icon = iconMap[service.icon as keyof typeof iconMap] || ShieldCheck;
            return (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.05 }}
              >
                <Card className="group h-full transition-all hover:border-accent/30">
                  <CardHeader className="pb-3">
                    <div className="mb-3 flex h-10 w-10 items-center justify-center rounded-lg bg-accent/10 transition-colors group-hover:bg-accent/20">
                      <Icon className="h-5 w-5 text-accent" />
                    </div>
                    <CardTitle className="text-base">{service.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <CardDescription>{service.description}</CardDescription>
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
