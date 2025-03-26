import React, { useState } from 'react';
import { ExternalLinkIcon, GithubIcon, LinkedinIcon, MailIcon, DownloadIcon, ChevronRightIcon } from 'lucide-react';
import profilePic from './pictures/ProfilePic.jpeg';
import umdLogo from './pictures/University_of_Maryland_seal.svg.png';
import nasaLogo from './pictures/NasaLogo.png';
import greatWallLogo from './pictures/GreatWallLogo.png';

function App() {
  const [activeSection, setActiveSection] = useState('home');

  const scrollToSection = (sectionId) => {
    setActiveSection(sectionId);
    document.getElementById(sectionId).scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-gray-900 text-gray-100">
      {/* Navigation */}
      <nav className="bg-gray-800 shadow-lg sticky top-0 z-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-16">
            <div className="flex items-center">
              <span className="text-3xl font-black text-orange-400 hover:text-orange-300 transition-all duration-300 tracking-wider uppercase drop-shadow-2xl hover:drop-shadow-orange-500/50">
                Andy Jiang
              </span>
            </div>
            <div className="hidden md:flex items-center space-x-8">
              <button 
                onClick={() => scrollToSection('home')}
                className={`${activeSection === 'home' ? 'text-orange-400' : 'text-gray-300'} hover:text-orange-400`}
              >
                Home
              </button>
              <button 
                onClick={() => scrollToSection('about')}
                className={`${activeSection === 'about' ? 'text-orange-400' : 'text-gray-300'} hover:text-orange-400`}
              >
                About
              </button>
              <button 
                onClick={() => scrollToSection('experience')}
                className={`${activeSection === 'experience' ? 'text-orange-400' : 'text-gray-300'} hover:text-orange-400`}
              >
                Experience
              </button>
              <button 
                onClick={() => scrollToSection('projects')}
                className={`${activeSection === 'projects' ? 'text-orange-400' : 'text-gray-300'} hover:text-orange-400`}
              >
                Projects
              </button>
              <button 
                onClick={() => scrollToSection('contact')}
                className={`${activeSection === 'contact' ? 'text-orange-400' : 'text-gray-300'} hover:text-orange-400`}
              >
                Contact
              </button>
            </div>
            <div className="flex items-center md:hidden">
              <button className="text-gray-300">
                <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section id="home" className="bg-gray-800 text-white py-20">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="md:flex md:items-center md:justify-between">
            <div className="md:w-2/3">
              <h1 className="text-4xl md:text-5xl font-bold mb-4">
                Hello, I'm Andy Jiang
              </h1>
              <h2 className="text-2xl md:text-3xl font-semibold mb-6">
                Software Engineer & AI Researcher
              </h2>
              <p className="text-lg mb-8">
                Specializing in AI/ML technologies, full-stack development, and data science
              </p>
              <div className="flex space-x-4">
                <a href="#contact" className="bg-orange-500 text-white py-2 px-6 rounded-lg font-medium hover:bg-orange-600 transition duration-300">
                  Contact Me
                </a>
                <a href="#about" className="bg-transparent border border-orange-400 text-orange-400 py-2 px-6 rounded-lg font-medium hover:bg-orange-900 transition duration-300">
                  Learn More
                </a>
              </div>
            </div>
            <div className="hidden md:block md:w-1/3">
              <div className="bg-gray-700 h-64 w-64 rounded-full mx-auto mt-8 md:mt-0 overflow-hidden">
                <img 
                  src={profilePic} 
                  alt="Andy Jiang" 
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-16 bg-gray-800">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="relative mb-12">
            <h2 className="text-4xl font-bold text-center relative inline-block">
              <span className="text-orange-400 relative z-10">
                About Me
              </span>
            </h2>
            <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-32 h-1 bg-gradient-to-r from-orange-500 via-orange-400 to-orange-500 rounded-full"></div>
          </div>
          <div className="md:flex md:items-start md:space-x-8">
            <div className="md:w-1/2 mb-8 md:mb-0">
              <h3 className="text-xl font-semibold mb-4 flex items-center text-orange-400">
                <svg className="w-6 h-6 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 14l9-5-9-5-9 5 9 5z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 14l9-5-9-5-9 5 9 5zm0 0l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14zm-4 6v-7.5l4-2.222" />
                </svg>
                Education
              </h3>
              <div className="bg-gray-700 p-6 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-600 hover:border-orange-500/50">
                <h4 className="font-bold text-xl">University of Maryland</h4>
                <p className="text-lg text-orange-400 mt-2">Bachelor of Science in Computer Science</p>
              </div>
              
              <h3 className="text-xl font-semibold mt-8 mb-4 flex items-center text-orange-400">
                <svg className="w-6 h-6 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
                </svg>
                Technical Expertise
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="bg-gray-700 p-4 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-600 hover:border-orange-500/50">
                  <h4 className="font-bold text-orange-400 mb-2 flex items-center">
                    <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
                    </svg>
                    Languages
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    <span className="px-2 py-1 bg-orange-500/10 text-orange-400 rounded-full text-sm">Python</span>
                    <span className="px-2 py-1 bg-orange-500/10 text-orange-400 rounded-full text-sm">JavaScript</span>
                    <span className="px-2 py-1 bg-orange-500/10 text-orange-400 rounded-full text-sm">TypeScript</span>
                    <span className="px-2 py-1 bg-orange-500/10 text-orange-400 rounded-full text-sm">C</span>
                    <span className="px-2 py-1 bg-orange-500/10 text-orange-400 rounded-full text-sm">Java</span>
                    <span className="px-2 py-1 bg-orange-500/10 text-orange-400 rounded-full text-sm">SQL</span>
                    <span className="px-2 py-1 bg-orange-500/10 text-orange-400 rounded-full text-sm">HTML/CSS</span>
                    <span className="px-2 py-1 bg-orange-500/10 text-orange-400 rounded-full text-sm">Rust</span>
                    <span className="px-2 py-1 bg-orange-500/10 text-orange-400 rounded-full text-sm">Ruby</span>
                    <span className="px-2 py-1 bg-orange-500/10 text-orange-400 rounded-full text-sm">OCaml</span>
                    <span className="px-2 py-1 bg-orange-500/10 text-orange-400 rounded-full text-sm">MATLAB</span>
                    <span className="px-2 py-1 bg-orange-500/10 text-orange-400 rounded-full text-sm">Kotlin</span>
                  </div>
                </div>

                <div className="bg-gray-700 p-4 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-600 hover:border-orange-500/50">
                  <h4 className="font-bold text-orange-400 mb-2 flex items-center">
                    <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                    </svg>
                    Data & AI/ML
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    <span className="px-2 py-1 bg-orange-500/10 text-orange-400 rounded-full text-sm">Scipy</span>
                    <span className="px-2 py-1 bg-orange-500/10 text-orange-400 rounded-full text-sm">Pandas</span>
                    <span className="px-2 py-1 bg-orange-500/10 text-orange-400 rounded-full text-sm">NumPy</span>
                    <span className="px-2 py-1 bg-orange-500/10 text-orange-400 rounded-full text-sm">PyTorch</span>
                    <span className="px-2 py-1 bg-orange-500/10 text-orange-400 rounded-full text-sm">Scikit-learn</span>
                    <span className="px-2 py-1 bg-orange-500/10 text-orange-400 rounded-full text-sm">LangChain</span>
                    <span className="px-2 py-1 bg-orange-500/10 text-orange-400 rounded-full text-sm">RAG Pipelines</span>
                    <span className="px-2 py-1 bg-orange-500/10 text-orange-400 rounded-full text-sm">Seaborn</span>
                  </div>
                </div>

                <div className="bg-gray-700 p-4 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-600 hover:border-orange-500/50">
                  <h4 className="font-bold text-orange-400 mb-2 flex items-center">
                    <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 12h14M5 12a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v4a2 2 0 01-2 2M5 12a2 2 0 00-2 2v4a2 2 0 002 2h14a2 2 0 002-2v-4a2 2 0 00-2-2m-2-4h.01M17 16h.01" />
                    </svg>
                    Cloud & DevOps
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    <span className="px-2 py-1 bg-orange-500/10 text-orange-400 rounded-full text-sm">GCP</span>
                    <span className="px-2 py-1 bg-orange-500/10 text-orange-400 rounded-full text-sm">AWS</span>
                    <span className="px-2 py-1 bg-orange-500/10 text-orange-400 rounded-full text-sm">Azure</span>
                    <span className="px-2 py-1 bg-orange-500/10 text-orange-400 rounded-full text-sm">Docker</span>
                    <span className="px-2 py-1 bg-orange-500/10 text-orange-400 rounded-full text-sm">Unix/Linux</span>
                    <span className="px-2 py-1 bg-orange-500/10 text-orange-400 rounded-full text-sm">GitHub</span>
                    <span className="px-2 py-1 bg-orange-500/10 text-orange-400 rounded-full text-sm">GitLab</span>
                    <span className="px-2 py-1 bg-orange-500/10 text-orange-400 rounded-full text-sm">CI/CD</span>
                    <span className="px-2 py-1 bg-orange-500/10 text-orange-400 rounded-full text-sm">Bash</span>
                  </div>
                </div>

                <div className="bg-gray-700 p-4 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-600 hover:border-orange-500/50">
                  <h4 className="font-bold text-orange-400 mb-2 flex items-center">
                    <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
                    </svg>
                    Frameworks & Technologies
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    <span className="px-2 py-1 bg-orange-500/10 text-orange-400 rounded-full text-sm">Cython</span>
                    <span className="px-2 py-1 bg-orange-500/10 text-orange-400 rounded-full text-sm">Django</span>
                    <span className="px-2 py-1 bg-orange-500/10 text-orange-400 rounded-full text-sm">Express.js</span>
                    <span className="px-2 py-1 bg-orange-500/10 text-orange-400 rounded-full text-sm">React.js</span>
                    <span className="px-2 py-1 bg-orange-500/10 text-orange-400 rounded-full text-sm">Node.js</span>
                    <span className="px-2 py-1 bg-orange-500/10 text-orange-400 rounded-full text-sm">MongoDB</span>
                    <span className="px-2 py-1 bg-orange-500/10 text-orange-400 rounded-full text-sm">ServiceNow</span>
                  </div>
                </div>
              </div>
            </div>
            <div className="md:w-1/2">
              <h3 className="text-xl font-semibold mb-4 flex items-center text-orange-400">
                <svg className="w-6 h-6 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                </svg>
                Relevant Coursework
              </h3>
              <div className="bg-gray-700 p-6 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-600 hover:border-orange-500/50">
                <div className="flex flex-wrap gap-2">
                  <span className="px-3 py-1 bg-orange-500/10 text-orange-400 rounded-full text-sm">Object-Oriented Programming</span>
                  <span className="px-3 py-1 bg-orange-500/10 text-orange-400 rounded-full text-sm">Computer Systems</span>
                  <span className="px-3 py-1 bg-orange-500/10 text-orange-400 rounded-full text-sm">Discrete Math</span>
                  <span className="px-3 py-1 bg-orange-500/10 text-orange-400 rounded-full text-sm">Algorithms</span>
                  <span className="px-3 py-1 bg-orange-500/10 text-orange-400 rounded-full text-sm">Web Development</span>
                  <span className="px-3 py-1 bg-orange-500/10 text-orange-400 rounded-full text-sm">Compilers</span>
                  <span className="px-3 py-1 bg-orange-500/10 text-orange-400 rounded-full text-sm">Programming Languages</span>
                  <span className="px-3 py-1 bg-orange-500/10 text-orange-400 rounded-full text-sm">Data Structures</span>
                  <span className="px-3 py-1 bg-orange-500/10 text-orange-400 rounded-full text-sm">Android Development</span>
                  <span className="px-3 py-1 bg-orange-500/10 text-orange-400 rounded-full text-sm">Bioinformatic Algorithms</span>
                  <span className="px-3 py-1 bg-orange-500/10 text-orange-400 rounded-full text-sm">Artificial Intelligence</span>
                  <span className="px-3 py-1 bg-orange-500/10 text-orange-400 rounded-full text-sm">Data Science</span>
                  <span className="px-3 py-1 bg-orange-500/10 text-orange-400 rounded-full text-sm">Computer & Network Security</span>
                  <span className="px-3 py-1 bg-orange-500/10 text-orange-400 rounded-full text-sm">Calculus I & II</span>
                  <span className="px-3 py-1 bg-orange-500/10 text-orange-400 rounded-full text-sm">Linear Algebra</span>
                  <span className="px-3 py-1 bg-orange-500/10 text-orange-400 rounded-full text-sm">Statistics</span>
                </div>
              </div>
              
              <div className="mt-8">
                <h3 className="text-xl font-semibold mb-4 flex items-center text-orange-400">
                  <svg className="w-6 h-6 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                  Professional Summary
                </h3>
                <div className="bg-gray-700 p-6 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-600 hover:border-orange-500/50">
                  <p className="leading-relaxed text-gray-300">
                    I am a Computer Science professional with expertise in AI research, software engineering, and full-stack development. My experience spans from developing RAG pipelines and optimizing ETL processes to creating web applications and implementing machine learning algorithms. I am passionate about leveraging technology to solve complex problems and improve efficiency.
                  </p>
                  <div className="mt-6 flex space-x-4">
                    <a href="https://github.com/ajiang0529" className="flex items-center text-orange-400 hover:text-orange-300">
                      <GithubIcon className="w-5 h-5 mr-2" />
                      GitHub
                    </a>
                    <a href="https://www.linkedin.com/in/andyjiang25/" className="flex items-center text-orange-400 hover:text-orange-300">
                      <LinkedinIcon className="w-5 h-5 mr-2" />
                      LinkedIn
                    </a>
                    <a href="/resume.pdf" className="flex items-center text-orange-400 hover:text-orange-300">
                      <DownloadIcon className="w-5 h-5 mr-2" />
                      Resume
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section id="experience" className="py-16 bg-gray-900">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="relative mb-12">
            <h2 className="text-4xl font-bold text-center relative inline-block">
              <span className="text-orange-400 relative z-10">
                Professional Experience
              </span>
            </h2>
            <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-32 h-1 bg-gradient-to-r from-orange-500 via-orange-400 to-orange-500 rounded-full"></div>
          </div>
    <div className="relative">
      {/* Timeline line */}
      <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-0.5 bg-gradient-to-b from-orange-500 via-orange-400 to-orange-500"></div>
      
      {/* Experience 1 - Left Side */}
      <div className="relative mb-16">
        <div className="absolute left-1/2 transform -translate-x-1/2 -top-1 flex items-center justify-center">
          <div className="w-6 h-6 bg-orange-500 rounded-full border-4 border-gray-900 shadow-lg transform hover:scale-110 transition-transform duration-300"></div>
        </div>
        <div className="flex flex-col md:flex-row items-center md:items-center space-y-4 md:space-y-0 md:space-x-8 pl-8 md:pl-0">
          <div className="w-24 h-24 flex-shrink-0 bg-gray-800 rounded-full p-4 shadow-lg transform hover:scale-105 transition-transform duration-300 md:ml-auto overflow-hidden">
            <img 
              src={umdLogo} 
              alt="University of Maryland Logo" 
              className="w-full h-full object-cover rounded-full"
            />
          </div>
          <div className="flex-1 bg-gray-800 p-6 rounded-lg shadow-lg transform hover:scale-[1.02] transition-transform duration-300 border border-gray-700 max-w-2xl md:mr-auto">
            <div className="flex flex-col md:flex-row md:justify-between md:items-start mb-4">
              <div>
                <h3 className="text-2xl font-bold text-orange-400">Artificial Intelligence Researcher</h3>
                <p className="text-lg text-gray-300 mt-1">University of Maryland</p>
              </div>
              <p className="text-gray-400 mt-2 md:mt-0">June 2024 – Present</p>
            </div>
            <div className="mt-4 flex flex-wrap gap-2">
              <span className="px-3 py-1 bg-orange-500/10 text-orange-400 rounded-full text-sm">Python</span>
              <span className="px-3 py-1 bg-orange-500/10 text-orange-400 rounded-full text-sm">LangChain</span>
              <span className="px-3 py-1 bg-orange-500/10 text-orange-400 rounded-full text-sm">SQL</span>
              <span className="px-3 py-1 bg-orange-500/10 text-orange-400 rounded-full text-sm">NumPy</span>
              <span className="px-3 py-1 bg-orange-500/10 text-orange-400 rounded-full text-sm">Pandas</span>
              <span className="px-3 py-1 bg-orange-500/10 text-orange-400 rounded-full text-sm">Git</span>
              <span className="px-3 py-1 bg-orange-500/10 text-orange-400 rounded-full text-sm">Hugging Face</span>
            </div>
          </div>
        </div>
      </div>

      {/* Experience 2 - Right Side */}
      <div className="relative mb-16">
        <div className="absolute left-1/2 transform -translate-x-1/2 -top-1 flex items-center justify-center">
          <div className="w-6 h-6 bg-orange-500 rounded-full border-4 border-gray-900 shadow-lg transform hover:scale-110 transition-transform duration-300"></div>
        </div>
        <div className="flex flex-col-reverse md:flex-row items-center md:items-center space-y-4 md:space-y-0 md:space-x-8 pl-8 md:pl-0">
          <div className="flex-1 bg-gray-800 p-6 rounded-lg shadow-lg transform hover:scale-[1.02] transition-transform duration-300 border border-gray-700 max-w-2xl md:ml-0">
            <div className="flex flex-col md:flex-row md:justify-between md:items-start mb-4">
              <div>
                <h3 className="text-2xl font-bold text-orange-400">Software Engineer Intern</h3>
                <p className="text-lg text-gray-300 mt-1">NASA</p>
              </div>
              <p className="text-gray-400 mt-2 md:mt-0">June 2023 – December 2023</p>
            </div>
            <div className="mt-4 flex flex-wrap gap-2">
              <span className="px-3 py-1 bg-orange-500/10 text-orange-400 rounded-full text-sm">JavaScript</span>
              <span className="px-3 py-1 bg-orange-500/10 text-orange-400 rounded-full text-sm">ServiceNow</span>
              <span className="px-3 py-1 bg-orange-500/10 text-orange-400 rounded-full text-sm">React</span>
              <span className="px-3 py-1 bg-orange-500/10 text-orange-400 rounded-full text-sm">Python</span>
              <span className="px-3 py-1 bg-orange-500/10 text-orange-400 rounded-full text-sm">Hugging Face</span>
              <span className="px-3 py-1 bg-orange-500/10 text-orange-400 rounded-full text-sm">Git</span>
            </div>
          </div>
          <div className="w-24 h-24 flex-shrink-0 bg-gray-800 rounded-full p-4 shadow-lg transform hover:scale-105 transition-transform duration-300 md:ml-8 overflow-hidden">
            <img 
              src={nasaLogo} 
              alt="NASA Logo" 
              className="w-full h-full object-cover rounded-full"
            />
          </div>
        </div>
      </div>

      {/* Experience 3 - Left Side */}
      <div className="relative">
        <div className="absolute left-1/2 transform -translate-x-1/2 -top-1 flex items-center justify-center">
          <div className="w-6 h-6 bg-orange-500 rounded-full border-4 border-gray-900 shadow-lg transform hover:scale-110 transition-transform duration-300"></div>
        </div>
        <div className="flex flex-col md:flex-row items-center md:items-center space-y-4 md:space-y-0 md:space-x-8 pl-8 md:pl-0">
          <div className="w-24 h-24 flex-shrink-0 bg-gray-800 rounded-full p-4 shadow-lg transform hover:scale-105 transition-transform duration-300 md:ml-auto overflow-hidden">
            <img 
              src={greatWallLogo} 
              alt="Great Wall Inc Logo" 
              className="w-full h-full object-cover rounded-full"
            />
          </div>
          <div className="flex-1 bg-gray-800 p-6 rounded-lg shadow-lg transform hover:scale-[1.02] transition-transform duration-300 border border-gray-700 max-w-2xl md:mr-auto">
            <div className="flex flex-col md:flex-row md:justify-between md:items-start mb-4">
              <div>
                <h3 className="text-2xl font-bold text-orange-400">Full-Stack Web Developer</h3>
                <p className="text-lg text-gray-300 mt-1">Great Wall Inc.</p>
              </div>
              <p className="text-gray-400 mt-2 md:mt-0">September 2019 – August 2021</p>
            </div>
            <div className="mt-4 flex flex-wrap gap-2">
              <span className="px-3 py-1 bg-orange-500/10 text-orange-400 rounded-full text-sm">MongoDB</span>
              <span className="px-3 py-1 bg-orange-500/10 text-orange-400 rounded-full text-sm">Express</span>
              <span className="px-3 py-1 bg-orange-500/10 text-orange-400 rounded-full text-sm">React</span>
              <span className="px-3 py-1 bg-orange-500/10 text-orange-400 rounded-full text-sm">Node.js</span>
              <span className="px-3 py-1 bg-orange-500/10 text-orange-400 rounded-full text-sm">SQL</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-16 bg-gray-800">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="relative mb-12">
            <h2 className="text-4xl font-bold text-center relative inline-block">
              <span className="text-orange-400 relative z-10">
                Featured Projects
              </span>
            </h2>
            <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-32 h-1 bg-gradient-to-r from-orange-500 via-orange-400 to-orange-500 rounded-full"></div>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8">
            {/* Project Card */}
            <div className="bg-gray-700 rounded-lg overflow-hidden shadow-lg">
              <div className="p-6">
                <div className="flex items-center justify-center mb-6">
                  <span className="text-orange-500 text-2xl font-light mx-2">[</span>
                  <h3 className="text-xl font-bold text-orange-400">High-Performance ETL Pipeline</h3>
                  <span className="text-orange-500 text-2xl font-light mx-2">]</span>
                </div>
                <div className="flex flex-wrap gap-2 mb-4">
                  <span className="px-3 py-1 bg-orange-500/10 text-orange-400 rounded-full text-sm">Python</span>
                  <span className="px-3 py-1 bg-orange-500/10 text-orange-400 rounded-full text-sm">Pandas</span>
                  <span className="px-3 py-1 bg-orange-500/10 text-orange-400 rounded-full text-sm">NumPy</span>
                  <span className="px-3 py-1 bg-orange-500/10 text-orange-400 rounded-full text-sm">Dask</span>
                  <span className="px-3 py-1 bg-orange-500/10 text-orange-400 rounded-full text-sm">SQLAlchemy</span>
                </div>
                <p className="text-sm text-gray-500 mb-4">March 2024</p>
                <ul className="list-disc pl-5 space-y-2 mb-6 text-gray-300">
                  <li>Engineered a high-performance ETL pipeline framework optimized for processing large-scale datasets with 50% faster processing time</li>
                  <li>Implemented parallel processing capabilities utilizing multi-core architectures for distributed workloads</li>
                  <li>Developed intelligent memory management with batch processing and streaming techniques for optimal resource utilization</li>
                  <li>Built support for multiple data sources including CSV, databases, APIs, and Parquet files with flexible schema mapping</li>
                </ul>
                <div className="flex space-x-4">
                  <a href="https://github.com/ajiang0529/etlPipeline" className="flex items-center text-orange-400 hover:text-orange-300">
                    <GithubIcon className="w-5 h-5 mr-2" />
                    View Code
                  </a>
                </div>
              </div>
            </div>

            {/* Project Card */}
            <div className="bg-gray-700 rounded-lg overflow-hidden shadow-lg">
              <div className="p-6">
                <div className="flex items-center justify-center mb-6">
                  <span className="text-orange-500 text-2xl font-light mx-2">[</span>
                  <h3 className="text-xl font-bold text-orange-400">RAG Pipeline with FAISS and BM25</h3>
                  <span className="text-orange-500 text-2xl font-light mx-2">]</span>
                </div>
                <div className="flex flex-wrap gap-2 mb-4">
                  <span className="px-3 py-1 bg-orange-500/10 text-orange-400 rounded-full text-sm">Python</span>
                  <span className="px-3 py-1 bg-orange-500/10 text-orange-400 rounded-full text-sm">FAISS</span>
                  <span className="px-3 py-1 bg-orange-500/10 text-orange-400 rounded-full text-sm">BM25</span>
                  <span className="px-3 py-1 bg-orange-500/10 text-orange-400 rounded-full text-sm">LangChain</span>
                  <span className="px-3 py-1 bg-orange-500/10 text-orange-400 rounded-full text-sm">OpenAI GPT-4</span>
                </div>
                <p className="text-sm text-gray-500 mb-4">February 2024</p>
                <ul className="list-disc pl-5 space-y-2 mb-6 text-gray-300">
                  <li>Engineered a hybrid document retrieval system integrating BM25 for term-based ranking and FAISS for semantic search, enhancing retrieval accuracy by 35%</li>
                  <li>Developed a context-aware question-answering pipeline using LangChain and OpenAI's GPT-4, improving response relevance by 40%</li>
                  <li>Optimized ETL pipelines for document processing, reducing query latency by 50% through efficient FAISS vectorization and BM25 ranking</li>
                </ul>
                <div className="flex space-x-4">
                  <a href="https://github.com/ajiang0529/ragABT" className="flex items-center text-orange-400 hover:text-orange-300">
                    <GithubIcon className="w-5 h-5 mr-2" />
                    View Code
                  </a>
                </div>
              </div>
            </div>

            {/* Project Card */}
            <div className="bg-gray-700 rounded-lg overflow-hidden shadow-lg">
              <div className="p-6">
                <div className="flex items-center justify-center mb-6">
                  <span className="text-orange-500 text-2xl font-light mx-2">[</span>
                  <h3 className="text-xl font-bold text-orange-400">Personal Portfolio Website</h3>
                  <span className="text-orange-500 text-2xl font-light mx-2">]</span>
                </div>
                <div className="flex flex-wrap gap-2 mb-4">
                  <span className="px-3 py-1 bg-orange-500/10 text-orange-400 rounded-full text-sm">React.js</span>
                  <span className="px-3 py-1 bg-orange-500/10 text-orange-400 rounded-full text-sm">Tailwind CSS</span>
                  <span className="px-3 py-1 bg-orange-500/10 text-orange-400 rounded-full text-sm">JavaScript</span>
                  <span className="px-3 py-1 bg-orange-500/10 text-orange-400 rounded-full text-sm">HTML5</span>
                </div>
                <p className="text-sm text-gray-500 mb-4">March 2025</p>
                <ul className="list-disc pl-5 space-y-2 mb-6 text-gray-300">
                  <li>Developed a responsive personal portfolio website using React.js and Tailwind CSS</li>
                  <li>Implemented modern UI/UX design principles for optimal user experience</li>
                  <li>Showcased projects and skills with an intuitive and professional interface</li>
                </ul>
                <div className="flex space-x-4">
                  <a href="https://github.com/ajiang0529/personalWebsite" className="flex items-center text-orange-400 hover:text-orange-300">
                    <GithubIcon className="w-5 h-5 mr-2" />
                    View Code
                  </a>
                </div>
              </div>
            </div>

            {/* Project Card */}
            <div className="bg-gray-700 rounded-lg overflow-hidden shadow-lg">
              <div className="p-6">
                <div className="flex items-center justify-center mb-6">
                  <span className="text-orange-500 text-2xl font-light mx-2">[</span>
                  <h3 className="text-xl font-bold text-orange-400">Homework Virtual Assistant</h3>
                  <span className="text-orange-500 text-2xl font-light mx-2">]</span>
                </div>
                <div className="flex flex-wrap gap-2 mb-4">
                  <span className="px-3 py-1 bg-orange-500/10 text-orange-400 rounded-full text-sm">Python</span>
                  <span className="px-3 py-1 bg-orange-500/10 text-orange-400 rounded-full text-sm">GPT-3.5 Turbo</span>
                  <span className="px-3 py-1 bg-orange-500/10 text-orange-400 rounded-full text-sm">LangChain</span>
                  <span className="px-3 py-1 bg-orange-500/10 text-orange-400 rounded-full text-sm">Gradio</span>
                  <span className="px-3 py-1 bg-orange-500/10 text-orange-400 rounded-full text-sm">Vector Index</span>
                </div>
                <p className="text-sm text-gray-500 mb-4">January 2024</p>
                <ul className="list-disc pl-5 space-y-2 mb-6 text-gray-300">
                  <li>Developed a lightweight chatbot application leveraging OpenAI's GPT-3.5 Turbo for intelligent responses based on user-provided training documents</li>
                  <li>Implemented a vector index system for efficient document search and context-aware answer generation</li>
                  <li>Created an intuitive Gradio web interface for seamless user interaction and document management</li>
                  <li>Built a flexible document loading system supporting multiple file formats and directory-based organization</li>
                </ul>
                <div className="flex space-x-4">
                  <a href="https://github.com/ajiang0529/HWVA" className="flex items-center text-orange-400 hover:text-orange-300">
                    <GithubIcon className="w-5 h-5 mr-2" />
                    View Code
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-16 bg-gray-800 text-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="relative mb-12">
            <h2 className="text-4xl font-bold text-center relative inline-block">
              <span className="text-orange-400 relative z-10">
                Get In Touch
              </span>
            </h2>
            <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-32 h-1 bg-gradient-to-r from-orange-500 via-orange-400 to-orange-500 rounded-full"></div>
          </div>
          
          <div className="md:flex md:space-x-8">
            <div className="md:w-1/2 mb-8 md:mb-0">
              <p className="mb-6 text-lg">
                I'm always open to discussing new projects, opportunities, or collaborations. Feel free to reach out through any of the following channels:
              </p>
              
              <div className="space-y-4">
                <a href="mailto:andy123jiang@gmail.com" className="flex items-center text-gray-300 hover:text-orange-400 transition">
                  <MailIcon className="w-6 h-6 mr-3" />
                  andy123jiang@gmail.com
                </a>
                <a href="https://github.com/ajiang0529" className="flex items-center text-gray-300 hover:text-orange-400 transition">
                  <GithubIcon className="w-6 h-6 mr-3" />
                  github.com/ajiang0529
                </a>
                <a href="https://www.linkedin.com/in/andyjiang25/" className="flex items-center text-gray-300 hover:text-orange-400 transition">
                  <LinkedinIcon className="w-6 h-6 mr-3" />
                  linkedin.com/in/andyjiang25
                </a>
              </div>
            </div>
            
            <div className="md:w-1/2">
              <form className="bg-gray-700 rounded-lg p-6 text-gray-100">
                <div className="mb-4">
                  <label className="block text-gray-300 font-medium mb-2" htmlFor="name">
                    Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    className="w-full px-3 py-2 bg-gray-600 border border-gray-500 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-500 text-gray-100"
                    required
                  />
                </div>
                
                <div className="mb-4">
                  <label className="block text-gray-300 font-medium mb-2" htmlFor="email">
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    className="w-full px-3 py-2 bg-gray-600 border border-gray-500 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-500 text-gray-100"
                    required
                  />
                </div>
                
                <div className="mb-4">
                  <label className="block text-gray-300 font-medium mb-2" htmlFor="message">
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows="4"
                    className="w-full px-3 py-2 bg-gray-600 border border-gray-500 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-500 text-gray-100"
                    required
                  ></textarea>
                </div>
                
                <button
                  type="submit"
                  className="w-full bg-orange-500 text-white py-2 px-4 rounded-md hover:bg-orange-600 transition duration-300"
                >
                  Send Message
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-gray-300 py-8">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="mb-4 md:mb-0">
              <p className="text-lg font-semibold text-white">Andy Jiang</p>
              <p className="text-gray-400">Software Engineer & AI Researcher</p>
            </div>
            
            <div className="flex space-x-6">
              <a href="https://github.com/ajiang0529" className="text-gray-400 hover:text-orange-400">
                <GithubIcon className="w-6 h-6" />
              </a>
              <a href="https://www.linkedin.com/in/andyjiang25/" className="text-gray-400 hover:text-orange-400">
                <LinkedinIcon className="w-6 h-6" />
              </a>
              <a href="mailto:andy123jiang@gmail.com" className="text-gray-400 hover:text-orange-400">
                <MailIcon className="w-6 h-6" />
              </a>
            </div>
          </div>
          
          <div className="mt-8 text-center text-gray-500 text-sm">
            <p>&copy; {new Date().getFullYear()} Andy Jiang. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;
