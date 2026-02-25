import { useEffect, useRef, useState } from 'react';
import { Shield, Brain, BarChart3, Code, Lock, Lightbulb } from 'lucide-react';

interface SkillCategory {
  icon: React.ReactNode;
  title: string;
  skills: string[];
}

const Skills = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const sectionElement = sectionRef.current;
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.2 }
    );

    if (sectionElement) {
      observer.observe(sectionElement);
    }

    return () => {
      if (sectionElement) {
        observer.unobserve(sectionElement);
      }
    };
  }, []);

  const skillCategories: SkillCategory[] = [
    {
      icon: <Shield size={24} />,
      title: 'Cybersecurity & Defense',
      skills: [
        'Network Security',
        'Vulnerability Assessment',
        'Risk Mitigation',
        'OWASP Top 10',
        'Linux Security',
        'Penetration Testing',
      ],
    },
    {
      icon: <Brain size={24} />,
      title: 'Machine Learning',
      skills: [
        'Data Preprocessing',
        'Feature Engineering',
        'EDA',
        'TensorFlow',
        'Scikit-learn',
        'Pattern Recognition',
      ],
    },
    {
      icon: <BarChart3 size={24} />,
      title: 'Security Analytics',
      skills: [
        'SIEM Concepts',
        'Log Analysis',
        'Anomaly Detection',
        'Threat Identification',
        'Incident Response',
        'SOC Operations',
      ],
    },
    {
      icon: <Code size={24} />,
      title: 'Programming',
      skills: [
        'Python',
        'JavaScript',
        'TypeScript',
        'Node.js',
        'Bash Scripting',
        'React',
      ],
    },
    {
      icon: <Lock size={24} />,
      title: 'Offensive Security',
      skills: [
        'Ethical Hacking',
        'Penetration Testing',
        'Kali Linux',
        'Metasploit',
        'Burp Suite',
        'Reconnaissance',
      ],
    },
    {
      icon: <Lightbulb size={24} />,
      title: 'Soft Skills',
      skills: [
        'Team Collaboration',
        'Problem Solving',
        'Time Management',
        'Analytical Thinking',
        'Communication',
        'Adaptability',
      ],
    },
  ];

  return (
    <section
      id="skills"
      ref={sectionRef}
      className="py-16 px-6 bg-github-bg border-t border-github-border"
    >
      <div className="max-w-7xl mx-auto">
        <div className="mb-12">
          <h2 className="text-2xl font-semibold text-github-text mb-2">
            Skills & Expertise
          </h2>
          <p className="text-github-muted">
            Technical competencies and professional capabilities
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {skillCategories.map((category, index) => (
            <div
              key={category.title}
              className={`border border-github-border rounded-md p-5 bg-github-canvas hover:border-github-muted transition-all duration-200 ${
                isVisible ? 'animate-slide-up' : 'opacity-0'
              }`}
              style={{ animationDelay: `${index * 75}ms` }}
            >
              <div className="flex items-center gap-3 mb-4 text-github-accent">
                {category.icon}
                <h3 className="text-lg font-semibold text-github-text">
                  {category.title}
                </h3>
              </div>

              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill) => (
                  <span
                    key={skill}
                    className="px-3 py-1.5 text-xs bg-github-bg border border-github-border rounded-full text-github-text hover:border-github-muted transition-colors duration-200"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>

        <div className="mt-8 p-4 border border-github-border rounded-md bg-github-canvas">
          <p className="text-sm text-github-muted">
            <span className="text-github-text font-semibold">Note:</span> Currently pursuing
            B.Tech in Computer Science with specialization in AI & ML. Actively learning and
            expanding skills in cybersecurity, machine learning, and full-stack development.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Skills;
