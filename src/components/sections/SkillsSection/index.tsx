import { BookOpen } from 'lucide-react';

function SkillsSection() {
  const skills = [
    'React',
    'TypeScript',
    'Node.js',
    'Next.js',
    'Git',
    'Java',
    'Spring Boot',
    'Docker',
    'PostgreSQL',
    'MySQL',
    'Redis',
    'JSP'
  ];

  return (
    <section className="py-20 bg-gray-100 dark:bg-gray-800 text-gray-900 dark:text-white px-4" id="skills">
      <div className="max-w-4xl mx-auto">
        <div className="flex items-center gap-2 mb-8">
          <BookOpen className="text-blue-500" />
          <h2 className="text-3xl font-bold">Skills</h2>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {skills.map((skill) => (
            <div 
              key={skill} 
              className="bg-white dark:bg-gray-700 p-4 rounded-lg text-center 
                hover:bg-blue-50 dark:hover:bg-gray-600 
                hover:shadow-lg dark:hover:shadow-gray-700/50
                transform hover:scale-105
                transition-all duration-300
                border border-gray-100 dark:border-gray-600"
            >
              <span className="text-gray-800 dark:text-gray-200 font-medium">
                {skill}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default SkillsSection; 