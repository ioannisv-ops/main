import Link from "next/link";
import { Shield, ArrowLeft } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function NotFound() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center px-6 text-center">
      <div className="mb-8 flex h-20 w-20 items-center justify-center rounded-2xl border border-accent/30 bg-accent/10 glow-accent">
        <Shield className="h-10 w-10 text-accent" />
      </div>
      <h1 className="font-display text-6xl font-bold text-gradient">404</h1>
      <h2 className="mt-4 font-display text-2xl font-semibold">Page Not Found</h2>
      <p className="mt-2 max-w-md text-muted-foreground">
        The requested resource could not be located. It may have been moved or does not exist.
      </p>
      <Button className="mt-8" asChild>
        <Link href="/">
          <ArrowLeft className="h-4 w-4" />
          Return Home
        </Link>
      </Button>
    </div>
  );
}
