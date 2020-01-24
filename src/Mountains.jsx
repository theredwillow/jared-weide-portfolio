import React from 'react';

const NUM_OF_PEAKS = 2;

const getRandom = (min, max) => {
  if (min < 0) { min = 0; }
  if (max > 100) { max = 100; }
  return Math.floor(Math.random() * (max - min) ) + min;
};

// How far out the next descending points MUST be from their parent
const MIN_RUN = 5;
// DEVNOTE Should I make a MAX_RUN?

class Base {
  constructor(location) {
    this.location = location;
    this.drawn = false;
  }
}

class Mountain {
  constructor(peak) {
    this.peak = peak;
    this.bases = [];

    let left = {
      x: getRandom(0, peak.x - MIN_RUN),
      y: 100
    };
    this.bases.push(left);

    const right = {
      x: getRandom(peak.x + MIN_RUN, 100),
      y: 100
    };
    if (right.x >= 100 - MIN_RUN) { right.y = 100; }
    this.bases.push(right);
  
    const middle = {
      x: getRandom(left.x + MIN_RUN, right.x - MIN_RUN),
      y: 100
    };
    this.bases.splice(1, 0, middle);

  }
}

export default function Mountains() {
  let mountains = [];
  for (let i = 0; i < NUM_OF_PEAKS; i++) {
    const farLeft = i * (100 / NUM_OF_PEAKS) + MIN_RUN;
    const farRight = (i + 1) * (100 / NUM_OF_PEAKS) - MIN_RUN;
    const newPeak = { x: getRandom(farLeft, farRight), y: 0 };
    mountains = [...mountains, new Mountain(newPeak)];
  }

  mountains = mountains.map(({peak, bases}, i) =>
    bases.map((base, j) =>
      <line
        key={`peak${i}-base${j}`}
        id={`peak${i}-base${j}`}
        x1={`${peak.x}%`}
        y1={`${peak.y}%`}
        x2={`${base.x}%`}
        y2={`${base.y}%`}
      />
  ));
  return (
    <svg className="mountains">
      
      <rect width="100%" height="100%" style={{
        fill: 'rgb(0,0,255)',
        strokeWidth: 3,
        stroke: 'rgb(0,0,0)'
       }} />
       { mountains }
    </svg>
  );
}
