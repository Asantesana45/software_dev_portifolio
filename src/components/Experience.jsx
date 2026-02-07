import { motion } from 'framer-motion';
import { FaBriefcase } from 'react-icons/fa';


const Experience = () => {
  const experiences = [
    {
      id: 1,
      role: 'Software Developer & DB Admin Support',
      company: 'BAKITA',
      period: 'Jan 2023 – Dec 2023',
      tech: ['React.js', 'Node.js', 'MongoDB', 'REST API'],
      description: [
        'Designed and coded the Swahili word registration system using React and Node/Express.',
        'Conducted code reviews and reliability assessments ensuring system stability.',
        'Integrated 3rd-party web services for seamless data exchange.',
      ]
    },
    {
      id: 2,
      role: 'Software Developer',
      company: 'CRDB Bank Plc',
      period: 'Jan 2021 – Dec 2022',
      tech: ['Node.js', 'Oracle', 'SOAP/REST', 'Java'],
      description: [
        'Developed REST and SOAP APIs, improving transaction processing speed by 15%.',
        'Optimized database queries (Oracle/SQL Server) reducing response time by 20%.',
        'Ensured secure front-end and back-end integration for banking applications.',
      ]
    },
  ];


  return (
    <div name="experience" className="w-full bg-white dark:bg-gray-900 text-gray-800 dark:text-white py-20">
      <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-4 border-primary">Experience</p>
          <p className="py-6">My professional journey delivering impact.</p>
        </div>


        <div className="flex flex-col gap-8 relative border-l-4 border-gray-200 dark:border-gray-700 ml-4">
          {experiences.map((exp) => (
            <motion.div 
              key={exp.id}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: exp.id * 0.2 }}
              viewport={{ once: true }}
              className="mb-10 ml-8 relative"
            >
              <div className="absolute -left-12 top-0 bg-primary p-2 rounded-full text-white shadow-lg shadow-primary/50">
                <FaBriefcase size={20} />
              </div>
              <div className="bg-gray-100 dark:bg-gray-800 p-6 rounded-lg shadow-lg hover:shadow-2xl transition-shadow duration-300">
                <div className="flex flex-col md:flex-row justify-between mb-2">
                  <h3 className="text-xl font-bold text-primary">{exp.role}</h3>
                  <span className="text-sm font-semibold text-gray-500 dark:text-gray-400 bg-gray-200 dark:bg-gray-700 px-3 py-1 rounded-full">{exp.period}</span>
                </div>
                <h4 className="text-lg font-semibold mb-2">{exp.company}</h4>
                <ul className="list-disc list-outside ml-5 text-gray-600 dark:text-gray-300 space-y-1 mb-4">
                  {exp.description.map((item, index) => (
                    <li key={index}>{item}</li>
                  ))}
                </ul>
                <div className="flex flex-wrap gap-2 mt-2">
                    {exp.tech.map((t, i) => (
                        <span key={i} className="text-xs font-mono bg-primary/10 text-primary px-2 py-1 rounded border border-primary/30">{t}</span>
                    ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};


export default Experience;
