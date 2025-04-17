import { motion, AnimatePresence } from 'motion/react';
import { useAppContext } from '../../Context/AppContext';
import { sections } from '../../Constants/data'; // Assuming sections is an array of section names

const Navigation = ({ onSectionChange }) => {
  const { activeSection, setActiveSection, menuOpen, setMenuOpen } = useAppContext();

  // Animation variants
  const navItemVariants = {
    hidden: { opacity: 0, y: -20 },
    visible: (i) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: 0.3 + (i * 0.1),
        duration: 0.5,
      }
    }),
  };

  const handleNavClick = (section) => {
    setActiveSection(section);
    setMenuOpen(false);
    if (onSectionChange) {
      onSectionChange(section);
    }
  };

  return (
    <>
      {/* Mobile Menu Button */}
      <motion.div 
        className="fixed top-6 right-6 z-30 md:hidden"
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 0.5 }}
      >
        <button 
          onClick={() => setMenuOpen(!menuOpen)}
          className="p-3 bg-gray-800 bg-opacity-80 backdrop-blur-sm rounded-full shadow-lg border border-gray-700 hover:bg-purple-900 hover:border-purple-500 transition-all duration-300"
        >
          <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20">
            {menuOpen ? (
              <path fillRule="evenodd" clipRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" />
            ) : (
              <path fillRule="evenodd" clipRule="evenodd" d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm0 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm0 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" />
            )}
          </svg>
        </button>
      </motion.div>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 bg-black bg-opacity-80 backdrop-blur-sm z-20 md:hidden flex flex-col items-center justify-center"
          >
            <motion.nav 
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="flex flex-col space-y-6 text-center"
            >
              {sections.map((section, index) => (
                <motion.button
                  custom={index}
                  variants={navItemVariants}
                  initial="hidden"
                  animate="visible"
                  whileHover={{ 
                    scale: 1.1, 
                    color: "#C084FC", // purple-400
                    textShadow: "0 0 8px rgba(192, 132, 252, 0.5)"
                  }}
                  whileTap={{ scale: 0.95 }}
                  key={section}
                  className={`px-6 py-3 text-lg uppercase tracking-widest relative ${
                    activeSection === section 
                      ? 'text-purple-400 font-bold' 
                      : 'text-gray-300'
                  }`}
                  onClick={() => handleNavClick(section)}
                >
                  {section}
                  {activeSection === section && (
                    <motion.div
                      layoutId="activeMobileSectionIndicator"
                      className="absolute -bottom-1 left-1/2 w-8 h-1 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full"
                      style={{ translateX: "-50%" }}
                      transition={{ duration: 0.3 }}
                    />
                  )}
                </motion.button>
              ))}
            </motion.nav>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Desktop Navigation */}
      <motion.nav 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8, delay: 0.6 }}
        className="hidden md:block fixed left-8 top-0 h-full z-10"
      >
        <div className="flex flex-col items-start justify-center h-full">
          <div className="py-6 px-4 bg-gray-900 bg-opacity-50 backdrop-blur-sm rounded-2xl border border-gray-800 shadow-xl">
            {sections.map((section, index) => (
              <motion.div
                key={section}
                className="relative"
                custom={index}
                variants={navItemVariants}
                initial="hidden"
                animate="visible"
              >
                <motion.button
                  whileHover={{ 
                    x: 5,
                    color: "#C084FC", // purple-400
                    transition: { duration: 0.2 }
                  }}
                  whileTap={{ scale: 0.95 }}
                  className={`my-4 px-6 py-2 text-md font-medium uppercase tracking-widest flex items-center ${
                    activeSection === section 
                      ? 'text-purple-400' 
                      : 'text-gray-300'
                  }`}
                  onClick={() => handleNavClick(section)}
                >
                  {activeSection === section && (
                    <motion.div
                      layoutId="activeSectionIndicator"
                      className="absolute left-0 w-1 h-6 bg-gradient-to-b from-purple-500 to-pink-500 rounded-full"
                      transition={{ duration: 0.3 }}
                    />
                  )}
                  <span className="ml-3">{section}</span>
                </motion.button>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.nav>
    </>
  );
};

export default Navigation;