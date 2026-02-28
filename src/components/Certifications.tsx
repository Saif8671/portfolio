import { Award, Calendar, ExternalLink } from 'lucide-react';

interface Certification {
  name: string;
  issuer: string;
  issued: string;
  url: string;
}

const Certifications = () => {
  const certifications: Certification[] = [
    {
      name: 'Introduction to the Threat Landscape 3.0',
      issuer: 'Fortinet',
      issued: '2025',
      url: 'https://www.credly.com/badges/a013ad06-df92-4524-a94f-23d684b2157f/linked_in_profile',
    },
    {
      name: 'Introduction to Cybersecurity',
      issuer: 'Cisco',
      issued: '2025',
      url: 'https://www.credly.com/badges/ff7061ac-6702-4c22-9044-b16f7ea0c650/linked_in_profile',
    },
    {
      name: 'Artificial Intelligence and Machine Learning',
      issuer: 'Adverk',
      issued: '2024',
      url: 'https://www.adverk.com/',
    },
  ];

  return (
    <section
      id="certifications"
      className="py-16 px-6 bg-github-bg border-t border-github-border"
    >
      <div className="max-w-7xl mx-auto">
        <div className="mb-12">
          <h2 className="text-2xl font-semibold text-github-text mb-2">Certifications</h2>
          <p className="text-github-muted">Professional credentials and verified learning</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {certifications.map((cert, index) => (
            <article
              key={cert.name}
              className="border border-github-border rounded-md p-5 bg-github-canvas hover:border-github-muted transition-all duration-200 animate-slide-up"
              style={{ animationDelay: `${index * 60}ms` }}
            >
              <div className="flex items-center justify-between mb-3">
                <Award size={20} className="text-github-accent" />
                <div className="inline-flex items-center gap-1 text-xs text-github-muted">
                  <Calendar size={12} />
                  <span>{cert.issued}</span>
                </div>
              </div>

              <h3 className="text-github-text font-semibold mb-2">{cert.name}</h3>
              <p className="text-sm text-github-muted mb-4">{cert.issuer}</p>

              <a
                href={cert.url}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1 text-sm text-github-muted hover:text-github-accent transition-colors duration-200"
              >
                View credential
                <ExternalLink size={14} />
              </a>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Certifications;
