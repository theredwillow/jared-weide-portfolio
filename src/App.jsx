import React from 'react';
import './App.scss';

const App = () => (
  <div className="App">

    <div id="red-title" className="title">About Me</div>
    <div id="red" className="section">
      <div className="median">
        <div className="red line"></div>
        <div className="green line"></div>
        <div className="blue line"></div>
      </div>
      <div>
        Front-End Developer / UX Developer / JavaScript Expert
      </div>
      <div className="bio">
        Jared Weide<br/>
        Front-End Developer
      </div>
      <div>
        From Dallas / Fort Worth - DFW - Funky Town and Big D
      </div>
      <div>
        Son of a webmaster. Learned programming at a young age. Long-time programming hobbyist. Weekend warrior.
        <br />
        <button>Learn More</button>
      </div>
    </div>

    <div id="green-title" className="title">Projects</div>
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
          <br />
          <button>Learn More</button>
          <button>Visit Site</button>
        </div>
    </div>

    <div id="blue-title" className="title">Experience</div>
    <div id="blue" className="section">
      <div className="median">
        <div className="red line"></div>
        <div className="green line"></div>
        <div className="blue line"></div>
      </div>
      <div>
        September 2017 - August 2019<br />
        Rental Beast
      </div>
      <div className="neon">
        August 2019 - December 2019<br />
        Cottonwood Financial
      </div>
    </div>

  </div>
);

export default App;
