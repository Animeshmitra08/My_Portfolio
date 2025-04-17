import { AnimatePresence } from 'motion/react';
import { useAppContext } from './Context/AppContext';
import { useEffect, useRef } from 'react';

// Components
import Navigation from './components/layout/Navigation';
import LoadingScreen from './components/layout/LoadingScreen';

import Home from './components/sections/Home';
import About from './components/sections/About';
import Projects from './components/sections/Projects';
import Contact from './components/sections/Contact';

// Styles
// import './styles/globals.css';

const App = () => {
  const { activeSection, setActiveSection, loading, setLoading, initialLoadingComplete } = useAppContext();
  const sectionRefs = useRef({
    home: useRef(null),
    about: useRef(null),
    projects: useRef(null),
    contact: useRef(null)
  });

  // Only allow loading to complete if the minimum initial loading time has passed
  const handleLoadingComplete = () => {
    if (initialLoadingComplete) {
      setLoading(false);
    }
  };

  // If initialLoadingComplete becomes true while still loading, allow LoadingScreen to finish naturally
  useEffect(() => {
    if (initialLoadingComplete && loading) {
      // The LoadingScreen's onComplete will handle setting loading to false
    }
  }, [initialLoadingComplete, loading]);

  // Add scroll event listener
  useEffect(() => {
    // Create intersection observer
    const observerOptions = {
      root: null,
      rootMargin: '0px',
      threshold: 0.5, // Section is considered in view when 50% visible
    };

    const observerCallback = (entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          const sectionId = entry.target.id;
          setActiveSection(sectionId);
        }
      });
    };

    const observer = new IntersectionObserver(observerCallback, observerOptions);

    // Observe each section
    Object.keys(sectionRefs.current).forEach(section => {
      const el = sectionRefs.current[section].current;
      if (el) observer.observe(el);
    });

    // Add scroll event for smooth scrolling
    const handleNavClick = (section) => {
      const el = sectionRefs.current[section].current;
      if (el) {
        el.scrollIntoView({ behavior: 'smooth' });
      }
    };

    // Cleanup observer
    return () => {
      Object.keys(sectionRefs.current).forEach(section => {
        const el = sectionRefs.current[section].current;
        if (el) observer.unobserve(el);
      });
    };
  }, [setActiveSection, !loading]);

  // Function to handle scrolling to a section when navigation is clicked
  const handleSectionChange = (section) => {
    setActiveSection(section);
    const el = sectionRefs.current[section].current;
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const textureStyle = {
    backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23333333' fill-opacity='0.12'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`
  };

  return (
    <div className="min-h-screen bg-gray-900 text-gray-100 font-sans overflow-x-hidden" style={textureStyle}>
      <AnimatePresence>
        {loading && <LoadingScreen onComplete={handleLoadingComplete} />}
      </AnimatePresence>

      {/* Main Content (only render when loading is complete) */}
      {!loading && (
        <>
          <Navigation onSectionChange={handleSectionChange} />
          
          <main className="snap-y snap-mandatory h-screen overflow-y-scroll">
            <section id="home" ref={sectionRefs.current.home} className="snap-start h-screen">
              <Home />
            </section>
            
            <section id="about" ref={sectionRefs.current.about} className="snap-start h-screen">
              <About />
            </section>
            
            <section id="projects" ref={sectionRefs.current.projects} className="snap-start h-screen">
              <Projects />
            </section>
            
            <section id="contact" ref={sectionRefs.current.contact} className="snap-start h-screen">
              <Contact />
            </section>
          </main>
        </>
      )}
    </div>
  );
};

export default App;