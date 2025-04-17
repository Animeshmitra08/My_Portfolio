import { motion } from 'motion/react';
import { skills, experience } from '../../Constants/data';

const About = () => {
  return (
    <motion.div
      key="about"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      transition={{ duration: 0.5 }}
      className="flex flex-col items-center justify-center h-screen py-8 overflow-y-auto"
    >
      <div className="max-w-4xl mx-auto px-4 w-full">
        <motion.h2 
          className="text-4xl font-bold mb-6 text-center bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-pink-500"
          initial={{ y: -20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.2 }}
        >
          About Me
        </motion.h2>
        
        <motion.div
          className="relative p-1 rounded-xl"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
        >
          {/* Animated border glow */}
          <div className="absolute inset-0 rounded-xl bg-gradient-to-r from-purple-500 to-pink-500 opacity-70 blur-md animate-pulse" />
          
          <div className="relative bg-gray-800 bg-opacity-70 p-6 rounded-xl backdrop-filter backdrop-blur-lg border border-gray-700 z-10 shadow-xl">
            <motion.div
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.4 }}
              className="mb-4"
            >
              <p className="text-gray-200 mb-3">
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
              transition={{ delay: 0.5 }}
              className="mb-4"
            >
              <h3 className="text-xl font-semibold mb-3 text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-400">Skills</h3>
              <div className="flex flex-wrap gap-2">
                {skills.map((skill) => (
                  <motion.span 
                    key={skill} 
                    className="px-3 py-1 bg-gray-700 bg-opacity-40 rounded-full text-sm hover:bg-purple-700 hover:bg-opacity-30 transition-all duration-300 border border-gray-600"
                    whileHover={{ scale: 1.05 }}
                  >
                    {skill}
                  </motion.span>
                ))}
              </div>
            </motion.div>

            <motion.div
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.6 }}
            >
              <h3 className="text-xl font-semibold mb-3 text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-400">Experience</h3>
              <div className="space-y-3">
                {experience.map((item, index) => (
                  <motion.div 
                    key={index}
                    className="p-3 rounded-lg bg-gray-800 border border-gray-700 hover:border-purple-500 transition-all duration-300"
                    whileHover={{ x: 5 }}
                  >
                    <h4 className="font-semibold text-white">{item.title}</h4>
                    <p className="text-xs text-purple-300">{item.period}</p>
                    <p className="text-gray-300 text-sm mt-1">{item.description}</p>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </motion.div>
  );
};

export default About;