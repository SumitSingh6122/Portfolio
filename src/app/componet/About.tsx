import React from 'react';

const About = () => {
  return (
    <section className="about" id="about">
      <div className="journey py-5 rounded">
        <h2 className="heading">
          My<span>Education</span>
        </h2>
        <div className="journey-box">
          <div className="timeline">
            <div className="text-box">
              <img src="/download (2).jpg" alt="BSc IT" />
              <h2>Bachelor of Science in Information Technology</h2>
              <p>
                Year: <span style={{ marginLeft: '8px' }}>2023-25</span>
                <br />
                Expected: <span style={{ marginLeft: '8px' }}>9.80 CGPA</span>
              </p>
              <p>
                Currently pursuing BSc IT at Saket College of Arts, Science, and Commerce,
                where I'm gaining foundational knowledge, mainly pursuing it for the degree. 
                Currently in the 4th semester.
              </p>
            </div>
            <div className="text-box">
              <img src="/download (2).jpg" alt="HSC" />
              <h2>Higher Secondary Certificate (HSC)</h2>
              <p>
                <span>Maharashtra Board</span>
              </p>
              <p>
                Year: <span style={{ marginLeft: '8px' }}>2021-22</span>
              </p>
              <p>Successfully completed my Higher Secondary Certificate (HSC) from the Maharashtra Board in 2022.</p>
            </div>
            <div className="text-box">
              <img src="/download (2).jpg" alt="SSC" />
              <h2>Secondary School Certificate (SSC)</h2>
              <p>
                <span>Maharashtra Board</span>
              </p>
              <p>
                Year: <span style={{ marginLeft: '8px' }}>2019-20</span>
              </p>
              <p>Successfully completed Secondary School Certificate (SSC) from the Maharashtra Board in 2021, achieving 82.60%.</p>
            </div>
          </div>
        </div>
      </div>
      <div className="about-content">
        <h2 className="heading">
          About<span>Me</span>
        </h2>
        <h3>Web Developer</h3>
        <p>Hello There! I am Sumit Singh From Mumbai and I am currently pursuing BSc.IT at Saket College of Arts,
        Science & Commerce, affiliated with Mumbai University. As a motivated and skilled individual, 
        I am seeking opportunities in jobs or internships to enhance my expertise. Despite being a fresher, 
        I am proficient in various programming languages and possess skills in web development, database management,
         and dynamic programming. I am eager to contribute my knowledge and dedication to a dynamic work environment.</p>
        <a href="#" className="btn">Read More</a>
      </div>
    </section>
  );
};

export default About;
