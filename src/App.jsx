import React from 'react';
import './App.css';

const App = () => (
  <div className="App">

    <div id="red" className="section">
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
      <div>
        August 2019 - December 2019
        Cottonwood Financial
      </div>

      <div>
        September 2017 - August 2019
        Rental Beast
      </div>
    </div>

    <div id="median">
      <div className="red line selected"></div>
      <div className="green line"></div>
      <div className="blue line"></div>
    </div>

    <div id="control-panel">
      <div>Jared Weide</div>

      <div className="jump">
        <div className="red button selected">About Me</div>
      </div>
      <div className="jump">
        <div className="green button">Projects</div>
      </div>
      <div className="jump">
        <div className="blue button">Experience</div>
      </div>
      
    </div>

  </div>
);

export default App;
