
import { ArrowDown, Download } from 'lucide-react';

const Hero = () => {
  const scrollToAbout = () => {
    const aboutSection = document.getElementById('about');
    if (aboutSection) {
      aboutSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <>
      <style>
        {`
          @keyframes fade-in {
            from { opacity: 0; transform: translateY(30px); }
            to { opacity: 1; transform: translateY(0); }
          }
          .animate-fade-in {
            animation: fade-in 1s ease-out;
          }
          .animate-fade-in-delay-1 {
            animation: fade-in 1s ease-out 0.3s both;
          }
          .animate-fade-in-delay-2 {
            animation: fade-in 1s ease-out 0.6s both;
          }
          .animate-fade-in-delay-3 {
            animation: fade-in 1s ease-out 0.9s both;
          }
        `}
      </style>
      
      <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden">
        {/* Background gradient */}
        <div className="absolute inset-0 bg-gradient-to-br from-blue-900/20 via-gray-900 to-purple-900/20"></div>
        
        {/* Animated background shapes */}
        <div className="absolute inset-0">
          <div className="absolute top-20 left-20 w-64 h-64 bg-blue-500/10 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-20 right-20 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
        </div>

        <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
          <div className="mb-8">
            <div className="w-32 h-32 mx-auto mb-6 rounded-full bg-gradient-to-r from-blue-500 to-purple-600 p-1">
              <div className="w-full h-full rounded-full bg-gray-800 flex items-center justify-center">
                <span className="text-4xl font-bold text-blue-400">AH</span>
              </div>
            </div>
          </div>

          <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500 bg-clip-text text-transparent animate-fade-in">
            ARASUBIZWA Honore
          </h1>
          
          <p className="text-xl md:text-2xl text-gray-300 mb-4 animate-fade-in-delay-1">
            Software Developer & Project Director
          </p>
          
          <p className="text-lg text-gray-400 mb-8 max-w-2xl mx-auto animate-fade-in-delay-2">
            Passionate about creating innovative solutions with modern web technologies.
            Specializing in full-stack development and leading successful projects.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12 animate-fade-in-delay-3">
            <button
              onClick={scrollToAbout}
              className="px-8 py-3 bg-gradient-to-r from-blue-500 to-purple-600 rounded-lg font-semibold hover:shadow-lg hover:shadow-blue-500/25 transform hover:scale-105 transition-all duration-300"
            >
              Learn More About Me
            </button>
            <button className="px-8 py-3 border border-gray-600 rounded-lg font-semibold hover:bg-gray-800 transform hover:scale-105 transition-all duration-300 flex items-center justify-center gap-2">
              <Download size={20} />
              Download CV
            </button>
          </div>

          <button
            onClick={scrollToAbout}
            className="animate-bounce"
          >
            <ArrowDown size={32} className="text-gray-400 hover:text-white transition-colors duration-300" />
          </button>
        </div>
      </section>
    </>
  );
};

export default Hero;
