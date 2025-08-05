import { motion } from 'framer-motion';
import { FiDownload, FiArrowRight } from 'react-icons/fi';
import { useEffect, useState } from 'react';

const Hero = () => {
  // Typing animation state
  const [displayText, setDisplayText] = useState('');
  const fullText = "React JS Developer | Building Engaging Web Experiences";
  const [currentIndex, setCurrentIndex] = useState(0);

  // CV download state
  const [isDownloading, setIsDownloading] = useState(false);
  const [downloadError, setDownloadError] = useState<string | null>(null);

  // Typing animation effect
  useEffect(() => {
    if (currentIndex < fullText.length) {
      const timeout = setTimeout(() => {
        setDisplayText(prev => prev + fullText[currentIndex]);
        setCurrentIndex(prev => prev + 1);
      }, 50);
      return () => clearTimeout(timeout);
    }
  }, [currentIndex, fullText]);

  // Handle CV download
  const handleDownloadCV = () => {
    setIsDownloading(true);
    setDownloadError(null);
    
    try {
      // CV file path - update this to match your actual file
      const cvUrl = '/ShubhamPawar_Resume.pdf';
      
      // Create temporary link
      const link = document.createElement('a');
      link.href = cvUrl;
      link.download = 'Shubham_Pawar_Frontend_Developer.pdf'; // Custom filename
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);

      // Optional: Add analytics tracking here
      console.log('CV downloaded successfully');
    } catch (error) {
      console.error('Download failed:', error);
      setDownloadError('Failed to download CV. Please try again or contact me directly.');
    } finally {
      setIsDownloading(false);
    }
  };

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.3
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.5
      }
    }
  };

  const cursorVariants = {
    blinking: {
      opacity: [0, 1, 0],
      transition: {
        duration: 1,
        repeat: Infinity,
        repeatDelay: 0
      }
    }
  };

  return (
    <section 
      id="home" 
      className="min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8 bg-white dark:bg-gray-900"
    >
      <motion.div
        initial="hidden"
        animate="visible"
        variants={containerVariants}
        className="text-center max-w-4xl mx-auto"
      >
        {/* Greeting */}
        <motion.div variants={itemVariants}>
          <p className="text-lg md:text-xl text-blue-600 dark:text-blue-400 mb-4 font-medium">
            Hello, I'm
          </p>
        </motion.div>
        
        {/* Name */}
        <motion.h1 
          variants={itemVariants}
          className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-4 dark:text-white leading-tight"
        >
          <span className="text-gray-900 dark:text-white">Shubham </span>
          <span className="text-blue-600 dark:text-blue-400">Pawar</span>
        </motion.h1>
        
        {/* Animated subtitle */}
        <motion.div 
          className="text-xl sm:text-2xl md:text-3xl mb-8 text-gray-600 dark:text-gray-300 font-medium min-h-[4rem] flex justify-center"
        >
          <div className="relative">
            <span>{displayText}</span>
            {currentIndex < fullText.length && (
              <motion.span
                variants={cursorVariants}
                animate="blinking"
                className="absolute right-0 top-0 w-1 h-8 bg-blue-600 dark:bg-blue-400"
              />
            )}
          </div>
        </motion.div>
        
        {/* Action buttons */}
        <motion.div 
          variants={itemVariants}
          className="flex flex-wrap gap-4 justify-center"
        >
          <a
            href="#contact"
            className="bg-blue-600 hover:bg-blue-700 dark:bg-blue-500 dark:hover:bg-blue-600 text-white px-6 py-3 rounded-lg transition-all duration-300 flex items-center group shadow-lg hover:shadow-blue-500/20"
          >
            Contact Me
            <FiArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" />
          </a>
          
          <a
            href="#projects"
            className="bg-gray-200 hover:bg-gray-300 dark:bg-gray-700 dark:hover:bg-gray-600 text-gray-800 dark:text-white px-6 py-3 rounded-lg transition-all duration-300 shadow-lg hover:shadow-gray-500/10"
          >
            View My Work
          </a>
          
          <button
            onClick={handleDownloadCV}
            disabled={isDownloading}
            className={`border border-gray-300 dark:border-gray-600 hover:bg-gray-100 dark:hover:bg-gray-800 text-gray-700 dark:text-gray-300 px-6 py-3 rounded-lg transition-all duration-300 flex items-center group shadow-lg hover:shadow-gray-500/10 ${
              isDownloading ? 'opacity-75 cursor-not-allowed' : ''
            }`}
            aria-label={isDownloading ? 'Downloading CV...' : 'Download CV'}
          >
            {isDownloading ? (
              'Downloading...'
            ) : (
              <>
                Download CV
                <FiDownload className="ml-2 group-hover:translate-y-1 transition-transform" />
              </>
            )}
          </button>
        </motion.div>

        {/* Download error message */}
        {downloadError && (
          <motion.p 
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            className="mt-4 text-sm text-red-500 dark:text-red-400 max-w-md mx-auto"
          >
            {downloadError}
          </motion.p>
        )}
        
        {/* Scroll indicator */}
        <motion.div 
          variants={itemVariants}
          className="mt-12 flex justify-center"
        >
          <div className="relative">
            <div className="absolute -inset-2 bg-blue-600/10 dark:bg-blue-400/10 rounded-full blur-sm animate-pulse"></div>
            <div className="relative h-12 w-12 rounded-full border-2 border-blue-600 dark:border-blue-400 flex items-center justify-center animate-bounce">
              <FiArrowRight className="text-blue-600 dark:text-blue-400 -rotate-90" />
            </div>
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Hero;