import React from "react";
import { motion } from "framer-motion";
import { ArrowLeft, Calendar, Clock, Twitter, Facebook, Linkedin } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import { useRouter } from "next/router";
import useSmoothScroll from "@/hooks/useSmoothScroll";
import SEO from "@/components/SEO";
import { blogPosts } from "@/data/blog";
import BlogCard from "@/components/blog/BlogCard";

export default function BlogPost() {
  const router = useRouter();
  const { slug } = router.query;

  // Enable smooth scrolling
  useSmoothScroll({ duration: 800 });

  // Find the current post
  const post = blogPosts.find(p => p.slug === slug);

  // Find related posts (same category or shared tags)
  const relatedPosts = blogPosts
    .filter(p => p.id !== post?.id && (
      p.category === post?.category || 
      p.tags.some(tag => post?.tags.includes(tag))
    ))
    .slice(0, 3);

  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    });
  };

  const shareUrl = typeof window !== 'undefined' ? window.location.href : '';
  const shareText = post ? `${post.title} - ${post.excerpt}` : '';

  const handleShare = (platform: string) => {
    const urls = {
      twitter: `https://twitter.com/intent/tweet?text=${encodeURIComponent(shareText)}&url=${encodeURIComponent(shareUrl)}`,
      facebook: `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(shareUrl)}`,
      linkedin: `https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(shareUrl)}`
    };

    if (urls[platform as keyof typeof urls]) {
      window.open(urls[platform as keyof typeof urls], '_blank', 'width=600,height=400');
    }
  };

  if (!post) {
    return (
      <div className="min-h-screen bg-[#f8f4ec] dark:bg-[#121212] pt-24">
        <div className="max-w-4xl mx-auto px-6 py-12 text-center">
          <h1 className="text-2xl font-bold text-black dark:text-white mb-4">
            Article not found
          </h1>
          <p className="text-gray-600 dark:text-gray-300 mb-8">
            The article you&apos;re looking for doesn&apos;t exist.
          </p>
          <Link
            href="/blog"
            className="inline-flex items-center text-brand hover:text-brand/80 transition-colors"
          >
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back to Blog
          </Link>
        </div>
      </div>
    );
  }

  return (
    <>
      <SEO 
        title={post.title}
        description={post.excerpt}
        image={post.featuredImage}
        type="article"
      />
      <div className="min-h-screen bg-[#f8f4ec] dark:bg-[#121212] pt-24">
        <div className="max-w-4xl mx-auto px-6 py-12">
          {/* Header */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="mb-12"
          >
            <Link
              href="/blog"
              className="inline-flex items-center text-sm text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white mb-8 transition-colors duration-200"
            >
              <ArrowLeft className="w-4 h-4 mr-2" />
              Back to Blog
            </Link>
            
            {/* Category Badge */}
            <div className="mb-6">
              <span className="bg-brand text-white px-3 py-1 rounded-full text-sm font-semibold">
                {post.category}
              </span>
            </div>

            {/* Title */}
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-black dark:text-white mb-6">
              {post.title}
            </h1>

            {/* Meta Information */}
            <div className="flex flex-wrap items-center gap-6 text-sm text-gray-500 dark:text-gray-400 mb-8">
              <div className="flex items-center gap-1">
                <Calendar className="w-4 h-4" />
                <span>{formatDate(post.publishedAt)}</span>
              </div>
              <div className="flex items-center gap-1">
                <Clock className="w-4 h-4" />
                <span>{post.readTime}</span>
              </div>
              <div className="flex items-center gap-1">
                <span>By {post.author}</span>
              </div>
            </div>

            {/* Excerpt */}
            <p className="text-lg text-gray-600 dark:text-gray-300 mb-8 leading-relaxed">
              {post.excerpt}
            </p>

            {/* Tags */}
            <div className="flex flex-wrap gap-2 mb-8">
              {post.tags.map((tag) => (
                <span
                  key={tag}
                  className="px-3 py-1 bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 text-sm rounded-full"
                >
                  {tag}
                </span>
              ))}
            </div>

            {/* Share Buttons */}
            <div className="flex items-center gap-4">
              <span className="text-sm text-gray-500 dark:text-gray-400">Share:</span>
              <div className="flex gap-2">
                <button
                  onClick={() => handleShare('twitter')}
                  className="p-2 bg-gray-100 dark:bg-gray-700 rounded-full hover:bg-gray-200 dark:hover:bg-gray-600 transition-colors"
                >
                  <Twitter className="w-4 h-4" />
                </button>
                <button
                  onClick={() => handleShare('facebook')}
                  className="p-2 bg-gray-100 dark:bg-gray-700 rounded-full hover:bg-gray-200 dark:hover:bg-gray-600 transition-colors"
                >
                  <Facebook className="w-4 h-4" />
                </button>
                <button
                  onClick={() => handleShare('linkedin')}
                  className="p-2 bg-gray-100 dark:bg-gray-700 rounded-full hover:bg-gray-200 dark:hover:bg-gray-600 transition-colors"
                >
                  <Linkedin className="w-4 h-4" />
                </button>
              </div>
            </div>
          </motion.div>

          {/* Featured Image */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mb-12"
          >
            <div className="relative aspect-[16/9] rounded-2xl overflow-hidden">
              <Image
                src={post.featuredImage}
                alt={post.title}
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 80vw, 800px"
              />
            </div>
          </motion.div>

          {/* Article Content */}
          <motion.article
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="prose prose-lg max-w-none dark:prose-invert prose-headings:text-black dark:prose-headings:text-white prose-p:text-gray-600 dark:prose-p:text-gray-300 prose-strong:text-brand prose-a:text-brand hover:prose-a:text-brand/80"
          >
            <div 
              className="markdown-content"
              dangerouslySetInnerHTML={{ 
                __html: post.content
                  .replace(/^# (.*$)/gim, '<h1 class="text-4xl font-bold mb-6">$1</h1>')
                  .replace(/^## (.*$)/gim, '<h2 class="text-3xl font-bold mb-4 mt-8">$1</h2>')
                  .replace(/^### (.*$)/gim, '<h3 class="text-2xl font-bold mb-3 mt-6">$1</h3>')
                  .replace(/^#### (.*$)/gim, '<h4 class="text-xl font-bold mb-2 mt-4">$1</h4>')
                  .replace(/\*\*(.*?)\*\*/g, '<strong class="text-brand">$1</strong>')
                  .replace(/\*(.*?)\*/g, '<em>$1</em>')
                  .replace(/```(\w+)?\n([\s\S]*?)```/g, '<pre class="bg-gray-100 dark:bg-gray-800 p-4 rounded-lg overflow-x-auto my-4"><code class="text-sm">$2</code></pre>')
                  .replace(/`([^`]+)`/g, '<code class="bg-gray-100 dark:bg-gray-800 px-2 py-1 rounded text-sm">$1</code>')
                  .replace(/\n\n/g, '</p><p class="mb-4">')
                  .replace(/^\n/, '<p class="mb-4">')
                  .replace(/\n$/, '</p>')
              }}
            />
          </motion.article>

          {/* Related Posts */}
          {relatedPosts.length > 0 && (
            <motion.section
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
              className="mt-16 pt-12 border-t border-gray-200 dark:border-gray-700"
            >
              <h2 className="text-3xl font-bold text-black dark:text-white mb-8">
                Related Articles
              </h2>
              <div className="grid grid-cols-2 sm:grid-cols-1 gap-8">
                {relatedPosts.map((relatedPost, index) => (
                  <BlogCard key={relatedPost.id} post={relatedPost} index={index} />
                ))}
              </div>
            </motion.section>
          )}
        </div>
      </div>
    </>
  );
} 