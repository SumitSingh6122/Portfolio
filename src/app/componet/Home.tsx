

import React from 'react';

const Homee = () => {
  return (
    <section className="home" id="home">
      <div className="home-content">
        <div className="home-text">
          <h3 className="greeting">Hello, I'm</h3>
          <h1 className="name">Sumit Singh</h1>
          <div className="typing-container">
            <h3 className="role">And I'm a <span className="typing-text">Full Stack Developer</span></h3>
          </div>
          <p className="description">A passionate Full Stack Developer with expertise in building modern web applications. I create efficient, scalable, and user-friendly solutions.</p>
        </div>
        
        <div className="social-media">
          <a href="#" className="social-link" title="Twitter">
            <i className='bx bxl-twitter'></i>
          </a>
          <a href="#" className="social-link" title="Instagram">
            <i className='bx bxl-instagram'></i>
          </a>
          <a href="#" className="social-link" title="LinkedIn">
            <i className='bx bxl-linkedin'></i>
          </a>
          <a href="#" className="social-link" title="GitHub">
            <i className='bx bxl-github'></i>
          </a>
        </div>

        <div className="home-buttons">
          <a href="mailto:singhsumit61220@gmail.com" className="btn hire-btn">
            <span>Hire Me</span>
            <i className='bx bx-right-arrow-alt'></i>
          </a>
          <a href="/sumit-singh-resume .pdf" download className="btn download-btn">
            <span>Download CV</span>
            <i className='bx bx-download'></i>
          </a>
        </div>
      </div>

      <div className="home-img">
        <div className="img-container">
          <img src="/profile-pic.png" alt="Sumit Singh" className="profile-img" />
          <div className="img-overlay"></div>
        </div>
        <div className="shape shape-1"></div>
        <div className="shape shape-2"></div>
      </div>
    </section>
  );
};

export default Homee;