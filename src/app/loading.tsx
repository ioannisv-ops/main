import { Shield } from "lucide-react";

export default function Loading() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center">
      <div className="flex h-16 w-16 items-center justify-center rounded-xl border border-accent/30 bg-accent/10 animate-pulse-glow">
        <Shield className="h-8 w-8 text-accent" />
      </div>
      <p className="mt-4 text-sm text-muted-foreground">Loading...</p>
    </div>
  );
}
