import { motion } from 'motion/react';

import { useEffect, useState } from 'react';

const LoadingScreen = ({ onComplete }) => {
  const [loadingProgress, setLoadingProgress] = useState(0);
  
  useEffect(() => {
    const timer = setTimeout(() => {
      if (loadingProgress < 100) {
        setLoadingProgress(prev => Math.min(prev + Math.random() * 15, 100));
      } else if (onComplete) {
        setTimeout(() => onComplete(), 500);
      }
    }, 200);
    
    return () => clearTimeout(timer);
  }, [loadingProgress, onComplete]);

  return (
    <motion.div 
      key="loader"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.8, ease: "easeInOut" }}
      className="fixed inset-0 bg-gradient-to-br from-gray-900 to-black z-50 flex flex-col items-center justify-center"
    >
      {/* Background animated particles */}
      <div className="absolute inset-0 overflow-hidden">
        {[...Array(12)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute rounded-full bg-purple-500 opacity-10"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              width: `${Math.random() * 20 + 5}px`,
              height: `${Math.random() * 20 + 5}px`,
            }}
            animate={{
              y: [0, -30, 0],
              opacity: [0.1, 0.2, 0.1],
            }}
            transition={{
              duration: Math.random() * 5 + 3,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          />
        ))}
      </div>

      <motion.div
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ 
          scale: [0.8, 1],
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
          {/* Logo/Avatar */}
          <motion.div 
            initial={{ scale: 0, rotate: -180 }}
            animate={{ scale: 1, rotate: 0 }}
            transition={{ delay: 0.2, duration: 0.8, type: "spring" }}
            className="w-20 h-20 rounded-full bg-gradient-to-br from-purple-500 to-pink-600 mb-6 flex items-center justify-center shadow-lg shadow-purple-500/20"
          >
            <span className="text-2xl font-bold text-white">AM</span>
          </motion.div>
          
          {/* Name with text reveal */}
          <motion.div
            initial={{ width: 0 }}
            animate={{ 
              width: "350px",
              transition: { delay: 0.5, duration: 1.2 }
            }}
            className="overflow-hidden"
          >
            <motion.h1 
              initial={{ y: 50 }}
              animate={{ y: 0 }}
              transition={{ delay: 0.7, duration: 0.5 }}
              className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-purple-400 via-pink-500 to-purple-500 text-transparent bg-clip-text text-center"
            >
              Animesh Mitra
            </motion.h1>
          </motion.div>
          
          {/* Title with text reveal */}
          <motion.div 
            initial={{ width: 0 }}
            animate={{ 
              width: "160px",
              transition: { delay: 0.8, duration: 1 }
            }}
            className="overflow-hidden"
          >
            <motion.p 
              initial={{ y: 20 }}
              animate={{ y: 0 }}
              transition={{ delay: 1, duration: 0.5 }}
              className="text-gray-300 mt-2 text-center font-light"
            >
              Frontend Developer
            </motion.p>
          </motion.div>
        </div>
        
        {/* Animated gradient line */}
        <div className="relative mt-8 w-full">
          <motion.div 
            initial={{ scaleX: 0 }}
            animate={{ scaleX: 1 }}
            transition={{ delay: 1.2, duration: 1 }}
            className="h-px w-full bg-gradient-to-r from-purple-600 via-pink-600 to-purple-600"
          />
          
          {/* Loading Progress */}
          <motion.div 
            initial={{ width: 0, opacity: 0 }}
            animate={{ width: `${loadingProgress}%`, opacity: 1 }}
            className="absolute top-0 left-0 h-1 bg-gradient-to-r from-purple-500 via-pink-500 to-purple-500"
            style={{ boxShadow: "0 0 10px rgba(168, 85, 247, 0.5)" }}
          />
        </div>
        
        {/* Loading percentage */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.4, duration: 0.6 }}
          className="mt-4 text-center"
        >
          <span className="text-sm text-gray-400 font-mono">
            {Math.round(loadingProgress)}%
          </span>
        </motion.div>
        
        {/* Animated dots */}
        <motion.div 
          initial={{ y: 10, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 1.6, duration: 0.5 }}
          className="mt-6 flex justify-center space-x-2"
        >
          {[...Array(3)].map((_, i) => (
            <motion.div 
              key={i}
              animate={{ 
                y: [0, -6, 0],
                scale: [1, 1.2, 1],
                transition: { 
                  repeat: Infinity, 
                  duration: 0.6, 
                  delay: i * 0.1, 
                  repeatDelay: 0.05 
                }
              }}
              className={`w-2 h-2 rounded-full ${
                i === 0 ? "bg-purple-500" : 
                i === 1 ? "bg-pink-500" : 
                "bg-purple-400"
              }`}
            />
          ))}
        </motion.div>
        
        {/* Social icons - appear after loading reaches 70% */}
        {loadingProgress > 70 && (
          <motion.div 
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.5 }}
            className="mt-8 flex justify-center space-x-4"
          >
            {['github', 'linkedin', 'twitter'].map((platform, i) => (
              <motion.div
                key={platform}
                whileHover={{ scale: 1.1, y: -3 }}
                whileTap={{ scale: 0.95 }}
                className="w-8 h-8 rounded-full bg-gray-800 flex items-center justify-center cursor-pointer"
                initial={{ opacity: 0, scale: 0.5 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 1.8 + (i * 0.1), duration: 0.3 }}
              >
                <span className="text-xs text-gray-300">{platform[0].toUpperCase()}</span>
              </motion.div>
            ))}
          </motion.div>
        )}
      </motion.div>
    </motion.div>
  );
};

export default LoadingScreen;