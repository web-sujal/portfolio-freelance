import Link from "next/link";

import {
  ArrowRightIcon,
  ArrowUpRightIcon,
  ClockIcon,
} from "@/components/icons";
import { blog } from "@/lib/data";

const Blog = () => {
  return (
    <section
      id="blog"
      className="py-32 bg-[#151b2b]/20 border-t border-white/5"
    >
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div>
            <span className="text-indigo-400 font-mono text-sm tracking-wider uppercase mb-2 block">
              {blog.label}
            </span>

            <h2 className="text-3xl md:text-4xl font-bold text-white">
              {blog.title}
            </h2>
          </div>

          <div className="h-px flex-1 bg-white/5 hidden md:block mx-12 mb-4" />

          <Link
            href="#"
            className="group flex items-center gap-2 text-slate-400 hover:text-white transition-colors"
          >
            {blog.viewAll}
            <ArrowRightIcon
              weight="bold"
              className="group-hover:translate-x-1 transition-transform"
              aria-hidden
            />
          </Link>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {blog.posts.map((post) => (
            <article
              key={post.title}
              className={`group bg-[#151b2b] rounded-3xl p-8 border border-white/5 transition-all flex flex-col h-full relative overflow-hidden ${post.hoverClass}`}
            >
              <div
                className={`absolute -top-12 -right-12 w-32 h-32 rounded-full blur-2xl transition-all ${post.blobClass}`}
                aria-hidden
              />
              <div className="flex items-center justify-between mb-6">
                <span
                  className={`px-3 py-1 rounded-full text-[10px] font-bold tracking-widest uppercase border ${post.categoryClass}`}
                >
                  {post.category}
                </span>

                <div className="flex items-center gap-1.5 text-slate-500 text-xs font-medium">
                  <ClockIcon aria-hidden />
                  <span>{post.readTime}</span>
                </div>
              </div>

              <h3
                className={`text-xl font-bold text-white mb-4 transition-colors leading-snug ${post.titleHoverClass}`}
              >
                {post.title}
              </h3>

              <p className="text-slate-400 text-sm leading-relaxed mb-8 flex-grow">
                {post.excerpt}
              </p>

              <div className="pt-6 border-t border-white/5 flex items-center justify-between">
                <span className="text-xs font-mono text-slate-500">
                  {post.date}
                </span>

                <ArrowUpRightIcon
                  weight="bold"
                  className={`${post.arrowClass} opacity-0 group-hover:opacity-100 transition-all transform translate-y-2 group-hover:translate-y-0`}
                  aria-hidden
                />
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Blog;
