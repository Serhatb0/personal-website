import { BookOpen } from 'lucide-react';
import { BlogCard } from '../../BlogCard';
import { blogPosts } from '../../../data/blogPosts';

export function BlogSection() {
  return (
    <section className="py-20 bg-gray-100 dark:bg-gray-800 text-gray-900 dark:text-white px-4" id="blog">
      <div className="max-w-6xl mx-auto">
        <div className="flex items-center gap-2 mb-12">
          <BookOpen className="text-blue-500" />
          <h2 className="text-3xl font-bold">Blog</h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogPosts.map((post) => (
            <BlogCard key={post.id} {...post} />
          ))}
        </div>
      </div>
    </section>
  );
}