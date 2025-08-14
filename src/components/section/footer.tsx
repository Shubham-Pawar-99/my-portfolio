import { FaGithub, FaLinkedin, FaTwitter, FaEnvelope } from 'react-icons/fa';
import { motion } from 'framer-motion';

export default function Footer() {
  const socialLinks = [
    {
      name: 'GitHub',
      icon: <FaGithub size={20} />,
      url: 'https://github.com/Shubham-Pawar-99',
    },
    {
      name: 'LinkedIn',
      icon: <FaLinkedin size={20} />,
      url: 'https://www.linkedin.com/in/shubham-pawar-92ba08201/',
    },
    // {
    //   name: 'Twitter',
    //   icon: <FaTwitter size={20} />,
    //   url: '',
    // },
    {
      name: 'Email',
      icon: <FaEnvelope size={20} />,
      url: 'mailto:shubhampawar01999@gmail.com',
    },
  ];

  return (
    <footer className="py-8 md:py-12 bggray-100 dark:bg-gray-900 border-t border-gray-200 dark:border-gray-800 rounded-lg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="flex flex-col items-center"
        >
          {/* Social Links */}
          <div className="flex justify-center gap-4 md:gap-6 mb-6">
            {socialLinks.map((link, index) => (
              <motion.a
                key={link.name}
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={link.name}
                className="p-2 md:p-3 bg-white dark:bg-gray-800 rounded-full text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 hover:bg-gray-200 dark:hover:bg-gray-700 transition-all duration-300 shadow-sm hover:shadow-md"
                whileHover={{ y: -3 }}
                // transition={{ duration: 0.2 }}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                {link.icon}
              </motion.a>
            ))}
          </div>

          {/* Copyright */}
          <p className="text-sm md:text-base text-gray-600 dark:text-gray-400 mb-2">
            © {new Date().getFullYear()} Shubham Pawar. All rights reserved.
          </p>

          {/* Optional Additional Links */}
          {/* <div className="flex flex-wrap justify-center gap-3 md:gap-4 mt-2">
            <a
              href="#"
              className="text-xs md:text-sm text-gray-500 dark:text-gray-500 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
            >
              Privacy Policy
            </a>
            <span className="text-gray-400">•</span>
            <a
              href="#"
              className="text-xs md:text-sm text-gray-500 dark:text-gray-500 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
            >
              Terms of Service
            </a>
            <span className="text-gray-400">•</span>
            <a
              href="#contact"
              className="text-xs md:text-sm text-gray-500 dark:text-gray-500 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
            >
              Contact
            </a>
          </div> */}
        </motion.div>
      </div>
    </footer>
  );
}