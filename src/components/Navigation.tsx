import { useState, useEffect } from 'react';
import { Menu, Moon, Sun, X } from 'lucide-react';

interface NavigationProps {
  darkMode: boolean;
  onToggleTheme: () => void;
}

const Navigation = ({ darkMode, onToggleTheme }: NavigationProps) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsMobileMenuOpen(false);
    }
  };

  const navItems = [
    { id: 'home', label: 'Overview' },
    { id: 'repositories', label: 'Repositories' },
    { id: 'skills', label: 'Skills' },
    { id: 'portfolio', label: 'Projects' },
    { id: 'articles', label: 'Articles' },
    { id: 'certifications', label: 'Certifications' },
    { id: 'experience', label: 'Education' },
    { id: 'contact', label: 'Contact' },
  ];

  return (
    <nav
      className={`fixed top-0 w-full z-40 transition-all duration-300 ${
        isScrolled
          ? 'bg-github-canvas/95 backdrop-blur-md border-b border-github-border shadow-lg'
          : 'bg-github-bg/95 backdrop-blur-md border-b border-github-border'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 py-3">
        <div className="flex justify-between items-center">
          <button
            onClick={() => scrollToSection('home')}
            className="text-xl font-semibold text-github-text hover:text-github-accent transition-colors duration-200"
          >
            <span className="font-mono">~/$</span> Portfolio
          </button>

          <div className="hidden md:flex items-center space-x-1">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className="px-4 py-2 text-sm text-github-text hover:text-github-accent transition-colors duration-200 rounded-md hover:bg-github-border/30"
              >
                {item.label}
              </button>
            ))}
            <button
              onClick={onToggleTheme}
              className="ml-2 inline-flex items-center gap-2 px-3 py-2 text-sm text-github-text border border-github-border rounded-md hover:bg-github-border/30 transition-colors duration-200"
              aria-label="Toggle theme"
              title={darkMode ? 'Switch to light mode' : 'Switch to dark mode'}
            >
              {darkMode ? <Sun size={16} /> : <Moon size={16} />}
              <span>{darkMode ? 'Light' : 'Dark'}</span>
            </button>
          </div>

          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="md:hidden text-github-text p-2 hover:bg-github-border/30 rounded-md transition-colors duration-200"
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {isMobileMenuOpen && (
          <div className="md:hidden mt-4 pb-4 border-t border-github-border animate-slide-up">
            <button
              onClick={onToggleTheme}
              className="mt-3 mb-2 w-full text-left px-4 py-3 text-sm text-github-text hover:text-github-accent hover:bg-github-border/30 transition-colors duration-200 rounded-md flex items-center gap-2"
            >
              {darkMode ? <Sun size={16} /> : <Moon size={16} />}
              <span>{darkMode ? 'Switch to light mode' : 'Switch to dark mode'}</span>
            </button>
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className="block w-full text-left px-4 py-3 text-sm text-github-text hover:text-github-accent hover:bg-github-border/30 transition-colors duration-200 rounded-md"
              >
                {item.label}
              </button>
            ))}
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navigation;
