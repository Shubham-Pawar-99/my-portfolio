import { motion } from 'framer-motion';
import { FiDownload, FiArrowRight, FiArrowDown } from 'react-icons/fi';
import { useEffect, useState } from 'react';

// Animations
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.1, delayChildren: 0.3 },
  },
};

const itemVariants = {
  hidden: { y: 20, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: { duration: 0.5 },
  },
};

const cursorVariants = {
  blinking: {
    opacity: [0, 1, 0],
    transition: { duration: 1, repeat: Infinity },
  },
};

const Hero = () => {
  const [displayText, setDisplayText] = useState('');
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isDownloading, setIsDownloading] = useState(false);
  const [downloadError, setDownloadError] = useState<string | null>(null);

  const fullText = 'React JS Developer | Building Engaging Web Experiences';

  // Typing effect
  useEffect(() => {
    if (currentIndex < fullText.length) {
      const timeout = setTimeout(() => {
        setDisplayText((prev) => prev + fullText[currentIndex]);
        setCurrentIndex((prev) => prev + 1);
      }, 100);
      return () => clearTimeout(timeout);
    }
  }, [currentIndex, fullText]);

  const handleDownloadCV = () => {
    setIsDownloading(true);
    setDownloadError(null);

    try {
      const link = document.createElement('a');
      link.href = '/Shubham_Pawar_React_Developer.pdf';
      link.download = 'Shubham_Pawar_Frontend_Developer.pdf';
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
    } catch (error) {
      console.error('Download failed:', error);
      setDownloadError('Download failed. Please try again.');
    } finally {
      setIsDownloading(false);
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
        <motion.p
          variants={itemVariants}
          className="text-lg md:text-xl text-blue-600 dark:text-blue-400 mb-4 font-medium"
        >
          Hello, I'm
        </motion.p>

        {/* Name */}
        <motion.h1
          variants={itemVariants}
          className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-4 dark:text-white leading-tight"
        >
          <span className="text-gray-900 dark:text-white">Shubham </span>
          <span className="text-blue-600 dark:text-blue-400">Pawar</span>
        </motion.h1>

        {/* Typing subtitle */}
        <motion.div
          variants={itemVariants}
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

        {/* Buttons */}
        <motion.div
          variants={itemVariants}
          className="flex flex-wrap gap-4 justify-center"
        >
          {/* Contact Me */}
          <a
            href="#contact"
            className="bg-gradient-to-r from-blue-600 to-blue-500 hover:from-blue-700 hover:to-blue-600 text-white px-6 py-3 rounded-full shadow-lg transition-all duration-300 flex items-center group"
          >
            Contact Me
            <FiArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" />
          </a>

          {/* View Work */}
          <a
            href="#projects"
            className="bg-gray-100 hover:bg-gray-200 dark:bg-gray-800 dark:hover:bg-gray-700 text-gray-800 dark:text-white px-6 py-3 rounded-full shadow-lg transition-all duration-300"
          >
            View My Work
          </a>

          {/* Download CV */}
          <button
            onClick={handleDownloadCV}
            disabled={isDownloading}
            className={`border border-gray-300 dark:border-gray-600 bg-white/80 dark:bg-gray-900/40 hover:bg-gray-100 dark:hover:bg-gray-800 text-gray-700 dark:text-gray-300 px-6 py-3 rounded-full shadow-lg transition-all duration-300 flex items-center group ${isDownloading ? 'opacity-60 cursor-not-allowed' : ''
              }`}
            aria-label={isDownloading ? 'Downloading...' : 'Download CV'}
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

        {/* Error message */}
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
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 1 }}
        >
          <a href="#about" className="relative">
            <div className="absolute -inset-2 bg-blue-600/10 dark:bg-blue-400/10 rounded-full blur-sm animate-pulse" />
            <div className="relative h-12 w-12 rounded-full border-2 border-blue-600 dark:border-blue-400 flex items-center justify-center animate-bounce">
              <FiArrowDown className="text-blue-600 dark:text-blue-400" />
            </div>
          </a>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Hero;