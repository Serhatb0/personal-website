import { FolderGit2 } from 'lucide-react';
import { ProjectCard } from './ProjectCard';

const projects = [
  {
    title: 'E-Commerce Platform',
    description: 'Modern e-commerce platform with product management, cart operations and payment integration.',
    image: 'https://images.unsplash.com/photo-1557821552-17105176677c?auto=format&fit=crop&w=800&h=400',
    technologies: [
      'Spring Boot',
      'nextjs',
      'PostgreSQL',
      'Docker',
      'JWT',
      'Stripe'
    ],
    githubUrl: 'https://github.com/Serhatb0/biricik-e-commerce',
    liveUrl: '#'
  },
  {
    title: 'Car Rental Platform',
    description: 'Full-stack car rental platform with booking system, real-time availability tracking, and secure payment integration.',
    image: 'https://images.unsplash.com/photo-1550355291-bbee04a92027?auto=format&fit=crop&w=800&h=400',
    technologies: [
      'Spring Boot',
      'React.js',
      'PostgreSQL',
      'Docker',
      'JWT',
    ],
    githubUrl: 'https://github.com/Serhatb0/kodlamaio-rent-a-car',
    liveUrl: '#'
  },
  {
    title: 'OAuth2 Social Login System',
    description: 'Secure authentication system with Google OAuth2 integration, JWT token management, and role-based access control.',
    image: 'https://images.unsplash.com/photo-1614064641938-3bbee52942c7?auto=format&fit=crop&w=800&h=400',
    technologies: [
      'Spring Boot',
      'Spring Security',
      'OAuth2',
      'JWT',
      'PostgreSQL'
    ],
    githubUrl: 'https://github.com/Serhatb0/Spring-Boot-OAuth2-Social-Login-with-Google',
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