import { useState, useEffect } from 'react';

interface Skill {
  name: string;
  percentage: number;
  description: string;
  color: string;
}

interface PieChartProps {
  skill: Skill;
  darkMode: boolean;
  isVisible: boolean;
  delay: number;
}

const PieChart = ({ skill, darkMode, isVisible, delay }: PieChartProps) => {
  const [progress, setProgress] = useState(0);
  const [showTooltip, setShowTooltip] = useState(false);

  useEffect(() => {
    if (isVisible) {
      const timer = setTimeout(() => {
        const interval = setInterval(() => {
          setProgress((prev) => {
            if (prev >= skill.percentage) {
              clearInterval(interval);
              return skill.percentage;
            }
            return prev + 1;
          });
        }, 15);
      }, delay);

      return () => clearTimeout(timer);
    }
  }, [isVisible, skill.percentage, delay]);

  const circumference = 2 * Math.PI * 70;
  const strokeDashoffset = circumference - (progress / 100) * circumference;

  return (
    <div
      className={`max-w-sm w-full bg-neutral-primary-soft border border-default rounded-base shadow-xs p-6 flex flex-col items-center transition-transform duration-300 hover:scale-105`}
    >
      {/* Donut Chart */}
      <div
        className="relative cursor-pointer"
        onMouseEnter={() => setShowTooltip(true)}
        onMouseLeave={() => setShowTooltip(false)}
      >
        <svg width="180" height="180" className="transform -rotate-90">
          <circle
            cx="90"
            cy="90"
            r="70"
            stroke={darkMode ? '#334155' : '#e5e7eb'}
            strokeWidth="12"
            fill="none"
          />
          <circle
            cx="90"
            cy="90"
            r="70"
            stroke={skill.color}
            strokeWidth="12"
            fill="none"
            strokeDasharray={circumference}
            strokeDashoffset={strokeDashoffset}
            strokeLinecap="round"
            className="transition-all duration-300 ease-in-out"
            style={{
              filter: `drop-shadow(0 0 8px ${skill.color}40)`,
            }}
          />
        </svg>

        <div className="absolute inset-0 flex flex-col items-center justify-center">
          <span
            className={`text-3xl font-bold transition-colors duration-300 ${
              darkMode ? 'text-white' : 'text-slate-900'
            }`}
          >
            {progress}%
          </span>
        </div>

        {/* Tooltip */}
        {showTooltip && (
          <div
            className={`absolute -bottom-24 left-1/2 transform -translate-x-1/2 w-72 p-4 rounded-base shadow-xs z-10 transition-all duration-300 ${
              darkMode ? 'bg-slate-700 text-gray-200' : 'bg-white text-gray-800'
            }`}
          >
            <div className="text-sm">{skill.description}</div>
            <div
              className={`absolute -top-2 left-1/2 transform -translate-x-1/2 w-4 h-4 rotate-45 ${
                darkMode ? 'bg-slate-700' : 'bg-white'
              }`}
            />
          </div>
        )}
      </div>

      {/* Skill Name */}
      <h3
        className={`mt-6 text-xl font-semibold text-center transition-colors duration-300 ${
          darkMode ? 'text-white' : 'text-slate-900'
        }`}
      >
        {skill.name}
      </h3>
    </div>
  );
};

export default PieChart;
