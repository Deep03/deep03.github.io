import React from 'react';
import { motion } from 'framer-motion';
import { GlowCard } from '../components/GlowCard';
import { Calendar, Clock, Tag, ArrowRight } from 'lucide-react';

export const Blog: React.FC = () => {
  // Mock blog posts - ready for CMS integration
  const blogPosts = [
    {
      id: 1,
      title: 'Building Scalable Backend Systems: Lessons from the Trenches',
      excerpt: 'Deep dive into the architectural decisions and trade-offs involved in building systems that scale from hundreds to millions of users. Exploring microservices, database sharding, and event-driven architectures.',
      date: '2024-03-15',
      readTime: '8 min read',
      tags: ['Backend', 'Scalability', 'Architecture'],
      featured: true,
    },
    {
      id: 2,
      title: 'The Art of API Design: RESTful Principles and Beyond',
      excerpt: 'A comprehensive guide to designing APIs that developers love to use. Covering REST principles, GraphQL alternatives, and real-world examples from popular APIs.',
      date: '2024-03-08',
      readTime: '6 min read',
      tags: ['API', 'REST', 'Design'],
      featured: false,
    },
    {
      id: 3,
      title: 'Database Optimization: From Slow Queries to Lightning Fast',
      excerpt: 'Practical strategies for optimizing database performance. Indexing strategies, query optimization, and when to consider database migrations.',
      date: '2024-02-28',
      readTime: '10 min read',
      tags: ['Database', 'Performance', 'SQL'],
      featured: false,
    },
    {
      id: 4,
      title: 'Machine Learning in Production: Beyond the Jupyter Notebook',
      excerpt: 'Taking ML models from experimentation to production. MLOps, model versioning, monitoring, and maintaining AI systems at scale.',
      date: '2024-02-20',
      readTime: '12 min read',
      tags: ['Machine Learning', 'MLOps', 'Production'],
      featured: true,
    },
    {
      id: 5,
      title: 'The Modern Developer Workflow: Tools and Practices',
      excerpt: 'An opinionated guide to developer productivity. From terminal setup to CI/CD pipelines, exploring tools that make coding more efficient.',
      date: '2024-02-10',
      readTime: '7 min read',
      tags: ['Productivity', 'Tools', 'Workflow'],
      featured: false,
    },
    {
      id: 6,
      title: 'Security First: Building Secure Backend Applications',
      excerpt: 'Essential security practices for backend developers. Authentication, authorization, data encryption, and common vulnerability prevention.',
      date: '2024-01-25',
      readTime: '9 min read',
      tags: ['Security', 'Authentication', 'Best Practices'],
      featured: false,
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        delayChildren: 0.3,
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1
    }
  };

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric',
    });
  };

  return (
    <div className="min-h-screen pt-16">
      {/* Header */}
      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-terminal-green via-terminal-blue to-terminal-purple bg-clip-text text-transparent font-mono">
              $ cat blog/
            </h1>
            <p className="text-xl text-terminal-muted max-w-3xl mx-auto font-mono">
              Thoughts on backend development, system architecture, and the ever-evolving world of technology.
              Documenting the journey from code to production.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Featured Posts */}
      <section className="pb-12 px-4">
        <div className="max-w-7xl mx-auto">
          <motion.h2
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="text-2xl font-bold mb-8 text-terminal-green font-mono"
          >
            $ grep -i "featured" posts/*
          </motion.h2>
          
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            className="grid md:grid-cols-2 gap-8"
          >
            {blogPosts
              .filter(post => post.featured)
              .map((post) => (
                <motion.div key={post.id} variants={itemVariants}>
                  <GlowCard className="h-full cursor-pointer group">
                    <div className="flex flex-col h-full">
                      <div className="flex items-center justify-between mb-4">
                        <span className="px-3 py-1 text-xs bg-terminal-green/20 text-terminal-green rounded-full font-mono">
                          Featured
                        </span>
                        <div className="flex items-center text-terminal-muted text-sm font-mono">
                          <Clock className="w-4 h-4 mr-1" />
                          {post.readTime}
                        </div>
                      </div>

                      <h3 className="text-xl font-bold mb-3 text-terminal-text group-hover:text-terminal-green transition-colors font-mono">
                        {post.title}
                      </h3>

                      <p className="text-terminal-muted leading-relaxed mb-6 flex-grow">
                        {post.excerpt}
                      </p>

                      <div className="flex items-center justify-between mt-auto">
                        <div className="flex items-center text-terminal-muted text-sm font-mono">
                          <Calendar className="w-4 h-4 mr-2" />
                          {formatDate(post.date)}
                        </div>
                        <ArrowRight className="w-4 h-4 text-terminal-green opacity-0 group-hover:opacity-100 transition-opacity" />
                      </div>

                      <div className="flex flex-wrap gap-2 mt-4">
                        {post.tags.map((tag) => (
                          <span
                            key={tag}
                            className="flex items-center px-2 py-1 text-xs bg-terminal-bg border border-terminal-border rounded-md text-terminal-blue font-mono"
                          >
                            <Tag className="w-3 h-3 mr-1" />
                            {tag}
                          </span>
                        ))}
                      </div>
                    </div>
                  </GlowCard>
                </motion.div>
              ))}
          </motion.div>
        </div>
      </section>

      {/* All Posts */}
      <section className="pb-20 px-4">
        <div className="max-w-7xl mx-auto">
          <motion.h2
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="text-2xl font-bold mb-8 text-terminal-blue font-mono"
          >
            $ ls -la posts/
          </motion.h2>

          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            className="grid md:grid-cols-2 lg:grid-cols-3 gap-6"
          >
            {blogPosts.map((post) => (
              <motion.div key={post.id} variants={itemVariants}>
                <motion.div
                  whileHover={{ y: -5 }}
                  className="bg-terminal-surface border border-terminal-border rounded-lg p-6 hover:border-terminal-green/50 transition-all duration-300 cursor-pointer group h-full flex flex-col"
                >
                  {post.featured && (
                    <span className="inline-block px-2 py-1 text-xs bg-terminal-green/20 text-terminal-green rounded-full font-mono mb-3 w-fit">
                      Featured
                    </span>
                  )}

                  <h3 className="text-lg font-bold mb-3 text-terminal-text group-hover:text-terminal-green transition-colors font-mono line-clamp-2">
                    {post.title}
                  </h3>

                  <p className="text-terminal-muted text-sm leading-relaxed mb-4 flex-grow line-clamp-3">
                    {post.excerpt}
                  </p>

                  <div className="flex items-center justify-between text-xs text-terminal-muted font-mono mb-4">
                    <div className="flex items-center">
                      <Calendar className="w-3 h-3 mr-1" />
                      {formatDate(post.date)}
                    </div>
                    <div className="flex items-center">
                      <Clock className="w-3 h-3 mr-1" />
                      {post.readTime}
                    </div>
                  </div>

                  <div className="flex flex-wrap gap-1">
                    {post.tags.slice(0, 2).map((tag) => (
                      <span
                        key={tag}
                        className="px-2 py-1 text-xs bg-terminal-bg border border-terminal-border rounded-md text-terminal-blue font-mono"
                      >
                        {tag}
                      </span>
                    ))}
                    {post.tags.length > 2 && (
                      <span className="px-2 py-1 text-xs bg-terminal-bg border border-terminal-border rounded-md text-terminal-muted font-mono">
                        +{post.tags.length - 2}
                      </span>
                    )}
                  </div>
                </motion.div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>
    </div>
  );
};