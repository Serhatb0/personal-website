import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { ThemeProvider } from './context/ThemeContext';
import { ProjectsSection } from './components/ProjectsSection';
import { BlogSection } from './components/sections/BlogSection';
import { BlogPost } from './pages/BlogPost';
import HeroSection from './components/HeroSection';
import AboutSection from './components/sections/AboutSection';
import ExperienceSection from './components/sections/ExperienceSection';
import SkillsSection from './components/sections/SkillsSection';
import { ThemeToggle } from './components/ThemeToggle';


function HomePage() {
  return (
    <div className="min-h-screen bg-white dark:bg-gradient-to-b dark:from-gray-900 dark:to-gray-800 text-gray-900 dark:text-white">
      <ThemeToggle />
      <HeroSection />
      <AboutSection />
      <ExperienceSection />
      <ProjectsSection />
      <BlogSection />
      <SkillsSection />

      {/* Footer */}
      <footer className="bg-gray-100 dark:bg-gray-900 border-t border-gray-200 dark:border-gray-800 text-gray-600 dark:text-gray-400 py-8 text-center">
        <div className="container mx-auto px-4">
          <p className="text-sm">
            © {new Date().getFullYear()} Serhat. 
            <span className="mx-2">•</span>
            Tüm hakları saklıdır.
          </p>
        </div>
      </footer>
    </div>
  );
}

function App() {
  return (
    <ThemeProvider>
      <Router>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/blog/:id" element={<BlogPost />} />
        </Routes>
      </Router>
    </ThemeProvider>
  );
}

export default App;