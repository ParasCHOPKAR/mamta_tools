import React from 'react';
import type { Metadata } from 'next';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { 
  Calendar, Clock, User, ArrowLeft, ChevronRight, 
  Share2, Tag, BookOpen, Send 
} from 'lucide-react';
import { BLOG_POSTS, PRODUCTS } from '@/data/siteData';
import { BreadcrumbJsonLd } from '@/components/JsonLd';

interface BlogPostPageProps {
  params: {
    slug: string;
  };
}

export async function generateStaticParams() {
  return BLOG_POSTS.map((post) => ({
    slug: post.slug,
  }));
}

export async function generateMetadata({ params }: BlogPostPageProps): Promise<Metadata> {
  const post = BLOG_POSTS.find((p) => p.slug === params.slug);
  if (!post) {
    return { title: 'Post Not Found' };
  }

  return {
    title: `${post.title} | MAMTA Tools Technical Blog`,
    description: post.excerpt,
    keywords: post.tags,
    openGraph: {
      title: post.title,
      description: post.excerpt,
      type: 'article',
      publishedTime: post.date,
      authors: [post.author],
    },
    alternates: {
      canonical: `https://www.mamtatools.net/blog/${post.slug}`,
    },
  };
}

export default function BlogPostPage({ params }: BlogPostPageProps) {
  const post = BLOG_POSTS.find((p) => p.slug === params.slug);
  if (!post) {
    notFound();
  }

  const breadcrumbs = [
    { name: 'Home', url: 'https://www.mamtatools.net' },
    { name: 'Blog', url: 'https://www.mamtatools.net/blog' },
    { name: post.title, url: `https://www.mamtatools.net/blog/${post.slug}` },
  ];

  return (
    <>
      <BreadcrumbJsonLd items={breadcrumbs} />
      <div className="w-full bg-white">
        {/* Breadcrumb Bar */}
        <div className="bg-steel-100 py-2.5 px-4 sm:px-6 border-b border-steel-200 text-xs text-steel-600">
          <div className="max-w-4xl mx-auto flex items-center gap-2">
            <Link href="/" className="hover:text-navy-900">Home</Link>
            <ChevronRight className="w-3.5 h-3.5 text-steel-400" />
            <Link href="/blog" className="hover:text-navy-900">Blog</Link>
            <ChevronRight className="w-3.5 h-3.5 text-steel-400" />
            <span className="font-semibold text-navy-900 truncate max-w-sm">{post.title}</span>
          </div>
        </div>

        {/* Article Header */}
        <header className="py-14 bg-navy-950 text-white bg-grid-pattern">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 space-y-4">
            <div className="flex items-center gap-3 text-xs">
              <span className="px-3 py-1 rounded-full bg-brand-orange text-white font-bold">
                {post.category}
              </span>
              <span className="flex items-center gap-1 text-steel-300">
                <Clock className="w-3.5 h-3.5" /> {post.readTime}
              </span>
              <span className="flex items-center gap-1 text-steel-300">
                <Calendar className="w-3.5 h-3.5" /> {post.date}
              </span>
            </div>

            <h1 className="text-2xl sm:text-4xl font-extrabold text-white font-heading leading-tight">
              {post.title}
            </h1>

            <div className="flex items-center gap-3 pt-2 text-xs text-steel-300">
              <div className="w-9 h-9 rounded-full bg-brand-orange text-white flex items-center justify-center font-bold text-sm">
                {post.author.charAt(0)}
              </div>
              <div>
                <div className="font-bold text-white">{post.author}</div>
                <div className="text-[11px] text-steel-400">{post.authorRole}</div>
              </div>
            </div>
          </div>
        </header>

        {/* Main Article Body */}
        <article className="py-14 max-w-4xl mx-auto px-4 sm:px-6">
          <div className="prose max-w-none text-steel-800 text-sm sm:text-base leading-relaxed space-y-6">
            <div className="p-4 bg-steel-50 rounded-xl border-l-4 border-brand-orange text-steel-700 italic text-sm">
              {post.excerpt}
            </div>

            {post.content.map((paragraph, idx) => (
              <p key={idx} className="leading-relaxed">
                {paragraph}
              </p>
            ))}

            {/* In-Article Contextual Tooling Recommendation */}
            <div className="my-8 p-6 bg-steel-50 rounded-xl border border-steel-200">
              <h3 className="text-base font-bold text-navy-900 mb-2">
                Recommended Tooling Solution For This Operation:
              </h3>
              <p className="text-xs text-steel-600 mb-4">
                Explore MAMTA Tools high-performance indexable cutters engineered with sub-micron runout and internal through-coolant ports.
              </p>
              <div className="flex flex-wrap gap-3">
                <Link
                  href="/products/category/high-feed-milling-cutters"
                  className="px-4 py-2 bg-brand-orange hover:bg-brand-orange-hover text-white text-xs font-bold rounded-lg transition-colors"
                >
                  View High Feed Cutters
                </Link>
                <Link
                  href="/products/category/u-drills-core-drills"
                  className="px-4 py-2 bg-navy-900 hover:bg-navy-800 text-white text-xs font-bold rounded-lg transition-colors"
                >
                  Explore U-Drills
                </Link>
                <Link
                  href="/request-a-quote"
                  className="px-4 py-2 bg-white text-navy-900 border border-steel-300 hover:border-navy-900 text-xs font-semibold rounded-lg transition-colors"
                >
                  Request Application Consultation
                </Link>
              </div>
            </div>
          </div>

          {/* Tags */}
          <div className="pt-8 mt-8 border-t border-steel-200 flex flex-wrap items-center gap-2">
            <span className="text-xs font-semibold text-steel-500 mr-2">Topic Tags:</span>
            {post.tags.map((tag, idx) => (
              <span key={idx} className="text-xs bg-steel-100 text-navy-900 px-3 py-1 rounded-full font-medium">
                #{tag}
              </span>
            ))}
          </div>

          {/* Back to Blog */}
          <div className="pt-8 mt-4">
            <Link
              href="/blog"
              className="inline-flex items-center gap-2 text-xs font-bold text-brand-orange hover:underline"
            >
              <ArrowLeft className="w-4 h-4" /> Back to Knowledge Centre
            </Link>
          </div>
        </article>
      </div>
    </>
  );
}

