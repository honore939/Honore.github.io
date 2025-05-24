
import { ExternalLink, Github, Calendar } from 'lucide-react';

const Projects = () => {
  const projects = [
    {
      title: "Student Management System",
      description: "A comprehensive web application built with React.js for managing student records, grades, and academic information. Features include real-time data updates, responsive design, and intuitive user interface.",
      technologies: ["React.js", "JavaScript", "CSS", "HTML"],
      features: [
        "Student registration and profile management",
        "Grade tracking and report generation", 
        "Responsive design for all devices",
        "Real-time data synchronization"
      ],
      status: "Completed",
      year: "2024"
    },
    {
      title: "E-Commerce Platform",
      description: "Full-stack e-commerce solution with advanced features including payment integration, inventory management, and admin dashboard. Built using Laravel and Vue.js.",
      technologies: ["Laravel", "Vue.js", "PHP", "MySQL"],
      features: [
        "Secure payment processing",
        "Inventory management system",
        "Admin dashboard with analytics",
        "Mobile-responsive design"
      ],
      status: "In Progress",
      year: "2024"
    },
    {
      title: "API Management System",
      description: "RESTful API development and management platform built with Node.js and Python. Includes documentation, testing tools, and monitoring capabilities.",
      technologies: ["Node.js", "Python", "Express", "MongoDB"],
      features: [
        "API documentation generator",
        "Automated testing suite",
        "Performance monitoring",
        "User authentication system"
      ],
      status: "Planning",
      year: "2024"
    }
  ];

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'Completed': return 'text-green-400 bg-green-400/10 border-green-400/20';
      case 'In Progress': return 'text-blue-400 bg-blue-400/10 border-blue-400/20';
      case 'Planning': return 'text-yellow-400 bg-yellow-400/10 border-yellow-400/20';
      default: return 'text-gray-400 bg-gray-400/10 border-gray-400/20';
    }
  };

  return (
    <section id="projects" className="py-20 px-4">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
            Featured Projects
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-purple-600 mx-auto mb-6"></div>
          <p className="text-gray-300 max-w-2xl mx-auto">
            Showcasing some of my recent work and contributions to various projects
          </p>
        </div>

        <div className="grid lg:grid-cols-2 xl:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div 
              key={index}
              className="bg-gray-800/50 rounded-xl border border-gray-700 hover:border-blue-500/50 transition-all duration-300 overflow-hidden group hover:transform hover:scale-105"
            >
              <div className="p-6">
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center gap-2 text-gray-400">
                    <Calendar size={16} />
                    <span className="text-sm">{project.year}</span>
                  </div>
                  <span className={`px-3 py-1 rounded-full text-xs font-medium border ${getStatusColor(project.status)}`}>
                    {project.status}
                  </span>
                </div>

                <h3 className="text-xl font-bold mb-3 text-white group-hover:text-blue-400 transition-colors duration-300">
                  {project.title}
                </h3>
                
                <p className="text-gray-300 mb-4 text-sm leading-relaxed">
                  {project.description}
                </p>

                <div className="mb-4">
                  <h4 className="text-sm font-semibold text-blue-400 mb-2">Key Features:</h4>
                  <ul className="space-y-1">
                    {project.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="text-xs text-gray-400 flex items-start">
                        <span className="text-blue-400 mr-2">•</span>
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="mb-6">
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech, techIndex) => (
                      <span 
                        key={techIndex}
                        className="px-3 py-1 bg-gray-700/50 text-gray-300 text-xs rounded-full border border-gray-600"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="flex gap-3">
                  <button className="flex-1 flex items-center justify-center gap-2 px-4 py-2 bg-gradient-to-r from-blue-500 to-purple-600 rounded-lg text-sm font-medium hover:shadow-lg hover:shadow-blue-500/25 transition-all duration-300">
                    <ExternalLink size={16} />
                    View Project
                  </button>
                  <button className="px-4 py-2 border border-gray-600 rounded-lg text-sm font-medium hover:bg-gray-700 transition-all duration-300">
                    <Github size={16} />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
