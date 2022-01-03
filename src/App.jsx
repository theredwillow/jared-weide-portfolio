import React from 'react';
import './App.scss';

import Mountains from './Mountains';

const App = () => (
  <div className="App">

    {/* <img id="scroll" className="info" src="/images/scroll.svg" alt="Scroll to see more" /> */}

    <img id="name" src="/images/name.svg" alt="Jared Weide" />

    <img id="sun" src="/images/sun.svg" alt="Rising Sun" />

    {/* <img id="click-cars" className="info" src="/images/click.svg" alt="Click a car to quickly jump to a section" /> */}

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
        <div id="social-media">
          <a
            href="https://www.linkedin.com/in/jared-weide-3670164b"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src="/images/social-media/linkedin.png" alt="LinkedIn" />
          </a>
          <a
            href="https://medium.com/@theredwillows"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src="/images/social-media/medium.png" alt="Medium" />
          </a>
          <a
            href="https://github.com/theredwillow"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src="/images/social-media/github.png" alt="GitHub" />
          </a>
        </div>
      </div>
      <div className="card">
        <div className="title">From</div>
        Dallas / Fort Worth
      </div>
      <div className="card">
        <div className="title">Skills</div>
        JavaScript (including ES6/TypeScript), React, HTML, CSS, or any programming language, given the time to practice
      </div>
    </div>

    <div id="projects" className="section">
      <div className="title">Projects</div>
      <div className="median">
        <div className="line"></div>
        <div className="selected line"></div>
        <div className="line"></div>
      </div>
        <div className="project card">
          <div className="title">Wedding Website</div>
          <div className="description">
            Planning a wedding can be stressful. You have to hire a caterer, pick out a cake, and develop an RSVP system in React / Node to track who will be on venue during the three-day retreat.
          </div>
          <div className="buttons">
            {/* <button>Learn More</button> */}
            <a
              href="https://weidewedding2019-9bbd1.firebaseapp.com/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <button>Visit Site</button>
            </a>
          </div>
        </div>
        <div className="project card">
          <div className="title">Emperor's Palace</div>
          <div className="description">
            Not everyone can afford a multi-million dollar mansion, but anyone with the determination and ThreeJS know-how can design one with 3D rendering!
          </div>
          <div className="buttons">
            <a
              href="https://medium.com/@theredwillows/3d-rendering-my-perfect-venue-til-6178a76e325f"
              target="_blank"
              rel="noopener noreferrer"
            >
              <button>Learn More</button>
            </a>
            <a
              href="https://emperors-palace-jw.web.app/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <button>Visit Site</button>
            </a>
          </div>
        </div>
        <div className="project card">
          <div className="title">This Portfolio</div>
          <div className="description">
            Creating a website is not just about what code you know, you need artistic direction too. I hope you're enjoying the retrofuturistic vibes!
          </div>
          {/* <div className="buttons">
            <button>Learn More</button>
          </div> */}
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
        <div className="company">Hobby Work</div>
        <div className="description">
          My father was a webmaster so I learned HTML/CSS at a very young age. I maintained a personal website throughout high school, learning skills like JavaScript, PHP, and MySQL. I got my bachelor's degree in linguistics, but never lost interest in programming. I used my Python skills to explore the <a href="https://www.nltk.org/" target="_blank" rel="noopener noreferrer">Natural Language Toolkit</a>. While I was still struggling to figure out what to make of my career, I wrote <a href="https://github.com/theredwillow/SLP_Assessment" target="_blank" rel="noopener noreferrer">an assessment tool for my Speech Language Pathology courses</a>. My hobby work continues to be a source of inspiration and learning for me.
        </div>
        {/* <button>Learn More</button> */}
      </div>
      <div className="card">
        <div className="company">Rental Beast</div>
        <div className="time">September 2017 - August 2019</div>
        <div className="description">
          Having started as a data-entry specialist, I automated my work and got the attention of our VP of Technology. I began with a project of writing DOM manipulating scripts, but quickly moved into the tech team. I did important maintenance work on the employees' JavaScript system and the customers' Ruby on Rails system.
        </div>
      </div>
      <div className="card">
        <div className="company">Cottonwood Financial</div>
        <div className="time">August 2019 - December 2019</div>
        <div className="description">
          Our team built React components that query the Kentico CMS through GraphQL. We assembled them together, making important architectural and dependency decisions along the way. Finally, we created Jest tests and a Storybook, bug squashed, and finished building the new Cash Store website from scratch!
        </div>
      </div>
      <div className="card">
        <div className="company">Verizon</div>
        <div className="time">February 2020 - March 2021</div>
        <div className="description">
          Our technicians needed to fix inevitable network outages. I was brought in as a contractor tasked with creating a meaningful user experience for exploring what our artificial intelligence thought the problems could have been. Our unified display helped the support center triage and create tickets more effectively, with an intricate React component system that relied on Redux-managed state.
        </div>
      </div>
      <div className="card">
        <div className="company">De Lage Landen (DLL)</div>
        <div className="time">March 2021 - Present</div>
        <div className="description">
          Our team develops an easy-to-use UX/UI for our clients to submit leasing applications. By maintaining our TypeScript, Storybook, and Jest testing, we ensure that all calculations are perfect on the frontend.
        </div>
      </div>
    </div>

    <Mountains />
    <Mountains />
    <div id="ground" alt="Freeway on the Ground" />

    {/* <img className="other lambo" src="/images/lambo.png" alt="Other Lambo" /> */}

    <div id="cars">
      <a href="#about-me">
        <img src="/images/lambo.png" alt="First Lambo" />
      </a>
      <a href="#projects">
        <img src="/images/lambo.png" alt="Second Lambo" />
      </a>
      <a href="#experience">
        <img src="/images/lambo.png" alt="Third Lambo" />
      </a>
    </div>

  </div>
);

export default App;
