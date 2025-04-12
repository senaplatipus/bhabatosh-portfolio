import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import Home from './components/pages/Home';
import Experience from './components/pages/Experience';
import Projects from './components/pages/Projects';
import Education from './components/pages/Education';
import Contact from './components/pages/Contact';
import './styles/index.css';

function App() {
  const navItems = [
    { path: '/', name: 'Home' },
    { path: '/experience', name: 'Experience' },
    { path: '/projects', name: 'Projects' },
    { path: '/education', name: 'Education' },
    { path: '/contact', name: 'Contact' }
  ];

  return (
    <Router>
      <div className="min-h-screen bg-gray-50">
        <nav className="bg-white shadow-lg fixed w-full top-0 z-50">
          <div className="max-w-6xl mx-auto px-4">
            <div className="flex justify-between h-20">
              <div className="flex items-center">
                <Link to="/" className="text-blue-600 hover:text-blue-700 transition-colors duration-200">
                  <span className="font-signature">Bhabatosh Senapati</span>
                </Link>
              </div>
              <div className="hidden md:flex items-center space-x-8">
                {navItems.map((item) => (
                  <Link
                    key={item.path}
                    to={item.path}
                    className="nav-link text-gray-600 hover:text-gray-900 px-3 py-2 text-sm font-medium transition-colors duration-200 relative"
                  >
                    {item.name}
                  </Link>
                ))}
              </div>
              <div className="md:hidden flex items-center">
                {/* Add mobile menu button here if needed */}
              </div>
            </div>
          </div>
        </nav>

        <main className="pt-20">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/experience" element={<Experience />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/education" element={<Education />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </main>

        <footer className="bg-gray-800 text-white py-8 mt-auto">
          <div className="max-w-6xl mx-auto px-4 text-center">
            <div className="flex justify-center space-x-6 mb-4">
              {navItems.map((item) => (
                <Link
                  key={item.path}
                  to={item.path}
                  className="nav-link text-gray-300 hover:text-white transition-colors duration-200 relative"
                >
                  {item.name}
                </Link>
              ))}
            </div>
            <p>&copy; {new Date().getFullYear()} Bhabatosh Senapati. All rights reserved.</p>
          </div>
        </footer>
      </div>
    </Router>
  );
}

export default App;
