import { useParams, Link } from 'react-router-dom';
import { ArrowLeft, Calendar, Tag } from 'lucide-react';
import { blogPosts } from '../data/blogPosts';
import ReactMarkdown from 'react-markdown';

export function BlogPost() {
  const { id } = useParams();
  const post = blogPosts.find(post => post.id === id);

  if (!post) {
    return (
      <div className="min-h-screen bg-white dark:bg-[#0a0a0a] text-gray-900 dark:text-white p-8">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-2xl font-bold mb-4">Blog yazısı bulunamadı</h1>
          <Link 
            to="/" 
            className="inline-flex items-center gap-2 px-4 py-2 rounded-lg
              bg-blue-50 dark:bg-blue-900/20 
              text-blue-600 dark:text-blue-300
              hover:bg-blue-100 dark:hover:bg-blue-900/30
              hover:text-blue-700 dark:hover:text-blue-200
              transition-all duration-200 font-medium"
          >
            <ArrowLeft size={20} />
            Ana sayfaya dön
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-white dark:bg-[#0a0a0a]">
      <div className="h-96 relative">
        <img 
          src={post.image} 
          alt={post.title} 
          className="w-full h-full object-cover brightness-100 dark:brightness-75"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-transparent to-white dark:to-[#0a0a0a]"></div>
      </div>
      
      <div className="max-w-4xl mx-auto px-4 -mt-32 relative">
        <Link 
          to="/" 
          className="text-gray-700 dark:text-white hover:text-blue-600 dark:hover:text-blue-400 inline-flex items-center gap-2 mb-6 transition-colors"
        >
          <ArrowLeft size={20} />
          Ana sayfaya dön
        </Link>
        
        <article className="bg-white dark:bg-[#121212] rounded-lg p-8 shadow-xl">
          <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
            {post.title}
          </h1>
          
          <div className="flex items-center gap-4 text-gray-600 dark:text-white mb-8">
            <div className="flex items-center gap-2">
              <Calendar size={16} />
              <span>{post.date}</span>
            </div>
            <span>•</span>
            <span>{post.readTime}</span>
          </div>

          <div className="flex flex-wrap gap-2 mb-8">
            {post.tags.map((tag) => (
              <span 
                key={tag} 
                className="inline-flex items-center gap-1 bg-blue-50 dark:bg-blue-900/30 
                  text-blue-700 dark:text-white px-3 py-1 rounded-full"
              >
                <Tag size={14} />
                {tag}
              </span>
            ))}
          </div>

          <div className="prose prose-lg max-w-none
            dark:prose-invert
            prose-headings:text-gray-900 dark:prose-headings:text-white
            prose-p:text-gray-700 dark:prose-p:text-white
            prose-a:text-blue-600 dark:prose-a:text-white
            hover:prose-a:text-blue-700 dark:hover:prose-a:text-white
            prose-strong:text-gray-900 dark:prose-strong:text-white
            prose-em:text-gray-800 dark:prose-em:text-white
            prose-code:text-gray-800 dark:prose-code:text-white
            prose-pre:bg-gray-100 dark:prose-pre:bg-[#1a1a1a]
            prose-pre:text-gray-800 dark:prose-pre:text-white
            prose-ul:text-gray-700 dark:prose-ul:text-white
            prose-ol:text-gray-700 dark:prose-ol:text-white
            prose-li:text-gray-700 dark:prose-li:text-white
            prose-li:marker:text-gray-700 dark:prose-li:marker:text-white
            prose-blockquote:text-gray-700 dark:prose-blockquote:text-white
            prose-blockquote:border-l-gray-300 dark:prose-blockquote:border-l-white
            prose-hr:border-gray-200 dark:prose-hr:border-white
            prose-img:rounded-lg prose-img:shadow-lg
            prose-table:text-gray-700 dark:prose-table:text-white
            prose-th:text-gray-900 dark:prose-th:text-white
            prose-td:text-gray-700 dark:prose-td:text-white
            prose-figcaption:text-gray-600 dark:prose-figcaption:text-white
            [&>*]:text-gray-700 dark:[&>*]:text-white"
          >
            <ReactMarkdown>{post.content}</ReactMarkdown>
          </div>
        </article>
      </div>
    </div>
  );
}