import { motion } from 'motion/react';

const ProjectCard = ({ project, index }) => {
  return (
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
  );
};

export default ProjectCard;