import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/ui/Footer';
import { motion } from 'framer-motion';
import { useNavigate } from "react-router-dom";
import {
  PaletteIcon,
  UsersIcon,
  CalendarDaysIcon,
  StarIcon
} from 'lucide-react';

const AboutUs = () => {
  const navigate = useNavigate();
  return (
    <div className="bg-gradient-to-b from-gray-50 to-gray-100 min-h-screen">
      {/* Navbar */}
      <Navbar color="black" />

      {/* Hero Section with Animated Background */}
      <motion.header
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        className="relative h-[20vh] sm:h-[50vh] md:h-[70vh] flex items-center justify-center bg-banner bg-cover bg-no-repeat"
        style={{
          backgroundSize: 'cover',
          backgroundPosition: 'center'
        }}
      >
        {/* <div className="text-center text-white px-4">
          <motion.h1
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.3, duration: 0.6 }}
            className="text-6xl font-bold mb-4 text-shadow"
          >
            Impressions
          </motion.h1>
          <motion.p
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.5, duration: 0.6 }}
            className="text-xl max-w-2xl mx-auto mb-8"
          >
            Rangrez: The Artist Within - A Celebration of Creativity
          </motion.p>
        </div> */}
      </motion.header>

      {/* About Section */}
      <section className="px-8 py-16 bg-white">
        <div className="max-w-4xl mx-auto">
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-4xl font-bold text-center text-gray-800 mb-10"
          >
            Welcome to Impressions
          </motion.h2>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="text-lg text-gray-700 space-y-6 leading-relaxed"
          >
            <p>
              <strong>Impressions</strong> is the annual cultural fest of COEP TECHNOLOGICAL UNIVERSITY, where creativity, passion, and talent unite to create unforgettable memories. Over the years, Impressions has become a melting pot of music, art, dance, and culture, drawing students and artists from across the region.
            </p>
            <p>
              This <strong>9th Edition</strong> celebrates the theme <strong>"Rangrez: The Artist Within"</strong>—a tribute to the boundless creativity of every individual. From dazzling performances to artistic showcases, Impressions is where <strong>every artist finds their canvas</strong>.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Stats Section with Vibrant Design */}
      <section className="bg-gradient-to-r from-red-400 to-blue-800 text-white py-16">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6, staggerChildren: 0.2 }}
            viewport={{ once: true }}
            className="grid md:grid-cols-3 gap-8 text-center"
          >
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              whileInView={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.6 }}
              onClick={() => navigate("/teams")}
              className="bg-white/20 rounded-xl p-8 backdrop-blur-md"
            >
              <PaletteIcon className="mx-auto mb-4 text-white" size={48} />
              <h3 className="text-5xl font-bold mb-2">33</h3>
              <p className="text-white/80">Core Team Members</p>
            </motion.div>

            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              whileInView={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              onClick={() => navigate("/events")}
              className="bg-white/20 rounded-xl p-8 backdrop-blur-md"
            >
              <UsersIcon className="mx-auto mb-4 text-white" size={48} />
              <h3 className="text-5xl font-bold mb-2">100+</h3>
              <p className="text-white/80">Overall Events Conducted</p>
            </motion.div>

            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              whileInView={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="bg-white/20 rounded-xl p-8 backdrop-blur-md"
            >
              <CalendarDaysIcon className="mx-auto mb-4 text-white" size={48} />
              <h3 className="text-5xl font-bold mb-2">8</h3>
              <p className="text-white/80">Successful Editions</p>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Call to Action with Vibrant Design */}
      <section className="px-8 py-16 bg-gradient-to-b from-gray-100 to-gray-200 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl font-bold text-gray-800 mb-6 flex items-center justify-center">
            <StarIcon className="mr-4 text-red-500" size={36} />
            Register Now!!
            <StarIcon className="ml-4 text-red-500" size={36} />
          </h2>
          <p className="text-lg mb-8 max-w-3xl mx-auto text-gray-700">
            Be part of the experience that defines creativity. Witness outstanding performances, connect with fellow artists, and explore the artist within you.
          </p>
          <motion.a
            href="/events"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="inline-block px-10 py-4 text-lg font-bold text-white bg-gradient-to-r from-red-500 to-pink-500 rounded-full shadow-lg hover:shadow-xl transition duration-300"
          >
            Explore Events
          </motion.a>
        </motion.div>
      </section>

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default AboutUs;