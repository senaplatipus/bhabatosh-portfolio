import React from 'react';
import { motion } from 'framer-motion';
import Background from '../common/Background';
// Import all project images directly
import image911 from '../../assets/911.png';
import imageAlgo from '../../assets/algo.png';
import imageChess from '../../assets/chess.png';
import imageCodu from '../../assets/codu.png';
import imageFacemask from '../../assets/facemask.png';
import imageMern from '../../assets/mern.png';
import imageSeq from '../../assets/s2s.png';
import imageSnake from '../../assets/snake.png';
import imageSorting from '../../assets/sorting.png';

const Projects = () => {
  const projects = [
    {
      title: "911 Emergency Project",
      description: "Worked on the Intelligent 911 Monitoring System, building backend services in Go and Python to analyze emergency call transcripts using NLP and knowledge graphs for incident association.",
      technologies: ["Go", "Python", "NLP", "Knowledge Graphs", "Machine Learning"],
      image: image911,
      liveLink: null,
      githubLink: "https://github.com/senaplatipus/ai-platform-gnn-machine"
    },
    {
      title: "MERN Social Media Application",
      description: "Developed a full-stack social media app using MERN stack with user authentication, real-time updates, and interactive UI.",
      technologies: ["MongoDB", "Express", "React", "Node.js", "Socket.io"],
      image: imageMern,
      liveLink: null,
      githubLink: "https://github.com/senaplatipus/Social-Media-app"
    },
    {
      title: "Real-time Coding Platform",
      description: "A collaborative coding platform with real-time editing, video chat, and automated code evaluation.",
      technologies: ["React", "WebSockets", "Node.js", "MongoDB"],
      image: imageCodu,
      liveLink: "https://coduter.com",
      githubLink: "https://github.com/bhabatosh/coduter-platform"
    },
    {
      title: "Path Planning Algorithm Visualizer",
      description: "An interactive visualization tool for comparing different path planning algorithms for autonomous robots.",
      technologies: ["JavaScript", "D3.js", "HTML/CSS", "Algorithms"],
      image: imageAlgo,
      liveLink: null,
      githubLink: "https://github.com/senaplatipus/PathFinder"
    },
    {
      title: "Chess AI Bot",
      description: "An AI that can play chess against another AI or a human, implementing minimax algorithm with alpha-beta pruning.",
      technologies: ["Python", "AI", "Game Theory", "Algorithms"],
      image: imageChess,
      liveLink: null,
      githubLink: "https://github.com/senaplatipus/CHESS_AI"
    },
    {
      title: "Sequence-to-Sequence Model LSTM",
      description: "Implemented a sequence-to-sequence model, specifically an encoder-decoder with attention, using LSTMs.",
      technologies: ["Python", "TensorFlow", "LSTM", "Deep Learning"],
      image: imageSeq,
      liveLink: null,
      githubLink: "https://github.com/senaplatipus/Sequence-2-Sequence-Model-LSTM"
    },
    {
      title: "Face Mask Detection",
      description: "A computer vision system that detects whether people are wearing face masks in images and video streams.",
      technologies: ["Python", "OpenCV", "Deep Learning", "Computer Vision"],
      image: imageFacemask,
      liveLink: null,
      githubLink: "https://github.com/senaplatipus/FaceMaskDetection"
    },
    {
      title: "Snake AI",
      description: "Trained a Neural Network to play Snake using a Genetic Algorithm, demonstrating reinforcement learning principles.",
      technologies: ["Python", "Neural Networks", "Genetic Algorithms", "Reinforcement Learning"],
      image: imageSnake,
      liveLink: null,
      githubLink: "https://github.com/senaplatipus/SnakeAI"
    },
    {
      title: "Sorting Visualizer",
      description: "Sorting algorithms visualizer implemented in Vanilla JavaScript, providing an interactive way to understand various sorting methods.",
      technologies: ["JavaScript", "HTML/CSS", "Algorithms", "Data Structures"],
      image: imageSorting,
      liveLink: null,
      githubLink: "https://github.com/senaplatipus/sorting-visualizer"
    }
  ];

  // Function to handle GitHub link clicks with analytics
  const handleGithubClick = (project) => {
    // You can add analytics tracking here if needed
    console.log(`GitHub link clicked for project: ${project.title}`);
    window.open(project.githubLink, '_blank');
  };

  return (
    <Background>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
        className="min-h-screen py-20"
      >
        <div className="max-w-6xl mx-auto px-4">
          <motion.h1
            initial={{ y: -20 }}
            animate={{ y: 0 }}
            className="text-5xl font-bold text-gray-800 mb-6 text-center"
          >
            My Projects
          </motion.h1>
          
          <motion.p
            initial={{ y: -10, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="text-xl text-gray-600 mb-12 text-center max-w-3xl mx-auto"
          >
            A showcase of my technical expertise and problem-solving capabilities through
            various real-world applications and research projects.
          </motion.p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <motion.div
                key={index}
                initial={{ y: 50, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: index * 0.1 }}
                className="bg-white rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300 flex flex-col"
              >
                <div className="h-48 bg-gradient-to-r from-orange-400/20 to-amber-400/30 relative overflow-hidden">
                  {/* Project Image or Placeholder */}
                  <div className="w-full h-full flex items-center justify-center">
                    {typeof project.image === 'string' && project.image === "placeholder.jpg" ? (
                      <div className="text-6xl text-orange-400/40">
                        {project.title.charAt(0)}
                      </div>
                    ) : (
                      <img 
                        src={project.image}
                        alt={project.title}
                        className="w-full h-full object-cover"
                      />
                    )}
                  </div>
                  
                  {/* Technology pills floating on the image */}
                  <div className="absolute bottom-2 left-2 right-2 flex flex-wrap gap-1">
                    {project.technologies.slice(0, 3).map((tech, techIndex) => (
                      <span
                        key={techIndex}
                        className="px-2 py-1 bg-white/80 text-orange-600 rounded-full text-xs font-medium"
                      >
                        {tech}
                      </span>
                    ))}
                    {project.technologies.length > 3 && (
                      <span className="px-2 py-1 bg-white/80 text-orange-600 rounded-full text-xs font-medium">
                        +{project.technologies.length - 3}
                      </span>
                    )}
                  </div>
                </div>
                
                <div className="p-6 flex-grow">
                  <h3 className="text-xl font-bold text-gray-800 mb-2">{project.title}</h3>
                  <p className="text-gray-600 mb-4 text-sm">{project.description}</p>
                  
                  <div className="mt-2 mb-4">
                    <h4 className="text-sm font-semibold text-gray-700 mb-2">Technologies:</h4>
                    <div className="flex flex-wrap gap-2">
                      {project.technologies.map((tech, techIndex) => (
                        <span
                          key={techIndex}
                          className="px-3 py-1 bg-gray-100 text-gray-600 rounded-full text-xs"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
                
                <div className="px-6 pb-6 mt-auto">
                  <div className="flex gap-4">
                    {project.liveLink && (
                      <a
                        href={project.liveLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="btn bg-orange-500 hover:bg-orange-600 text-white flex-1 text-center py-2 rounded-md transition-colors duration-300"
                      >
                        Live Demo
                      </a>
                    )}
                    <button
                      onClick={() => handleGithubClick(project)}
                      className={`btn border border-gray-300 hover:border-gray-400 hover:bg-gray-50 text-center py-2 rounded-md flex items-center justify-center gap-2 transition-all duration-300 ${!project.liveLink ? 'w-full' : 'flex-1'}`}
                    >
                      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M12 0C5.374 0 0 5.373 0 12c0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23A11.509 11.509 0 0112 5.803c1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576C20.566 21.797 24 17.3 24 12c0-6.627-5.373-12-12-12z"/>
                      </svg>
                      GitHub
                    </button>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
          
          {/* GitHub Repository Section */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.8 }}
            className="mt-16 text-center"
          >
            <div className="bg-gradient-to-r from-orange-100 to-amber-100 p-8 rounded-xl shadow-md">
              <h2 className="text-2xl font-bold text-gray-800 mb-4">Explore More Projects</h2>
              <p className="text-gray-600 mb-6">
                Check out my GitHub repositories for more projects, including open-source contributions, 
                code samples, and experimental work.
              </p>
              <a
                href="https://github.com/bhabatosh"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-6 py-3 bg-orange-500 text-white rounded-lg hover:bg-orange-600 transition-colors duration-300"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 0C5.374 0 0 5.373 0 12c0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23A11.509 11.509 0 0112 5.803c1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576C20.566 21.797 24 17.3 24 12c0-6.627-5.373-12-12-12z"/>
                </svg>
                Visit My GitHub Profile
              </a>
            </div>
          </motion.div>
        </div>
      </motion.div>
    </Background>
  );
};

export default Projects;