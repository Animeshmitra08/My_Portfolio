import { motion } from 'motion/react';

const ProjectCard = ({ project, index }) => {
  return (
    <motion.div
      key={project.id}
      initial={{ y: 50, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ delay: 0.5 + index * 0.15, duration: 0.7 }}
      whileHover={{ 
        y: -10, 
        scale: 1.03,
        boxShadow: "0 20px 25px -5px rgba(168, 85, 247, 0.2), 0 10px 10px -5px rgba(236, 72, 153, 0.1)",
        transition: { duration: 0.3 }
      }}
      className="relative overflow-hidden rounded-2xl backdrop-filter backdrop-blur-sm border border-purple-500/30 bg-gradient-to-br from-gray-900/80 to-purple-900/30"
    >
      {/* Glow effect on hover */}
      <motion.div 
        className="absolute inset-0 bg-gradient-to-br from-purple-600/5 via-pink-600/5 to-purple-600/5 opacity-0"
        initial={{ opacity: 0 }}
        whileHover={{ opacity: 1 }}
        transition={{ duration: 0.3 }}
      />
      
      {/* Header with holographic effect */}
      <div className="relative h-56 overflow-hidden bg-black flex items-center justify-center">
        <motion.div 
          className="absolute inset-0 bg-gradient-to-br from-purple-900/40 via-pink-800/40 to-purple-900/40"
          animate={{
            backgroundPosition: ['0% 0%', '100% 100%'],
          }}
          transition={{ duration: 8, repeat: Infinity, repeatType: "mirror" }}
        />
        
        {/* Grid lines */}
        <div className="absolute inset-0" style={{
          backgroundImage: 'linear-gradient(0deg, transparent 24%, rgba(168, 85, 247, .3) 25%, rgba(168, 85, 247, .3) 26%, transparent 27%, transparent 74%, rgba(168, 85, 247, .3) 75%, rgba(168, 85, 247, .3) 76%, transparent 77%, transparent), linear-gradient(90deg, transparent 24%, rgba(168, 85, 247, .3) 25%, rgba(168, 85, 247, .3) 26%, transparent 27%, transparent 74%, rgba(168, 85, 247, .3) 75%, rgba(168, 85, 247, .3) 76%, transparent 77%, transparent)',
          backgroundSize: '30px 30px',
          opacity: 0.2,
        }} />
        
        {/* Project icon */}
        <motion.div 
          className="relative z-10 flex items-center justify-center"
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ delay: 0.8 + index * 0.15, duration: 0.5 }}
        >
          {project.icon ? (
            <span className="text-6xl">{project.icon}</span>
          ) : (
            <div className="w-20 h-20 rounded-full bg-gradient-to-br from-purple-500 to-pink-600 flex items-center justify-center">
              <span className="text-4xl">✨</span>
            </div>
          )}
        </motion.div>
      </div>
      
      {/* Content area */}
      <div className="p-6 relative">
        {/* Digital accent line */}
        <div className="absolute left-0 right-0 h-px bg-gradient-to-r from-transparent via-purple-500/50 to-transparent" />
        
        <motion.h3 
          className="text-xl font-bold mb-3 bg-clip-text text-transparent bg-gradient-to-r from-purple-300 to-pink-300"
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.9 + index * 0.15, duration: 0.5 }}
        >
          {project.title}
        </motion.h3>
        
        <motion.p 
          className="text-gray-300 mb-5 text-sm"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1 + index * 0.15, duration: 0.5 }}
        >
          {project.description}
        </motion.p>
        
        <motion.div 
          className="flex flex-wrap gap-2"
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.1 + index * 0.15, duration: 0.5 }}
        >
          {project.tags.map((tag) => (
            <span 
              key={tag} 
              className="px-3 py-1 bg-purple-900/40 border border-purple-500/20 rounded-full text-xs font-medium text-purple-300"
            >
              {tag}
            </span>
          ))}
        </motion.div>
        
        {/* Bottom interactive area with hover effect */}
        <motion.div 
          className="mt-5 pt-4 border-t border-purple-900/50 flex justify-end" 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2 + index * 0.15 }}
        >
          <motion.button 
            className="text-xs font-medium text-pink-400 flex items-center gap-1"
            whileHover={{ color: '#f9a8d4', scale: 1.05 }}
          >
            View Project
            <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" viewBox="0 0 20 20" fill="currentColor">
              <path fillRule="evenodd" d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
            </svg>
          </motion.button>
        </motion.div>
      </div>
    </motion.div>
  );
};

export default ProjectCard;