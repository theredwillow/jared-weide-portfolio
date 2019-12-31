import React from 'react';
import './App.css';

const App = () => (
  <div className="App">

    <div id="red" className="section">
      About Me
      <div className="median">
        <div className="red line"></div>
        <div className="green line"></div>
        <div className="blue line"></div>
      </div>
      <div>
        Front-End Developer / UX Developer / JavaScript Expert
      </div>
      <div>
        From Dallas / Fort Worth - DFW - Funky Town and Big D
      </div>
      <div>
        Son of a webmaster. Learned programming at a young age. Long-time programming hobbyist. Weekend warrior.
      </div>
    </div>

    <div id="green" className="section">
      <div className="median">
        <div className="red line"></div>
        <div className="green line"></div>
        <div className="blue line"></div>
      </div>
        <div>
          <a
            href="https://www.weidewedding2019.com/"
            target="_blank"
            rel="noopener noreferrer"
          >
            Wedding Website
          </a>
        </div>
        <div>
          <a
            href="https://emperors-palace-jw.web.app/"
            target="_blank"
            rel="noopener noreferrer"
          >
            Emperor's Palace
          </a>
        </div>
        <div>
          <a
            href="https://www.example.com/"
            target="_blank"
            rel="noopener noreferrer"
          >
            Yet Another Project
          </a>
        </div>
    </div>

    <div id="blue" className="section">
      <div className="median">
        <div className="red line"></div>
        <div className="green line"></div>
        <div className="blue line"></div>
      </div>
      <div className="neon">
        August 2019 - December 2019
        Cottonwood Financial
      </div>

      <div>
        September 2017 - August 2019
        Rental Beast
      </div>
    </div>

  </div>
);

export default App;
