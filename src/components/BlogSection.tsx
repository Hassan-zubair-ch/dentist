import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, CornerDownRight } from 'lucide-react';
import { Link } from 'react-router-dom';

export const BlogSection: React.FC = () => {
  const posts = [
    {
      id: 1,
      image: 'https://images.unsplash.com/photo-1606811841689-23dfddce3e95?auto=format&fit=crop&w=600&q=80',
      category: 'Dental Health',
      author: 'Cody Fisher',
      authorAvatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=120&q=80',
      readTime: '6 Min read',
      date: 'March 12, 2026',
      title: 'Professional Cleaning vs. Regular Brushing',
    },
    {
      id: 2,
      image: 'https://images.unsplash.com/photo-1629909613654-28e377c37b09?auto=format&fit=crop&w=600&q=80',
      category: 'Dental Health',
      author: 'Nataly Birch',
      authorAvatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=120&q=80',
      readTime: '10 Min read',
      date: 'March 12, 2026',
      title: "Important signs that indicate it's time to visit dentist",
    },
    {
      id: 3,
      image: 'https://images.unsplash.com/photo-1588776814546-1ffcf47267a5?auto=format&fit=crop&w=600&q=80',
      category: 'Dental Health',
      author: 'Sarah Johnson',
      authorAvatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=120&q=80',
      readTime: '10 Min read',
      date: 'March 12, 2026',
      title: 'Professional Cleaning vs. Regular Brushing',
    },
  ];

  const itemVariants = {
    hidden: { opacity: 0, y: 50, scale: 0.9, filter: 'blur(10px)' },
    show: { 
      opacity: 1, 
      y: 0, 
      scale: 1, 
      filter: 'blur(0px)', 
      transition: { duration: 0.8 } 
    }
  };

  return (
    <section className="py-20 px-4 md:px-8 lg:px-12 xl:px-16 w-full max-w-[2500px] mx-auto">
      {/* Blog Header */}
      <div className="max-w-4xl space-y-4 mb-16">
        <span className="inline-block px-4 py-1.5 rounded-full border border-slate-200 bg-white shadow-sm text-slate-700 text-xs font-bold tracking-wide">
          Our Insights
        </span>
        <h2 className="text-4xl sm:text-6xl font-extrabold text-slate-900 tracking-tight leading-[1.1]">
          Advanced Dental Care Ensures <br />
          Precision Comfort And Long <br />
          Lasting Healthy Smiles.
        </h2>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
        {posts.map((post) => (
          <motion.article
            key={post.id}
            variants={itemVariants}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            className="bg-white rounded-3xl p-5 border border-slate-100 shadow-xl shadow-slate-200/40 flex flex-col justify-between group hover:border-cyan-200 transition-colors"
          >
            <div className="space-y-6">
              {/* Image */}
              <div className="relative rounded-2xl overflow-hidden h-64 bg-slate-100">
                <img
                  src={post.image}
                  alt={post.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute top-4 left-4 bg-white px-4 py-1.5 rounded-full text-xs font-extrabold text-slate-900 shadow-sm">
                  {post.category}
                </div>
              </div>

              {/* Author & Date */}
              <div className="flex items-center justify-between text-xs px-1">
                <div className="flex items-center gap-3">
                  <img
                    src={post.authorAvatar}
                    alt={post.author}
                    className="w-10 h-10 rounded-full object-cover shadow-sm"
                  />
                  <div className="flex flex-col gap-0.5">
                    <span className="font-extrabold text-slate-900 text-[13px]">{post.author}</span>
                    <span className="font-semibold text-slate-400 text-[11px]">{post.readTime}</span>
                  </div>
                </div>
                <div className="flex items-center gap-1.5 text-slate-400 font-semibold text-[11px]">
                  <div className="w-1.5 h-1.5 rounded-full bg-slate-300"></div>
                  {post.date}
                </div>
              </div>

              {/* Title */}
              <h3 className="text-xl font-extrabold text-slate-900 group-hover:text-cyan-600 transition-colors leading-snug px-1">
                {post.title}
              </h3>
            </div>

            {/* Learn More Link */}
            <div className="pt-6 mt-6 border-t border-slate-100 flex items-center justify-start px-1">
              <Link
                to="/blog"
                className="inline-flex items-center gap-2 text-sm font-bold text-slate-900 group-hover:text-cyan-600 transition-colors"
              >
                <span>Learn More</span>
                <CornerDownRight className="w-4 h-4" />
              </Link>
            </div>
          </motion.article>
        ))}
      </div>

      {/* Read More Button */}
      <div className="flex justify-center mb-24">
        <Link
          to="/blog"
          className="inline-flex items-center gap-3 bg-cyan-500 hover:bg-cyan-600 text-white font-bold px-8 py-4 rounded-full transition-all duration-300 shadow-lg shadow-cyan-500/25 group text-sm"
        >
          <span>Read More Blog</span>
          <div className="w-8 h-8 rounded-full bg-white/20 flex items-center justify-center group-hover:translate-x-1 transition-transform">
            <ArrowRight className="w-4 h-4 text-white" />
          </div>
        </Link>
      </div>

    </section>
  );
};
