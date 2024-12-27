import { Briefcase } from 'lucide-react';

function ExperienceSection() {
  return (
    <section className="py-20 bg-gray-100 dark:bg-gray-800 text-gray-900 dark:text-white px-4" id="experience">
      <div className="max-w-4xl mx-auto">
        <div className="flex items-center gap-2 mb-8">
          <Briefcase className="text-blue-500" />
          <h2 className="text-3xl font-bold">Experience</h2>
        </div>
        <div className="space-y-8">
          {/* 
          <div className="border-l-2 border-blue-500 pl-4 hover:border-blue-600 transition-colors">
            <h3 className="text-xl font-bold text-gray-900 dark:text-white">Senior Software Developer</h3>
            <p className="text-gray-600 dark:text-gray-400">Company Name • 2020 - Present</p>
            <p className="text-gray-700 dark:text-gray-300 mt-2">
              Modern web application development, technical leadership and mentoring.
            </p>
          </div>
          */}
          <div className="border-l-2 border-blue-500 pl-4 hover:border-blue-600 transition-colors">
            <h3 className="text-xl font-bold text-gray-900 dark:text-white">Full-stack Developer</h3>
            <p className="text-gray-600 dark:text-gray-400">
              ITG Information Technology Group · Full-time • October 2023 - Present
            </p>
            <ul className="list-disc list-inside text-gray-700 dark:text-gray-300 mt-2 space-y-2">
              <li>Developing modern web applications using React, Next.js, and TypeScript</li>
              <li>Building backend systems with Java, Spring Boot, and JSP technologies</li>
              <li>Implementing RESTful APIs and GraphQL integrations</li>
              <li>Database management using PostgreSQL and MongoDB</li>
              <li>Performance optimization and SEO improvements</li>
              <li>Implementing responsive design principles and enhancing user experience</li>
              <li>Project management using Agile/Scrum methodologies</li>
              <li>Version control with Git and CI/CD pipeline management</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}

export default ExperienceSection; 