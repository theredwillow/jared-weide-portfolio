import React from 'react';
import './App.scss';

const App = () => (
  <div className="App">

    <div id="scroll" className="info">
      Scroll
    </div>

    <img id="name" src="/name.svg" alt="Jared Weide" />

    <img id="sun" src="/sun.svg" alt="Rising Sun" />

    <div id="click-cars" className="info">
      Click a car to quickly jump to a section
    </div>

    <div id="about-me" className="section">
      <div className="title">About Me</div>
      <div className="median">
        <div className="selected line"></div>
        <div className="line"></div>
        <div className="line"></div>
      </div>
      <div className="bio card">
        Jared Weide<br/>
        <span className="profession"></span>
      </div>
      <div className="card">
        From Dallas / Fort Worth - DFW - Funky Town and Big D
      </div>
      <div className="card">
        Son of a webmaster. Learned programming at a young age. Long-time programming hobbyist. Weekend warrior.
      </div>
    </div>

    <div id="projects" className="section">
      <div className="title">Projects</div>
      <div className="median">
        <div className="line"></div>
        <div className="selected line"></div>
        <div className="line"></div>
      </div>
        <div className="card">
          <a
            href="https://www.weidewedding2019.com/"
            target="_blank"
            rel="noopener noreferrer"
          >
            Wedding Website
          </a>
        </div>
        <div className="card">
          <a
            href="https://emperors-palace-jw.web.app/"
            target="_blank"
            rel="noopener noreferrer"
          >
            Emperor's Palace
          </a>
        </div>
        <div className="card">
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

    <div id="experience" className="section">
      <div className="title">Experience</div>
      <div className="median">
        <div className="line"></div>
        <div className="line"></div>
        <div className="selected line"></div>
      </div>
      <div className="card">
        Childhood<br />
        A lifetime of hobby experience<br />
        <button>Learn More</button>
      </div>
      <div className="card">
        September 2017 - August 2019<br />
        Rental Beast
      </div>
      <div className="card">
        August 2019 - December 2019<br />
        Cottonwood Financial
      </div>
    </div>

    <div id="ground" alt="Freeway on the Ground">
      <div id="road">
          {/* <img className="other lambo" src="/lambo.png" alt="Other Lambo" /> */}

          <a href="#about-me">
            <img className="first lambo" src="/lambo.png" alt="First Lambo" />
          </a>
          <a href="#projects">
            <img className="second lambo" src="/lambo.png" alt="Second Lambo" />
          </a>
          <a href="#experience">
            <img className="third lambo" src="/lambo.png" alt="Third Lambo" />
          </a>
      </div>
    </div>

  </div>
);

export default App;
