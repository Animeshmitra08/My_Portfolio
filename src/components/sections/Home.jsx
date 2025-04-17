import { motion } from 'motion/react';
import { useAppContext } from '../../Context/AppContext';

const Home = () => {
  const { setActiveSection } = useAppContext();

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.2,
      }
    },
    exit: { 
      opacity: 0,
      transition: { 
        staggerChildren: 0.05,
        staggerDirection: -1
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: { y: 0, opacity: 1 },
    exit: { y: -20, opacity: 0 }
  };

  const handleScrollToSection = (section) => {
    setActiveSection(section);
    const sectionElement = document.getElementById(section);
    if (sectionElement) {
      sectionElement.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <motion.div
      key="home"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
      className="flex flex-col items-center justify-center min-h-screen relative overflow-hidden px-4"
    >
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        {[...Array(6)].map((_, i) => (
          <motion.div
            key={`bg-circle-${i}`}
            className="absolute rounded-full bg-gradient-to-br from-purple-500 to-pink-500 opacity-5"
            initial={{ 
              left: `${Math.random() * 100}%`, 
              top: `${Math.random() * 100}%`,
              scale: Math.random() * 0.5 + 0.5,
              rotate: Math.random() * 180
            }}
            animate={{
              y: [0, -30, 0],
              rotate: i % 2 === 0 ? [0, 180] : [180, 0],
              scale: [
                Math.random() * 0.5 + 0.5,
                Math.random() * 0.8 + 0.8,
                Math.random() * 0.5 + 0.5
              ]
            }}
            transition={{
              duration: Math.random() * 20 + 15,
              repeat: Infinity,
              ease: "easeInOut"
            }}
            style={{
              width: `${Math.random() * 300 + 100}px`,
              height: `${Math.random() * 300 + 100}px`,
              filter: 'blur(60px)'
            }}
          />
        ))}
      </div>

      {/* Main content */}
      <motion.div 
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        exit="exit"
        className="max-w-3xl text-center relative z-10"
      >
        {/* Profile picture */}
        <motion.div
          variants={itemVariants}
          transition={{ duration: 0.6 }}
          className="mb-8 flex justify-center"
        >
          <div className="w-32 h-32 md:w-40 md:h-40 rounded-full p-1 bg-gradient-to-br from-purple-500 to-pink-500 shadow-lg shadow-purple-500/20">
            <div className="w-full h-full bg-gray-900 rounded-full flex items-center justify-center text-3xl md:text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-500">
              AM
            </div>
          </div>
        </motion.div>

        {/* Name */}
        <motion.div
          variants={itemVariants}
          transition={{ duration: 0.7 }}
          className="relative"
        >
          <h1 className="text-5xl md:text-7xl font-bold mb-4 bg-gradient-to-r from-purple-400 via-pink-500 to-purple-400 text-transparent bg-clip-text">
            Animesh Mitra
          </h1>
          <motion.div 
            initial={{ scaleX: 0 }}
            animate={{ scaleX: 1 }}
            transition={{ duration: 1.2, delay: 1 }}
            className="h-px w-48 md:w-64 bg-gradient-to-r from-purple-500 via-pink-500 to-purple-500 mx-auto"
          />
        </motion.div>

        {/* Title */}
        <motion.h2 
          variants={itemVariants}
          transition={{ duration: 0.6 }}
          className="text-2xl md:text-3xl my-6 text-gray-200 font-light"
        >
          <span className="text-purple-400">Frontend</span> Developer & <span className="text-pink-400">UI</span> Designer
        </motion.h2>

        {/* Description */}
        <motion.div
          variants={itemVariants}
          transition={{ duration: 0.6 }}
          className="mb-8"
        >
          <p className="text-lg text-gray-300 md:max-w-lg mx-auto">
            Creating beautiful, performant web experiences with attention to detail and a focus on 
            <span className="text-purple-300"> user-centered design</span>.
          </p>
        </motion.div>

        {/* Social links */}
        <motion.div
          variants={itemVariants}
          transition={{ duration: 0.5 }}
          className="flex justify-center space-x-4 mb-8"
        >
          {['github', 'linkedin', 'twitter'].map((platform, i) => (
            <motion.a
              key={platform}
              href="#"
              whileHover={{ y: -3, scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              className="w-10 h-10 rounded-full bg-gray-800 hover:bg-gray-700 flex items-center justify-center transition-colors border border-gray-700"
            >
              <span className="text-sm text-gray-300">{platform[0].toUpperCase()}</span>
            </motion.a>
          ))}
        </motion.div>

        {/* CTA buttons */}
        <motion.div
          variants={itemVariants}
          transition={{ duration: 0.5 }}
          className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-4"
        >
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => handleScrollToSection('projects')}
            className="px-8 py-3 bg-gray-800 text-gray-200 font-medium rounded-full hover:bg-gray-700 transition duration-300 border border-gray-700 shadow-md"
          >
            View Projects
          </motion.button>
          
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => handleScrollToSection('contact')}
            className="px-8 py-3 bg-gradient-to-r from-purple-600 to-pink-600 text-white font-medium rounded-full hover:from-purple-700 hover:to-pink-700 transition duration-300 shadow-lg shadow-purple-500/20"
          >
            Get in touch
          </motion.button>
        </motion.div>

        {/* Scroll indicator */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 2, duration: 1 }}
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
        >
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ repeat: Infinity, duration: 1.5 }}
            className="flex flex-col items-center cursor-pointer"
            onClick={() => handleScrollToSection('about')}
          >
            <span className="text-sm text-gray-400 mb-2">Scroll</span>
            <svg width="16" height="24" viewBox="0 0 16 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M8 16L8 1" stroke="#9CA3AF" strokeWidth="2" strokeLinecap="round"/>
              <path d="M3 11L8 16L13 11" stroke="#9CA3AF" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </motion.div>
        </motion.div>
      </motion.div>
    </motion.div>
  );
};

export default Home;