import { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';
import { motion } from 'framer-motion';
import { FaPaperPlane, FaWhatsapp, FaEnvelope, FaMapMarkerAlt } from 'react-icons/fa';

const Contact = () => {
  const form = useRef();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [status, setStatus] = useState('');

  const sendEmail = (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Replace these IDs with your actual ones from EmailJS Dashboard
    const SERVICE_ID = "service_1pp6r8o";
    const TEMPLATE_ID = "template_6179vt9";
    const PUBLIC_KEY = "5BkEItKDlFabO9Axb";

    emailjs.sendForm(SERVICE_ID, TEMPLATE_ID, form.current, PUBLIC_KEY)
      .then((result) => {
          console.log(result.text);
          setStatus('SUCCESS');
          setIsSubmitting(false);
          e.target.reset();
      }, (error) => {
          console.log(error.text);
          setStatus('ERROR');
          setIsSubmitting(false);
      });
  };

  return (
    <div name="contact" className="w-full min-h-screen bg-gradient-to-b from-dark via-gray-900 to-black p-4 text-white pt-32">
      <div className="max-w-screen-lg mx-auto flex flex-col justify-center h-full">
        
        {/* Header Section */}
        <motion.div 
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="pb-8"
        >
          <p className="text-4xl font-bold inline border-b-4 border-primary bg-clip-text text-transparent bg-gradient-to-r from-primary to-secondary">
            Get In Touch
          </p>
          <p className="py-6 text-gray-400">Ready to build something amazing? Let's talk about your next project.</p>
        </motion.div>

        <div className="flex flex-col md:flex-row gap-12">
          
          {/* Left Side: Contact Info */}
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="flex-1 space-y-8"
          >
            <div className="flex items-center gap-6 group">
              <div className="p-4 bg-gray-800 rounded-2xl group-hover:bg-primary transition-colors duration-300">
                <FaEnvelope size={25} className="text-primary group-hover:text-white" />
              </div>
              <div>
                <h3 className="text-xl font-bold">Email</h3>
                <p className="text-gray-400">johnsonmunisi2021@gmail.com</p>
              </div>
            </div>

            <div className="flex items-center gap-6 group">
              <div className="p-4 bg-gray-800 rounded-2xl group-hover:bg-green-500 transition-colors duration-300">
                <FaWhatsapp size={25} className="text-green-500 group-hover:text-white" />
              </div>
              <div>
                <h3 className="text-xl font-bold">WhatsApp / Phone</h3>
                <p className="text-gray-400">+255 692 527 140</p>
              </div>
            </div>

            <div className="flex items-center gap-6 group">
              <div className="p-4 bg-gray-800 rounded-2xl group-hover:bg-secondary transition-colors duration-300">
                <FaMapMarkerAlt size={25} className="text-secondary group-hover:text-white" />
              </div>
              <div>
                <h3 className="text-xl font-bold">Location</h3>
                <p className="text-gray-400">Dar es Salaam, Tanzania</p>
              </div>
            </div>
          </motion.div>

          {/* Right Side: Animated Form */}
          <motion.div 
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="flex-[1.5] bg-white/5 backdrop-blur-lg p-8 rounded-3xl border border-white/10 shadow-2xl"
          >
            <form ref={form} onSubmit={sendEmail} className="flex flex-col gap-4">
              <motion.input
                whileFocus={{ scale: 1.01 }}
                type="text"
                name="user_name"
                required
                placeholder="Full Name"
                className="p-4 bg-gray-900/50 border border-gray-700 rounded-xl text-white focus:outline-none focus:border-primary transition-all shadow-inner"
              />
              <motion.input
                whileFocus={{ scale: 1.01 }}
                type="email"
                name="user_email"
                required
                placeholder="Your Email"
                className="p-4 bg-gray-900/50 border border-gray-700 rounded-xl text-white focus:outline-none focus:border-primary transition-all shadow-inner"
              />
              <motion.textarea
                whileFocus={{ scale: 1.01 }}
                name="message"
                required
                rows="6"
                placeholder="Tell me about your project..."
                className="p-4 bg-gray-900/50 border border-gray-700 rounded-xl text-white focus:outline-none focus:border-primary transition-all shadow-inner"
              ></motion.textarea>

              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                disabled={isSubmitting}
                className={`mt-4 flex items-center justify-center gap-3 px-8 py-4 rounded-xl font-bold text-lg transition-all shadow-lg ${
                  isSubmitting ? 'bg-gray-600 cursor-not-allowed' : 'bg-gradient-to-r from-primary to-secondary hover:shadow-primary/40'
                }`}
              >
                {isSubmitting ? 'Sending...' : (
                  <>
                    Send Message <FaPaperPlane size={18} />
                  </>
                )}
              </motion.button>

              {/* Status Messages */}
              {status === 'SUCCESS' && (
                <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="text-green-400 text-center mt-4">
                  Message sent successfully! I'll get back to you soon.
                </motion.p>
              )}
              {status === 'ERROR' && (
                <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="text-red-400 text-center mt-4">
                  Something went wrong. Please try again later.
                </motion.p>
              )}
            </form>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Contact;