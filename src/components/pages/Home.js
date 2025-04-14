import React from 'react';
import { motion } from 'framer-motion';
import Background from '../common/Background';
import profile from '../../assets/profile.jpeg';

const Home = () => {
  const greeting = "Hi, I'm ";
  const firstName = "Bhabatosh";
  const lastName = "Senapati";
  const greetingArray = greeting.split("");
  const firstNameArray = firstName.split("");
  const lastNameArray = lastName.split("");

  return (
    <Background>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
        className="min-h-screen flex items-center justify-center"
      >
        <div className="max-w-6xl mx-auto px-4 py-20">
          <div className="text-center mb-16">
            <motion.div 
              initial={{ y: -20 }}
              animate={{ y: 0 }}
              className="text-5xl font-extrabold text-gray-800 mb-8 min-h-[4rem] flex justify-center items-center whitespace-nowrap"
            >
              <div className="flex items-center">
                <div className="flex gap-1">
                  {greetingArray.map((letter, index) => (
                    <motion.span
                      key={index}
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{
                        duration: 0.1,
                        delay: index * 0.1,
                      }}
                    >
                      {letter}
                    </motion.span>
                  ))}
                </div>
                <motion.span
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{
                    duration: 0.1,
                    delay: greetingArray.length * 0.1,
                  }}
                >
                  &nbsp;
                </motion.span>
                <div className="flex">
                  {firstNameArray.map((letter, index) => (
                    <motion.span
                      key={index}
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{
                        duration: 0.1,
                        delay: (greetingArray.length + 1 + index) * 0.1,
                      }}
                    >
                      {letter}
                    </motion.span>
                  ))}
                </div>
                <motion.span
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{
                    duration: 0.1,
                    delay: (greetingArray.length + 1 + firstNameArray.length) * 0.1,
                  }}
                >
                  &nbsp;
                </motion.span>
                <div className="flex">
                  {lastNameArray.map((letter, index) => (
                    <motion.span
                      key={index}
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{
                        duration: 0.1,
                        delay: (greetingArray.length + 1 + firstNameArray.length + 1 + index) * 0.1,
                      }}
                    >
                      {letter}
                    </motion.span>
                  ))}
                </div>
              </div>
            </motion.div>
            <motion.p 
              initial={{ y: 20 }}
              animate={{ y: 0 }}
              className="text-xl font-medium text-gray-600 mb-12"
            >
              Full Stack Developer | AI/ML Enthusiast | Co-Founder | Ronaldo Fan
            </motion.p>
            <motion.div
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.2 }}
              className="flex justify-center space-x-4"
            >
              <a 
                href="#contact" 
                className="relative px-8 py-3 bg-orange-600 text-white rounded-lg shadow-lg hover:shadow-xl hover:bg-orange-700 transform hover:-translate-y-1 transition-all duration-300 font-medium"
              >
                Get In Touch
              </a>
              <a 
                href="/projects" 
                className="relative px-8 py-3 bg-white text-gray-800 rounded-lg shadow-lg hover:shadow-xl hover:bg-gray-50 transform hover:-translate-y-1 transition-all duration-300 font-medium border border-gray-200"
              >
                View My Work
              </a>
            </motion.div>
          </div>

          <motion.div 
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.4 }}
            className="relative mt-32 group"
          >
            {/* Ropes */}
            <div className="absolute -top-32 left-1/4 w-1 h-40 bg-amber-600 transform -rotate-12 origin-top rope-left">
              <div className="absolute -top-1 left-1/2 -translate-x-1/2 w-4 h-4 rounded-full bg-amber-700"></div>
            </div>
            <div className="absolute -top-32 right-1/4 w-1 h-40 bg-amber-600 transform rotate-12 origin-top rope-right">
              <div className="absolute -top-1 left-1/2 -translate-x-1/2 w-4 h-4 rounded-full bg-amber-700"></div>
            </div>
            
            {/* Hanging Card */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center bg-gradient-to-br from-orange-400 via-amber-400 to-orange-500 p-8 rounded-xl shadow-lg backdrop-blur-sm relative overflow-hidden hanging-card">
              {/* Decorative Elements for About Me Card */}
              <div className="decorative-circle w-32 h-32 -top-16 -left-16 animate-float"></div>
              <div className="decorative-circle w-24 h-24 -bottom-12 -right-12 animate-float" style={{ animationDelay: '2s' }}></div>
              <div className="vector-lines absolute inset-0 opacity-5"></div>
              
              <div className="space-y-6 relative z-10">
                <h2 className="text-4xl font-bold text-orange-600 text-center">About Me</h2>
                <p className="text-black leading-relaxed font-normal text-xl text-justify">
                  A self-driven and passionate Full-Stack Developer with hands-on experience in building end to end web applications and integrating intelligent systems using Machine Learning and AI. Thrives on solving real world problems through scalable, efficient, and user-centric solutions to help a large number of people improve the way they work and live using sustainable resources.
                </p>
                <div className="flex gap-4">
                  <a 
                    href="https://github.com/your-username" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="relative px-8 py-3 bg-orange-600 text-white rounded-lg shadow-lg hover:shadow-xl hover:bg-orange-700 transform hover:-translate-y-1 transition-all duration-300 font-medium flex items-center gap-2"
                  >
                    <span>⭐</span> Star me on Github
                  </a>
                </div>
                <div className="flex items-center justify-center gap-6 pt-4">
                  <a 
                    href="https://linkedin.com/in/your-profile" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="w-12 h-12 bg-white rounded-full flex items-center justify-center shadow-lg hover:shadow-xl transform hover:-translate-y-1 transition-all duration-300"
                  >
                    <svg className="w-6 h-6 text-orange-600" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                    </svg>
                  </a>
                  <a 
                    href="https://github.com/your-username" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="w-12 h-12 bg-white rounded-full flex items-center justify-center shadow-lg hover:shadow-xl transform hover:-translate-y-1 transition-all duration-300"
                  >
                    <svg className="w-6 h-6 text-orange-600" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 0C5.374 0 0 5.373 0 12c0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23A11.509 11.509 0 0112 5.803c1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576C20.566 21.797 24 17.3 24 12c0-6.627-5.373-12-12-12z"/>
                    </svg>
                  </a>
                  <a 
                    href="https://instagram.com/your-username" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="w-12 h-12 bg-white rounded-full flex items-center justify-center shadow-lg hover:shadow-xl transform hover:-translate-y-1 transition-all duration-300"
                  >
                    <svg className="w-6 h-6 text-orange-600" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z"/>
                    </svg>
                  </a>
                  <a 
                    href="https://facebook.com/your-profile" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="w-12 h-12 bg-white rounded-full flex items-center justify-center shadow-lg hover:shadow-xl transform hover:-translate-y-1 transition-all duration-300"
                  >
                    <svg className="w-6 h-6 text-orange-600" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                    </svg>
                  </a>
                </div>
              </div>
              <div className="flex items-center justify-center relative z-10">
                <div className="w-64 h-64 rounded-full overflow-hidden border-4 border-orange-400 shadow-lg">
                  <img 
                    src={profile} 
                    alt="Bhabatosh" 
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
            </div>
          </motion.div>

          {/* Full Stack Development Section - Full Width */}
          <div className="mt-32 mb-24">
            <div className="flex items-center gap-4 mb-8">
              <div className="w-12 h-12 rounded-full bg-orange-400/20 flex items-center justify-center">
                <svg className="w-6 h-6 text-orange-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
                </svg>
              </div>
              <h3 className="text-4xl font-bold text-gray-800">Full Stack Development</h3>
            </div>
            <div className="flex flex-col md:flex-row gap-12">
              <div className="w-full md:w-1/3">
                <motion.img 
                  src="https://cdn-icons-png.flaticon.com/512/2282/2282188.png" 
                  alt="Full Stack Development" 
                  className="w-full h-auto"
                  animate={{
                    y: [0, -10, 0],
                  }}
                  transition={{
                    duration: 4,
                    repeat: Infinity,
                    ease: "easeInOut"
                  }}
                />
              </div>
              <div className="w-full md:w-2/3">
                <ul className="space-y-6 text-gray-700 text-xl">
                  <li className="flex items-start gap-3">
                    <span className="text-orange-400 text-2xl">•</span>
                    <span>Building responsive and interactive web applications</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-orange-400 text-2xl">•</span>
                    <span>Implementing RESTful APIs and microservices</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-orange-400 text-2xl">•</span>
                    <span>Database design and optimization</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-orange-400 text-2xl">•</span>
                    <span>Frontend development with modern frameworks</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-orange-400 text-2xl">•</span>
                    <span>Backend development with Node.js and Python</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-orange-400 text-2xl">•</span>
                    <span>Cloud deployment and DevOps practices</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          {/* Full Stack Tech Stack */}
          <div className="mb-24">
            <h3 className="text-3xl font-bold text-gray-800 mb-8">Tech Stack</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {/* React */}
              <div className="flex items-start gap-4 p-4 rounded-lg hover:bg-gray-50 transition-colors duration-300">
                <img 
                  src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" 
                  alt="React" 
                  className="w-12 h-12"
                />
                <div>
                  <h4 className="text-xl font-semibold text-gray-800">React</h4>
                  <p className="text-gray-600">For building modern, responsive frontends</p>
                </div>
              </div>

              {/* Java */}
              <div className="flex items-start gap-4 p-4 rounded-lg hover:bg-gray-50 transition-colors duration-300">
                <img 
                  src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg" 
                  alt="Java" 
                  className="w-12 h-12"
                />
                <div>
                  <h4 className="text-xl font-semibold text-gray-800">Java</h4>
                  <p className="text-gray-600">Enterprise-grade backend development</p>
                </div>
              </div>

              {/* Golang */}
              <div className="flex items-start gap-4 p-4 rounded-lg hover:bg-gray-50 transition-colors duration-300">
                <img 
                  src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/go/go-original.svg" 
                  alt="Golang" 
                  className="w-12 h-12"
                />
                <div>
                  <h4 className="text-xl font-semibold text-gray-800">Golang</h4>
                  <p className="text-gray-600">High-performance backend development</p>
                </div>
              </div>

              {/* Spring Boot */}
              <div className="flex items-start gap-4 p-4 rounded-lg hover:bg-gray-50 transition-colors duration-300">
                <img 
                  src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/spring/spring-original.svg" 
                  alt="Spring Boot" 
                  className="w-12 h-12"
                />
                <div>
                  <h4 className="text-xl font-semibold text-gray-800">Spring Boot</h4>
                  <p className="text-gray-600">Robust backend microservices in Java</p>
                </div>
              </div>

              {/* PostgreSQL */}
              <div className="flex items-start gap-4 p-4 rounded-lg hover:bg-gray-50 transition-colors duration-300">
                <img 
                  src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg" 
                  alt="PostgreSQL" 
                  className="w-12 h-12"
                />
                <div>
                  <h4 className="text-xl font-semibold text-gray-800">PostgreSQL</h4>
                  <p className="text-gray-600">Reliable and scalable relational database</p>
                </div>
              </div>

              {/* MongoDB */}
              <div className="flex items-start gap-4 p-4 rounded-lg hover:bg-gray-50 transition-colors duration-300">
                <img 
                  src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg" 
                  alt="MongoDB" 
                  className="w-12 h-12"
                />
                <div>
                  <h4 className="text-xl font-semibold text-gray-800">MongoDB</h4>
                  <p className="text-gray-600">Flexible NoSQL database for modern applications</p>
                </div>
              </div>

              {/* Docker */}
              <div className="flex items-start gap-4 p-4 rounded-lg hover:bg-gray-50 transition-colors duration-300">
                <img 
                  src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg" 
                  alt="Docker" 
                  className="w-12 h-12"
                />
                <div>
                  <h4 className="text-xl font-semibold text-gray-800">Docker</h4>
                  <p className="text-gray-600">Containerization for consistent deployments</p>
                </div>
              </div>

              {/* Kubernetes */}
              <div className="flex items-start gap-4 p-4 rounded-lg hover:bg-gray-50 transition-colors duration-300">
                <img 
                  src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/kubernetes/kubernetes-plain.svg" 
                  alt="Kubernetes" 
                  className="w-12 h-12"
                />
                <div>
                  <h4 className="text-xl font-semibold text-gray-800">Kubernetes</h4>
                  <p className="text-gray-600">Container orchestration and scaling</p>
                </div>
              </div>

              {/* AWS */}
              <div className="flex items-start gap-4 p-4 rounded-lg hover:bg-gray-50 transition-colors duration-300">
                <img 
                  src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/amazonwebservices/amazonwebservices-original-wordmark.svg" 
                  alt="AWS" 
                  className="w-12 h-12"
                />
                <div>
                  <h4 className="text-xl font-semibold text-gray-800">AWS</h4>
                  <p className="text-gray-600">Cloud services (EC2, S3, Route 53)</p>
                </div>
              </div>
            </div>
          </div>

          {/* AI & Machine Learning Section - Full Width */}
          <div className="mb-24">
            <div className="flex items-center gap-4 mb-8">
              <div className="w-12 h-12 rounded-full bg-amber-400/20 flex items-center justify-center">
                <svg className="w-6 h-6 text-amber-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                </svg>
              </div>
              <h3 className="text-4xl font-bold text-gray-800">AI & Machine Learning</h3>
            </div>
            <div className="flex flex-col md:flex-row gap-12">
              <div className="w-full md:w-1/3">
                <motion.img 
                  src="https://cdn-icons-png.flaticon.com/512/2103/2103633.png" 
                  alt="AI & Machine Learning" 
                  className="w-full h-auto"
                  animate={{
                    y: [0, -10, 0],
                  }}
                  transition={{
                    duration: 4,
                    repeat: Infinity,
                    ease: "easeInOut",
                    delay: 0.5
                  }}
                />
              </div>
              <div className="w-full md:w-2/3">
                <ul className="space-y-6 text-gray-700 text-xl">
                  <li className="flex items-start gap-3">
                    <span className="text-amber-400 text-2xl">•</span>
                    <span>Proficient in building and deploying ML models using TensorFlow, Keras, and Scikit-learn</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-amber-400 text-2xl">•</span>
                    <span>Strong in NLP techniques like TF-IDF, SpaCy, and semantic similarity scoring</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-amber-400 text-2xl">•</span>
                    <span>Hands-on experience with Recommendation Systems, Computer Vision, and Transfer Learning</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-amber-400 text-2xl">•</span>
                    <span>Skilled in designing end-to-end ML pipelines and deploying them using Docker and Kubernetes</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-amber-400 text-2xl">•</span>
                    <span>Experienced in visualizing insights using Power BI and Tableau for data-driven decisions</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          {/* AI & ML Tech Stack */}
          <div className="mb-24">
            <h3 className="text-3xl font-bold text-gray-800 mb-8">AI & ML Tech Stack</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {/* Python */}
              <div className="flex items-start gap-4 p-4 rounded-lg hover:bg-gray-50 transition-colors duration-300">
                <img 
                  src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg" 
                  alt="Python" 
                  className="w-12 h-12"
                />
                <div>
                  <h4 className="text-xl font-semibold text-gray-800">Python</h4>
                  <p className="text-gray-600">Core language for all ML, NLP, and data tasks</p>
                </div>
              </div>

              {/* TensorFlow */}
              <div className="flex items-start gap-4 p-4 rounded-lg hover:bg-gray-50 transition-colors duration-300">
                <img 
                  src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tensorflow/tensorflow-original.svg" 
                  alt="TensorFlow" 
                  className="w-12 h-12"
                />
                <div>
                  <h4 className="text-xl font-semibold text-gray-800">TensorFlow</h4>
                  <p className="text-gray-600">For building and deploying deep learning models</p>
                </div>
              </div>

              {/* Scikit-learn */}
              <div className="flex items-start gap-4 p-4 rounded-lg hover:bg-gray-50 transition-colors duration-300">
                <div className="w-12 h-12 flex items-center justify-center bg-white rounded-lg shadow-sm">
                  <svg className="w-8 h-8 text-gray-800" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M12 2L2 7l10 5 10-5-10-5z"/>
                    <path d="M2 17l10 5 10-5"/>
                    <path d="M2 12l10 5 10-5"/>
                  </svg>
                </div>
                <div>
                  <h4 className="text-xl font-semibold text-gray-800">Scikit-learn</h4>
                  <p className="text-gray-600">For classical ML algorithms and pipelines</p>
                </div>
              </div>

              {/* Keras */}
              <div className="flex items-start gap-4 p-4 rounded-lg hover:bg-gray-50 transition-colors duration-300">
                <img 
                  src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/keras/keras-original.svg" 
                  alt="Keras" 
                  className="w-12 h-12"
                />
                <div>
                  <h4 className="text-xl font-semibold text-gray-800">Keras</h4>
                  <p className="text-gray-600">For rapid prototyping and neural network design</p>
                </div>
              </div>

              {/* SpaCy */}
              <div className="flex items-start gap-4 p-4 rounded-lg hover:bg-gray-50 transition-colors duration-300">
                <div className="w-12 h-12 flex items-center justify-center bg-white rounded-lg shadow-sm">
                  <svg className="w-8 h-8 text-gray-800" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M12 3L2 12h3v8h6v-6h2v6h6v-8h3L12 3z"/>
                    <path d="M8 12h8"/>
                    <path d="M12 8v8"/>
                  </svg>
                </div>
                <div>
                  <h4 className="text-xl font-semibold text-gray-800">SpaCy</h4>
                  <p className="text-gray-600">For NLP tasks like named entity recognition and semantic parsing</p>
                </div>
              </div>

              {/* Power BI / Tableau */}
              <div className="flex items-start gap-4 p-4 rounded-lg hover:bg-gray-50 transition-colors duration-300">
                <div className="w-12 h-12 flex items-center justify-center bg-white rounded-lg shadow-sm">
                  <svg className="w-8 h-8 text-gray-800" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M3 3v18h18V3H3zm16 16H5V5h14v14z"/>
                    <path d="M7 7h10v10H7z"/>
                    <path d="M9 9h6v6H9z"/>
                  </svg>
                </div>
                <div>
                  <h4 className="text-xl font-semibold text-gray-800">Power BI / Tableau</h4>
                  <p className="text-gray-600">For transforming model outputs into actionable business insights</p>
                </div>
              </div>
            </div>
          </div>

          {/* UI/UX Design Section - Full Width */}
          <div className="mb-24">
            <div className="flex items-center gap-4 mb-8">
              <div className="w-12 h-12 rounded-full bg-purple-400/20 flex items-center justify-center">
                <svg className="w-6 h-6 text-purple-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17h.01" />
                </svg>
              </div>
              <h3 className="text-4xl font-bold text-gray-800">UI/UX Design</h3>
            </div>
            <div className="flex flex-col md:flex-row gap-12">
              <div className="w-full md:w-1/3">
                <motion.img 
                  src="https://cdn-icons-png.flaticon.com/512/1157/1157109.png" 
                  alt="UI/UX Design" 
                  className="w-full h-auto"
                  animate={{
                    y: [0, -10, 0],
                  }}
                  transition={{
                    duration: 4,
                    repeat: Infinity,
                    ease: "easeInOut",
                    delay: 1
                  }}
                />
              </div>
              <div className="w-full md:w-2/3">
                <ul className="space-y-6 text-gray-700 text-xl">
                  <li className="flex items-start gap-3">
                    <span className="text-purple-400 text-2xl">•</span>
                    <span>Designing highly attractive user interface for mobile and web applications</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-purple-400 text-2xl">•</span>
                    <span>Customizing logo designs and building logos from scratch</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-purple-400 text-2xl">•</span>
                    <span>Creating the flow of application functionalities to optimize user experience</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          {/* UI/UX Design Tech Stack */}
          <div className="mb-24">
            <h3 className="text-3xl font-bold text-gray-800 mb-8">UI/UX Design Tech Stack</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {/* Adobe XD */}
              <div className="flex items-start gap-4 p-4 rounded-lg hover:bg-gray-50 transition-colors duration-300">
                <img 
                  src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/xd/xd-plain.svg" 
                  alt="Adobe XD" 
                  className="w-12 h-12"
                />
                <div>
                  <h4 className="text-xl font-semibold text-gray-800">Adobe XD</h4>
                  <p className="text-gray-600">For wireframing and prototyping</p>
                </div>
              </div>

              {/* Figma */}
              <div className="flex items-start gap-4 p-4 rounded-lg hover:bg-gray-50 transition-colors duration-300">
                <img 
                  src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/figma/figma-original.svg" 
                  alt="Figma" 
                  className="w-12 h-12"
                />
                <div>
                  <h4 className="text-xl font-semibold text-gray-800">Figma</h4>
                  <p className="text-gray-600">For collaborative interface design</p>
                </div>
              </div>

              {/* Adobe Illustrator */}
              <div className="flex items-start gap-4 p-4 rounded-lg hover:bg-gray-50 transition-colors duration-300">
                <img 
                  src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/illustrator/illustrator-plain.svg" 
                  alt="Adobe Illustrator" 
                  className="w-12 h-12"
                />
                <div>
                  <h4 className="text-xl font-semibold text-gray-800">Adobe Illustrator</h4>
                  <p className="text-gray-600">For vector graphics and logo design</p>
                </div>
              </div>

              {/* Canva */}
              <div className="flex items-start gap-4 p-4 rounded-lg hover:bg-gray-50 transition-colors duration-300">
                <img 
                  src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/canva/canva-original.svg" 
                  alt="Canva" 
                  className="w-12 h-12"
                />
                <div>
                  <h4 className="text-xl font-semibold text-gray-800">Canva</h4>
                  <p className="text-gray-600">For quick design and social media graphics</p>
                </div>
              </div>
            </div>
          </div>

          {/* Other Sections - Two Columns */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          </div>
        </div>
      </motion.div>
    </Background>
  );
};

