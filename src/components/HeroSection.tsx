import { Github, Linkedin, Mail } from 'lucide-react';

function HeroSection() {
  return (
    <header className="min-h-screen flex items-center justify-center bg-gray-50 dark:bg-transparent text-gray-900 dark:text-white px-4">
      <div className="max-w-4xl mx-auto text-center">
        <div className="mb-8">
          <img
            src="https://media.licdn.com/dms/image/v2/D4D03AQHhseZi4mu4Ug/profile-displayphoto-shrink_400_400/profile-displayphoto-shrink_400_400/0/1722957713726?e=1740614400&v=beta&t=bYxRlL6Sf2GjV0_rm_uC1ccS9uVM-yeNpNja5uMLi5Q"
            alt="Profile"
            className="w-32 h-32 rounded-full mx-auto mb-4 border-4 border-blue-500 shadow-lg"
          />
        </div>
        <h1 className="text-5xl font-bold mb-4 bg-gradient-to-r from-blue-500 to-blue-700 dark:from-blue-400 dark:to-blue-600 bg-clip-text text-transparent">
          Hello, I'm Serhat
        </h1>
        <p className="text-xl text-gray-600 dark:text-gray-300 mb-8">Software Developer</p>
        <div className="flex justify-center gap-6 mb-8">
          <a 
            href="https://github.com/Serhatb0" 
            target="_blank"
            className="text-gray-600 dark:text-gray-400 hover:text-blue-500 dark:hover:text-blue-400 transform hover:scale-110 transition-all duration-300"
            aria-label="Github"
          >
            <Github size={24} />
          </a>
          <a 
            href="https://www.linkedin.com/feed/" 
            target="_blank"
            className="text-gray-600 dark:text-gray-400 hover:text-blue-500 dark:hover:text-blue-400 transform hover:scale-110 transition-all duration-300"
            aria-label="LinkedIn"
          >
            <Linkedin size={24} />
          </a>
          <a 
            target="_blank"
            href="mailto:biricikserhat@icloud.com" 
            className="text-gray-600 dark:text-gray-400 hover:text-blue-500 dark:hover:text-blue-400 transform hover:scale-110 transition-all duration-300"
            aria-label="Email"
          >
            <Mail size={24} />
          </a>
        </div>
      </div>
    </header>
  );
}

export default HeroSection; 