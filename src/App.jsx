import React from 'react';
import './App.scss';

const App = () => (
  <div className="App">

    <div id="first-title" className="title">About Me</div>
    <div id="first" className="section">
      <div className="median">
        <div className="selected line"></div>
        <div className="line"></div>
        <div className="line"></div>
      </div>
      <div className="bio">
        Jared Weide<br/>
        <span className="profession"></span>
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

    <div id="second-title" className="title">Projects</div>
    <div id="second" className="section">
      <div className="median">
        <div className="line"></div>
        <div className="selected line"></div>
        <div className="line"></div>
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

    <div id="third-title" className="title">Experience</div>
    <div id="third" className="section">
      <div className="median">
        <div className="line"></div>
        <div className="line"></div>
        <div className="selected line"></div>
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
