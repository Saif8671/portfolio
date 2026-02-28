import { ExternalLink, FileText } from 'lucide-react';

interface Article {
  title: string;
  platform: string;
  publishedAt: string;
  url: string;
  summary: string;
}

const Articles = () => {
  const articles: Article[] = [
    {
      title: ' Important Cyber Awareness Alert',
      platform: 'LinkedIn',
      publishedAt: 'Jan 2026',
      url: 'https://www.linkedin.com/pulse/important-cyber-awareness-alert-please-read-share-saif-ur-rahman-h9cdc',
      summary: 'Practical baseline for alert triage, escalation flow, and incident notes.',
    },
    {
      title: 'RansomHouse Steps Up Its Ransomware Game',
      platform: 'LinkedIn',
      publishedAt: 'Dec 2025',
      url: 'https://www.linkedin.com/pulse/ransomhouse-steps-up-its-ransomware-game-saif-ur-rahman-jwawc',
      summary: 'How to rank findings by exploitability, impact, and remediation effort.',
    },
    {
      title: 'Improving ML Project Reproducibility',
      platform: 'Hashnode',
      publishedAt: 'Nov 2025',
      url: 'https://hashnode.com/',
      summary: 'Simple workflow for experiment tracking, versioning, and deployment checks.',
    },
  ];

  return (
    <section id="articles" className="py-16 px-6 bg-github-bg border-t border-github-border">
      <div className="max-w-7xl mx-auto">
        <div className="mb-12">
          <h2 className="text-2xl font-semibold text-github-text mb-2">Articles</h2>
          <p className="text-github-muted">Technical write-ups and learning notes</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {articles.map((article, index) => (
            <article
              key={article.title}
              className="border border-github-border rounded-md p-5 bg-github-canvas hover:border-github-muted transition-all duration-200 animate-slide-up"
              style={{ animationDelay: `${index * 60}ms` }}
            >
              <div className="flex items-center justify-between mb-3">
                <FileText size={20} className="text-github-muted" />
                <span className="text-xs text-github-muted">{article.publishedAt}</span>
              </div>

              <h3 className="text-github-text font-semibold mb-2">{article.title}</h3>
              <p className="text-sm text-github-muted mb-4">{article.summary}</p>

              <div className="flex items-center justify-between">
                <span className="text-xs text-github-accent">{article.platform}</span>
                <a
                  href={article.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1 text-sm text-github-muted hover:text-github-accent transition-colors duration-200"
                >
                  Read
                  <ExternalLink size={14} />
                </a>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Articles;
