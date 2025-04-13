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
        className="min-h-screen"
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
        </div>
      </motion.div>
    </Background>
  );
};

export default Education; 