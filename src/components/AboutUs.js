import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/ui/Footer';
import { motion } from 'framer-motion';
import { useNavigate } from "react-router-dom";
import {
  PaletteIcon,
  CalendarDaysIcon,
  StarIcon,
  AwardIcon
} from 'lucide-react';

const AboutUs = () => {
  const navigate = useNavigate();

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { 
      opacity: 1,
      transition: {
        delayChildren: 0.3,
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: { 
      y: 0, 
      opacity: 1,
      transition: {
        duration: 0.6
      }
    }
  };

  return (
    <div className="min-h-screen overflow-hidden bg-gradient-to-b from-gray-50 to-gray-100">
      <Navbar color="black"/>

      <section>
        <motion.header
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="relative h-[30vh] sm:h-[50vh] md:h-[60vh] flex items-center justify-center 
          bg-cover bg-center bg-no-repeat bg-banner"
          style={{
            // backgroundImage: 'linear-gradient(rgba(0,0,0,0.5), rgba(0,0,0,0.5)), url(/api/placeholder/1920/800)',
            backgroundBlendMode: 'multiply'
          }}
        >
          <div className="z-10 px-4 text-center text-white">
            <motion.h1
              variants={itemVariants}
              initial="hidden"
              animate="visible"
              className="mb-4 text-4xl font-extrabold text-transparent sm:text-5xl md:text-6xl bg-clip-text bg-gradient-to-r from-white to-gray-300"
            >
              IMPRESSIONS
            </motion.h1>
            <motion.p
              variants={itemVariants}
              initial="hidden"
              animate="visible"
              className="max-w-2xl mx-auto mb-8 text-lg font-medium tracking-wide text-gray-200 shadow-xl sm:text-xl"
            >
              Rangrez: The Artist Within - A Celebration of Creativity
            </motion.p>
          </div>
        </motion.header>

        <section className="px-8 py-16 bg-white">
          <div className="max-w-4xl mx-auto">
            <h2 className="mb-8 text-3xl font-bold text-center text-red-500">
              Welcome to IMPRESSIONS
            </h2>

            <div className="p-6 space-y-4 text-gray-700 rounded-lg bg-gray-50">
              <p>
                IMPRESSIONS is the annual cultural fest of COEP TECHNOLOGICAL UNIVERSITY. 
                It brings together students and artists to celebrate music, art, dance, and culture.
              </p>
              <p>
                This 9th Edition celebrates the theme "Rangrez: The Artist Within" - 
                where creativity knows no bounds and every artist finds their canvas.
              </p>
            </div>
          </div>
        </section>
        <section className="py-16 text-white bg-gradient-to-r from-red-500 to-purple-600">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid max-w-6xl grid-cols-1 gap-8 px-8 mx-auto md:grid-cols-3"
          >
            <motion.div
              variants={itemVariants}
              className="p-8 text-center transition-all duration-300 transform cursor-pointer bg-white/20 rounded-2xl backdrop-blur-md hover:scale-105 hover:shadow-2xl"
              onClick={() => navigate("/teams")}
            >
              <PaletteIcon className="mx-auto mb-4 text-white" size={48} />
              <h3 className="mb-2 text-5xl font-black text-white">33</h3>
              <p className="font-medium text-white/80">Core Team Members</p>
            </motion.div>

            <motion.div
              variants={itemVariants}
              className="p-8 text-center transition-all duration-300 transform cursor-pointer bg-white/20 rounded-2xl backdrop-blur-md hover:scale-105 hover:shadow-2xl"
            >
              <CalendarDaysIcon className="mx-auto mb-4 text-white" size={48} />
              <h3 className="mb-2 text-5xl font-black text-white">8</h3>
              <p className="font-medium text-white/80">Successful Editions</p>
            </motion.div>

            <motion.div
              variants={itemVariants}
              className="p-8 text-center transition-all duration-300 transform cursor-pointer bg-white/20 rounded-2xl backdrop-blur-md hover:scale-105 hover:shadow-2xl"
            >
              <AwardIcon className="mx-auto mb-4 text-white" size={48} />
              <h3 className="mb-2 text-5xl font-black text-white">100+</h3>
              <p className="font-medium text-white/80">Total Performances</p>
            </motion.div>
          </motion.div>
        </section>

        {/* Enhanced Call to Action */}
        <section className="px-8 py-16 bg-gradient-to-b from-gray-100 to-gray-200">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="max-w-4xl mx-auto text-center"
          >
            <h2 className="flex items-center justify-center mb-6 text-4xl font-black text-transparent bg-clip-text bg-gradient-to-r from-red-500 to-pink-600">
              <StarIcon className="mr-4 text-red-500" size={36} />
              Register Now!!
              <StarIcon className="ml-4 text-red-500" size={36} />
            </h2>
            <p className="max-w-2xl mx-auto mb-8 text-lg text-gray-700">
              Be part of the experience that defines creativity. Witness outstanding performances, 
              connect with fellow artists, and explore the artist within you.
            </p>
            <motion.a
              href="/events"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="inline-block px-12 py-4 text-lg font-bold text-white transition duration-300 transform rounded-full shadow-lg bg-gradient-to-r from-red-500 to-pink-500 hover:shadow-xl hover:-translate-y-1"
            >
              Explore Events
            </motion.a>
          </motion.div>
        </section>
      </section>

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default AboutUs;