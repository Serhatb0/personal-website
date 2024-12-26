import { Calendar } from 'lucide-react';
import { Link } from 'react-router-dom';
import { BlogPost } from '../types/blog';

export function BlogCard({ id, title, excerpt, date, readTime, image, tags }: BlogPost) {
  return (
    <Link to={`/blog/${id}`} className="block">
      <div className="bg-white dark:bg-gray-700 rounded-lg overflow-hidden hover:transform hover:scale-[1.02] transition-all shadow-lg">
        <img src={image} alt={title} className="w-full h-48 object-cover" />
        <div className="p-6">
          <div className="flex items-center gap-2 text-gray-500 dark:text-gray-400 mb-3">
            <Calendar size={16} />
            <span>{date}</span>
            <span>•</span>
            <span>{readTime}</span>
          </div>
          <h3 className="text-xl font-bold mb-2 text-gray-900 dark:text-white">{title}</h3>
          <p className="text-gray-600 dark:text-gray-300 mb-4">{excerpt}</p>
          <div className="flex flex-wrap gap-2">
            {tags.map((tag) => (
              <span 
                key={tag} 
                className="bg-blue-100 dark:bg-blue-500/20 text-blue-600 dark:text-blue-400 px-2 py-1 rounded-full text-sm"
              >
                {tag}
              </span>
            ))}
          </div>
        </div>
      </div>
    </Link>
  );
}