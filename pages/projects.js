import React from 'react';
import Header from '../components/Header';

//Projects Page
const ProjectsPage = () => {
  return (
    <div>
      <Header />
{/* Projects content */}
      <h1 className="project">Projects</h1>

      <div className="projects-grid">
        <div className="project-card">
          <a href="https://search-app-hkc9.onrender.com/" target="_blank" rel="noopener noreferrer">
            
            iTunes App
          </a>
          <p>An iTunes Store Search App that allows users to search for different types of media,<br/> such as movies, music, podcasts, and more, using the iTunes Search API. Users can also add their favorite media items to a favorites list</p>
        </div>
        <div className="project-card">
          <a href="https://github.com/Naki93/Hangman-react" target="_blank" rel="noopener noreferrer">
            Hangman
          </a>
          <p>A simple Hangman game built with React. Guess the word by selecting letters, <br/>but you only have a limited number of incorrect guesses before the game is over</p>
        </div>
        
        <div className="project-card">
          <a href="https://cashbalanceaccount.onrender.com" target="_blank" rel="noopener noreferrer">
            Cash Balance App
          </a>
          <p>Basic Cash App which allows users to add, withdraw and add interest to their balance</p>
        </div>
        <div className="project-card">
          <a href="https://github.com/Naki93/myPassionTask" target="_blank" rel="noopener noreferrer">
            Health Wellness Website
          </a>
          <p>Simple Website that consists of healthy meal plans</p>
        </div>
        <div className="project-card">
          <a href="https://github.com/Naki93/React-Rockstar-Games" target="_blank" rel="noopener noreferrer">
            Rockstar Games
          </a>
          <p>A clone of the well known rockstar games website</p>
        </div>
      </div>

      <style jsx>{`
        .projects-grid {
          display: grid;
          grid-template-columns: repeat(2, 1fr); /* 2 cards in a row */
          gap: 20px; /* Gap between cards */
          justify-content: center; /* Center cards horizontally */
        }

        .project{
          text-align: center;
          font-style: italic;
          color: black;
        }

        .project-card {
          background-color: #FAD6A5;
          padding: 20px;
          border-radius: 10px;
          box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.1);
          text-align: center;
        }

        a {
          color: #333;
          text-decoration: none;
          font-weight: bold;
        }
      `}</style>
    </div>
  );
};

export default ProjectsPage;
