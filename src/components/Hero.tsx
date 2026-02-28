import { MapPin, Link as LinkIcon, Users } from 'lucide-react';
import profileImage from '../assets/profile.png';

const Hero = () => {
  return (
    <section
      id="home"
      className="pt-20 pb-12 px-6 bg-github-bg border-b border-github-border"
    >
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row gap-8 items-start">
          <div className="flex-shrink-0 animate-scale-in">
            <div className="relative w-64 h-64 md:w-80 md:h-80 rounded-full overflow-hidden border-2 border-github-border">
              <img
                src={profileImage}
                alt="Saif Ur Rahman"
                className="w-full h-full object-cover"
              />
            </div>
          </div>

          <div className="flex-1 pt-4 animate-slide-in">
            <div className="flex items-center gap-4 mb-4">
              <h1 className="text-3xl md:text-4xl font-semibold text-github-text">
                Saif Ur Rahman
              </h1>
              <a
                href="mailto:saifurrahman8671@gmail.com?subject=Portfolio%20Inquiry"
                className="px-4 py-1.5 text-sm font-medium bg-github-canvas border border-github-border rounded-md text-github-text hover:bg-github-border/50 transition-colors duration-200"
              >
                Get In Touch
              </a>
            </div>

            <p className="text-xl text-github-muted mb-4 font-mono">
              Cybersecurity & Security Analytics | AI/ML Engineer
            </p>

            <p className="text-github-text mb-6 leading-relaxed max-w-3xl">
              Computer Science (AI & ML) undergraduate focused on security analytics,
              SOC operations, and data-driven threat detection. Passionate about building
              secure systems and leveraging machine learning for cybersecurity applications.
            </p>

            <div className="flex flex-wrap gap-4 text-sm text-github-muted mb-6">
              <div className="flex items-center gap-2">
                <MapPin size={16} />
                <span>India</span>
              </div>
              <div className="flex items-center gap-2">
                <LinkIcon size={16} />
                <a
                  href="https://github.com/Saif8671"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-github-accent hover:underline"
                >
                  github.com/Saif8671
                </a>
              </div>
              <div className="flex items-center gap-2">
                <Users size={16} />
                <span>Available for collaboration</span>
              </div>
            </div>

            <div className="flex flex-wrap gap-3">
              <a
                href="https://github.com/Saif8671"
                target="_blank"
                rel="noopener noreferrer"
                className="px-4 py-2 text-sm font-medium bg-github-canvas border border-github-border rounded-md text-github-text hover:bg-github-border/50 transition-all duration-200 flex items-center gap-2"
              >
                <svg height="16" width="16" viewBox="0 0 16 16" fill="currentColor">
                  <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.013 8.013 0 0016 8c0-4.42-3.58-8-8-8z"></path>
                </svg>
                Follow
              </a>
              <a
                href="/resume.pdf"
                download
                className="px-4 py-2 text-sm font-medium bg-github-canvas border border-github-border rounded-md text-github-text hover:bg-github-border/50 transition-colors duration-200"
              >
                Download Resume
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
