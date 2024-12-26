import { ExternalLink, Github } from 'lucide-react';

interface ProjectCardProps {
  title: string;
  description: string;
  image: string;
  technologies: string[];
  githubUrl?: string;
  liveUrl?: string;
}

export function ProjectCard({ title, description, image, technologies, githubUrl, liveUrl }: ProjectCardProps) {
  return (
    <div className="bg-white dark:bg-gray-700 rounded-lg overflow-hidden hover:transform hover:scale-[1.02] transition-all shadow-lg">
      <img src={image} alt={title} className="w-full h-48 object-cover" />
      <div className="p-6">
        <h3 className="text-xl font-bold mb-2 text-gray-900 dark:text-white">{title}</h3>
        <p className="text-gray-600 dark:text-gray-300 mb-4">{description}</p>
        <div className="flex flex-wrap gap-2 mb-4">
          {technologies.map((tech) => (
            <span 
              key={tech} 
              className="bg-blue-100 dark:bg-blue-500/20 text-blue-600 dark:text-blue-400 px-2 py-1 rounded-full text-sm"
            >
              {tech}
            </span>
          ))}
        </div>
        <div className="flex gap-4">
          {githubUrl && (
            <a
              href={githubUrl}
              className="flex items-center gap-2 text-gray-600 dark:text-gray-300 hover:text-blue-500 dark:hover:text-blue-400 transition-colors"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Github size={20} />
              <span>Code</span>
            </a>
          )}
          {liveUrl && (
            <a
              href={liveUrl}
              className="flex items-center gap-2 text-gray-600 dark:text-gray-300 hover:text-blue-500 dark:hover:text-blue-400 transition-colors"
              target="_blank"
              rel="noopener noreferrer"
            >
              <ExternalLink size={20} />
              <span>Live</span>
            </a>
          )}
        </div>
      </div>
    </div>
  );
}