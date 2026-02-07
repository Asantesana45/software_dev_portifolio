import { useState } from 'react';
import { Link } from 'react-scroll';
import { FaBars, FaTimes, FaMoon, FaSun } from 'react-icons/fa';
import { motion, AnimatePresence } from 'framer-motion';

const Navbar = ({ darkMode, setDarkMode }) => {
  const [nav, setNav] = useState(false);

  const links = [
    { id: 1, link: 'home' },
    { id: 2, link: 'about' },
    { id: 3, link: 'skills' },
    { id: 4, link: 'experience' },
    { id: 5, link: 'projects' },
    { id: 6, link: 'contact' },
  ];

  // Animation Variants
  const navVariants = {
    hidden: { opacity: 0, y: -20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5, staggerChildren: 0.1 } },
  };

  const mobileMenuVariants = {
    closed: { opacity: 0, x: "100%" },
    open: { opacity: 1, x: 0, transition: { type: "spring", stiffness: 100, damping: 20 } },
  };

  return (
    <nav className="flex justify-between items-center w-full h-20 px-6 text-white bg-dark/80 backdrop-blur-lg fixed z-[100] top-0 shadow-2xl border-b border-white/5">
      
      {/* Logo Section */}
      <motion.div 
        initial={{ opacity: 0, x: -50 }} 
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.6 }}
      >
        <h1 className="text-3xl font-extrabold tracking-tighter cursor-pointer group">
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary group-hover:from-secondary group-hover:to-primary transition-all duration-500">
            JOHNSON.M
          </span>
        </h1>
      </motion.div>

      {/* Desktop Menu */}
      <ul className="hidden md:flex items-center">
        {links.map(({ id, link }) => (
          <motion.li 
            key={id} 
            whileHover={{ scale: 1.1, y: -2 }}
            className="px-4 cursor-pointer capitalize font-semibold text-gray-300 hover:text-primary transition-all duration-300"
          >
            <Link to={link} smooth duration={500} offset={-80}>
              {link}
            </Link>
          </motion.li>
        ))}
        
        {/* Dark Mode Toggle Desktop */}
        <motion.li 
          whileTap={{ rotate: 180 }}
          onClick={() => setDarkMode(!darkMode)} 
          className="ml-6 cursor-pointer p-3 rounded-xl bg-white/5 hover:bg-primary/20 border border-white/10 text-primary transition-all"
        >
          {darkMode ? <FaSun className="text-yellow-400" /> : <FaMoon className="text-blue-400" />}
        </motion.li>
      </ul>

      {/* Mobile Interaction Area */}
      <div className="flex md:hidden items-center gap-4">
        <div 
          onClick={() => setDarkMode(!darkMode)} 
          className="cursor-pointer p-2 text-primary"
        >
          {darkMode ? <FaSun size={20} /> : <FaMoon size={20} />}
        </div>
        
        <div onClick={() => setNav(!nav)} className="cursor-pointer z-[110] text-gray-300 hover:text-primary transition-colors">
          {nav ? <FaTimes size={28} /> : <FaBars size={28} />}
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {nav && (
          <motion.ul 
            variants={mobileMenuVariants}
            initial="closed"
            animate="open"
            exit="closed"
            className="flex flex-col justify-center items-center absolute top-0 left-0 w-full h-screen bg-dark/95 backdrop-blur-2xl text-gray-300 z-[105]"
          >
            {links.map(({ id, link }) => (
              <motion.li 
                key={id} 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: id * 0.1 }}
                className="px-4 cursor-pointer capitalize py-6 text-4xl font-bold hover:text-primary transition-colors"
              >
                <Link onClick={() => setNav(false)} to={link} smooth duration={500} offset={-80}>
                  {link}
                </Link>
              </motion.li>
            ))}
          </motion.ul>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;

