import { useEffect, useRef, useState } from 'react';
import PieChart from './PieChart';

interface SkillsProps {
  darkMode: boolean;
}

interface Skill {
  name: string;
  percentage: number;
  description: string;
  color: string;
}

const Skills = ({ darkMode }: SkillsProps) => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  const skills: Skill[] = [
    {
      name: 'Cybersecurity & Defense',
      percentage: 85,
      description: 'Network security fundamentals, vulnerability assessment, risk mitigation, OWASP Top 10, Linux security',
      color: '#ef4444',
    },
    {
      name: 'Machine Learning',
      percentage: 80,
      description: 'Data preprocessing, feature engineering, EDA, pattern recognition, and security use case applications',
      color: '#8b5cf6',
    },
    {
      name: 'Security Analytics',
      percentage: 82,
      description: 'SIEM concepts, log analysis, anomaly detection, threat identification, and incident response support',
      color: '#f59e0b',
    },
    {
      name: ' Programming',
      percentage: 84,
      description: 'python programming, javascript,node.js, bash scripting,tailwind ',
      color: '#eb6518ff',
    },
    {
      name: 'Offensive Security',
      percentage: 75,
      description: 'Ethical hacking principles, penetration testing basics, Kali Linux environment',
      color: '#06b6d4',
    },
    {
      name: 'soft skills',
      percentage: 88,
      description: 'Teamwork, Problem-Solving,Time Management,analytical thinking and problem solving',
      color: '#10b981',
    },
  ];

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.2 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  return (
    <section
      id="skills"
      ref={sectionRef}
      className={`py-24 px-6 transition-colors duration-300 ${
        darkMode ? 'bg-slate-800' : 'bg-white'
      }`}
    >
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2
            className={`text-4xl md:text-5xl font-bold mb-4 transition-colors duration-300 ${
              darkMode ? 'text-white' : 'text-slate-900'
            }`}
          >
            Skills Aquired
          </h2>
          <p
            className={`text-lg transition-colors duration-300 ${
              darkMode ? 'text-gray-400' : 'text-gray-600'
            }`}
          >
            
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
          {skills.map((skill, index) => (
            <PieChart
              key={skill.name}
              skill={skill}
              darkMode={darkMode}
              isVisible={isVisible}
              delay={index * 100}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
