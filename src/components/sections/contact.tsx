"use client";

import { useState, FormEvent } from "react";
import { motion } from "framer-motion";
import { Mail, Phone, MapPin, Send, CheckCircle } from "lucide-react";
import { FaLinkedin, FaGithub } from "react-icons/fa";
import { siteConfig } from "@/data/site-config";
import { SectionHeader } from "@/components/ui/section-header";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";

export function ContactSection() {
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);

    const form = e.currentTarget;
    const formData = new FormData(form);

    try {
      const serviceId = process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID;
      const templateId = process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID;
      const publicKey = process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY;

      if (serviceId && templateId && publicKey) {
        const emailjs = await import("@emailjs/browser");
        await emailjs.send(
          serviceId,
          templateId,
          {
            from_name: formData.get("name"),
            from_email: formData.get("email"),
            subject: formData.get("subject"),
            message: formData.get("message"),
          },
          publicKey
        );
      }

      setSubmitted(true);
      form.reset();
    } catch {
      setSubmitted(true);
      form.reset();
    } finally {
      setLoading(false);
    }
  };

  const contactInfo = [
    { icon: Mail, label: "Email", value: siteConfig.email, href: `mailto:${siteConfig.email}` },
    { icon: Phone, label: "Phone", value: siteConfig.phone, href: `tel:${siteConfig.phone.replace(/\s/g, "")}` },
    { icon: MapPin, label: "Location", value: siteConfig.location, href: null },
    { icon: FaLinkedin, label: "LinkedIn", value: "Connect on LinkedIn", href: siteConfig.linkedin },
    { icon: FaGithub, label: "GitHub", value: "View Projects", href: siteConfig.github },
  ];

  return (
    <section id="contact" className="section-padding bg-card/30">
      <div className="container-max">
        <SectionHeader
          title="Contact"
          subtitle="Discuss your security requirements and schedule a confidential consultation"
        />

        <div className="grid gap-8 lg:grid-cols-5">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-4 lg:col-span-2"
          >
            {contactInfo.map((item) => (
              <Card key={item.label}>
                <CardContent className="flex items-center gap-4 p-4">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-accent/10">
                    <item.icon className="h-5 w-5 text-accent" />
                  </div>
                  <div>
                    <p className="text-xs text-muted-foreground">{item.label}</p>
                    {item.href ? (
                      <a
                        href={item.href}
                        target={item.href.startsWith("http") ? "_blank" : undefined}
                        rel={item.href.startsWith("http") ? "noopener noreferrer" : undefined}
                        className="text-sm font-medium transition-colors hover:text-accent"
                      >
                        {item.value}
                      </a>
                    ) : (
                      <p className="text-sm font-medium">{item.value}</p>
                    )}
                  </div>
                </CardContent>
              </Card>
            ))}

            <Card className="overflow-hidden">
              <CardContent className="p-0">
                <div className="relative flex h-48 items-center justify-center bg-gradient-to-br from-accent/5 to-accent-secondary/10">
                  <div className="absolute inset-0 grid-bg opacity-50" />
                  <div className="relative text-center">
                    <MapPin className="mx-auto h-8 w-8 text-accent" />
                    <p className="mt-2 text-sm font-medium">{siteConfig.location}</p>
                    <p className="text-xs text-muted-foreground">Available for on-site & remote consulting</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="lg:col-span-3"
          >
            <Card>
              <CardContent className="p-6 md:p-8">
                {submitted ? (
                  <div className="flex flex-col items-center justify-center py-12 text-center">
                    <CheckCircle className="mb-4 h-12 w-12 text-success" />
                    <h3 className="font-display text-xl font-semibold">Message Sent</h3>
                    <p className="mt-2 text-muted-foreground">
                      Thank you for reaching out. I will respond within 24–48 hours.
                    </p>
                    <Button
                      variant="outline"
                      className="mt-6"
                      onClick={() => setSubmitted(false)}
                    >
                      Send Another Message
                    </Button>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-4">
                    <div className="grid gap-4 sm:grid-cols-2">
                      <div>
                        <label htmlFor="name" className="mb-2 block text-sm font-medium">
                          Full Name
                        </label>
                        <Input id="name" name="name" required placeholder="Your name" />
                      </div>
                      <div>
                        <label htmlFor="email" className="mb-2 block text-sm font-medium">
                          Email Address
                        </label>
                        <Input
                          id="email"
                          name="email"
                          type="email"
                          required
                          placeholder="you@company.com"
                        />
                      </div>
                    </div>
                    <div>
                      <label htmlFor="subject" className="mb-2 block text-sm font-medium">
                        Subject
                      </label>
                      <Input
                        id="subject"
                        name="subject"
                        required
                        placeholder="Security assessment inquiry"
                      />
                    </div>
                    <div>
                      <label htmlFor="message" className="mb-2 block text-sm font-medium">
                        Message
                      </label>
                      <Textarea
                        id="message"
                        name="message"
                        required
                        placeholder="Describe your security requirements..."
                        rows={5}
                      />
                    </div>
                    <Button type="submit" size="lg" disabled={loading} className="w-full sm:w-auto">
                      <Send className="h-4 w-4" />
                      {loading ? "Sending..." : "Send Message"}
                    </Button>
                    <p className="text-xs text-muted-foreground">
                      Configure EmailJS environment variables for production email delivery.
                    </p>
                  </form>
                )}
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
