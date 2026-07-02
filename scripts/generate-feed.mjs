import fs from "fs";
import path from "path";
import matter from "gray-matter";
import { fileURLToPath } from "url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const postsDir = path.join(__dirname, "..", "content", "blog");
const siteUrl = "https://yourdomain.com";
const siteName = "Integrated Security Specialist";
const siteDescription =
  "Elite integrated security consultant combining cybersecurity, physical security, maritime security, and executive protection.";

function getPosts() {
  if (!fs.existsSync(postsDir)) return [];
  return fs
    .readdirSync(postsDir)
    .filter((f) => f.endsWith(".md"))
    .map((fileName) => {
      const slug = fileName.replace(/\.md$/, "");
      const content = fs.readFileSync(path.join(postsDir, fileName), "utf8");
      const { data } = matter(content);
      return { slug, title: data.title, date: data.date, excerpt: data.excerpt };
    })
    .sort((a, b) => (a.date < b.date ? 1 : -1));
}

const posts = getPosts();
const items = posts
  .map(
    (post) => `
    <item>
      <title>${post.title}</title>
      <link>${siteUrl}/blog/${post.slug}/</link>
      <guid>${siteUrl}/blog/${post.slug}/</guid>
      <pubDate>${new Date(post.date).toUTCString()}</pubDate>
      <description>${post.excerpt}</description>
    </item>`
  )
  .join("");

const feed = `<?xml version="1.0" encoding="UTF-8"?>
<rss version="2.0">
  <channel>
    <title>${siteName} Blog</title>
    <link>${siteUrl}/blog/</link>
    <description>${siteDescription}</description>
    ${items}
  </channel>
</rss>`;

fs.writeFileSync(path.join(__dirname, "..", "public", "feed.xml"), feed.trim());
console.log("Generated feed.xml");
