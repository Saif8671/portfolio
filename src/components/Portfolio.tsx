import { ExternalLink, Github, FolderGit2 } from 'lucide-react';

interface PortfolioProps {
  darkMode: boolean;
}

interface Project {
  title: string;
  description: string;
  technologies: string[];
  githubUrl: string;
  category: string;
}

const Portfolio = ({ darkMode }: PortfolioProps) => {
  const projects: Project[] = [
    {
      title: 'Hand-gesture Controller',
      description: 'ML-based system for detecting network anomalies and suspicious behavior patterns',
      technologies: ['Python', 'Machine Learning', 'Scikit-learn', 'TensorFlow'],
      githubUrl: 'https://github.com/Saif8671',
      category: 'ML',
    },
    {
      title: 'Keylogger Analysis Tool',
      description: 'Security log parsing and analysis tool with pattern recognition',
      technologies: ['Python', 'Log Parsing', 'Pattern Recognition'],
      githubUrl: 'https://github.com/Saif8671',
      category: 'Security',
    },
    {
      title: 'SIEM Dashboard',
      description: 'Real-time threat monitoring and analytics dashboard',
      technologies: ['Python', 'Flask', 'D3.js', 'PostgreSQL'],
      githubUrl: 'https://github.com/Saif8671',
      category: 'Dashboard',
    },
    {
      title: 'Vulnerability Scanner',
      description: 'Network vulnerability assessment with automated scanning',
      technologies: ['Python', 'Nmap', 'Security Testing'],
      githubUrl: 'https://github.com/Saif8671',
      category: 'Security',
    },
    {
      title: 'Intrusion Detection Model',
      description: 'Deep learning model for network intrusion detection',
      technologies: ['Python', 'Deep Learning', 'TensorFlow'],
      githubUrl: 'https://github.com/Saif8671',
      category: 'ML',
    },
    {
      title: 'Data Analysis Pipeline',
      description: 'EDA and feature engineering for security datasets',
      technologies: ['Python', 'Pandas', 'NumPy', 'Matplotlib'],
      githubUrl: 'https://github.com/Saif8671',
      category: 'ML',
    },
  ];

  return (
    <section
      id="portfolio"
      className="py-16 px-6 bg-github-bg border-t border-github-border"
    >
      <div className="max-w-7xl mx-auto">
        <div className="mb-12">
          <h2 className="text-2xl font-semibold text-github-text mb-2">
            Featured Projects
          </h2>
          <p className="text-github-muted">
            Security analytics, machine learning, and cybersecurity applications
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {projects.map((project, index) => (
            <div
              key={index}
              className="border border-github-border rounded-md p-4 bg-github-canvas hover:border-github-muted transition-all duration-200 animate-slide-up"
              style={{ animationDelay: `${index * 50}ms` }}
            >
              <div className="flex items-start justify-between mb-3">
                <FolderGit2 size={24} className="text-github-muted" />
                <div className="flex gap-2">
                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-github-muted hover:text-github-accent transition-colors duration-200"
                    aria-label="View source"
                  >
                    <Github size={20} />
                  </a>
                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-github-muted hover:text-github-accent transition-colors duration-200"
                    aria-label="View project"
                  >
                    <ExternalLink size={20} />
                  </a>
                </div>
              </div>

              <h3 className="text-github-accent font-semibold mb-2 hover:underline">
                <a href={project.githubUrl} target="_blank" rel="noopener noreferrer">
                  {project.title}
                </a>
              </h3>

              <p className="text-sm text-github-muted mb-4 line-clamp-2">
                {project.description}
              </p>

              <div className="flex flex-wrap gap-2 text-xs text-github-muted">
                {project.technologies.map((tech) => (
                  <span key={tech}>{tech}</span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
