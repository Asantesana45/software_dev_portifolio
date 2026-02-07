import { Typewriter } from 'react-simple-typewriter';
import { motion } from 'framer-motion';
import { Link } from 'react-scroll';


const Hero = () => {
  return (
    <div name="home" className="h-screen w-full bg-gradient-to-b from-dark via-black to-gray-900 pt-28 md:pt-0">
      <div className="max-w-screen-lg mx-auto flex flex-col items-center justify-center h-full px-4 md:flex-row text-white">
        
        <motion.div 
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="flex flex-col justify-center h-full w-full md:w-1/2"
        >
          <h2 className="text-4xl sm:text-7xl font-bold text-white">
            I'm <span className="text-primary">Johnson Munisi</span>
          </h2>
          <h3 className="text-2xl sm:text-3xl font-semibold text-gray-400 mt-4 h-16">
            I am a{' '}
            <span className="text-secondary">
              <Typewriter
                words={['Full Stack Developer', 'System Architect', 'Java Expert', 'Problem Solver']}
                loop={0}
                cursor
                cursorStyle='_'
                typeSpeed={70}
                deleteSpeed={50}
                delaySpeed={1000}
              />
            </span>
          </h3>
          <p className="text-gray-400 py-4 max-w-md text-lg">
            Results-driven IT professional building secure, scalable, and high-performance systems. 
            Transforming complex requirements into seamless web & mobile experiences.
          </p>


          <div className="flex gap-4">
            <Link to="projects" smooth duration={500} offset={-80}>
              <button className="group text-white w-fit px-6 py-3 my-2 flex items-center rounded-md bg-gradient-to-r from-primary to-blue-600 cursor-pointer hover:scale-105 transition-transform duration-300 font-bold shadow-lg shadow-primary/30">
                View Work
              </button>
            </Link>
            <a href="/Johnson_CV.pdf" download={true}>
              <button className="group text-primary w-fit px-6 py-3 my-2 flex items-center rounded-md border-2 border-primary cursor-pointer hover:bg-primary hover:text-white transition-all duration-300 font-bold">
                Download CV
              </button>
            </a>
          </div>
        </motion.div>


        {/* Decorative Element / 3D Vibe */}
        <motion.div 
           initial={{ opacity: 0, scale: 0.5 }}
           animate={{ opacity: 1, scale: 1 }}
           transition={{ duration: 0.8 }}
           className="w-full md:w-1/2 flex justify-center"
        >
            <img src="/public/profile1.png" className="w-full h-full object-cover rounded-full" />
        </motion.div>
      </div>
    </div>
  );
};


export default Hero;
