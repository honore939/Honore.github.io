
import { Code, Users, Award, MapPin } from 'lucide-react';

const About = () => {
  const highlights = [
    {
      icon: <Code className="w-6 h-6" />,
      title: "Full-Stack Developer",
      description: "Expert in modern web technologies and frameworks"
    },
    {
      icon: <Users className="w-6 h-6" />,
      title: "Project Director",
      description: "Leading teams to deliver successful projects"
    },
    {
      icon: <Award className="w-6 h-6" />,
      title: "Problem Solver",
      description: "Creating innovative solutions for complex challenges"
    },
    {
      icon: <MapPin className="w-6 h-6" />,
      title: "Based in Kigali",
      description: "Rwanda's tech hub, driving digital transformation"
    }
  ];

  return (
    <section id="about" className="py-20 px-4">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
            About Me
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-purple-600 mx-auto"></div>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <p className="text-lg text-gray-300 leading-relaxed">
              I'm <span className="text-blue-400 font-semibold">ARASUBIZWA Honore</span>, 
              a passionate software developer and project director based in 
              <span className="text-purple-400 font-semibold"> Kigali City</span>. 
              With extensive experience in modern web technologies, I specialize in 
              creating robust, scalable applications that solve real-world problems.
            </p>
            
            <p className="text-lg text-gray-300 leading-relaxed">
              My journey in software development has led me to master various 
              technologies including React.js, Laravel, Vue.js, Node.js, and Python. 
              As a project director, I combine technical expertise with leadership 
              skills to deliver exceptional results.
            </p>

            <p className="text-lg text-gray-300 leading-relaxed">
              I'm committed to continuous learning and staying at the forefront 
              of technology trends, ensuring that every project I work on leverages 
              the best tools and practices available.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {highlights.map((item, index) => (
              <div 
                key={index}
                className="p-6 bg-gray-800/50 rounded-xl border border-gray-700 hover:border-blue-500/50 transition-all duration-300 hover:transform hover:scale-105"
              >
                <div className="text-blue-400 mb-4">
                  {item.icon}
                </div>
                <h3 className="text-xl font-semibold mb-2 text-white">
                  {item.title}
                </h3>
                <p className="text-gray-400 text-sm">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
