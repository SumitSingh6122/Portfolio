import React from 'react';

const Projects = () => {
  const projects = [
    {
      id: 1,
      title: 'Text to Image',
      description: 'A smart AI chatbot developed using Python, Django, MongoDB, HTML, CSS, and Bootstrap.',
      techStack: ['Python', 'Django', 'MongoDB', 'HTML', 'CSS', 'Bootstrap'],
      image: '/project1.png',
      codeLink: 'https://github.com/yourusername/ai-chatbot',
      liveLink: 'https://yourusername.github.io/ai-chatbot',
      category: 'AI/ML'
    },
    {
      id: 2,
      title: 'Netflix Clone',
      description: 'A fully functional e-commerce website built with React, Node.js, Express, and MongoDB.',
      techStack: ['React', 'Node.js', 'Express', 'MongoDB'],
      image: '/project2.png',
      codeLink: 'https://github.com/yourusername/e-commerce-website',
      liveLink: 'https://yourusername.github.io/e-commerce-website',
      category: 'Web Development'
    },
    {
      id: 3,
      title: 'Real Time Chat App',
      description: 'A personal blog built with Next.js and GraphQL to share articles and tutorials.',
      techStack: ['Next.js', 'GraphQL', 'CSS', 'MongoDB'],
      image: '/project3.png',
      codeLink: 'https://github.com/yourusername/personal-blog',
      liveLink: 'https://yourusername.github.io/personal-blog',
      category: 'Web Development'
    },
    {
      id: 4,
      title: 'Ai-Powered Resume Builder',
      description: 'A real estate platform allowing users to search, filter, and list properties, built using the MERN stack.',
      techStack: ['MongoDB', 'Express', 'React', 'Node.js'],
      image: '/project4.png',
      codeLink: 'https://github.com/yourusername/real-estate-platform',
      liveLink: 'https://yourusername.github.io/real-estate-platform',
      category: 'AI/ML'
    },
    {
      id: 5,
      title: 'Ai-short Video Generator & Youtube Automation',
      description: 'A real estate platform allowing users to search, filter, and list properties, built using the MERN stack.',
      techStack: ['MongoDB', 'Express', 'React', 'Node.js'],
      image: '/project5.png',
      codeLink: 'https://github.com/yourusername/real-estate-platform',
      liveLink: 'https://yourusername.github.io/real-estate-platform',
      category: 'AI/ML'
    }
  ];

  return (
    <section className="projects" id="projects">
      <div className="projects-header">
        <h2 className="heading animate-fade-in">
          Latest<span>Projects</span>
        </h2>
        <p className="projects-subtitle">Explore my recent work and contributions</p>
      </div>
      
      <div className="project-container">
        {projects.map((project, index) => (
          <div 
            key={project.id} 
            className="project-box animate-slide-up"
            style={{ animationDelay: `${index * 0.1}s` }}
          >
            <div className="project-image-container">
              <img src={project.image} alt={project.title} className="project-image" />
              <div className="project-overlay"></div>
              <div className="project-category">{project.category}</div>
            </div>
            
            <div className="project-content">
              <h4>{project.title}</h4>
              <p>{project.description}</p>
              
              <div className="tech-stack-container">
                {project.techStack.map((tech, techIndex) => (
                  <span key={techIndex} className="tech-tag">{tech}</span>
                ))}
              </div>
              
              <div className="project-links">
                <a 
                  href={project.codeLink} 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="project-link"
                >
                  <i className='bx bx-code'></i> View Code
                </a>
                <a 
                  href={project.liveLink} 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="project-link"
                >
                  <i className='bx bx-link-external'></i> View Live
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
