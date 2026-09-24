import type { Metadata } from "next";
import { notFound } from "next/navigation";

import { BlogArticle } from "@/components/blog/BlogArticle";
import { BLOG_POSTS, BLOG_SLUGS } from "@/data/blog";

type Params = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
  return BLOG_SLUGS.map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: Params): Promise<Metadata> {
  const { slug } = await params;
  const post = BLOG_POSTS[slug];

  if (!post) return {};

  return {
    title: `${post.title} — Code Flow`,
    description: post.description,
    alternates: { canonical: `/blog/${slug}` },
    openGraph: {
      type: "article",
      title: post.title,
      description: post.description,
      images: [{ url: post.image, alt: post.imageAlt }],
    },
  };
}

export default async function Page({ params }: Params) {
  const { slug } = await params;
  const post = BLOG_POSTS[slug];

  if (!post) notFound();

  return <BlogArticle post={post} />;
}
