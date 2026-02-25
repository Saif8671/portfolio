import { useState, useEffect } from 'react';
import { Star, GitFork, Circle } from 'lucide-react';

interface Repository {
  id: number;
  name: string;
  description: string;
  html_url: string;
  stargazers_count: number;
  forks_count: number;
  language: string;
  updated_at: string;
  topics: string[];
}

const GitHubRepos = () => {
  const [repos, setRepos] = useState<Repository[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchRepos();
  }, []);

  const fetchRepos = async () => {
    try {
      const response = await fetch('https://api.github.com/users/Saif8671/repos?sort=updated&per_page=6');
      const data = await response.json();
      setRepos(data);
    } catch (error) {
      console.error('Error fetching repos:', error);
    } finally {
      setLoading(false);
    }
  };

  const getLanguageColor = (language: string) => {
    const colors: { [key: string]: string } = {
      JavaScript: '#f1e05a',
      TypeScript: '#3178c6',
      Python: '#3572A5',
      Java: '#b07219',
      HTML: '#e34c26',
      CSS: '#563d7c',
      Go: '#00ADD8',
      Rust: '#dea584',
    };
    return colors[language] || '#8b949e';
  };

  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    const now = new Date();
    const diffTime = Math.abs(now.getTime() - date.getTime());
    const diffDays = Math.floor(diffTime / (1000 * 60 * 60 * 24));

    if (diffDays === 0) return 'Updated today';
    if (diffDays === 1) return 'Updated yesterday';
    if (diffDays < 30) return `Updated ${diffDays} days ago`;
    const diffMonths = Math.floor(diffDays / 30);
    if (diffMonths === 1) return 'Updated last month';
    return `Updated ${diffMonths} months ago`;
  };

  if (loading) {
    return (
      <section className="py-16 px-6 bg-github-bg border-t border-github-border">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-2xl font-semibold text-github-text mb-6">Popular repositories</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {[...Array(6)].map((_, i) => (
              <div key={i} className="border border-github-border rounded-md p-4 bg-github-canvas animate-pulse">
                <div className="h-5 bg-github-border rounded w-1/3 mb-3"></div>
                <div className="h-4 bg-github-border rounded w-full mb-2"></div>
                <div className="h-4 bg-github-border rounded w-2/3"></div>
              </div>
            ))}
          </div>
        </div>
      </section>
    );
  }

  return (
    <section id="repositories" className="py-16 px-6 bg-github-bg border-t border-github-border">
      <div className="max-w-7xl mx-auto">
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-2xl font-semibold text-github-text">Popular repositories</h2>
          <a
            href="https://github.com/Saif8671?tab=repositories"
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm text-github-accent hover:underline"
          >
            View all repositories →
          </a>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {repos.map((repo, index) => (
            <a
              key={repo.id}
              href={repo.html_url}
              target="_blank"
              rel="noopener noreferrer"
              className="group border border-github-border rounded-md p-4 bg-github-canvas hover:bg-github-canvas/80 transition-all duration-200 hover:border-github-muted animate-slide-up"
              style={{ animationDelay: `${index * 50}ms` }}
            >
              <div className="flex items-start justify-between mb-2">
                <h3 className="text-github-accent font-semibold group-hover:underline flex-1">
                  {repo.name}
                </h3>
              </div>

              {repo.description && (
                <p className="text-sm text-github-muted mb-3 line-clamp-2">
                  {repo.description}
                </p>
              )}

              {repo.topics && repo.topics.length > 0 && (
                <div className="flex flex-wrap gap-2 mb-3">
                  {repo.topics.slice(0, 3).map((topic) => (
                    <span
                      key={topic}
                      className="px-2 py-1 text-xs bg-github-accent/10 text-github-accent rounded-full border border-github-accent/20"
                    >
                      {topic}
                    </span>
                  ))}
                </div>
              )}

              <div className="flex items-center gap-4 text-xs text-github-muted">
                {repo.language && (
                  <div className="flex items-center gap-1">
                    <Circle
                      size={12}
                      fill={getLanguageColor(repo.language)}
                      color={getLanguageColor(repo.language)}
                    />
                    <span>{repo.language}</span>
                  </div>
                )}

                {repo.stargazers_count > 0 && (
                  <div className="flex items-center gap-1">
                    <Star size={14} />
                    <span>{repo.stargazers_count}</span>
                  </div>
                )}

                {repo.forks_count > 0 && (
                  <div className="flex items-center gap-1">
                    <GitFork size={14} />
                    <span>{repo.forks_count}</span>
                  </div>
                )}

                <span className="ml-auto">{formatDate(repo.updated_at)}</span>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default GitHubRepos;
