import { motion } from 'framer-motion';
import { FaAward, FaCode, FaServer } from 'react-icons/fa';


const About = () => {
  // Animation variants for text lines
  const textVariant = {
    hidden: { opacity: 0, x: -50 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.8 } }
  };


  const cardVariant = {
    hidden: { opacity: 0, y: 50 },
    visible: (i) => ({
      opacity: 1,
      y: 0,
      transition: { delay: i * 0.2, duration: 0.6 }
    })
  };


  return (
    <div name="about" className="w-full min-h-screen bg-gradient-to-b from-gray-900 to-black text-white py-20">
      <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
        
        {/* Header with gradient text */}
        <motion.div 
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="pb-8"
        >
          <p className="text-4xl font-bold inline border-b-4 border-primary bg-clip-text text-transparent bg-gradient-to-r from-primary to-secondary">
            About Me
          </p>
        </motion.div>


        <div className="grid md:grid-cols-2 gap-10 items-center">
            
            {/* Text Section */}
            <motion.div 
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                className="flex flex-col gap-4"
            >
                <motion.p variants={textVariant} className="text-xl mt-4 text-gray-300 leading-relaxed">
                    I am a results-driven IT professional with a Bachelor’s Degree in <span className="text-primary font-bold">Computer Science</span> from the University of Dar es Salaam.
                </motion.p>
                
                <motion.p variants={textVariant} className="text-lg text-gray-400 leading-relaxed">
                    My journey has taken me from optimizing banking systems at <span className="text-white font-semibold">CRDB Bank</span>—where I improved query speeds by <span className="text-green-400 font-bold">20%</span>—to architecting linguistic data systems for <span className="text-white font-semibold">BAKITA</span>.
                </motion.p>
                
                <motion.p variants={textVariant} className="text-lg text-gray-400 leading-relaxed">
                   I don't just write code; I engineer solutions. Whether it's integrating complex SOAP/REST APIs, securing financial transactions, or building intuitive React frontends, I focus on <span className="text-secondary font-bold">Performance, Scalability, and Security</span>.
                </motion.p>


                {/* Quick Stats Grid */}
                <div className="grid grid-cols-3 gap-4 mt-6">
                    <div className="text-center p-4 bg-gray-800 rounded-lg shadow-lg hover:shadow-primary/50 transition duration-300 border border-gray-700">
                        <h4 className="text-3xl font-bold text-primary">3+</h4>
                        <p className="text-sm text-gray-400">Years Exp</p>
                    </div>
                    <div className="text-center p-4 bg-gray-800 rounded-lg shadow-lg hover:shadow-secondary/50 transition duration-300 border border-gray-700">
                        <h4 className="text-3xl font-bold text-secondary">20+</h4>
                        <p className="text-sm text-gray-400">Projects</p>
                    </div>
                    <div className="text-center p-4 bg-gray-800 rounded-lg shadow-lg hover:shadow-green-500/50 transition duration-300 border border-gray-700">
                        <h4 className="text-3xl font-bold text-green-400">15%</h4>
                        <p className="text-sm text-gray-400">Optimization</p>
                    </div>
                </div>
            </motion.div>


            {/* Visual Section - Cards Staggered */}
            <div className="flex flex-col gap-6 relative">
                 {/* Decorative Circle */}
                 <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[300px] h-[300px] bg-primary/20 blur-[100px] rounded-full -z-10"></div>


                 {[
                    { icon: <FaCode size={30} />, title: "Full Stack", desc: "React, Node, Java" },
                    { icon: <FaServer size={30} />, title: "Backend Ops", desc: "Oracle, MongoDB, SQL" },
                    { icon: <FaAward size={30} />, title: "Quality Assurance", desc: "Testing, Debugging, CI/CD" },
                 ].map((item, index) => (
                    <motion.div
                        key={index}
                        custom={index}
                        initial="hidden"
                        whileInView="visible"
                        whileHover={{ scale: 1.05, x: 10 }}
                        viewport={{ once: true }}
                        variants={cardVariant}
                        className="flex items-center gap-4 bg-white/5 backdrop-blur-sm p-6 rounded-xl border border-white/10 shadow-xl hover:bg-white/10 transition-all cursor-pointer"
                    >
                        <div className="text-primary">{item.icon}</div>
                        <div>
                            <h3 className="font-bold text-xl">{item.title}</h3>
                            <p className="text-gray-400 text-sm">{item.desc}</p>
                        </div>
                    </motion.div>
                 ))}
            </div>
        </div>
      </div>
    </div>
  );
};


export default About;