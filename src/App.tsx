import React from 'react';
import './App.css';

const App: React.FC = () => {
  return (
    <div className="App">

      <header className="header">
        <div id="bold-title">Jared Weide</div>
        <a href="#who"><button>Who?</button></a>
        <a href="#what"><button>What?</button></a>
        <a href="#when"><button>When?</button></a>
      </header>

      
      <div className="main-section">
        <a id="who">Who?</a>
        <div>
          I am a front-end developer from the Dallas / Fort Worth metroplex. I was the son of a freelance webmaster, so I learned programming at a very young age. I have written websites on the weekends.
        </div>
      </div>

      <div className="what main-section">
        <a id="what">What?</a>
        <div>

          <div className="project">
            <span className="name">
              <a
                href="https://www.weidewedding2019.com/"
                target="_blank"
                rel="noopener noreferrer"
              >
                Wedding Website
              </a>
            </span>
            <div className="slideshow">
              <img src="thumbnails/wedding-main.png" />
              <img src="thumbnails/wedding-songs.png" />
              <img src="thumbnails/wedding-meals.png" />
            </div>
            <div className="description">On May 18th, 2019, I married the love of my life. However, the months leading up to it were filled with stressful tasks, like picking a caterer and building a Firebase app from scratch to handle the particularities of a retreat-style wedding weekend.</div>
          </div>

          <div className="project">
            <span className="name">
              <a
                href="https://emperors-palace-jw.web.app/"
                target="_blank"
                rel="noopener noreferrer"
              >
                Emperor's Palace
              </a>
            </span>
            <div className="slideshow">Picture here</div>
            <div className="description">Take a virtual reality tour through a wedding venue with the threeJS library and imported obj files.</div>
          </div>

          <div className="project">
            <span className="name">
              <a
                href="https://www.example.com/"
                target="_blank"
                rel="noopener noreferrer"
              >
                Yet Another Project
              </a>
            </span>
            <div className="slideshow">Picture here</div>
            <div className="description">One more project will go here.</div>
          </div>

        </div>
      </div>

      <div className="main-section">
        <a id="when">When?</a>
        <div>
          August 2019 - December 2019
          Cottonwood Financial

          September 2017 - August 2019
          Rental Beast
        </div>
      </div>

    </div>
  );
}

export default App;
