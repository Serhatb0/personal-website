import { FolderGit2 } from 'lucide-react';
import { ProjectCard } from './ProjectCard';

const projects = [
  {
    title: 'E-Commerce Platform',
    description: 'Modern e-commerce platform with product management, cart operations and payment integration.',
    image: 'https://images.unsplash.com/photo-1557821552-17105176677c?auto=format&fit=crop&w=800&h=400',
    technologies: ['React', 'Node.js', 'MongoDB', 'Stripe'],
    githubUrl: '#',
    liveUrl: '#'
  },
  {
    title: 'Task Management App',
    description: 'Real-time task management and work tracking system developed for teams.',
    image: 'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&w=800&h=400',
    technologies: ['Next.js', 'TypeScript', 'Prisma', 'PostgreSQL'],
    githubUrl: '#',
    liveUrl: '#'
  },
  {
    title: 'Social Media Dashboard',
    description: 'Dashboard offering the ability to manage multiple social media accounts from a single panel.',
    image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=800&h=400',
    technologies: ['Vue.js', 'Firebase', 'TailwindCSS'],
    githubUrl: '#',
    liveUrl: '#'
  }
];

export function ProjectsSection() {
  return (
    <section className="py-20 bg-gray-100 dark:bg-gray-800 text-gray-900 dark:text-white px-4" id="projects">
      <div className="max-w-6xl mx-auto">
        <div className="flex items-center gap-2 mb-12">
          <FolderGit2 className="text-blue-500" />
          <h2 className="text-3xl font-bold">Projects</h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project) => (
            <ProjectCard key={project.title} {...project} />
          ))}
        </div>
      </div>
    </section>
  );
}