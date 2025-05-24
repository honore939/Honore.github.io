
const Skills = () => {
  const skillCategories = [
    {
      title: "Frontend Development",
      skills: [
        { name: "React.js", level: 95 },
        { name: "Vue.js", level: 88 },
        { name: "JavaScript", level: 92 },
        { name: "HTML/CSS", level: 95 },
        { name: "Bootstrap", level: 90 }
      ]
    },
    {
      title: "Backend Development",
      skills: [
        { name: "PHP", level: 90 },
        { name: "Laravel", level: 88 },
        { name: "Node.js", level: 85 },
        { name: "Python", level: 82 },
        { name: "RESTful APIs", level: 90 }
      ]
    },
    {
      title: "Tools & Others",
      skills: [
        { name: "Git/GitHub", level: 88 },
        { name: "Database Design", level: 85 },
        { name: "Project Management", level: 92 },
        { name: "Team Leadership", level: 90 },
        { name: "Agile/Scrum", level: 87 }
      ]
    }
  ];

  return (
    <>
      <style>
        {`
          @keyframes growWidth {
            from { width: 0%; }
            to { width: var(--final-width); }
          }
        `}
      </style>
      
      <section id="skills" className="py-20 px-4 bg-gray-800/30">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
              Skills & Expertise
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-purple-600 mx-auto mb-6"></div>
            <p className="text-gray-300 max-w-2xl mx-auto">
              Technologies and tools I use to bring ideas to life
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {skillCategories.map((category, categoryIndex) => (
              <div key={categoryIndex} className="bg-gray-800/50 rounded-xl p-6 border border-gray-700 hover:border-blue-500/50 transition-all duration-300">
                <h3 className="text-xl font-semibold mb-6 text-center text-blue-400">
                  {category.title}
                </h3>
                
                <div className="space-y-4">
                  {category.skills.map((skill, skillIndex) => (
                    <div key={skillIndex} className="space-y-2">
                      <div className="flex justify-between items-center">
                        <span className="text-gray-300 font-medium">{skill.name}</span>
                        <span className="text-blue-400 text-sm">{skill.level}%</span>
                      </div>
                      <div className="h-2 bg-gray-700 rounded-full overflow-hidden">
                        <div 
                          className="h-full bg-gradient-to-r from-blue-500 to-purple-600 rounded-full transition-all duration-1000 ease-out"
                          style={{ 
                            width: `${skill.level}%`,
                            animation: `growWidth 1.5s ease-out ${skillIndex * 0.1}s both`
                          }}
                        ></div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default Skills;
