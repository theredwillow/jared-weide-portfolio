import React from 'react';

const NUM_OF_PEAKS = 4;
const LIKELIHOOD_OF_SIDE = 1/4;

const getRandom = (min, max) => {
  if (min < 0) { min = 0; }
  if (max > 100) { max = 100; }
  return Math.floor(Math.random() * (max - min) ) + min;
};

const lineStyle = {
  stroke: 'white',
  strokeWidth: 2
};

// How far down the next descending points MUST be from their parent
const MIN_RISE = 20;
// How far out the next descending points MUST be from their parent
const MIN_RUN = 5;
// DEVNOTE Should I make a MAX_RUN?

const makeMountain = (peak) => {
  let newMountain = {
    peak,
    bases: []
  };
  console.log(peak, "is creating two new points now.");

  const left = {
    x: getRandom(0, peak.x - MIN_RUN),
    y: getRandom(peak.y + MIN_RISE, 100)
  };
  console.log("One to the left and down at:", left);
  if (left.x === 0) {
    console.log("This hit the left side, cutting it off here");
    left.y = 100;
  }
  newMountain.bases.push(left);

  const right = {
    x: getRandom(peak.x + MIN_RUN, 100),
    y: getRandom(peak.y + MIN_RISE, 100)
  };
  console.log("And another to the right and down at:", right);
  if (right.x === 100) {
    console.log("This hit the right side, cutting it off here");
    right.y = 100;
  }
  newMountain.bases.push(right);

  const makeSide = Math.random() <= LIKELIHOOD_OF_SIDE;
  if (makeSide) {
    const middle = {
      x: getRandom(left.x, right.x),
      y: getRandom(peak.y + MIN_RISE, 100)
    };
    newMountain.bases.splice(1, 0, middle);
  }

  return newMountain;
};

export default function Mountains() {
  let mountains = [];
  for (let i = 0; i < NUM_OF_PEAKS; i++) {
    const farLeft = i * (100 / NUM_OF_PEAKS) + MIN_RUN;
    const farRight = (i + 1) * (100 / NUM_OF_PEAKS) - MIN_RUN;
    const newPeak = { x: getRandom(farLeft, farRight), y: 0 };
    mountains = [...mountains, makeMountain(newPeak)];
  }
  mountains = mountains
    .map(({peak, bases}, i) =>
      bases.map((base, j) =>
        <line
          key={`peak${i}-base${j}`}
          id={`peak${i}-base${j}`}
          x1={`${peak.x}%`}
          y1={`${peak.y}%`}
          x2={`${base.x}%`}
          y2={`${base.y}%`}
          style={lineStyle}
        />
      )
    );
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
