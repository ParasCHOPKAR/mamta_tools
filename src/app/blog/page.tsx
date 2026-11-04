import React from 'react';
import type { Metadata } from 'next';
import Link from 'next/link';
import { Calendar, Clock, User, ArrowRight, Tag, BookOpen } from 'lucide-react';
import { BLOG_POSTS } from '@/data/siteData';

export const metadata: Metadata = {
  title: "Blog & Machining Knowledge Centre | MAMTA Tools",
  description: "Technical CNC machining guides, indexable tooling best practices, high feed milling calculations, and carbide insert selection written by MAMTA Tools engineers in Pune.",
  keywords: [
    "CNC machining blog",
    "cutting tools technical articles",
    "high feed milling guide",
    "U-drill feeds speeds tips",
    "carbide insert grade selection"
  ]
};

export default function BlogListingPage() {
  return (
    <div className="w-full">
      <section className="bg-navy-950 text-white py-16 bg-grid-pattern border-b border-navy-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="max-w-3xl">
            <span className="text-xs font-bold uppercase tracking-wider text-brand-orange bg-brand-orange/10 px-3 py-1 rounded-full border border-brand-orange/30">
              Knowledge Centre & Engineering Insights
            </span>
            <h1 className="text-3xl sm:text-5xl font-extrabold text-white mt-4 font-heading">
              Machining & Tooling Articles
            </h1>
            <p className="text-base text-steel-300 mt-4 leading-relaxed">
              In-depth technical guides, tool life optimization strategies, and real-world machining solutions authored by our Pune R&D and tooling application engineers.
            </p>
          </div>
        </div>
      </section>

      {/* Blog Grid */}
      <section className="py-16 bg-steel-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {BLOG_POSTS.map((post) => (
              <article
                key={post.slug}
                className="bg-white rounded-2xl border border-steel-200 overflow-hidden shadow-card hover:shadow-card-hover transition-all flex flex-col justify-between"
              >
                <div className="p-6 sm:p-8">
                  <div className="flex items-center gap-3 text-xs text-steel-500 mb-3">
                    <span className="px-2.5 py-0.5 rounded-full bg-brand-orange/10 text-brand-orange font-bold">
                      {post.category}
                    </span>
                    <span className="flex items-center gap-1">
                      <Clock className="w-3.5 h-3.5" /> {post.readTime}
                    </span>
                    <span className="flex items-center gap-1">
                      <Calendar className="w-3.5 h-3.5" /> {post.date}
                    </span>
                  </div>

                  <h2 className="text-xl sm:text-2xl font-bold text-navy-900 leading-snug hover:text-brand-orange transition-colors">
                    <Link href={`/blog/${post.slug}`}>
                      {post.title}
                    </Link>
                  </h2>

                  <p className="text-xs sm:text-sm text-steel-600 mt-3 leading-relaxed">
                    {post.excerpt}
                  </p>

                  <div className="flex flex-wrap gap-1.5 mt-4">
                    {post.tags.map((tag, idx) => (
                      <span key={idx} className="text-[11px] bg-steel-100 text-steel-600 px-2 py-0.5 rounded font-medium">
                        #{tag}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="px-6 sm:px-8 py-4 bg-steel-50 border-t border-steel-100 flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <div className="w-8 h-8 rounded-full bg-navy-900 text-white flex items-center justify-center font-bold text-xs">
                      {post.author.charAt(0)}
                    </div>
                    <div>
                      <div className="text-xs font-bold text-navy-900">{post.author}</div>
                      <div className="text-[10px] text-steel-500">{post.authorRole}</div>
                    </div>
                  </div>

                  <Link
                    href={`/blog/${post.slug}`}
                    className="text-xs font-bold text-brand-orange hover:underline inline-flex items-center gap-1"
                  >
                    Read Article <ArrowRight className="w-3.5 h-3.5" />
                  </Link>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}

