import { motion } from 'framer-motion';
import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa';

const Projects = () => {
  const projects = [
    {
      id: 1,
      title: "QuickCart",
      description: "An E-commerce website built using Next.js to streamline buying and selling of products online.",
      tech: "Next.js | Node.js | MongoDB",
      image: "/quick-cart-proj.png",
      demo: "https://quick-cart-y6on.vercel.app/", 
      code: "https://github.com/Asantesana45/QuickCart" 
    },
    {
      id: 2,
      title: "Kilimo Smart",
      description: "This website introduces a smart digitized way to monitor for Tanzanian farmers to monitor their crops, identify and treat various bacteria.",
      tech: "TypeScript | PLpgSQL | Express.js | CSS | MongoDB | Node.js",
      image: "/kilimo-smart.png",
      demo: "https://kilimosmart-tan.vercel.app/", 
      code: "https://github.com/Asantesana45/safari-kizazi-chetu"
    },
    {
      id: 3,
      title: "Tanzania Dream Homes Portal",
      description: "This Portal introduces a revolutionary way for Tanzanians to find the dream homes easily and efficiently.",
      tech: "TypeScript | Express.js | CSS | MongoDB | Node.js",
      image: "/tanzania-dream-homes-portal.png",
      demo: "https://tanzania-dream-homes-portal.vercel.app/",
      code: "https://github.com/Asantesana45/tanzania-dream-homes-portal"
    },
  ];

  return (
    <div name="projects" className="bg-light dark:bg-gray-900 w-full text-dark dark:text-white py-20 transition-colors duration-300">
      <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-4 border-primary bg-clip-text text-transparent bg-gradient-to-r from-primary to-secondary">
            Featured Projects
          </p>
          <p className="py-6 text-gray-600 dark:text-gray-400">Check out some of my high-impact work.</p>
        </div>

        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-10 px-12 sm:px-0">
          {projects.map(({ id, title, description, tech, image, demo, code }) => (
            <motion.div 
              key={id} 
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: id * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ y: -10 }}
              className="shadow-xl shadow-gray-400 dark:shadow-black/50 rounded-2xl overflow-hidden bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700"
            >
              <div className="relative group">
                  {/* Image Overlay */}
                  <img src={image} alt={title} className="h-48 w-full object-cover transition-transform duration-500 group-hover:scale-110" />
                  
                  {/* Functional Link Buttons Overlay */}
                  <div className="absolute inset-0 bg-black/70 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center space-x-6">
                     <a 
                        href={demo} 
                        target="_blank" 
                        rel="noreferrer" 
                        className="p-3 bg-white/10 hover:bg-primary backdrop-blur-md rounded-full text-white transition-all duration-300 transform hover:scale-110"
                        title="Live Demo"
                     >
                        <FaExternalLinkAlt size={22}/>
                     </a>
                     <a 
                        href={code} 
                        target="_blank" 
                        rel="noreferrer" 
                        className="p-3 bg-white/10 hover:bg-secondary backdrop-blur-md rounded-full text-white transition-all duration-300 transform hover:scale-110"
                        title="GitHub Source"
                     >
                        <FaGithub size={22}/>
                     </a>
                  </div>
              </div>
              
              <div className="p-6">
                  <h3 className="text-xl font-bold mb-2 group-hover:text-primary transition-colors">{title}</h3>
                  <p className="text-sm text-gray-600 dark:text-gray-400 mb-4 h-20 overflow-hidden line-clamp-3">
                    {description}
                  </p>
                  <div className="flex items-center justify-between border-t border-gray-100 dark:border-gray-700 pt-4">
                    <span className="text-xs font-mono text-primary font-bold uppercase tracking-wider">{tech}</span>
                  </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Projects;
