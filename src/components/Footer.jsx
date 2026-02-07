import { FaGithub, FaLinkedin, FaTwitter, FaHeart } from "react-icons/fa";
import { Link } from "react-scroll";
import { motion } from "framer-motion";


const Footer = () => {
  const socialLinks = [
    { icon: <FaLinkedin size={25} />, href: "https://www.linkedin.com/in/johnson-munisi-3338b5281?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app", color: "hover:text-blue-500" },
    { icon: <FaGithub size={25} />, href: "https://github.com/Asantesana45/", color: "hover:text-gray-400" },
    { icon: <FaTwitter size={25} />, href: "https://twitter.com", color: "hover:text-blue-400" },
  ];


  return (
    <div className="bg-black text-white py-12 border-t border-gray-800">
      <div className="max-w-screen-lg mx-auto flex flex-col items-center justify-center px-4">
        
        {/* Brand Name */}
        <motion.div 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            className="mb-8"
        >
            <h2 className="text-3xl font-bold tracking-widest text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary cursor-default">
                JOHNSON MUNISI
            </h2>
        </motion.div>


        {/* Social Icons */}
        <div className="flex gap-8 mb-8">
            {socialLinks.map((link, index) => (
                <motion.a 
                    key={index}
                    href={link.href}
                    target="_blank"
                    rel="noreferrer"
                    whileHover={{ scale: 1.2, rotate: 10 }}
                    whileTap={{ scale: 0.9 }}
                    className={`text-gray-300 transition-colors duration-300 ${link.color}`}
                >
                    {link.icon}
                </motion.a>
            ))}
        </div>


        {/* Navigation Links */}
        <div className="flex flex-wrap justify-center gap-6 mb-8 text-sm font-medium text-gray-400">
            {['Home', 'About', 'Experience', 'Projects', 'Contact'].map((item) => (
                <Link 
                    key={item} 
                    to={item.toLowerCase()} 
                    smooth 
                    duration={500} 
                    className="cursor-pointer hover:text-primary transition-colors"
                >
                    {item}
                </Link>
            ))}
        </div>


        {/* Copyright Line */}
        <div className="text-gray-500 text-sm flex items-center gap-1">
            <p>© {new Date().getFullYear()} Johnson Munisi. Built with</p>
            <motion.div 
                animate={{ scale: [1, 1.2, 1] }} 
                transition={{ repeat: Infinity, duration: 1.5 }}
                className="text-red-500"
            >
                <FaHeart />
            </motion.div>
            <p>in Dar es Salaam, Tanzania.</p>
        </div>


      </div>
    </div>
  );
};


export default Footer;
