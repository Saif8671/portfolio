import { Briefcase, Calendar } from 'lucide-react';

interface ExperienceProps {
  darkMode: boolean;
}

interface Job {
  title: string;
  company: string;
  period: string;
  description: string[];
  technologies: string[];
}

const Experience = ({ darkMode }: ExperienceProps) => {
  const jobs: Job[] = [
    {
      title: 'Bachelor of Technology (B.Tech)',
      company: 'AAR Mahaveer Engineering College, JNTUH',
      period: '2024 - 2027',
      description: [
        'Computer Science specialization in AI & Machine Learning',
        'Current CGPA: 8.0',
        'Academic Focus: Cybersecurity Fundamentals, Security Analytics & Threat Detection, Artificial Intelligence & Machine Learning, Computer Networks, Operating Systems, Database Management',
        'Hands-on exposure to SIEM concepts, vulnerability assessment, and SOC workflows',
      ],
      technologies: ['Python', 'Artificial intelligence', 'Machine Learning', 'Cybersecurity', 'Data Analysis'],
    },
    {
      title: 'Intermediate Education',
      company: 'Narayana Institute',
      period: '2021 - 2023',
      description: [
        'Strong foundation in mathematics and science subjects',
        'Preparation for competitive examinations and higher technical education',
        'Development of analytical and problem-solving skills',
      ],
      technologies: ['Mathematics', 'Physics', 'Chemistry', 'Computer Science'],
    },
  ];

  return (
    <section
      id="experience"
      className={`py-24 px-6 transition-colors duration-300 ${
        darkMode ? 'bg-slate-900' : 'bg-gray-50'
      }`}
    >
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-16">
          <h2
            className={`text-4xl md:text-5xl font-bold mb-4 transition-colors duration-300 ${
              darkMode ? 'text-white' : 'text-slate-900'
            }`}
          >
            Education 
          </h2>
          <p
            className={`text-lg transition-colors duration-300 ${
              darkMode ? 'text-gray-400' : 'text-gray-600'
            }`}
          >
            Academic qualifications 
          </p>
        </div>

        <div className="relative">
          <div
            className={`absolute left-8 md:left-1/2 top-0 bottom-0 w-0.5 ${
              darkMode ? 'bg-slate-700' : 'bg-gray-300'
            }`}
          />

          {jobs.map((job, index) => (
            <div
              key={index}
              className={`relative mb-12 ${
                index % 2 === 0 ? 'md:pr-1/2' : 'md:pl-1/2 md:ml-auto'
              }`}
            >
              <div
                className={`ml-16 md:ml-0 ${
                  index % 2 === 0 ? 'md:mr-12' : 'md:ml-12'
                } p-6 rounded-lg shadow-lg transition-all duration-300 hover:scale-105 hover:shadow-2xl ${
                  darkMode ? 'bg-slate-800 border border-slate-700' : 'bg-white border border-gray-200'
                }`}
              >
                <div
                  className={`absolute left-8 md:left-auto ${
                    index % 2 === 0 ? 'md:right-[-2rem]' : 'md:left-[-2rem]'
                  } w-8 h-8 rounded-full flex items-center justify-center shadow-lg ${
                    darkMode ? 'bg-blue-600' : 'bg-blue-500'
                  }`}
                >
                  <Briefcase size={16} className="text-white" />
                </div>

                <div className="flex items-start gap-2 mb-3">
                  <Calendar
                    size={20}
                    className={darkMode ? 'text-blue-400 mt-1' : 'text-blue-600 mt-1'}
                  />
                  <span
                    className={`text-sm font-semibold ${
                      darkMode ? 'text-blue-400' : 'text-blue-600'
                    }`}
                  >
                    {job.period}
                  </span>
                </div>

                <h3
                  className={`text-2xl font-bold mb-2 transition-colors duration-300 ${
                    darkMode ? 'text-white' : 'text-slate-900'
                  }`}
                >
                  {job.title}
                </h3>

                <p
                  className={`text-lg mb-4 transition-colors duration-300 ${
                    darkMode ? 'text-blue-400' : 'text-blue-600'
                  }`}
                >
                  {job.company}
                </p>

                <ul className="space-y-2 mb-4">
                  {job.description.map((item, idx) => (
                    <li
                      key={idx}
                      className={`text-sm flex items-start transition-colors duration-300 ${
                        darkMode ? 'text-gray-300' : 'text-gray-700'
                      }`}
                    >
                      <span className="text-blue-500 mr-2">•</span>
                      {item}
                    </li>
                  ))}
                </ul>

                <div className="flex flex-wrap gap-2">
                  {job.technologies.map((tech) => (
                    <span
                      key={tech}
                      className={`px-3 py-1 text-xs rounded-full transition-colors duration-300 ${
                        darkMode
                          ? 'bg-slate-700 text-blue-300'
                          : 'bg-blue-100 text-blue-700'
                      }`}
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
