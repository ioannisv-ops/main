import Link from "next/link";
import { Shield, Download, Mail } from "lucide-react";
import { FaGithub } from "react-icons/fa";
import { siteConfig, navigation } from "@/data/site-config";

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t border-border bg-card/50">
      <div className="container-max section-padding pb-8">
        <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-4">
          <div className="lg:col-span-2">
            <Link href="/" className="flex items-center gap-2 font-display text-lg font-bold">
              <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-accent/10 border border-accent/30">
                <Shield className="h-4 w-4 text-accent" />
              </div>
              Integrated Security Specialist
            </Link>
            <p className="mt-4 max-w-md text-sm text-muted-foreground">
              Comprehensive security solutions spanning cybersecurity, physical
              security, maritime operations, and executive protection.
            </p>
            <div className="mt-6 flex gap-3">
              <a
                href={siteConfig.github}
                target="_blank"
                rel="noopener noreferrer"
                className="flex h-10 w-10 items-center justify-center rounded-lg border border-border transition-colors hover:border-accent/40 hover:bg-accent/10"
                aria-label="GitHub"
              >
                <FaGithub className="h-4 w-4" />
              </a>
              <a
                href={`mailto:${siteConfig.email}`}
                className="flex h-10 w-10 items-center justify-center rounded-lg border border-border transition-colors hover:border-accent/40 hover:bg-accent/10"
                aria-label="Email"
              >
                <Mail className="h-4 w-4" />
              </a>
            </div>
          </div>

          <div>
            <h3 className="mb-4 font-display font-semibold">Navigation</h3>
            <ul className="space-y-2">
              {navigation.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className="text-sm text-muted-foreground transition-colors hover:text-accent"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="mb-4 font-display font-semibold">Resources</h3>
            <ul className="space-y-2">
              <li>
                <a
                  href={siteConfig.cvPath}
                  download
                  className="flex items-center gap-2 text-sm text-muted-foreground transition-colors hover:text-accent"
                >
                  <Download className="h-3 w-3" />
                  Download CV
                </a>
              </li>
              <li>
                <Link
                  href="/blog"
                  className="text-sm text-muted-foreground transition-colors hover:text-accent"
                >
                  Blog
                </Link>
              </li>
              <li>
                <Link
                  href="/privacy"
                  className="text-sm text-muted-foreground transition-colors hover:text-accent"
                >
                  Privacy Policy
                </Link>
              </li>
              <li>
                <a
                  href="/feed.xml"
                  className="text-sm text-muted-foreground transition-colors hover:text-accent"
                >
                  RSS Feed
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 flex flex-col items-center justify-between gap-4 border-t border-border pt-8 sm:flex-row">
          <p className="text-sm text-muted-foreground">
            © {currentYear} Integrated Security Specialist. All rights reserved.
          </p>
          <p className="text-xs text-muted-foreground">
            Mission-ready security consulting · Greece
          </p>
        </div>
      </div>
    </footer>
  );
}
