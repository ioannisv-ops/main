"use client";

import { motion } from "framer-motion";

interface SectionHeaderProps {
  title: string;
  subtitle?: string;
  id?: string;
  align?: "left" | "center";
}

export function SectionHeader({
  title,
  subtitle,
  id,
  align = "left",
}: SectionHeaderProps) {
  return (
    <motion.div
      id={id}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.5 }}
      className={`mb-16 ${align === "center" ? "text-center" : ""}`}
    >
      <p className="mb-3 text-sm font-medium uppercase tracking-widest text-accent">
        {title.split(" ")[0]}
      </p>
      <h2 className="font-display text-3xl font-bold tracking-tight md:text-4xl lg:text-5xl">
        {title}
      </h2>
      {subtitle && (
        <p className="mt-4 max-w-2xl text-lg text-muted-foreground">
          {subtitle}
        </p>
      )}
      <div
        className={`mt-6 h-1 w-16 rounded-full bg-gradient-to-r from-accent to-accent-secondary ${
          align === "center" ? "mx-auto" : ""
        }`}
      />
    </motion.div>
  );
}
