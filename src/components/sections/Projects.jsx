import { motion } from 'motion/react';
import { projects } from '../../Constants/data';
import ProjectCard from '../ui/ProjectCard';

const Projects = () => {
  return (
    <div className="relative overflow-hidden min-h-screen bg-gray-900">
      {/* Space background with stars */}
      <div className="absolute inset-0 z-0">
        {/* Starfield background */}
        {[...Array(150)].map((_, i) => (
          <motion.div
            key={`star-${i}`}
            className="absolute rounded-full bg-white"
            style={{
              width: Math.random() < 0.8 ? '2px' : '3px',
              height: Math.random() < 0.8 ? '2px' : '3px',
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              opacity: [0.2, 0.8, 0.2],
              scale: [1, Math.random() < 0.3 ? 1.5 : 1, 1],
            }}
            transition={{
              duration: Math.random() * 3 + 2,
              repeat: Infinity,
              repeatType: "reverse",
              delay: Math.random() * 5,
            }}
          />
        ))}
        
        {/* Larger glowing orbs */}
        {[...Array(5)].map((_, i) => (
          <motion.div
            key={`orb-${i}`}
            className="absolute rounded-full bg-purple-800 blur-xl opacity-20"
            style={{
              width: `${Math.random() * 200 + 100}px`,
              height: `${Math.random() * 200 + 100}px`,
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              scale: [1, 1.2, 1],
              opacity: [0.1, 0.2, 0.1],
            }}
            transition={{
              duration: Math.random() * 15 + 10,
              repeat: Infinity,
              repeatType: "reverse",
            }}
          />
        ))}
        
        {/* Nebula effect */}
        <motion.div
          className="absolute inset-0 opacity-30 bg-gradient-to-br from-purple-900/20 via-transparent to-pink-900/20"
          animate={{
            backgroundPosition: ['0% 0%', '100% 100%'],
          }}
          transition={{
            duration: 30,
            repeat: Infinity,
            repeatType: "reverse",
            ease: "linear",
          }}
        />
        
        {/* Grid lines */}
        <motion.div 
          className="absolute inset-0"
          style={{
            backgroundImage: 'radial-gradient(circle at 50% 50%, rgba(216, 180, 254, 0.1) 0%, transparent 80%)',
            backgroundSize: '100% 100%',
          }}
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.5 }}
          transition={{ duration: 2 }}
        />
      </div>
      
      {/* Main content */}
      <motion.div
        key="projects"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 1 }}
        className="relative z-10 flex flex-col items-center justify-center min-h-screen py-16"
      >
        <motion.h2 
          className="text-5xl font-bold mb-16 text-center text-white tracking-wider"
          initial={{ y: -50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.5, duration: 0.8 }}
        >
          <span className="bg-clip-text text-transparent bg-gradient-to-r from-purple-400 via-pink-300 to-purple-400">
            PROJECTS
          </span>
        </motion.h2>
        
        {/* Digital floating elements in foreground */}
        <motion.div 
          className="absolute z-0 w-64 h-64 rounded-full border border-purple-500/20 top-24 -left-20"
          style={{ 
            background: 'linear-gradient(45deg, rgba(168, 85, 247, 0.05) 0%, rgba(236, 72, 153, 0.05) 100%)',
          }}
          animate={{ 
            rotate: 360,
            x: [0, 10, 0]
          }}
          transition={{ 
            duration: 25, 
            repeat: Infinity,
            ease: "linear"
          }}
        />
        
        <motion.div 
          className="absolute z-0 w-48 h-48 rounded-full border border-pink-500/30 bottom-24 -right-20"
          style={{ 
            background: 'linear-gradient(225deg, rgba(168, 85, 247, 0.05) 0%, rgba(236, 72, 153, 0.05) 100%)',
          }}
          animate={{ 
            rotate: -360,
            x: [0, -10, 0]
          }}
          transition={{ 
            duration: 20, 
            repeat: Infinity,
            ease: "linear"
          }}
        />
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 max-w-6xl mx-auto relative z-20 px-4">
          {projects.map((project, index) => (
            <ProjectCard key={project.id} project={project} index={index} />
          ))}
        </div>
      </motion.div>
      
      {/* Futuristic particle trails */}
      <div className="absolute inset-0 pointer-events-none">
        {[...Array(10)].map((_, i) => (
          <motion.div
            key={`particle-trail-${i}`}
            className="absolute h-1 rounded-full"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              background: `linear-gradient(90deg, 
                ${['rgba(168, 85, 247, 0)', 'rgba(236, 72, 153, 0)', 'rgba(192, 132, 252, 0)'][i % 3]} 0%, 
                ${['rgba(168, 85, 247, 0.6)', 'rgba(236, 72, 153, 0.6)', 'rgba(192, 132, 252, 0.6)'][i % 3]} 50%,
                ${['rgba(168, 85, 247, 0)', 'rgba(236, 72, 153, 0)', 'rgba(192, 132, 252, 0)'][i % 3]} 100%)`,
              width: `${Math.random() * 100 + 50}px`,
            }}
            animate={{
              x: [0, Math.random() > 0.5 ? 200 : -200],
              y: [0, Math.random() > 0.5 ? 100 : -100],
              opacity: [0, 0.8, 0],
              scale: [0, 1, 0],
            }}
            transition={{
              duration: Math.random() * 5 + 5,
              repeat: Infinity,
              delay: i * 1.5,
            }}
          />
        ))}
      </div>
    </div>
  );
};

export default Projects;