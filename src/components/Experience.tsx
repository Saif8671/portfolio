import { Briefcase, Calendar, GraduationCap } from 'lucide-react';

interface Job {
  title: string;
  company: string;
  period: string;
  description: string[];
  technologies: string[];
}

const Experience = () => {
  const jobs: Job[] = [
    {
      title: 'Bachelor of Technology (B.Tech)',
      company: 'AAR Mahaveer Engineering College, JNTUH',
      period: '2024 - 2027',
      description: [
        'Computer Science specialization in AI & Machine Learning',
        'Current CGPA: 8.0',
        'Academic focus: cybersecurity fundamentals, security analytics, threat detection, artificial intelligence, and computer networks',
        'Hands-on exposure to SIEM concepts, vulnerability assessment, and SOC workflows',
      ],
      technologies: [
        'Python',
        'Artificial Intelligence',
        'Machine Learning',
        'Cybersecurity',
        'Data Analysis',
      ],
    },
    {
      title: 'Intermediate Education',
      company: 'Narayana Institute',
      period: '2021 - 2023',
      description: [
        'Built a strong foundation in mathematics and science subjects',
        'Prepared for competitive examinations and higher technical education',
        'Developed analytical thinking and structured problem-solving skills',
      ],
      technologies: ['Mathematics', 'Physics', 'Chemistry', 'Computer Science'],
    },
  ];

  return (
    <section
      id="experience"
      className="py-16 px-6 bg-github-bg border-t border-github-border"
    >
      <div className="max-w-7xl mx-auto">
        <div className="mb-12">
          <h2 className="text-2xl font-semibold text-github-text mb-2">Education</h2>
          <p className="text-github-muted">Academic qualifications and learning focus</p>
        </div>

        <div className="relative pl-5 md:pl-0">
          <div className="absolute left-1.5 top-0 bottom-0 w-px bg-github-border md:hidden" />

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
            {jobs.map((job, index) => (
              <article
                key={job.title}
                className="relative border border-github-border rounded-md p-5 bg-github-canvas hover:border-github-muted transition-all duration-200 animate-slide-up"
                style={{ animationDelay: `${index * 60}ms` }}
              >
                <div className="absolute -left-6 top-7 w-3 h-3 rounded-full bg-github-accent border-2 border-github-bg md:hidden" />

                <div className="flex items-start justify-between gap-3 mb-4">
                  <div className="flex items-center gap-2 text-github-accent">
                    <GraduationCap size={18} />
                    <span className="text-xs uppercase tracking-wide text-github-muted">
                      Education
                    </span>
                  </div>
                  <div className="flex items-center gap-1 text-xs text-github-muted">
                    <Calendar size={14} />
                    <span>{job.period}</span>
                  </div>
                </div>

                <h3 className="text-lg font-semibold text-github-text mb-1">{job.title}</h3>
                <p className="text-sm text-github-accent mb-4">{job.company}</p>

                <ul className="space-y-2 mb-4">
                  {job.description.map((item) => (
                    <li key={item} className="text-sm text-github-muted leading-relaxed">
                      {item}
                    </li>
                  ))}
                </ul>

                <div className="flex flex-wrap gap-2">
                  {job.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="px-3 py-1.5 text-xs bg-github-bg border border-github-border rounded-full text-github-text hover:border-github-muted transition-colors duration-200"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </article>
            ))}
          </div>
        </div>

        <div className="mt-8 p-4 border border-github-border rounded-md bg-github-canvas">
          <div className="flex items-start gap-2">
            <Briefcase size={16} className="text-github-muted mt-0.5" />
            <p className="text-sm text-github-muted">
              Open to internship opportunities in cybersecurity, SOC analysis, and
              machine learning engineering.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
