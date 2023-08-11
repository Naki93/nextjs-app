import React from 'react';

//Contact Page
const ContactPage = () => {
  return (
    <div className="contact-container">
      <h1 style={{ fontSize: '36px' }}>Contact Me</h1>
      <p style={{ fontSize: '18px' }}>If you'd like to get in touch, you can reach me through the following methods:</p>

      <ul>
        <li>Email: <a href="mailto:annamashala@gmail.com">annamashala@gmail.com</a></li>
        <li>Phone: 065 882 6764</li>
        
       
      </ul>

      <style jsx>{`
        .contact-container {
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          height: 100vh;
        }
        
        /* Add additional styles as needed */
      `}</style>
    </div>
  );
};

export default ContactPage;
