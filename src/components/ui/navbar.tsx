import { motion, AnimatePresence } from 'framer-motion';
import { useState, useEffect, useRef, useCallback } from 'react';
import { useTheme } from 'next-themes';
import { FiSun, FiMoon, FiX, FiMenu } from 'react-icons/fi';

interface NavLink {
  name: string;
  href: string;
}

const NAV_LINKS: NavLink[] = [
  { name: 'Home', href: '#home' },
  { name: 'About', href: '#about' },
  { name: 'Skills', href: '#skills' },
  { name: 'Projects', href: '#projects' },
  { name: 'Contact', href: '#contact' }
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('home');
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  const menuRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => setMounted(true), []);

  // Detect scroll & active section via IntersectionObserver
  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener('scroll', handleScroll);

    const observer = new IntersectionObserver(
      entries => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      { rootMargin: '-50% 0px -50% 0px', threshold: 0 }
    );

    document.querySelectorAll('section').forEach(sec => observer.observe(sec));

    return () => {
      window.removeEventListener('scroll', handleScroll);
      observer.disconnect();
    };
  }, []);

  // Close menu if clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
        setMobileMenuOpen(false);
      }
    };

    if (mobileMenuOpen) {
      document.addEventListener('mousedown', handleClickOutside);
    }
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, [mobileMenuOpen]);

  const toggleTheme = useCallback(
    () => setTheme(theme === 'dark' ? 'light' : 'dark'),
    [theme, setTheme]
  );

  if (!mounted) return null;

  return (
    <>
      <nav
        className={`fixed w-full z-50 py-4 transition-all duration-300 ${
          scrolled
            ? 'bg-white/90 dark:bg-gray-900/90 backdrop-blur-sm shadow-sm'
            : 'bg-transparent'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex justify-between items-center">
          {/* Logo */}
          <a
            href="#home"
            className="flex items-center gap-2 text-xl font-bold dark:text-white hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
            onClick={() => setMobileMenuOpen(false)}
            aria-label="Home"
          >
            <img
              src="/Photo.png"
              alt="Logo"
              className="w-8 h-8 rounded-full object-cover"
              loading="lazy"
            />
            Shubham Pawar
          </a>

          <div className="flex items-center gap-4">
            {/* Desktop Menu */}
            <div className="hidden md:flex gap-6">
              {NAV_LINKS.map(link => {
                const id = link.href.substring(1);
                return (
                  <a
                    key={link.href}
                    href={link.href}
                    className={`relative px-2 py-1 text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors ${
                      activeSection === id ? 'font-medium' : ''
                    }`}
                    aria-current={activeSection === id ? 'page' : undefined}
                  >
                    {link.name}
                    {activeSection === id && (
                      <motion.span
                        layoutId="nav-underline"
                        className="absolute left-0 bottom-0 w-full h-0.5 bg-blue-600 dark:bg-blue-400"
                        transition={{ type: 'spring', bounce: 0.2, duration: 0.6 }}
                      />
                    )}
                  </a>
                );
              })}
            </div>

            {/* Theme Toggle */}
            <button
              onClick={toggleTheme}
              className="p-2 rounded-full text-gray-600 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
              aria-label="Toggle theme"
            >
              {theme === 'dark' ? <FiSun size={20} /> : <FiMoon size={20} />}
            </button>

            {/* Mobile Menu Toggle */}
            <button
              className="md:hidden text-gray-600 dark:text-gray-300 p-2"
              onClick={() => setMobileMenuOpen(prev => !prev)}
              aria-label="Toggle menu"
              aria-expanded={mobileMenuOpen}
            >
              {mobileMenuOpen ? <FiX size={24} /> : <FiMenu size={24} />}
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            ref={menuRef}
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.2 }}
            className="fixed top-20 left-0 right-0 z-40 bg-white dark:bg-gray-900 shadow-lg md:hidden"
            role="dialog"
            aria-modal="true"
          >
            <div className="flex flex-col py-4 px-6">
              {NAV_LINKS.map(link => {
                const id = link.href.substring(1);
                return (
                  <a
                    key={link.href}
                    href={link.href}
                    className={`py-3 px-2 text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors border-b border-gray-100 dark:border-gray-800 ${
                      activeSection === id
                        ? 'font-medium text-blue-600 dark:text-blue-400'
                        : ''
                    }`}
                    onClick={() => setMobileMenuOpen(false)}
                    aria-current={activeSection === id ? 'page' : undefined}
                  >
                    {link.name}
                  </a>
                );
              })}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
