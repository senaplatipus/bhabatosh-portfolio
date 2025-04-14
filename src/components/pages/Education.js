import React from 'react';
import { motion } from 'framer-motion';
import Background from '../common/Background';
import osuLogo from '../../assets/osu.svg.png';
import bputLogo from '../../assets/bput.png';

const floatingAnimation = {
  animate: {
    y: [0, -10, 0],
    transition: {
      duration: 3,
      repeat: Infinity,
      ease: "easeInOut"
    }
  }
};

const Education = () => {
  return (
    <Background>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
        className="min-h-screen relative"
      >
        <div className="max-w-7xl mx-auto px-4 py-20">
          <div className="flex items-center justify-center gap-4 mb-16">
            <div className="w-12 h-12 rounded-full bg-blue-400/20 flex items-center justify-center">
              <svg className="w-6 h-6 text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 14l9-5-9-5-9 5 9 5z" />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 14l9-5-9-5-9 5 9 5z" />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 14v7" />
              </svg>
            </div>
            <h3 className="text-5xl font-bold text-gray-800">Education</h3>
          </div>

          <div className="relative">
            {/* Timeline line */}
            <div className="absolute w-0.5 border-l-4 border-dashed border-gray-400 left-1/2 transform -translate-x-1/2 h-full" style={{ borderSpacing: '2rem' }}></div>

            {/* Timeline content */}
            <div className="flex flex-col items-center">
              {/* Ohio State University */}
              <motion.div 
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 0.5 }}
                className="grid grid-cols-2 gap-16 mb-24 w-full"
              >
                <div className="flex justify-end">
                  <motion.div 
                    variants={floatingAnimation}
                    animate="animate"
                    className="bg-gradient-to-br from-orange-400 via-amber-400 to-orange-500 rounded-2xl p-6 shadow-lg w-full max-w-lg relative"
                  >
                    <div className="absolute -right-6 top-8 w-6 h-6">
                      <svg className="text-orange-400 w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M0 12l10-10v20z" />
                      </svg>
                    </div>
                    <div className="flex items-start justify-between mb-4">
                      <div>
                        <h4 className="text-xl font-extrabold text-black mb-1">Master of Science in Computer Science & Engineering</h4>
                        <p className="text-lg font-bold text-black-100">The Ohio State University</p>
                        <p className="text-base text-black-100">Columbus, OH</p>
                        <p className="text-base font-semibold text-black mt-1">Expected Graduation: May 2025</p>
                      </div>
                      <img 
                        src={osuLogo}
                        alt="Ohio State University Logo" 
                        className="w-24 h-16 object-contain bg-white rounded-lg p-2"
                      />
                    </div>
                  </motion.div>
                </div>
                <div className="relative"></div>
              </motion.div>

              {/* BPUT */}
              <motion.div 
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 0.5 }}
                className="grid grid-cols-2 gap-16 mb-24 w-full"
              >
                <div className="relative"></div>
                <div className="relative">
                  <motion.div 
                    variants={floatingAnimation}
                    animate="animate"
                    className="bg-gradient-to-br from-orange-400 via-amber-400 to-orange-500 rounded-2xl p-6 shadow-lg w-full max-w-lg relative"
                  >
                    <div className="absolute -left-6 top-8 w-6 h-6 transform rotate-180">
                      <svg className="text-orange-400 w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M0 12l10-10v20z" />
                      </svg>
                    </div>
                    <div className="flex items-start justify-between mb-4">
                      <div>
                        <h4 className="text-xl font-extrabold text-black mb-1">Bachelor of Technology in Mechanical Engineering</h4>
                        <p className="text-lg font-bold text-black-100">Biju Patnaik University of Technology</p>
                        <p className="text-base text-black-100">Rourkela, India</p>
                        <p className="text-base font-semibold text-black mt-1">Graduated: May 2021</p>
                      </div>
                      <img 
                        src={bputLogo}
                        alt="BPUT Logo" 
                        className="w-16 h-16 object-contain bg-white rounded-lg p-1"
                      />
                    </div>
                  </motion.div>
                </div>
              </motion.div>
            </div>
          </div>

          {/* Decorative Vector */}
          {/* <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="absolute bottom-0 right-0 w-96 h-96 opacity-10 pointer-events-none"
          >
            <svg viewBox="0 0 512 512" fill="currentColor" className="text-orange-500">
              <path d="M478.71 364.58zm-22 6.11l-27.83-15.9a15.92 15.92 0 0 1-6.94-19.2A184 184 0 1 1 256 72c5.89 0 11.71.29 17.46.83-.74-.07-1.48-.15-2.23-.21-8.49-.69-15.23-7.31-15.23-15.83v-32a16 16 0 0 1 15.34-16C266.24 8.46 261.18 8 256 8 119 8 8 119 8 256s111 248 248 248c98 0 182.42-56.95 222.71-139.42-4.13 7.86-14.23 10.55-22 6.11z" />
              <path d="M271.23 72.62c-8.49-.69-15.23-7.31-15.23-15.83v-32a16 16 0 0 1 15.34-16C266.24 8.46 261.18 8 256 8 119 8 8 119 8 256s111 248 248 248c98 0 182.42-56.95 222.71-139.42-4.13 7.86-14.23 10.55-22 6.11l-27.83-15.9a15.92 15.92 0 0 1-6.94-19.2A184 184 0 1 1 256 72c5.89 0 11.71.29 17.46.83-.74-.07-1.48-.15-2.23-.21zM256 112v77.42l-50.29 50.28a8 8 0 0 0 11.32 11.32L267.31 201a8 8 0 0 0 2.34-5.66V112a8 8 0 0 0-16 0zm208 220.8a16 16 0 0 1-7.86-13.91V240a8 8 0 0 0-8-8h-48a8 8 0 0 0 0 16h40v73.27a16 16 0 0 1-7.86 13.91l-27.84 15.9a8 8 0 0 0 7.87 13.92l27.84-15.9A32 32 0 0 0 464 320v-73.27a32 32 0 0 0-15.74-27.63l-27.84-15.9a8 8 0 0 0-7.87 13.92l27.84 15.9a16 16 0 0 1 7.86 13.91V320a8 8 0 0 0 16 0v-73.27a32 32 0 0 0-15.74-27.63l-27.84-15.9a8 8 0 0 0-7.87 13.92l27.84 15.9a16 16 0 0 1 7.86 13.91z" />
            </svg>
          </motion.div> */}
        </div>
      </motion.div>
    </Background>
  );
};

export default Education; 