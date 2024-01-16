// Bio.js

import React from 'react';
import './styles/bio.css';

const Bio = () => {
  return (
    <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
      <div id="bio" className="col-md-12 order-md-1 text-center">
        <h1> Deep Lekhak </h1>
        <div>
          <a href="https://www.linkedin.com/in/dlekhak/">
            <img src="https://img.icons8.com/color/48/000000/linkedin.png" alt="LinkedIn" />
          </a>
          <a href="https://github.com/Deep03">
            <img src="https://img.icons8.com/fluent/48/000000/github.png" alt="GitHub" />
          </a>
          <a href="Deep_Resume.pdf">
            <img width="50" height="50" src="https://img.icons8.com/ios/50/FFFFFF/resume.png" alt="resume" />
          </a>
        </div>
        <div className="circle">
          <img className ="pfp" src="pfp/IMG_0453.jpeg" alt="Profile" />
        </div>
      </div>
    </div>
  );
};

export default Bio;
