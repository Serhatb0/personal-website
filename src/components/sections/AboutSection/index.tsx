import { User } from 'lucide-react';

function AboutSection() {
  return (
    <section className="py-20 bg-gray-100 dark:bg-gray-800 text-gray-900 dark:text-white px-4" id="about">
      <div className="max-w-4xl mx-auto">
        <div className="flex items-center gap-2 mb-8">
          <User className="text-blue-500" />
          <h2 className="text-3xl font-bold">About Me</h2>
        </div>
        <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
          Hello,
          I have been working as a Full Stack Developer for about 9 months, and I can proudly say that I have
          strong experience in Java and React during this time. My proficiency in modern technologies like
          Docker provides a significant advantage in optimizing software development processes and
          facilitating deployment. Additionally, I have in-depth experience in the Spring Framework and Spring
          Boot, further enhancing my skill set.
          I am eager to continuously improve myself and adapt to new technologies, which enhances my ability
          to contribute to projects and collaborate efficiently.
          Known for my innovative and solution-oriented approach, I have the ability to understand complex
          problems and generate effective solutions. With my communication and collaboration skills within the
          team, I contribute to the successful completion of projects.
        </p>
      </div>
    </section>
  );
}

export default AboutSection; 