export default Home; 

<style jsx>{`
  @keyframes float {
    0%, 100% { transform: translateY(0); }
    50% { transform: translateY(-10px); }
  }
  @keyframes rope-swing-left {
    0%, 100% { transform: rotate(-12deg); }
    50% { transform: rotate(-8deg); }
  }
  @keyframes rope-swing-right {
    0%, 100% { transform: rotate(12deg); }
    50% { transform: rotate(8deg); }
  }
  .animate-float {
    animation: float 3s ease-in-out infinite;
  }
  .rope-left {
    animation: rope-swing-left 4s ease-in-out infinite;
  }
  .rope-right {
    animation: rope-swing-right 4s ease-in-out infinite;
  }
  .group:hover .rope-left,
  .group:hover .rope-right {
    animation-play-state: paused !important;
  }
  .decorative-circle {
    position: absolute;
    background: rgba(255, 255, 255, 0.1);
    border-radius: 50%;
    filter: blur(8px);
  }
  .vector-lines {
    background-image: linear-gradient(45deg, rgba(255, 255, 255, 0.1) 25%, transparent 25%),
                      linear-gradient(-45deg, rgba(255, 255, 255, 0.1) 25%, transparent 25%),
                      linear-gradient(45deg, transparent 75%, rgba(255, 255, 255, 0.1) 75%),
                      linear-gradient(-45deg, transparent 75%, rgba(255, 255, 255, 0.1) 75%);
    background-size: 20px 20px;
    background-position: 0 0, 0 10px, 10px -10px, -10px 0px;
  }
  .hanging-card {
    position: relative;
    transform-origin: top center;
    transition: transform 0.3s ease;
  }
  .hanging-card:hover {
    transform: translateY(-5px);
  }
`}</style> 