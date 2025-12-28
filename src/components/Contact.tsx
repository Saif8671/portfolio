import { useState } from 'react';
import { Mail, MapPin, Phone, Send, Github, Linkedin, Twitter } from 'lucide-react';

interface ContactProps {
  darkMode: boolean;
}

const Contact = ({ darkMode }: ContactProps) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    setFormData({ name: '', email: '', subject: '', message: '' });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <section
      id="contact"
      className={`py-24 px-6 transition-colors duration-300 ${
        darkMode ? 'bg-slate-900' : 'bg-gray-50'
      }`}
    >
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2
            className={`text-4xl md:text-5xl font-bold mb-4 transition-colors duration-300 ${
              darkMode ? 'text-white' : 'text-slate-900'
            }`}
          >
            Get In Touch
          </h2>
          <p
            className={`text-lg transition-colors duration-300 ${
              darkMode ? 'text-gray-400' : 'text-gray-600'
            }`}
          >
            Let's discuss your next project
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12">
          <div>
            <h3
              className={`text-2xl font-bold mb-6 transition-colors duration-300 ${
                darkMode ? 'text-white' : 'text-slate-900'
              }`}
            >
              Contact Information
            </h3>

            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="p-3 bg-blue-600 rounded-lg">
                  <Mail size={24} className="text-white" />
                </div>
                <div>
                  <h4
                    className={`font-semibold mb-1 transition-colors duration-300 ${
                      darkMode ? 'text-white' : 'text-slate-900'
                    }`}
                  >
                    Email
                  </h4>
                  <p
                    className={`transition-colors duration-300 ${
                      darkMode ? 'text-gray-400' : 'text-gray-600'
                    }`}
                  >
                    saifurrahman8671@gmail.com
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="p-3 bg-blue-600 rounded-lg">
                  <MapPin size={24} className="text-white" />
                </div>
                <div>
                  <h4
                    className={`font-semibold mb-1 transition-colors duration-300 ${
                      darkMode ? 'text-white' : 'text-slate-900'
                    }`}
                  >
                    Location
                  </h4>
                  <p
                    className={`transition-colors duration-300 ${
                      darkMode ? 'text-gray-400' : 'text-gray-600'
                    }`}
                  >
                    India
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="p-3 bg-blue-600 rounded-lg">
                  <Github size={24} className="text-white" />
                </div>
                <div>
                  <h4
                    className={`font-semibold mb-1 transition-colors duration-300 ${
                      darkMode ? 'text-white' : 'text-slate-900'
                    }`}
                  >
                    GitHub
                  </h4>
                  <a
                    href="https://github.com/Saif8671"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="transition-colors duration-300 hover:text-blue-500 text-gray-400"
                  >
                    github.com/Saif8671
                  </a>
                </div>
              </div>
            </div>

            <div className="mt-8">
              <h4
                className={`font-semibold mb-4 transition-colors duration-300 ${
                  darkMode ? 'text-white' : 'text-slate-900'
                }`}
              >
                Connect With Me
              </h4>
              <div className="flex gap-4">
                <a
                  href="https://github.com/Saif8671"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 bg-blue-600 hover:bg-blue-700 rounded-lg transition-all duration-300 hover:scale-110"
                  aria-label="GitHub"
                >
                  <Github size={24} className="text-white" />
                </a>
                <a
                  href="https://www.linkedin.com/in/saif-ur-rahman-0211002b9"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 bg-blue-600 hover:bg-blue-700 rounded-lg transition-all duration-300 hover:scale-110"
                  aria-label="LinkedIn"
                >
                  <Linkedin size={24} className="text-white" />
                </a>
                <a
                  href="mailto:saifurrahman8671@gmail.com"
                  className="p-3 bg-blue-600 hover:bg-blue-700 rounded-lg transition-all duration-300 hover:scale-110"
                  aria-label="Email"
                >
                  <Mail size={24} className="text-white" />
                </a>
              </div>
            </div>
          </div>

          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label
                htmlFor="name"
                className={`block mb-2 font-semibold transition-colors duration-300 ${
                  darkMode ? 'text-white' : 'text-slate-900'
                }`}
              >
                Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                className={`w-full px-4 py-3 rounded-lg transition-all duration-300 focus:ring-2 focus:ring-blue-500 focus:outline-none ${
                  darkMode
                    ? 'bg-slate-800 border border-slate-700 text-white'
                    : 'bg-white border border-gray-300 text-slate-900'
                }`}
              />
            </div>

            <div>
              <label
                htmlFor="email"
                className={`block mb-2 font-semibold transition-colors duration-300 ${
                  darkMode ? 'text-white' : 'text-slate-900'
                }`}
              >
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                className={`w-full px-4 py-3 rounded-lg transition-all duration-300 focus:ring-2 focus:ring-blue-500 focus:outline-none ${
                  darkMode
                    ? 'bg-slate-800 border border-slate-700 text-white'
                    : 'bg-white border border-gray-300 text-slate-900'
                }`}
              />
            </div>

            <div>
              <label
                htmlFor="subject"
                className={`block mb-2 font-semibold transition-colors duration-300 ${
                  darkMode ? 'text-white' : 'text-slate-900'
                }`}
              >
                Subject
              </label>
              <input
                type="text"
                id="subject"
                name="subject"
                value={formData.subject}
                onChange={handleChange}
                required
                className={`w-full px-4 py-3 rounded-lg transition-all duration-300 focus:ring-2 focus:ring-blue-500 focus:outline-none ${
                  darkMode
                    ? 'bg-slate-800 border border-slate-700 text-white'
                    : 'bg-white border border-gray-300 text-slate-900'
                }`}
              />
            </div>

            <div>
              <label
                htmlFor="message"
                className={`block mb-2 font-semibold transition-colors duration-300 ${
                  darkMode ? 'text-white' : 'text-slate-900'
                }`}
              >
                Message
              </label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                required
                rows={6}
                className={`w-full px-4 py-3 rounded-lg transition-all duration-300 focus:ring-2 focus:ring-blue-500 focus:outline-none resize-none ${
                  darkMode
                    ? 'bg-slate-800 border border-slate-700 text-white'
                    : 'bg-white border border-gray-300 text-slate-900'
                }`}
              />
            </div>

            <button
              type="submit"
              className="w-full px-8 py-4 bg-blue-600 hover:bg-blue-700 text-white rounded-lg shadow-lg transition-all duration-300 hover:scale-105 flex items-center justify-center gap-2 font-semibold"
            >
              Send Message
              <Send size={20} />
            </button>
          </form>
        </div>

        <div
          className={`mt-16 pt-8 border-t text-center transition-colors duration-300 ${
            darkMode ? 'border-slate-700 text-gray-400' : 'border-gray-300 text-gray-600'
          }`}
        >
          <p>&copy; 2025 Saif Ur Rahman | Built with a passion for cybersecurity and continuous learning</p>
        </div>
      </div>
    </section>
  );
};

export default Contact;
