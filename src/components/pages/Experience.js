import React from 'react';
import { motion } from 'framer-motion';
import Background from '../common/Background';

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

const Experience = () => {
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
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
            </div>
            <h3 className="text-5xl font-bold text-gray-800">Experience</h3>
          </div>

          <div className="relative">
            {/* Timeline line */}
            <div className="absolute w-0.5 border-l-[6px] border-dashed border-gray-400 left-1/2 transform -translate-x-1/2 h-full" style={{ borderSpacing: '2rem' }}></div>

            {/* Timeline content */}
            <div className="flex flex-col items-center">
              {/* Niv-Tech Solutions */}
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
                    <h4 className="text-xl font-extrabold text-black mb-1">Software Engineer</h4>
                    <p className="text-lg font-bold text-black-100">Niv-Tech Solutions Private Limited</p>
                    <p className="text-base font-semibold text-black mt-1">Feb 2022 - Jul 2023</p>
                    <p className="text-base font-medium text-black-100 mt-4 leading-relaxed">
                      Engineered distributed microservices using Java and Spring Boot, enhancing scalability and reliability. 
                      Optimized system architecture with Apache Kafka and MongoDB, achieving 35% reduction in latency.
                    </p>
                  </motion.div>
                </div>
                <div className="relative"></div>
              </motion.div>

              {/* Coduter */}
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
                    <h4 className="text-xl font-extrabold text-black mb-1">Co-founder</h4>
                    <p className="text-lg font-bold text-black-100">Coduter Private Limited | www.coduter.com </p>
                    <p className="text-base font-semibold text-black mt-1">Dec 2020 - Jul 2021</p>
                    <p className="text-base font-medium text-black-100 mt-4 leading-relaxed">
                      Founded and developed an interactive coding platform with real-time video chat and live challenges. 
                      Implemented ML-based matchmaking and gamification, driving 40% user retention.
                    </p>
                  </motion.div>
                </div>
              </motion.div>

              {/* IIT Guwahati */}
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
                    <h4 className="text-xl font-extrabold text-black mb-1">Summer Research Intern</h4>
                    <p className="text-lg font-bold text-black-100">Indian Institute of Technology Guwahati</p>
                    <p className="text-base font-semibold text-black mt-1">May 2020 - Aug 2020</p>
                    <p className="text-base font-medium text-black-100 mt-4 leading-relaxed">
                      Developed path-planning algorithms for food delivery robots, achieving 85% navigation efficiency. 
                      Led comparative study of A*, Dynamic D*, TWD*, and E* algorithms with 7+ team members.
                    </p>
                  </motion.div>
                </div>
                <div className="relative"></div>
              </motion.div>
            </div>
          </div>
        </div>
      </motion.div>
    </Background>
  );
};

export default Experience; 