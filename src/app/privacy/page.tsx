import type { Metadata } from "next";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import { Button } from "@/components/ui/button";
import { siteConfig } from "@/data/site-config";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description: "Privacy policy for the Integrated Security Specialist website.",
};

export default function PrivacyPage() {
  return (
    <div className="min-h-screen">
      <header className="border-b border-border bg-background/80 backdrop-blur-xl">
        <div className="container-max flex h-16 items-center px-6 md:px-8">
          <Button variant="ghost" size="sm" asChild>
            <Link href="/">
              <ArrowLeft className="h-4 w-4" />
              Back to Home
            </Link>
          </Button>
        </div>
      </header>

      <main className="container-max mx-auto max-w-3xl section-padding">
        <h1 className="font-display text-4xl font-bold">Privacy Policy</h1>
        <p className="mt-4 text-muted-foreground">Last updated: July 2026</p>

        <div className="mt-10 space-y-6 text-muted-foreground leading-relaxed">
          <section>
            <h2 className="mb-3 font-display text-xl font-semibold text-foreground">
              Information Collection
            </h2>
            <p>
              When you use the contact form on this website, we collect the information you
              provide, including your name, email address, and message content. This information
              is used solely to respond to your inquiry.
            </p>
          </section>

          <section>
            <h2 className="mb-3 font-display text-xl font-semibold text-foreground">
              Data Usage
            </h2>
            <p>
              Personal information submitted through this website is not sold, shared, or
              distributed to third parties except as required to deliver requested services or
              comply with legal obligations.
            </p>
          </section>

          <section>
            <h2 className="mb-3 font-display text-xl font-semibold text-foreground">
              Cookies & Analytics
            </h2>
            <p>
              This website may use essential cookies for theme preferences and basic functionality.
              No third-party tracking cookies are used without explicit consent.
            </p>
          </section>

          <section>
            <h2 className="mb-3 font-display text-xl font-semibold text-foreground">
              Contact
            </h2>
            <p>
              For privacy-related inquiries, contact{" "}
              <a href={`mailto:${siteConfig.email}`} className="text-accent hover:underline">
                {siteConfig.email}
              </a>
              .
            </p>
          </section>
        </div>
      </main>
    </div>
  );
}
