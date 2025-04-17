import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';

export default function Portfolio() {
  const [activeSection, setActiveSection] = useState('home');
  const [menuOpen, setMenuOpen] = useState(false);
  const [loading, setLoading] = useState(true);

  const sections = ['home', 'about', 'projects', 'contact'];

  const projects = [
    {
      id: 1,
      title: 'E-Commerce Platform',
      description: 'A full-stack e-commerce solution with cart functionality and payment integration',
      tags: ['React', 'Node.js', 'MongoDB']
    },
    {
      id: 2,
      title: 'Health Tracker App',
      description: 'Mobile application for tracking fitness goals and nutrition',
      tags: ['React Native', 'Firebase', 'Redux']
    },
    {
      id: 3,
      title: 'Company Dashboard',
      description: 'Interactive analytics dashboard with real-time data visualization',
      tags: ['React', 'D3.js', 'AWS']
    }
  ];

  const textureStyle = {
    backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23333333' fill-opacity='0.12'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`
  };

  // Simulate loading time
  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 2500);
    
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="min-h-screen bg-gray-900 text-gray-100 font-sans overflow-hidden" style={textureStyle}>
      <AnimatePresence>
        {loading ? (
          <motion.div 
            key="loader"
            initial={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.8, ease: "easeInOut" }}
            className="fixed inset-0 bg-gray-900 z-50 flex flex-col items-center justify-center"
          >
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ 
                scale: [0.8, 1.2, 1],
                opacity: [0, 1, 1]
              }}
              transition={{ 
                duration: 1.5,
                times: [0, 0.6, 1],
                ease: "easeInOut"
              }}
              className="relative"
            >
              <div className="flex flex-col items-center">
                <motion.div
                  initial={{ width: 0 }}
                  animate={{ 
                    width: "200px",
                    transition: { delay: 0.5, duration: 1.2 }
                  }}
                >
                  <h1 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-purple-400 to-pink-500 text-transparent bg-clip-text">
                    John Doe
                  </h1>
                </motion.div>
                
                <motion.div 
                  initial={{ width: 0 }}
                  animate={{ 
                    width: "160px",
                    transition: { delay: 0.8, duration: 1 }
                  }}
                  className="overflow-hidden"
                >
                  <p className="text-gray-400 mt-2 text-center">Frontend Developer</p>
                </motion.div>
              </div>
              
              <motion.div 
                initial={{ scaleX: 0 }}
                animate={{ scaleX: 1 }}
                transition={{ delay: 1.2, duration: 1 }}
                className="h-px w-full bg-gradient-to-r from-purple-600 to-pink-600 mt-6"
              />
              
              <motion.div 
                initial={{ y: 10, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 1.6, duration: 0.5 }}
                className="mt-6 flex justify-center space-x-2"
              >
                <motion.div 
                  animate={{ 
                    y: [0, -6, 0],
                    transition: { repeat: Infinity, duration: 0.6, repeatDelay: 0.05 }
                  }}
                  className="w-2 h-2 rounded-full bg-purple-500" 
                />
                <motion.div 
                  animate={{ 
                    y: [0, -6, 0],
                    transition: { repeat: Infinity, duration: 0.6, delay: 0.1, repeatDelay: 0.05 }
                  }}
                  className="w-2 h-2 rounded-full bg-purple-400" 
                />
                <motion.div 
                  animate={{ 
                    y: [0, -6, 0],
                    transition: { repeat: Infinity, duration: 0.6, delay: 0.2, repeatDelay: 0.05 }
                  }}
                  className="w-2 h-2 rounded-full bg-pink-500" 
                />
              </motion.div>
            </motion.div>
          </motion.div>
        ) : null}
      </AnimatePresence>

      {/* Main Content (only render when loading is complete) */}
      <AnimatePresence>
        {!loading && (
          <motion.div
            key="main-content"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="w-full h-full"
          >
            {/* Mobile Menu Button */}
            <div className="fixed top-4 right-4 z-30 md:hidden">
              <button 
                onClick={() => setMenuOpen(!menuOpen)}
                className="p-2 bg-gray-800 rounded-md"
              >
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20">
                  {menuOpen ? (
                    <path fillRule="evenodd" clipRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" />
                  ) : (
                    <path fillRule="evenodd" clipRule="evenodd" d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm0 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm0 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" />
                  )}
                </svg>
              </button>
            </div>

            {/* Mobile Menu Overlay */}
            <AnimatePresence>
              {menuOpen && (
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  className="fixed inset-0 bg-black bg-opacity-80 z-20 md:hidden flex flex-col items-center justify-center"
                >
                  <nav className="flex flex-col space-y-6 text-center">
                    {sections.map((section) => (
                      <motion.button
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.95 }}
                        key={section}
                        className={`px-4 py-2 text-lg uppercase tracking-widest ${activeSection === section ? 'text-purple-400 font-bold' : 'text-gray-300'}`}
                        onClick={() => {
                          setActiveSection(section);
                          setMenuOpen(false);
                        }}
                      >
                        {section}
                      </motion.button>
                    ))}
                  </nav>
                </motion.div>
              )}
            </AnimatePresence>

            {/* Desktop Navigation */}
            <motion.nav 
              initial={{ x: -40, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="hidden md:flex fixed left-8 top-0 h-full items-center z-10"
            >
              <div className="flex flex-col space-y-8">
                {sections.map((section) => (
                  <motion.button
                    whileHover={{ scale: 1.1, x: 5 }}
                    whileTap={{ scale: 0.95 }}
                    key={section}
                    className={`px-4 py-2 text-md uppercase tracking-widest ${activeSection === section ? 'text-purple-400 font-bold' : 'text-gray-300'}`}
                    onClick={() => setActiveSection(section)}
                  >
                    {section}
                  </motion.button>
                ))}
              </div>
            </motion.nav>

            {/* Main Content */}
            <main className="container mx-auto px-4 ">
              <AnimatePresence mode="wait">
                {activeSection === 'home' && (
                  <motion.div
                    key="home"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -20 }}
                    transition={{ duration: 0.5 }}
                    className="flex flex-col items-center justify-center min-h-screen"
                  >
                    <div className="max-w-2xl text-center">
                      <motion.div
                        initial={{ scale: 0.8, opacity: 0 }}
                        animate={{ scale: 1, opacity: 1 }}
                        transition={{ delay: 0.2, duration: 0.8 }}
                      >
                        <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-purple-400 to-pink-500 text-transparent bg-clip-text">John Doe</h1>
                      </motion.div>
                      <motion.h2 
                        className="text-2xl md:text-3xl mb-6 text-gray-300"
                        initial={{ y: 20, opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        transition={{ delay: 0.4, duration: 0.6 }}
                      >
                        Frontend Developer & UI Designer
                      </motion.h2>
                      <motion.div
                        initial={{ y: 20, opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        transition={{ delay: 0.6, duration: 0.6 }}
                      >
                        <p className="text-lg text-gray-400 mb-8">
                          Creating beautiful, performant web experiences with attention to detail
                        </p>
                      </motion.div>
                      <motion.div
                        initial={{ y: 20, opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        transition={{ delay: 0.8, duration: 0.6 }}
                      >
                        <button
                          onClick={() => setActiveSection('contact')}
                          className="px-8 py-3 bg-gradient-to-r from-purple-600 to-pink-600 text-white font-medium rounded-md hover:from-purple-700 hover:to-pink-700 transition duration-300"
                        >
                          Get in touch
                        </button>
                      </motion.div>
                    </div>
                  </motion.div>
                )}

                {activeSection === 'about' && (
                  <motion.div
                    key="about"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -20 }}
                    transition={{ duration: 0.5 }}
                    className="flex flex-col items-center justify-center min-h-screen"
                  >
                    <div className="max-w-3xl mx-auto">
                      <motion.h2 
                        className="text-4xl font-bold mb-8 text-center"
                        initial={{ y: -20, opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        transition={{ delay: 0.2 }}
                      >
                        About Me
                      </motion.h2>
                      
                      <div className="bg-gray-800 bg-opacity-50 p-8 rounded-lg backdrop-filter backdrop-blur-sm border border-gray-700">
                        <motion.div
                          initial={{ y: 20, opacity: 0 }}
                          animate={{ y: 0, opacity: 1 }}
                          transition={{ delay: 0.3 }}
                          className="mb-6"
                        >
                          <p className="text-gray-300 mb-4">
                            With over 5 years of experience in frontend development, I specialize in creating responsive, accessible, 
                            and visually appealing web applications. My passion lies in the intersection of clean code and beautiful design.
                          </p>
                          <p className="text-gray-300">
                            I'm constantly exploring new technologies and techniques to improve user experiences and build more efficient applications.
                          </p>
                        </motion.div>

                        <motion.div
                          initial={{ y: 20, opacity: 0 }}
                          animate={{ y: 0, opacity: 1 }}
                          transition={{ delay: 0.4 }}
                          className="mb-8"
                        >
                          <h3 className="text-xl font-semibold mb-4 text-purple-400">Skills</h3>
                          <div className="flex flex-wrap gap-2">
                            {['React', 'TypeScript', 'JavaScript', 'HTML/CSS', 'Tailwind CSS', 'Next.js', 'Node.js', 'UI/UX Design', 'Framer Motion'].map((skill) => (
                              <span key={skill} className="px-3 py-1 bg-gray-700 bg-opacity-50 rounded-full text-sm">
                                {skill}
                              </span>
                            ))}
                          </div>
                        </motion.div>

                        <motion.div
                          initial={{ y: 20, opacity: 0 }}
                          animate={{ y: 0, opacity: 1 }}
                          transition={{ delay: 0.5 }}
                        >
                          <h3 className="text-xl font-semibold mb-4 text-purple-400">Experience</h3>
                          <div className="space-y-4">
                            <div>
                              <h4 className="font-medium">Senior Frontend Developer at TechCorp</h4>
                              <p className="text-sm text-gray-400">2023 - Present</p>
                              <p className="text-gray-300 mt-1">Leading the frontend team in developing modern web applications</p>
                            </div>
                            <div>
                              <h4 className="font-medium">Frontend Developer at WebSolutions</h4>
                              <p className="text-sm text-gray-400">2020 - 2023</p>
                              <p className="text-gray-300 mt-1">Implemented responsive designs and interactive features</p>
                            </div>
                          </div>
                        </motion.div>
                      </div>
                    </div>
                  </motion.div>
                )}

                {activeSection === 'projects' && (
                  <motion.div
                    key="projects"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -20 }}
                    transition={{ duration: 0.5 }}
                    className="flex flex-col items-center justify-center min-h-screen py-16"
                  >
                    <motion.h2 
                      className="text-4xl font-bold mb-12 text-center"
                      initial={{ y: -20, opacity: 0 }}
                      animate={{ y: 0, opacity: 1 }}
                      transition={{ delay: 0.2 }}
                    >
                      Projects
                    </motion.h2>
                    
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
                      {projects.map((project, index) => (
                        <motion.div
                          key={project.id}
                          initial={{ y: 20, opacity: 0 }}
                          animate={{ y: 0, opacity: 1 }}
                          transition={{ delay: 0.3 + index * 0.1 }}
                          whileHover={{ y: -5, transition: { duration: 0.2 } }}
                          className="bg-gray-800 bg-opacity-50 rounded-lg overflow-hidden border border-gray-700 backdrop-filter backdrop-blur-sm"
                        >
                          <div className="h-48 bg-gradient-to-br from-purple-800 to-pink-800 flex items-center justify-center">
                            <span className="text-4xl">✨</span>
                          </div>
                          <div className="p-6">
                            <h3 className="text-xl font-bold mb-2 text-white">{project.title}</h3>
                            <p className="text-gray-400 mb-4">{project.description}</p>
                            <div className="flex flex-wrap gap-2">
                              {project.tags.map((tag) => (
                                <span key={tag} className="px-2 py-1 bg-gray-700 bg-opacity-70 rounded-md text-xs">
                                  {tag}
                                </span>
                              ))}
                            </div>
                          </div>
                        </motion.div>
                      ))}
                    </div>
                  </motion.div>
                )}

                {activeSection === 'contact' && (
                  <motion.div
                    key="contact"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -20 }}
                    transition={{ duration: 0.5 }}
                    className="flex flex-col items-center justify-center min-h-screen"
                  >
                    <div className="max-w-xl w-full mx-auto">
                      <motion.h2 
                        className="text-4xl font-bold mb-8 text-center"
                        initial={{ y: -20, opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        transition={{ delay: 0.2 }}
                      >
                        Get In Touch
                      </motion.h2>
                      
                      <motion.div
                        initial={{ y: 20, opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        transition={{ delay: 0.3 }}
                        className="bg-gray-800 bg-opacity-50 p-8 rounded-lg backdrop-filter backdrop-blur-sm border border-gray-700"
                      >
                        <form className="space-y-6">
                          <div>
                            <label htmlFor="name" className="block text-sm font-medium text-gray-300 mb-1">Name</label>
                            <input
                              type="text"
                              id="name"
                              className="w-full px-4 py-2 bg-gray-700 bg-opacity-50 border border-gray-600 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500 text-white"
                              placeholder="Your name"
                            />
                          </div>
                          <div>
                            <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-1">Email</label>
                            <input
                              type="email"
                              id="email"
                              className="w-full px-4 py-2 bg-gray-700 bg-opacity-50 border border-gray-600 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500 text-white"
                              placeholder="your.email@example.com"
                            />
                          </div>
                          <div>
                            <label htmlFor="message" className="block text-sm font-medium text-gray-300 mb-1">Message</label>
                            <textarea
                              id="message"
                              rows="4"
                              className="w-full px-4 py-2 bg-gray-700 bg-opacity-50 border border-gray-600 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500 text-white"
                              placeholder="Your message..."
                            ></textarea>
                          </div>
                          <motion.button
                            whileHover={{ scale: 1.02 }}
                            whileTap={{ scale: 0.98 }}
                            type="submit"
                            className="w-full py-3 bg-gradient-to-r from-purple-600 to-pink-600 text-white font-medium rounded-md hover:from-purple-700 hover:to-pink-700 transition duration-300"
                          >
                            Send Message
                          </motion.button>
                        </form>
                      </motion.div>
                      
                      <motion.div
                        initial={{ y: 20, opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        transition={{ delay: 0.4 }}
                        className="mt-8 flex justify-center space-x-6"
                      >
                        {['GitHub', 'LinkedIn', 'Twitter', 'Dribbble'].map((platform) => (
                          <motion.a
                            key={platform}
                            href="#"
                            whileHover={{ y: -3, scale: 1.1 }}
                            className="text-gray-400 hover:text-purple-400 transition-colors"
                          >
                            {platform}
                          </motion.a>
                        ))}
                      </motion.div>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </main>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}