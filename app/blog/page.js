import React from "react";
import Link from "next/link";
import { getSEOTags } from "@/libs/seo";
import { posts } from "./posts";

export const metadata = getSEOTags({
  title: "Blog - Mubarak Muse",
  description: "Writing on startups, hiring, engineering, and building products.",
  keywords: ["Mubarak Muse", "blog", "startups", "hiring", "software engineering"],
  canonicalUrlRelative: "/blog",
  openGraph: {
    title: "Blog - Mubarak Muse",
    description: "Writing on startups, hiring, engineering, and building products.",
    url: "/blog",
  },
});

function PostLink({ post, children, onDarkCard = false }) {
  const className = onDarkCard
    ? "font-semibold text-gray-100 underline decoration-gray-400 underline-offset-2 transition-colors hover:decoration-white"
    : "font-semibold text-gray-900 underline decoration-gray-300 underline-offset-2 transition-colors hover:decoration-gray-900";

  if (post.external) {
    return (
      <a href={post.href} target="_blank" rel="noopener noreferrer" className={className}>
        {children}
        <span className="ml-1 text-[10px] font-normal opacity-50" aria-hidden>
          ↗
        </span>
      </a>
    );
  }

  return (
    <Link href={post.href} className={className}>
      {children}
    </Link>
  );
}

function postCardStyles(index) {
  const onDarkCard = index % 2 === 0;
  return {
    onDarkCard,
    article: onDarkCard
      ? "border-gray-600 bg-gray-700"
      : "border-gray-200 bg-white",
    date: onDarkCard ? "text-gray-400" : "text-gray-400",
    excerpt: onDarkCard ? "text-gray-300" : "text-gray-500",
  };
}

const Blog = () => {
  return (
    <div className="min-h-screen bg-white text-gray-900">
      <div className="mx-auto max-w-lg px-6 py-12 sm:py-16">
        <Link
          href="/"
          className="mb-8 inline-block text-sm text-gray-500 transition-colors hover:text-gray-900"
        >
          ← Mubarak Muse
        </Link>

        <header className="mb-10">
          <h1 className="text-2xl font-bold tracking-tight">Blog</h1>
          <p className="mt-2 text-sm leading-relaxed text-gray-600">
            Notes on startups, hiring, and building.
          </p>
        </header>

        {posts.length === 0 ? (
          <p className="text-sm text-gray-500">Posts coming soon.</p>
        ) : (
          <ul className="space-y-3">
            {posts.map((post, index) => {
              const styles = postCardStyles(index);
              return (
                <li key={post.slug}>
                  <article
                    className={`rounded-lg border px-4 py-4 transition-shadow hover:shadow-md ${styles.article}`}
                  >
                    <time className={`text-xs ${styles.date}`}>{post.date}</time>
                    <h2 className="mt-1 text-sm font-semibold">
                      <PostLink post={post} onDarkCard={styles.onDarkCard}>
                        {post.title}
                      </PostLink>
                    </h2>
                    <p className={`mt-1.5 text-sm leading-relaxed ${styles.excerpt}`}>
                      {post.excerpt}
                    </p>
                  </article>
                </li>
              );
            })}
          </ul>
        )}
      </div>
    </div>
  );
};

export default Blog;
