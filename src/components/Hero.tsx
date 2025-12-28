import { ArrowRight, Download, Mail } from 'lucide-react';
import profileImage from '../assets/profile.png';

interface HeroProps {
  darkMode: boolean;
}

const Hero = ({ darkMode }: HeroProps) => {
  const scrollToContact = () => {
    const element = document.getElementById('contact');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section
      id="home"
      className={`min-h-screen flex items-center justify-center px-6 relative overflow-hidden ${
        darkMode ? 'bg-slate-900' : 'bg-gray-50'
      }`}
    >
      {/* Background Blobs */}
      <div className="absolute inset-0 overflow-hidden">
        <div
          className={`absolute -top-40 -right-40 w-80 h-80 rounded-full blur-3xl opacity-20 ${
            darkMode ? 'bg-blue-600' : 'bg-blue-400'
          }`}
        />
        <div
          className={`absolute -bottom-40 -left-40 w-80 h-80 rounded-full blur-3xl opacity-20 ${
            darkMode ? 'bg-indigo-600' : 'bg-indigo-400'
          }`}
        />
      </div>

      <div className="max-w-5xl mx-auto text-center relative z-10 pt-20">
        {/* Profile Image */}
        <div className="mb-8 flex justify-center">
          <div className="relative">
            <div
              className={`absolute inset-0 rounded-full blur-2xl opacity-30 ${
                darkMode ? 'bg-blue-600' : 'bg-blue-400'
              }`}
            />
            <div
              className={`relative w-48 h-48 rounded-full overflow-hidden border-4 shadow-2xl ${
                darkMode ? 'border-blue-600' : 'border-blue-500'
              }`}
            >
              <img
                src={profileImage}
                alt="Saif Ur Rahman"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>

        <h1
          className={`text-5xl md:text-7xl font-bold mb-6 ${
            darkMode ? 'text-white' : 'text-slate-900'
          }`}
        >
          Saif Ur Rahman
        </h1>

        <p
          className={`text-xl md:text-2xl mb-4 ${
            darkMode ? 'text-gray-300' : 'text-gray-700'
          }`}
        >
          Cybersecurity & Security Analytics | Artificial Intelligence & Machine Learning
        </p>

        <p
          className={`text-lg md:text-xl max-w-3xl mx-auto mb-12 ${
            darkMode ? 'text-gray-400' : 'text-gray-600'
          }`}
        >
          Computer Science (AI & ML) undergraduate focused on security analytics,
          SOC operations, and data-driven threat detection.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <button
            onClick={scrollToContact}
            className="group px-8 py-4 bg-blue-600 hover:bg-blue-700 text-white rounded-lg shadow-lg transition-all duration-300 hover:scale-105 flex items-center gap-2"
          >
            <Mail size={20} />
            Get In Touch
            <ArrowRight
              size={20}
              className="group-hover:translate-x-1 transition-transform duration-300"
            />
          </button>

          {/* Resume Download */}
          <a
            href="/resume.pdf"
            download
            className={`px-8 py-4 rounded-lg shadow-lg transition-all duration-300 hover:scale-105 flex items-center gap-2 ${
              darkMode
                ? 'bg-slate-800 hover:bg-slate-700 text-white border border-slate-700'
                : 'bg-white hover:bg-gray-100 text-slate-900 border border-gray-300'
            }`}
          >
            <Download size={20} />
            Download Resume
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;
