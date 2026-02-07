import { motion } from 'framer-motion';
import { FaLaptopCode, FaDatabase, FaMobileAlt, FaRocket, FaShieldAlt, FaCogs } from 'react-icons/fa';


const Services = () => {
  const services = [
    {
      id: 1,
      icon: <FaLaptopCode size={40} />,
      title: 'Web App Development',
      desc: 'Building responsive, single-page applications using React.js and Vite with modern UI/UX principles.'
    },
    {
      id: 2,
      icon: <FaDatabase size={40} />,
      title: 'Database Architecture',
      desc: 'Designing complex schemas in Oracle, SQL Server, and MongoDB. Optimized query performance by 20%.'
    },
    {
      id: 3,
      icon: <FaMobileAlt size={40} />,
      title: 'Mobile & USSD Solutions',
      desc: 'Developing SMS and USSD-based applications for mass communication and financial services.'
    },
    {
      id: 4,
      icon: <FaCogs size={40} />,
      title: 'API Integration',
      desc: 'Seamless integration of REST and SOAP APIs (Third-party & Internal) to connect diverse systems.'
    },
    {
      id: 5,
      icon: <FaShieldAlt size={40} />,
      title: 'System Security',
      desc: 'Implementing rigorous authentication, authorization, and secure coding practices for banking apps.'
    },
    {
      id: 6,
      icon: <FaRocket size={40} />,
      title: 'Performance Tuning',
      desc: 'Code reviews, debugging, and refactoring to increase transaction speeds and reduce failure rates.'
    },
  ];


  // Container animation for staggering
  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };


  // Individual card animation
  const item = {
    hidden: { opacity: 0, y: 50 },
    show: { opacity: 1, y: 0, transition: { type: "spring", stiffness: 50 } }
  };


  return (
    <div name="services" className="w-full min-h-screen bg-light dark:bg-dark text-slate-800 dark:text-white py-20 relative overflow-hidden">
        {/* Background blobs for aesthetics */}
        <div className="absolute top-0 right-0 w-96 h-96 bg-secondary/10 rounded-full blur-3xl -z-10"></div>
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-primary/10 rounded-full blur-3xl -z-10"></div>


      <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-4 border-primary dark:text-gray-100">Services</p>
          <p className="py-6 text-gray-600 dark:text-gray-400">Specialized technical services tailored to business needs.</p>
        </div>


        <motion.div 
            variants={container}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.1 }}
            className="grid sm:grid-cols-2 md:grid-cols-3 gap-8 px-12 sm:px-0"
        >
          {services.map(({ id, icon, title, desc }) => (
            <motion.div 
                key={id} 
                variants={item}
                whileHover={{ scale: 1.05, translateY: -10 }}
                className="group relative bg-white dark:bg-gray-800 p-8 rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-100 dark:border-gray-700 overflow-hidden"
            >
                {/* Hover Gradient Overlay */}
                <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-secondary/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>


                <div className="relative z-10 flex flex-col items-start gap-4">
                    <div className="p-4 rounded-full bg-primary/10 text-primary group-hover:bg-primary group-hover:text-white transition-colors duration-300">
                        {icon}
                    </div>
                    <h3 className="text-xl font-bold group-hover:text-primary transition-colors">{title}</h3>
                    <p className="text-gray-600 dark:text-gray-400 text-sm leading-relaxed">{desc}</p>
                </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </div>
  );
};


export default Services;
