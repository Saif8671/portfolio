import { useState, useEffect } from 'react';
import Hero from './components/Hero';
import Navigation from './components/Navigation';
import Skills from './components/Skills';
import GitHubRepos from './components/GitHubRepos';
import Experience from './components/Experience';
import Portfolio from './components/Portfolio';
import Articles from './components/Articles';
import Certifications from './components/Certifications';
import Contact from './components/Contact';

function App() {
  const [darkMode, setDarkMode] = useState(() => {
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme) {
      return savedTheme === 'dark';
    }
    return true;
  });

  useEffect(() => {
    document.documentElement.classList.toggle('dark', darkMode);
    localStorage.setItem('theme', darkMode ? 'dark' : 'light');
  }, [darkMode]);

  return (
    <div className="min-h-screen bg-github-bg">
      <Navigation darkMode={darkMode} onToggleTheme={() => setDarkMode((prev) => !prev)} />
      <Hero />
      <GitHubRepos />
      <Skills />
      <Portfolio />
      <Articles />
      <Certifications />
      <Experience />
      <Contact />
    </div>
  );
}

export default App;
