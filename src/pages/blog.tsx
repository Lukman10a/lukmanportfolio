import React, { useState, useMemo } from "react";
import { motion } from "framer-motion";
import { ArrowLeft, Search, BookOpen } from "lucide-react";
import Link from "next/link";
import useSmoothScroll from "@/hooks/useSmoothScroll";
import SEO from "@/components/SEO";
import BlogCard from "@/components/blog/BlogCard";
import BlogFilter from "@/components/blog/BlogFilter";
import { blogPosts, blogCategories, blogTags } from "@/data/blog";

export default function Blog() {
  // Enable smooth scrolling
  useSmoothScroll({ duration: 800 });

  // State for filters
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);
  const [selectedTags, setSelectedTags] = useState<string[]>([]);
  const [searchQuery, setSearchQuery] = useState("");

  // Filter posts based on selected filters and search query
  const filteredPosts = useMemo(() => {
    return blogPosts.filter((post) => {
      // Category filter
      if (selectedCategory && post.category !== selectedCategory) {
        return false;
      }

      // Tags filter
      if (selectedTags.length > 0) {
        const hasSelectedTag = selectedTags.some(tag => post.tags.includes(tag));
        if (!hasSelectedTag) {
          return false;
        }
      }

      // Search query
      if (searchQuery) {
        const query = searchQuery.toLowerCase();
        const matchesTitle = post.title.toLowerCase().includes(query);
        const matchesExcerpt = post.excerpt.toLowerCase().includes(query);
        const matchesTags = post.tags.some(tag => tag.toLowerCase().includes(query));
        
        if (!matchesTitle && !matchesExcerpt && !matchesTags) {
          return false;
        }
      }

      return true;
    });
  }, [selectedCategory, selectedTags, searchQuery]);

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1 }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: { y: 0, opacity: 1, transition: { duration: 0.5 } }
  };

  const handleCategoryChange = (category: string | null) => {
    setSelectedCategory(category);
  };

  const handleTagToggle = (tag: string) => {
    setSelectedTags(prev => 
      prev.includes(tag) 
        ? prev.filter(t => t !== tag)
        : [...prev, tag]
    );
  };

  const handleClearFilters = () => {
    setSelectedCategory(null);
    setSelectedTags([]);
    setSearchQuery("");
  };

  return (
    <>
      <SEO 
        title="Blog - Frontend Development Insights"
        description="Explore insights on modern web development, 3D web experiences, performance optimization, and building scalable component libraries."
        type="website"
      />
      <div className="min-h-screen bg-[#f8f4ec] dark:bg-[#121212] pt-24">
        <div className="max-w-7xl mx-auto px-6 py-12">
          {/* Header */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="mb-12"
          >
            <Link
              href="/"
              className="inline-flex items-center text-sm text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white mb-8 transition-colors duration-200"
            >
              <ArrowLeft className="w-4 h-4 mr-2" />
              Back to Home
            </Link>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-black dark:text-white mb-4">
              Blog & <span className="text-brand">Insights</span>
            </h1>
            <p className="text-lg text-gray-600 dark:text-gray-300 max-w-3xl">
              Sharing insights on modern web development, 3D web experiences, performance optimization, and building scalable component libraries. Join me on the journey of creating exceptional digital experiences.
            </p>
          </motion.div>

          {/* Search Bar */}
          <motion.div
            variants={itemVariants}
            initial="hidden"
            animate="visible"
            className="mb-8"
          >
            <div className="relative">
              <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
              <input
                type="text"
                placeholder="Search articles..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-12 pr-4 py-3 bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-xl focus:ring-2 focus:ring-brand focus:border-transparent transition-all duration-200"
              />
            </div>
          </motion.div>

          {/* Filters and Posts Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
            {/* Sidebar with Filters */}
            <div className="col-span-1 sm:col-span-5">
              <BlogFilter
                categories={blogCategories}
                tags={blogTags}
                selectedCategory={selectedCategory}
                selectedTags={selectedTags}
                onCategoryChange={handleCategoryChange}
                onTagToggle={handleTagToggle}
                onClearFilters={handleClearFilters}
              />
            </div>

            {/* Posts Grid */}
            <div className="lg:col-span-3 sm:col-span-5">
              {filteredPosts.length > 0 ? (
                <motion.div
                  variants={containerVariants}
                  initial="hidden"
                  animate="visible"
                  className="grid grid-cols-2 sm:grid-cols-1 gap-8"
                >
                  {filteredPosts.map((post, index) => (
                    <BlogCard key={post.id} post={post} index={index} />
                  ))}
                </motion.div>
              ) : (
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  className="text-center py-16"
                >
                  <BookOpen className="w-16 h-16 text-gray-400 mx-auto mb-4" />
                  <h3 className="text-xl font-semibold text-gray-600 dark:text-gray-400 mb-2">
                    No articles found
                  </h3>
                  <p className="text-gray-500 dark:text-gray-500">
                    Try adjusting your filters or search terms
                  </p>
                </motion.div>
              )}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
