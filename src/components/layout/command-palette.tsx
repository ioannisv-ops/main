"use client";

import { useEffect, useState, useCallback } from "react";
import { useRouter } from "next/navigation";
import { Command } from "cmdk";
import { useTheme } from "next-themes";
import {
  Search,
  Shield,
  FileText,
  Sun,
  Moon,
  ArrowRight,
} from "lucide-react";
import { commandPaletteItems, siteConfig } from "@/data/site-config";
import { cn } from "@/lib/utils";

interface CommandPaletteProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

export function CommandPalette({ open, onOpenChange }: CommandPaletteProps) {
  const router = useRouter();
  const { setTheme, theme } = useTheme();
  const [search, setSearch] = useState("");

  const runCommand = useCallback(
    (href: string, type: string) => {
      onOpenChange(false);
      setSearch("");

      if (href === "#theme") {
        setTheme(theme === "dark" ? "light" : "dark");
        return;
      }

      if (href.startsWith("#")) {
        const el = document.querySelector(href);
        el?.scrollIntoView({ behavior: "smooth" });
        return;
      }

      if (type === "action" && href.endsWith(".pdf")) {
        window.open(href, "_blank");
        return;
      }

      router.push(href);
    },
    [onOpenChange, router, setTheme, theme]
  );

  useEffect(() => {
    const down = (e: KeyboardEvent) => {
      if (e.key === "k" && (e.metaKey || e.ctrlKey)) {
        e.preventDefault();
        onOpenChange(!open);
      }
      if (e.key === "Escape") onOpenChange(false);
    };
    document.addEventListener("keydown", down);
    return () => document.removeEventListener("keydown", down);
  }, [open, onOpenChange]);

  if (!open) return null;

  return (
    <div className="fixed inset-0 z-[150]">
      <div
        className="absolute inset-0 bg-background/80 backdrop-blur-sm"
        onClick={() => onOpenChange(false)}
      />
      <div className="absolute left-1/2 top-[20%] w-full max-w-lg -translate-x-1/2 px-4">
        <Command
          className="glass-card overflow-hidden rounded-xl shadow-2xl glow-accent"
          shouldFilter
        >
          <div className="flex items-center gap-3 border-b border-border px-4">
            <Search className="h-4 w-4 text-muted-foreground" />
            <Command.Input
              value={search}
              onValueChange={setSearch}
              placeholder="Search pages, sections, actions..."
              className="flex h-12 w-full bg-transparent text-sm outline-none placeholder:text-muted-foreground"
            />
            <kbd className="hidden rounded border border-border px-2 py-0.5 text-xs text-muted-foreground sm:inline">
              ESC
            </kbd>
          </div>
          <Command.List className="max-h-80 overflow-y-auto p-2">
            <Command.Empty className="py-8 text-center text-sm text-muted-foreground">
              No results found.
            </Command.Empty>
            <Command.Group heading="Navigation" className="px-2 py-1.5 text-xs text-muted-foreground">
              {commandPaletteItems
                .filter((item) => item.type === "navigation")
                .map((item) => (
                  <Command.Item
                    key={item.href}
                    value={item.label}
                    onSelect={() => runCommand(item.href, item.type)}
                    className={cn(
                      "flex cursor-pointer items-center justify-between rounded-lg px-3 py-2.5 text-sm",
                      "aria-selected:bg-accent/10 aria-selected:text-accent"
                    )}
                  >
                    <span className="flex items-center gap-2">
                      <Shield className="h-4 w-4" />
                      {item.label}
                    </span>
                    <ArrowRight className="h-3 w-3 opacity-50" />
                  </Command.Item>
                ))}
            </Command.Group>
            <Command.Group heading="Actions" className="px-2 py-1.5 text-xs text-muted-foreground">
              <Command.Item
                value="Download CV"
                onSelect={() => runCommand(siteConfig.cvPath, "action")}
                className="flex cursor-pointer items-center gap-2 rounded-lg px-3 py-2.5 text-sm aria-selected:bg-accent/10 aria-selected:text-accent"
              >
                <FileText className="h-4 w-4" />
                Download CV
              </Command.Item>
              <Command.Item
                value="Toggle Theme"
                onSelect={() => runCommand("#theme", "action")}
                className="flex cursor-pointer items-center gap-2 rounded-lg px-3 py-2.5 text-sm aria-selected:bg-accent/10 aria-selected:text-accent"
              >
                {theme === "dark" ? (
                  <Sun className="h-4 w-4" />
                ) : (
                  <Moon className="h-4 w-4" />
                )}
                Toggle Theme
              </Command.Item>
            </Command.Group>
          </Command.List>
        </Command>
      </div>
    </div>
  );
}
