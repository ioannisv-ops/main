import type { Metadata } from "next";
import Link from "next/link";
import { ArrowLeft, Calendar, ArrowRight } from "lucide-react";
import { getAllPosts } from "@/lib/blog";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

export const metadata: Metadata = {
  title: "Blog",
  description: "Security insights, research, and operational perspectives on integrated security.",
};

export default function BlogPage() {
  const posts = getAllPosts();

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

      <main className="container-max section-padding">
        <h1 className="font-display text-4xl font-bold md:text-5xl">Security Blog</h1>
        <p className="mt-4 max-w-2xl text-lg text-muted-foreground">
          Insights on cybersecurity, physical security, maritime operations, and integrated risk management.
        </p>

        <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {posts.map((post) => (
            <Link key={post.slug} href={`/blog/${post.slug}`}>
              <Card className="group h-full transition-all hover:border-accent/30">
                <CardHeader>
                  <div className="mb-2 flex items-center justify-between">
                    <Badge variant="default">{post.category}</Badge>
                    <span className="flex items-center gap-1 text-xs text-muted-foreground">
                      <Calendar className="h-3 w-3" />
                      {new Date(post.date).toLocaleDateString("en-US", {
                        year: "numeric",
                        month: "short",
                        day: "numeric",
                      })}
                    </span>
                  </div>
                  <CardTitle className="group-hover:text-accent transition-colors">
                    {post.title}
                  </CardTitle>
                  <CardDescription>{post.excerpt}</CardDescription>
                </CardHeader>
                <CardContent>
                  <span className="flex items-center gap-1 text-sm text-accent">
                    Read more
                    <ArrowRight className="h-3 w-3 transition-transform group-hover:translate-x-1" />
                  </span>
                </CardContent>
              </Card>
            </Link>
          ))}
        </div>

        {posts.length === 0 && (
          <p className="mt-12 text-center text-muted-foreground">
            No blog posts yet. Check back soon.
          </p>
        )}
      </main>
    </div>
  );
}
