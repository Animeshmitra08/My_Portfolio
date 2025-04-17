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
      {/* Modified animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Animated grid lines */}
        <div className="absolute inset-0 opacity-10">
          <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <pattern id="grid" width="50" height="50" patternUnits="userSpaceOnUse">
                <path d="M 50 0 L 0 0 0 50" fill="none" stroke="rgba(147, 51, 234, 0.5)" strokeWidth="0.5" />
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#grid)" />
          </svg>
        </div>

        {/* Floating particles */}
        {[...Array(15)].map((_, i) => (
          <motion.div
            key={`particle-${i}`}
            className="absolute rounded-full bg-gradient-to-br from-purple-500 to-pink-500"
            initial={{ 
              x: `${Math.random() * 100}vw`, 
              y: `${Math.random() * 100}vh`,
              opacity: Math.random() * 0.2 + 0.1,
            }}
            animate={{
              x: [
                `${Math.random() * 100}vw`,
                `${Math.random() * 100}vw`,
                `${Math.random() * 100}vw`
              ],
              y: [
                `${Math.random() * 100}vh`,
                `${Math.random() * 100}vh`,
                `${Math.random() * 100}vh`
              ],
              opacity: [
                Math.random() * 0.2 + 0.1,
                Math.random() * 0.3 + 0.2,
                Math.random() * 0.2 + 0.1
              ]
            }}
            transition={{
              duration: Math.random() * 20 + 30,
              repeat: Infinity,
              ease: "linear"
            }}
            style={{
              width: `${Math.random() * 6 + 2}px`,
              height: `${Math.random() * 6 + 2}px`,
            }}
          />
        ))}

        {/* Animated gradient overlay */}
        <motion.div
          className="absolute inset-0 bg-gradient-to-tr from-purple-900/20 to-pink-900/20"
          animate={{
            backgroundPosition: ['0% 0%', '100% 100%'],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            repeatType: "reverse",
            ease: "linear"
          }}
        />

        {/* Animated wave patterns */}
        <svg
          className="absolute bottom-0 left-0 w-full opacity-10"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1440 320"
        >
          <motion.path
            fill="#8b5cf6"
            fillOpacity="0.5"
            animate={{
              d: [
                "M0,192L48,176C96,160,192,128,288,128C384,128,480,160,576,165.3C672,171,768,149,864,149.3C960,149,1056,171,1152,176C1248,181,1344,171,1392,165.3L1440,160L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z",
                "M0,224L48,213.3C96,203,192,181,288,170.7C384,160,480,160,576,176C672,192,768,224,864,224C960,224,1056,192,1152,176C1248,160,1344,160,1392,160L1440,160L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
              ]
            }}
            transition={{
              duration: 10,
              repeat: Infinity,
              repeatType: "reverse",
              ease: "easeInOut"
            }}
          />
          <motion.path
            fill="#ec4899"
            fillOpacity="0.5"
            animate={{
              d: [
                "M0,288L48,272C96,256,192,224,288,197.3C384,171,480,149,576,154.7C672,160,768,192,864,192C960,192,1056,160,1152,154.7C1248,149,1344,171,1392,181.3L1440,192L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z",
                "M0,256L48,234.7C96,213,192,171,288,160C384,149,480,171,576,181.3C672,192,768,192,864,202.7C960,213,1056,235,1152,229.3C1248,224,1344,192,1392,176L1440,160L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
              ]
            }}
            transition={{
              duration: 8,
              repeat: Infinity,
              repeatType: "reverse",
              ease: "easeInOut"
            }}
          />
        </svg>
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