import { motion } from 'framer-motion';


const Skills = () => {
  const skills = [
    { id: 1, title: 'Node.js', style: 'shadow-green-500', level: '90%' },
    { id: 2, title: 'React.js', style: 'shadow-blue-500', level: '95%' },
    { id: 3, title: 'Java', style: 'shadow-red-500', level: '85%' },
    { id: 4, title: 'MongoDB', style: 'shadow-green-400', level: '80%' },
    { id: 5, title: 'SQL (Oracle/MySQL)', style: 'shadow-orange-500', level: '85%' },
    { id: 6, title: 'REST & SOAP APIs', style: 'shadow-purple-500', level: '90%' },
    { id: 7, title: 'System Analysis', style: 'shadow-gray-400', level: '85%' },
    { id: 8, title: 'Git & DevOps', style: 'shadow-white', level: '80%' },
  ];


  return (
    <div name="skills" className="w-full bg-gradient-to-b from-gray-900 to-black text-white py-20">
      <div className="max-w-screen-lg mx-auto p-4 flex flex-col justify-center w-full h-full">
        <div className="pb-8">
          <p className="text-4xl font-bold border-b-4 border-gray-500 p-2 inline">Skills & Tech Stack</p>
          <p className="py-6">Technologies I work with to build scalable solutions.</p>
        </div>


        <div className="w-full grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 text-center py-8 px-12 sm:px-0">
          {skills.map(({ id, title, style, level }) => (
            <motion.div 
              key={id} 
              whileHover={{ scale: 1.05 }}
              className={`shadow-md hover:scale-105 duration-500 py-6 rounded-lg bg-gray-800 ${style}`}
            >
              <p className="mt-4 font-bold text-xl">{title}</p>
              <div className="w-full bg-gray-700 rounded-full h-2.5 mt-4 max-w-[80%] mx-auto">
                <div className="bg-primary h-2.5 rounded-full" style={{ width: level }}></div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};


export default Skills;
