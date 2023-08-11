import React from 'react';
import Link from 'next/link';

//Home page
const HomePage = () => {
    
  return (
    
    <div className="home-container">
      <div className="white-section"></div>
      <div className="red-section"></div>
      <div className="hello-link">
      <div className="hello">HELLO </div>
      <div className="button-container">
        <Link href="/about"  className="button">
          About Me
        </Link>
      </div>
      </div>
      <style jsx>{`
        .home-container {
          display: flex;
          height: 100vh;
          overflow: hidden;
        }

        .white-section,
        .red-section {
          flex: 1;
          height: 100%;
          transition: transform 1s ease-in-out;
        }

        .white-section {
          background-color: white;
          transform-origin: top;
        }

        .red-section {
          background-color: #FAD6A5;
          transform-origin: bottom;
        }

        .hello-link {
          display: flex;
          flex-direction: column;
          align-items: center;
        }

       
        .hello {
          position: absolute;
          top: 50%;
          left: 50%;
          transform: translate(-50%, -50%);
          font-size: 48px;
          font-weight: bold;
          color:black;
          
        }

        .button-container {
            position: absolute;
            bottom: 20px;
            left: 50%;
            transform: translateX(-50%);
          }

        .button {
            display: inline-block;
            padding: 10px 20px;
            background-color: #333;
            color: black;
            text-decoration: none;
            border-radius: 5px;
            font-weight: bold;
          }

          
      `}</style>
    </div>
  );
};

export default HomePage;
