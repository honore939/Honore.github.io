
import { Mail, Phone, MapPin, Send, Github, Linkedin, Twitter } from 'lucide-react';
import { useState } from 'react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission here
    console.log('Form submitted:', formData);
    // Reset form
    setFormData({ name: '', email: '', subject: '', message: '' });
  };

  const contactInfo = [
    {
      icon: <Mail className="w-6 h-6" />,
      label: "Email",
      value: "arasubizwahonore11@gmail.com",
      link: "mailto:arasubizwahonore11@gmail.com"
    },
    {
      icon: <Phone className="w-6 h-6" />,
      label: "Phone",
      value: "+250 790 251 138",
      link: "tel:+250790251138"
    },
    {
      icon: <MapPin className="w-6 h-6" />,
      label: "Location",
      value: "Kigali City, Rwanda",
      link: null
    }
  ];

  const socialLinks = [
    { icon: <Github className="w-5 h-5" />, label: "GitHub", link: "#" },
    { icon: <Linkedin className="w-5 h-5" />, label: "LinkedIn", link: "#" },
    { icon: <Twitter className="w-5 h-5" />, label: "Twitter", link: "#" }
  ];

  return (
    <section id="contact" className="py-20 px-4 bg-gray-800/30">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
            Get In Touch
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-purple-600 mx-auto mb-6"></div>
          <p className="text-gray-300 max-w-2xl mx-auto">
            Ready to start your next project? Let's discuss how we can work together to bring your ideas to life.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Information */}
          <div className="space-y-8">
            <div>
              <h3 className="text-2xl font-bold mb-6 text-white">Let's Connect</h3>
              <p className="text-gray-300 mb-8 leading-relaxed">
                I'm always interested in new opportunities and exciting projects. 
                Whether you have a question, want to discuss a project, or just want to say hello, 
                I'd love to hear from you.
              </p>
            </div>

            <div className="space-y-6">
              {contactInfo.map((item, index) => (
                <div key={index} className="flex items-center space-x-4 p-4 bg-gray-800/50 rounded-lg border border-gray-700 hover:border-blue-500/50 transition-all duration-300">
                  <div className="text-blue-400">
                    {item.icon}
                  </div>
                  <div>
                    <p className="text-gray-400 text-sm">{item.label}</p>
                    {item.link ? (
                      <a 
                        href={item.link} 
                        className="text-white hover:text-blue-400 transition-colors duration-300 font-medium"
                      >
                        {item.value}
                      </a>
                    ) : (
                      <p className="text-white font-medium">{item.value}</p>
                    )}
                  </div>
                </div>
              ))}
            </div>

            <div>
              <h4 className="text-lg font-semibold mb-4 text-white">Follow Me</h4>
              <div className="flex space-x-4">
                {socialLinks.map((social, index) => (
                  <a
                    key={index}
                    href={social.link}
                    className="p-3 bg-gray-800/50 rounded-lg border border-gray-700 hover:border-blue-500/50 hover:bg-blue-500/10 transition-all duration-300 group"
                  >
                    <div className="text-gray-400 group-hover:text-blue-400 transition-colors duration-300">
                      {social.icon}
                    </div>
                  </a>
                ))}
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="bg-gray-800/50 rounded-xl p-8 border border-gray-700">
            <h3 className="text-2xl font-bold mb-6 text-white">Send Me a Message</h3>
            
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-300 mb-2">
                    Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 bg-gray-700/50 border border-gray-600 rounded-lg focus:border-blue-500 focus:outline-none transition-colors duration-300 text-white"
                    placeholder="Your Name"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-2">
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 bg-gray-700/50 border border-gray-600 rounded-lg focus:border-blue-500 focus:outline-none transition-colors duration-300 text-white"
                    placeholder="your@email.com"
                  />
                </div>
              </div>

              <div>
                <label htmlFor="subject" className="block text-sm font-medium text-gray-300 mb-2">
                  Subject
                </label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleInputChange}
                  required
                  className="w-full px-4 py-3 bg-gray-700/50 border border-gray-600 rounded-lg focus:border-blue-500 focus:outline-none transition-colors duration-300 text-white"
                  placeholder="Project Discussion"
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-300 mb-2">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleInputChange}
                  required
                  rows={5}
                  className="w-full px-4 py-3 bg-gray-700/50 border border-gray-600 rounded-lg focus:border-blue-500 focus:outline-none transition-colors duration-300 text-white resize-none"
                  placeholder="Tell me about your project..."
                ></textarea>
              </div>

              <button
                type="submit"
                className="w-full px-6 py-3 bg-gradient-to-r from-blue-500 to-purple-600 rounded-lg font-semibold hover:shadow-lg hover:shadow-blue-500/25 transform hover:scale-105 transition-all duration-300 flex items-center justify-center gap-2"
              >
                <Send size={20} />
                Send Message
              </button>
            </form>
          </div>
        </div>

        {/* Footer */}
        <div className="mt-16 pt-8 border-t border-gray-700 text-center">
          <p className="text-gray-400">
            © 2024 ARASUBIZWA Honore. All rights reserved. Built with passion and modern web technologies.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Contact;
