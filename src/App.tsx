import { useState, useEffect } from 'react';
import Hero from './components/Hero';
import Navigation from './components/Navigation';
import Skills from './components/Skills';
import GitHubRepos from './components/GitHubRepos';
import Experience from './components/Experience';
import Portfolio from './components/Portfolio';
import Contact from './components/Contact';

function App() {
  const [darkMode] = useState(true);

  useEffect(() => {
    document.documentElement.classList.add('dark');
  }, []);

  return (
    <div className="min-h-screen bg-github-bg">
      <Navigation darkMode={darkMode} />
      <Hero darkMode={darkMode} />
      <GitHubRepos />
      <Skills darkMode={darkMode} />
      <Portfolio darkMode={darkMode} />
      <Experience darkMode={darkMode} />
      <Contact darkMode={darkMode} />
    </div>
  );
}

export default App;
