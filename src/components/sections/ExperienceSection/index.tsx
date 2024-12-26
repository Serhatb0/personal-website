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
              ITG Information Technology Group · Full-time • 2023 - Present
            </p>
            <p className="text-gray-700 dark:text-gray-300 mt-2">
              Frontend development, responsive design and performance optimization.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default ExperienceSection; 