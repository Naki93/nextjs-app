import React from 'react';
import Link from 'next/link';

//Navbar
const Header = () => {
  return (
    <header>
      <div className="nav-container">
        <nav>
          <ul>
          <li>
  <Link className="link" href="/">Home</Link>
</li>
            <li>
              <Link className="link" href="/about">About</Link>
            </li>
            <li>
              <Link className="link" href="/projects">Projects</Link>
            </li>
            <li>
              <Link className="link" href="/contact">Contact</Link>
            </li>
          </ul>
        </nav>
      </div>

      <style jsx>{`
        header {
            background-color: #fff;
          color: #fff;
          padding: 10px 0;
          text-align: center;
        }

        .nav-container {
          display: flex;
          justify-content: center;
        }

        nav ul {
          list-style: none;
          padding: 0;
          display: flex;
        }

        nav li {
          margin: 0 10px;
        }

        /* Add space between links */
        nav li:not(:last-child) {
          margin-right: 200px;
        }

        .link {
            color: black; /* Change link color to black */
            text-decoration: none;
            font-weight: bold;
          }

        /* Rest of the styles */
      `}</style>
    </header>
  );
};

export default Header;

