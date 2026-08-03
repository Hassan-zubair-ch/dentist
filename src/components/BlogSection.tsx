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

  return (
    <section className="py-20 px-4 md:px-8 lg:px-12 xl:px-16 w-full max-w-[2500px] mx-auto space-y-12">
      <div className="max-w-2xl">
        <span className="inline-block px-4 py-1.5 rounded-full bg-slate-100 text-slate-700 text-xs font-bold uppercase tracking-wider mb-3">
          Our Insights
        </span>
        <h2 className="text-3xl sm:text-5xl font-extrabold text-slate-900 tracking-tight leading-tight">
          Advanced Dental Care Ensures <br />
          <span className="text-cyan-600">Precision Comfort And Long Lasting Healthy Smiles.</span>
        </h2>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {posts.map((post, index) => (
          <motion.article
            key={post.id}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.15 }}
            className="bg-white rounded-[2rem] p-4 border border-slate-100 shadow-xl shadow-slate-200/40 flex flex-col justify-between group hover:border-cyan-200 transition-colors"
          >
            <div className="space-y-4">
              <div className="relative rounded-2xl overflow-hidden h-52 bg-slate-100">
                <img
                  src={post.image}
                  alt={post.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute top-3 left-3 bg-white/90 backdrop-blur-md px-3 py-1 rounded-full text-xs font-bold text-slate-800 shadow-sm">
                  {post.category}
                </div>
              </div>

              <div className="flex items-center justify-between text-xs text-slate-500 pt-1">
                <div className="flex items-center gap-2">
                  <img
                    src={post.authorAvatar}
                    alt={post.author}
                    className="w-6 h-6 rounded-full object-cover"
                  />
                  <span className="font-semibold text-slate-800">{post.author}</span>
                </div>
                <div className="flex items-center gap-2">
                  <span>{post.readTime}</span>
                  <span>•</span>
                  <span>{post.date}</span>
                </div>
              </div>

              <h3 className="text-lg font-bold text-slate-900 group-hover:text-cyan-600 transition-colors leading-snug">
                {post.title}
              </h3>
            </div>

            <div className="pt-4 mt-4 border-t border-slate-100 flex items-center justify-between">
              <Link
                to="/blog"
                className="inline-flex items-center gap-1.5 text-xs font-bold text-slate-700 group-hover:text-cyan-600 transition-colors"
              >
                <CornerDownRight className="w-3.5 h-3.5" />
                <span>Learn More</span>
              </Link>
            </div>
          </motion.article>
        ))}
      </div>

      <div className="flex justify-center pt-4">
        <Link
          to="/blog"
          className="inline-flex items-center gap-3 bg-cyan-500 hover:bg-cyan-600 text-white font-bold px-8 py-3.5 rounded-full transition-all duration-300 shadow-lg shadow-cyan-500/25 group text-sm"
        >
          <span>Read More Blog</span>
          <div className="w-6 h-6 rounded-full bg-white/20 flex items-center justify-center group-hover:translate-x-1 transition-transform">
            <ArrowRight className="w-3.5 h-3.5 text-white" />
          </div>
        </Link>
      </div>
    </section>
  );
};
