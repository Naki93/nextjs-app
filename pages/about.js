// pages/about.js
import React from 'react';
import Header from '../components/Header';

const AboutPage = () => {
  return (
    <div>
      <Header />
<div className ="background">
  {/* About content */}
      <h1 className="about">I'm Anna...</h1>

      <div className="about-content">
        

        <div className="text-content">
          <p className="bold-text">
            I am currently enrolled in a fullstack web development bootcamp, where I am honing my skills in building modern web applications.
            I have a deep passion for web design and user experience, and I find joy in creating visually appealing and user-friendly interfaces.
          </p>
          <p className="bold-text">
            With a degree in Business Administration and previous experience working as a project manager, I have a strong foundation in project
            management and communication skills. I have learned to tackle challenges head-on and find innovative solutions.
          </p>
          <p className="bold-text">
            As a developer, I am driven by my passion for problem solving. I thrive on analyzing complex issues and finding elegant, efficient,
            and effective solutions that enhance the user's experience.
          </p>
        </div>
        <img src="/static/images/astro2.jpg" alt="Profile" className="profile-image" />
      </div>
      </div>
      
      
      <style jsx>{`

      .about{
        text-align: center;
        font-style: italic;
      }
        .about-content {
          display: flex;
          background-color: white;
          align-items: center;
          
        }
.background{
    background-color: white;
          color: black;
          min-height: 90vh;

          margin: 0;
          padding: 0;
}
        

        .profile-image {
          width: 300px;
          height: auto;
          
          margin-left: 200px;
          
          
        }

        .bold-text {
            font-weight: normal;
            font-size: 22px; /* Adjust the font size as needed */
            margin-bottom: 10px;
          }

        .text-content {
          max-width: 600px;
          margin-left: 20px
          
        }
      `}</style>
    </div>
  );
};

export default AboutPage;
