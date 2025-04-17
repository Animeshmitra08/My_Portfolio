import { createContext, useContext, useState, useEffect } from 'react';

// Create Context
const AppContext = createContext();

// Context Provider Component
export const AppProvider = ({ children }) => {
  const [activeSection, setActiveSection] = useState('home');
  const [menuOpen, setMenuOpen] = useState(false);
  const [loading, setLoading] = useState(true);
  const [initialLoadingComplete, setInitialLoadingComplete] = useState(false);

  // Control the minimum loading time
  useEffect(() => {
    // This ensures the loading screen shows for at least the minimum time
    // The LoadingScreen component will now control when loading ends
    // through its onComplete callback
    const timer = setTimeout(() => {
      setInitialLoadingComplete(true);
    }, 1000); // Reduced time since LoadingScreen has its own animation timing
    
    return () => clearTimeout(timer);
  }, []);

  // Values to be provided to the context consumers
  const value = {
    activeSection,
    setActiveSection,
    menuOpen,
    setMenuOpen,
    loading,
    setLoading,
    initialLoadingComplete
  };

  return <AppContext.Provider value={value}>{children}</AppContext.Provider>;
};

// Custom hook to use the context
export const useAppContext = () => {
  const context = useContext(AppContext);
  if (context === undefined) {
    throw new Error('useAppContext must be used within an AppProvider');
  }
  return context;
};