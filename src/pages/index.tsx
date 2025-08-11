import React, { useState, useEffect } from "react";
import Head from "next/head";

type Contact = {
  name: string;
  location: string;
  email: string;
  phone: string;
  linkedin: string;
};

type Skills = {
  frontend: string[];
  backend: string[];
  db: string[];
  tools: string[];
};

type Experience = {
  company: string;
  role: string;
  location: string;
  period: string;
  bullets: string[];
};

export default function Portfolio(): React.JSX.Element {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [navBg, setNavBg] = useState(false);

  const contact: Contact = {
    name: "Rohit Mankotia",
    location: "Chandigarh, India",
    email: "",
    phone: "",
    linkedin: "https://www.linkedin.com/in/rohit-mankotia",
  };

  const skills: Skills = {
    frontend: ["React", "Next.js", "Redux", "Chart.js"],
    backend: ["Node.js", "Express.js", "JWT", "RESTful APIs"],
    db: ["MongoDB", "MySQL", "Redis"],
    tools: ["Git/GitHub", "VS Code", "Postman", "Jira"],
  };

  const experience: Experience[] = [
    {
      company: "Universa Analytics India Pvt. Ltd.",
      role: "Full Stack Developer",
      location: "Chandigarh, India",
      period: "Sep 2023 - Present",
      bullets: [
        "Independently developed over three full-stack web applications using Next.js (frontend), Node.js (backend), and MySQL (database).",
        "Designed and implemented dynamic RESTful APIs to support data-driven features and frontend interactions based on application-specific requirements.",
        "Integrated Chart.js to visualize data using interactive line charts, bar charts, and other custom visualizations across multiple applications.",
        "Built dynamic data tables to display summaries, constraints, and computed metrics aligned with business logic.",
        "Developed a role-based Admin Dashboard for managing user credentials, access controls, and system roles.",
        "Implemented a backend email notification module to send emails (e.g., alerts, verifications) based on system triggers.",
        "Created a private NPM UI component library (e.g., Navbar, Footer) to promote design consistency and reduce redundancy across applications.",
        "Integrated Google Analytics into web applications to track user behavior, traffic patterns, and engagement metrics for data-driven decision making."
      ],
    },
    {
      company: "Harns Technologies Pvt. Ltd.",
      role: "Software Developer",
      location: "(Remote / Chandigarh)",
      period: "Mar 2023 - Aug 2023",
      bullets: [
        "Worked on a highly efficient and user-friendly Content Management System (CMS) specifically tailored for TOI (The Times of India) to streamline the maintenance and management of ePaper content.",
        "Utilized React.js on the front end to build dynamic forms for easy data input and manipulation.",
        "Successfully integrated APIs into the frontend to establish smooth data flow and ensure real-time updates.",
        "Created robust and efficient APIs on the backend using Node.js for seamless data handling and communication."
      ],
    },
    {
      company: "Byju's (Think and Learn Pvt. Ltd.)",
      role: "Software Engineer",
      location: "India",
      period: "Oct 2021 - Mar 2023",
      bullets: [
        "Successfully integrated Paytm APIs into Byju's Loan Management System, enabling seamless payment processing and transaction management.",
        "Implemented Node.js RESTful APIs in Byju's Loan Management System, ensuring efficient and secure communication between the frontend and backend systems.",
        "Implemented loan-related functionalities and processes for both internal and external loan partners, enhancing collaboration and streamlining loan management operations.",
        "Developed and integrated Razorpay link generation and status sync APIs, enabling seamless payment processing and transaction tracking.",
        "Integrated APIs with a third-party CRM system, facilitating the creation and updating of activities related to loan processing, customer interactions, and follow-ups.",
        "Worked on grids and dashboards, providing comprehensive data visualization and user-friendly interfaces for effective loan management.",
        "Worked on batch jobs and microservices, automating repetitive tasks and improving system performance and scalability.",
        "Implemented pie charts and graphs to calculate and visualize aggregated data, providing valuable insights for decision-making and analysis."
      ],
    },
  ];

  useEffect(() => {
    const handleScroll = () => {
      setNavBg(window.scrollY > 100);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setMobileMenuOpen(false);
    }
  };

  return (
    <>
      <Head>
        <title>Rohit Mankotia - Full Stack Developer</title>
        <meta name="description" content="Full Stack Developer with 4+ years of experience in React, Node.js, and modern web technologies." />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>

      <div className="bg-gray-50" style={{ fontFamily: 'Inter, sans-serif', scrollBehavior: 'smooth' }}>
        {/* Custom Styles */}
        <style jsx>{`
          .gradient-bg {
            background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
          }
          .card-hover {
            transition: all 0.3s ease;
          }
          .card-hover:hover {
            transform: translateY(-5px);
            box-shadow: 0 20px 40px rgba(0,0,0,0.1);
          }
          .skill-tag {
            transition: all 0.3s ease;
          }
          .skill-tag:hover {
            transform: scale(1.05);
          }
          .timeline-item {
            position: relative;
          }
          .timeline-item::before {
            content: '';
            position: absolute;
            left: -8px;
            top: 8px;
            width: 16px;
            height: 16px;
            background: #667eea;
            border-radius: 50%;
            border: 3px solid white;
            box-shadow: 0 0 0 3px #e5e7eb;
          }
        `}</style>

        {/* Navigation */}
        <nav className={`fixed top-0 w-full backdrop-blur-sm shadow-sm z-50 transition-colors ${navBg ? 'bg-white/95' : 'bg-white/90'}`}>
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex justify-between items-center py-4">
              <div className="text-2xl font-bold text-gray-800">Rohit Mankotia</div>
              <div className="hidden md:flex space-x-8">
                <button onClick={() => scrollToSection('home')} className="text-gray-600 hover:text-blue-600 transition-colors">Home</button>
                <button onClick={() => scrollToSection('about')} className="text-gray-600 hover:text-blue-600 transition-colors">About</button>
                <button onClick={() => scrollToSection('skills')} className="text-gray-600 hover:text-blue-600 transition-colors">Skills</button>
                <button onClick={() => scrollToSection('experience')} className="text-gray-600 hover:text-blue-600 transition-colors">Experience</button>
                <button onClick={() => scrollToSection('contact')} className="text-gray-600 hover:text-blue-600 transition-colors">Contact</button>
              </div>
              <button
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="md:hidden text-gray-600"
              >
                <i className="fas fa-bars text-xl"></i>
              </button>
            </div>
          </div>
          {/* Mobile Menu */}
          {mobileMenuOpen && (
            <div className="md:hidden bg-white border-t">
              <div className="px-4 py-2 space-y-2">
                <button onClick={() => scrollToSection('home')} className="block py-2 text-gray-600 hover:text-blue-600 w-full text-left">Home</button>
                <button onClick={() => scrollToSection('about')} className="block py-2 text-gray-600 hover:text-blue-600 w-full text-left">About</button>
                <button onClick={() => scrollToSection('skills')} className="block py-2 text-gray-600 hover:text-blue-600 w-full text-left">Skills</button>
                <button onClick={() => scrollToSection('experience')} className="block py-2 text-gray-600 hover:text-blue-600 w-full text-left">Experience</button>
                <button onClick={() => scrollToSection('contact')} className="block py-2 text-gray-600 hover:text-blue-600 w-full text-left">Contact</button>
              </div>
            </div>
          )}
        </nav>

        {/* Hero Section */}
        <section id="home" className="gradient-bg min-h-screen flex items-center justify-center text-white">
          <div className="max-w-4xl mx-auto px-4 text-center">
            <div className="mb-8">
              <div className="w-32 h-32 mx-auto mb-6 bg-white/20 rounded-full flex items-center justify-center backdrop-blur-sm">
                <i className="fas fa-code text-4xl"></i>
              </div>
              <h1 className="text-5xl md:text-6xl font-bold mb-4">Rohit Mankotia</h1>
              <p className="text-xl md:text-2xl mb-6 text-white/90">Full Stack Developer</p>
              <p className="text-lg mb-8 text-white/80 max-w-2xl mx-auto">
                Passionate developer with 4+ years of experience building scalable web applications using modern technologies like React, Node.js, and cloud platforms.
              </p>
            </div>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-8">
              <a href="#contact" className="bg-white text-blue-600 px-8 py-3 rounded-full font-semibold hover:bg-gray-100 transition-colors">
                Get In Touch
              </a>
              <a href="#experience" className="border-2 border-white text-white px-8 py-3 rounded-full font-semibold hover:bg-white hover:text-blue-600 transition-colors">
                View My Work
              </a>
            </div>
            {/* <div className="flex justify-center space-x-6">
              <a href="#contact" className="text-white/80 hover:text-white text-2xl transition-colors">
                <i className="fas fa-envelope"></i>
              </a>
              <a href={contact.linkedin} target="_blank" rel="noopener noreferrer" className="text-white/80 hover:text-white text-2xl transition-colors">
                <i className="fab fa-linkedin"></i>
              </a>
              <a href="#contact" className="text-white/80 hover:text-white text-2xl transition-colors">
                <i className="fas fa-comments"></i>
              </a>
            </div> */}
          </div>
        </section>

        {/* About Section */}
        <section id="about" className="py-20 bg-white">
          <div className="max-w-6xl mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-gray-800 mb-4">About Me</h2>
              <div className="w-20 h-1 bg-blue-600 mx-auto"></div>
            </div>
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <h3 className="text-2xl font-semibold text-gray-800 mb-6">Full Stack Developer from Chandigarh</h3>
                <p className="text-gray-600 mb-6 leading-relaxed">
                  I&apos;m a passionate full-stack developer with over 4 years of experience in building robust web applications.
                  I specialize in modern JavaScript technologies and have worked with leading companies like Byju&apos;s,
                  creating scalable solutions that serve millions of users.
                </p>
                <p className="text-gray-600 mb-6 leading-relaxed">
                  My expertise spans across frontend frameworks like React and Next.js, backend technologies including
                  Node.js and Express.js, and databases like MongoDB and MySQL. I&apos;m passionate about creating
                  user-friendly interfaces and efficient backend systems.
                </p>
                <div className="grid grid-cols-2 gap-4">
                  <div className="flex items-center">
                    <i className="fas fa-map-marker-alt text-blue-600 mr-3"></i>
                    <span className="text-gray-700">Chandigarh, India</span>
                  </div>
                  <div className="flex items-center">
                    <i className="fas fa-calendar-alt text-blue-600 mr-3"></i>
                    <span className="text-gray-700">4+ Years Experience</span>
                  </div>
                  <div className="flex items-center">
                    <i className="fas fa-graduation-cap text-blue-600 mr-3"></i>
                    <span className="text-gray-700">Computer Science</span>
                  </div>
                  <div className="flex items-center">
                    <i className="fas fa-code text-blue-600 mr-3"></i>
                    <span className="text-gray-700">Full Stack</span>
                  </div>
                </div>
              </div>
              <div className="bg-gray-50 p-8 rounded-2xl">
                <h4 className="text-xl font-semibold text-gray-800 mb-6">Key Achievements</h4>
                <div className="space-y-4">
                  <div className="flex items-start">
                    <div className="w-2 h-2 bg-blue-600 rounded-full mt-2 mr-4 flex-shrink-0"></div>
                    <p className="text-gray-600">Independently developed and launched multiple full-stack web applications using Next.js, Node.js, and MySQL.</p>
                  </div>
                  <div className="flex items-start">
                    <div className="w-2 h-2 bg-blue-600 rounded-full mt-2 mr-4 flex-shrink-0"></div>
                    <p className="text-gray-600">Contributed to building a highly efficient CMS for The Times of India, streamlining ePaper content management.</p>
                  </div>
                  <div className="flex items-start">
                    <div className="w-2 h-2 bg-blue-600 rounded-full mt-2 mr-4 flex-shrink-0"></div>
                    <p className="text-gray-600">Created a private NPM UI component library to promote design consistency and reusability.</p>
                  </div>
                  <div className="flex items-start">
                    <div className="w-2 h-2 bg-blue-600 rounded-full mt-2 mr-4 flex-shrink-0"></div>
                    <p className="text-gray-600">Integrated payment systems (Paytm, Razorpay) and third-party CRM APIs for seamless business operations.</p>
                  </div>
                  <div className="flex items-start">
                    <div className="w-2 h-2 bg-blue-600 rounded-full mt-2 mr-4 flex-shrink-0"></div>
                    <p className="text-gray-600">Developed role-based admin dashboards, dynamic data tables, and advanced data visualizations for business insights.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Skills Section */}
        <section id="skills" className="py-20 bg-gray-50">
          <div className="max-w-6xl mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-gray-800 mb-4">Technical Skills</h2>
              <div className="w-20 h-1 bg-blue-600 mx-auto"></div>
            </div>
            <div className="grid md:grid-cols-4 gap-8">
              <div className="bg-white p-6 rounded-2xl card-hover">
                <div className="text-center mb-4">
                  <i className="fas fa-laptop-code text-4xl text-blue-600 mb-4"></i>
                  <h3 className="text-xl font-semibold text-gray-800">Frontend</h3>
                </div>
                <div className="space-y-2">
                  {skills.frontend.map((skill) => (
                    <span key={skill} className="inline-block bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm skill-tag mr-2 mb-2">{skill}</span>
                  ))}
                </div>
              </div>
              <div className="bg-white p-6 rounded-2xl card-hover">
                <div className="text-center mb-4">
                  <i className="fas fa-server text-4xl text-green-600 mb-4"></i>
                  <h3 className="text-xl font-semibold text-gray-800">Backend</h3>
                </div>
                <div className="space-y-2">
                  {skills.backend.map((skill) => (
                    <span key={skill} className="inline-block bg-green-100 text-green-800 px-3 py-1 rounded-full text-sm skill-tag mr-2 mb-2">{skill}</span>
                  ))}
                </div>
              </div>
              <div className="bg-white p-6 rounded-2xl card-hover">
                <div className="text-center mb-4">
                  <i className="fas fa-database text-4xl text-purple-600 mb-4"></i>
                  <h3 className="text-xl font-semibold text-gray-800">Database</h3>
                </div>
                <div className="space-y-2">
                  {skills.db.map((skill) => (
                    <span key={skill} className="inline-block bg-purple-100 text-purple-800 px-3 py-1 rounded-full text-sm skill-tag mr-2 mb-2">{skill}</span>
                  ))}
                </div>
              </div>
              <div className="bg-white p-6 rounded-2xl card-hover">
                <div className="text-center mb-4">
                  <i className="fas fa-tools text-4xl text-orange-600 mb-4"></i>
                  <h3 className="text-xl font-semibold text-gray-800">Tools</h3>
                </div>
                <div className="space-y-2">
                  {skills.tools.map((skill) => (
                    <span key={skill} className="inline-block bg-orange-100 text-orange-800 px-3 py-1 rounded-full text-sm skill-tag mr-2 mb-2">{skill}</span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Experience Section */}
        <section id="experience" className="py-20 bg-white">
          <div className="max-w-6xl mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-gray-800 mb-4">Work Experience</h2>
              <div className="w-20 h-1 bg-blue-600 mx-auto"></div>
            </div>
            <div className="space-y-12">
              {experience.map((exp, index) => (
                <div key={exp.company} className="timeline-item pl-8 border-l-2 border-gray-200">
                  <div className="bg-gray-50 p-8 rounded-2xl card-hover">
                    <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                      <div>
                        <h3 className="text-2xl font-bold text-gray-800">{exp.role}</h3>
                        <p className="text-blue-600 font-semibold">{exp.company}</p>
                        <p className="text-gray-600">{exp.location}</p>
                      </div>
                      <div className="mt-2 md:mt-0">
                        <span className={`px-4 py-2 rounded-full text-sm font-semibold ${index === 0 ? 'bg-green-100 text-green-800' :
                            index === 1 ? 'bg-blue-100 text-blue-800' :
                              'bg-purple-100 text-purple-800'
                          }`}>
                          {exp.period}
                        </span>
                      </div>
                    </div>
                    <div className={`${exp.bullets.length > 4 ? 'grid md:grid-cols-2 gap-4' : 'space-y-3'}`}>
                      {exp.bullets.map((bullet, bulletIndex) => (
                        <div key={bulletIndex} className="flex items-start">
                          <i className={`fas fa-check-circle mt-1 mr-3 ${index === 0 ? 'text-green-600' :
                              index === 1 ? 'text-blue-600' :
                                'text-purple-600'
                            }`}></i>
                          <p className="text-gray-700">{bullet}</p>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section id="contact" className="py-20 gradient-bg text-white">
          <div className="max-w-2xl mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold mb-4">Let&apos;s Work Together</h2>
              <div className="w-20 h-1 bg-white mx-auto mb-8"></div>
              <p className="text-xl text-white/90">
                Ready to bring your ideas to life? Send me a message and let&apos;s discuss your next project!
              </p>
            </div>
            <div className="flex flex-col items-center justify-center bg-white/10 backdrop-blur-sm rounded-2xl p-10 shadow-lg">
              <h3 className="text-2xl font-semibold mb-4">Get In Touch</h3>
              <p className="text-white/80 mb-8 leading-relaxed text-center max-w-lg">
                I&apos;m always interested in new opportunities and exciting projects. Whether you have a question,
                want to discuss a potential collaboration, or just want to say hello, I&apos;d love to hear from you.
              </p>
              <div className="flex flex-col items-center space-y-4">
                <div className="flex items-center bg-white/20 rounded-xl px-6 py-4">
                  <div className="w-14 h-14 bg-white/20 rounded-full flex items-center justify-center mr-5">
                    <i className="fab fa-linkedin text-2xl"></i>
                  </div>
                  <div>
                    <h4 className="font-semibold text-lg">LinkedIn</h4>
                    <a
                      href="https://www.linkedin.com/in/rohit-mankotia"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-white/80 hover:text-white hover:underline transition-colors text-base"
                    >
                      Connect with me
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Footer */}
        <footer className="bg-gray-800 text-white py-8">
          <div className="max-w-6xl mx-auto px-4 text-center">
            <p className="text-gray-400">
              {/* © 2024 Rohit Mankotia. Built with passion and modern web technologies. */}
              Built with passion and modern web technologies.
            </p>
          </div>
        </footer>
      </div>
    </>
  );
}
