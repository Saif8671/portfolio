import { useState } from 'react';
import { Mail, MapPin, Github, Linkedin, Send } from 'lucide-react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const emailSubject = formData.subject.trim() || 'Portfolio Inquiry';
    const emailBody = [
      `Name: ${formData.name}`,
      `Email: ${formData.email}`,
      '',
      formData.message,
    ].join('\n');

    const mailtoUrl = `mailto:saifurrahman8671@gmail.com?subject=${encodeURIComponent(
      emailSubject
    )}&body=${encodeURIComponent(emailBody)}`;

    window.location.href = mailtoUrl;
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
      className="py-16 px-6 bg-github-bg border-t border-github-border"
    >
      <div className="max-w-7xl mx-auto">
        <div className="mb-12">
          <h2 className="text-2xl font-semibold text-github-text mb-2">
            Get In Touch
          </h2>
          <p className="text-github-muted">
            Let's connect and discuss opportunities
          </p>
          <p className="text-xs text-github-muted mt-2">
            Sending opens your email app with a pre-filled draft to my Gmail.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          <div className="space-y-6">
            <div className="border border-github-border rounded-md p-6 bg-github-canvas">
              <h3 className="text-lg font-semibold text-github-text mb-4">
                Contact Information
              </h3>

              <div className="space-y-4">
                <div className="flex items-center gap-3 text-github-muted">
                  <Mail size={20} className="text-github-accent" />
                  <a
                    href="mailto:saifurrahman8671@gmail.com"
                    className="hover:text-github-accent transition-colors duration-200"
                  >
                    saifurrahman8671@gmail.com
                  </a>
                </div>

                <div className="flex items-center gap-3 text-github-muted">
                  <MapPin size={20} className="text-github-accent" />
                  <span>India</span>
                </div>

                <div className="flex items-center gap-3 text-github-muted">
                  <Github size={20} className="text-github-accent" />
                  <a
                    href="https://github.com/Saif8671"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-github-accent transition-colors duration-200"
                  >
                    github.com/Saif8671
                  </a>
                </div>

                <div className="flex items-center gap-3 text-github-muted">
                  <Linkedin size={20} className="text-github-accent" />
                  <a
                    href="https://www.linkedin.com/in/saif-ur-rahman-0211002b9"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-github-accent transition-colors duration-200"
                  >
                    LinkedIn Profile
                  </a>
                </div>
              </div>
            </div>

            <div className="border border-github-border rounded-md p-6 bg-github-canvas">
              <h3 className="text-lg font-semibold text-github-text mb-4">
                Connect With Me
              </h3>
              <div className="flex gap-3">
                <a
                  href="https://github.com/Saif8671"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 border border-github-border rounded-md hover:border-github-accent hover:bg-github-bg transition-all duration-200"
                  aria-label="GitHub"
                >
                  <Github size={20} className="text-github-text" />
                </a>
                <a
                  href="https://www.linkedin.com/in/saif-ur-rahman-0211002b9"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 border border-github-border rounded-md hover:border-github-accent hover:bg-github-bg transition-all duration-200"
                  aria-label="LinkedIn"
                >
                  <Linkedin size={20} className="text-github-text" />
                </a>
                <a
                  href="mailto:saifurrahman8671@gmail.com"
                  className="p-3 border border-github-border rounded-md hover:border-github-accent hover:bg-github-bg transition-all duration-200"
                  aria-label="Email"
                >
                  <Mail size={20} className="text-github-text" />
                </a>
              </div>
            </div>
          </div>

          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label
                htmlFor="name"
                className="block mb-2 text-sm font-medium text-github-text"
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
                className="w-full px-3 py-2 bg-github-canvas border border-github-border rounded-md text-github-text focus:outline-none focus:border-github-accent transition-colors duration-200"
              />
            </div>

            <div>
              <label
                htmlFor="email"
                className="block mb-2 text-sm font-medium text-github-text"
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
                className="w-full px-3 py-2 bg-github-canvas border border-github-border rounded-md text-github-text focus:outline-none focus:border-github-accent transition-colors duration-200"
              />
            </div>

            <div>
              <label
                htmlFor="subject"
                className="block mb-2 text-sm font-medium text-github-text"
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
                className="w-full px-3 py-2 bg-github-canvas border border-github-border rounded-md text-github-text focus:outline-none focus:border-github-accent transition-colors duration-200"
              />
            </div>

            <div>
              <label
                htmlFor="message"
                className="block mb-2 text-sm font-medium text-github-text"
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
                className="w-full px-3 py-2 bg-github-canvas border border-github-border rounded-md text-github-text focus:outline-none focus:border-github-accent transition-colors duration-200 resize-none"
              />
            </div>

            <button
              type="submit"
              className="w-full px-4 py-2 bg-github-success hover:bg-github-success/80 text-white rounded-md transition-colors duration-200 flex items-center justify-center gap-2 font-medium"
            >
              Send Message
              <Send size={16} />
            </button>
          </form>
        </div>

        <div className="mt-12 pt-8 border-t border-github-border text-center text-sm text-github-muted">
          <p>&copy; 2025 Saif Ur Rahman. Built with passion for cybersecurity and continuous learning.</p>
        </div>
      </div>
    </section>
  );
};

export default Contact;
