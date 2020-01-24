import React from 'react';

const numOfPeaks = 1;

const getRandom = (min, max) => Math.floor(Math.random() * (max - min) ) + min;

const descendMountain = (points) => {
  let newPoints = []
  for (let i = 0; i < points.length; i++) {
    const top = points[i];
    console.log(top, "is creating two new points now.");

    const left = { x: getRandom(0, top.x), y: getRandom(top.y, 100) };
    console.log("One to the left and down at:", left);

    const right = { x: getRandom(top.x, 100), y: getRandom(top.y, 100) };
    console.log("And another to the right and down at:", right);

    newPoints = [ ...newPoints, top, left, right ];
  }
  return newPoints;
};

export default function Mountains() {
  let points = [];
  for (let i = 0; i < numOfPeaks; i++) {
    const newPeak = { x: Math.floor(Math.random() * 100), y: 0 };
    points = [...points, ...descendMountain([newPeak])];
  }
  const dots = points.map(({x,y}) => <circle key={`x${x}y${y}`} r="2" cx={x + '%'} cy={y + '%'} fill="white" />);
  return (
    <svg className="mountains">
      
      <rect width="100%" height="100%" style={{
        fill: 'rgb(0,0,255)',
        strokeWidth: 3,
        stroke: 'rgb(0,0,0)'
       }} />
       { dots }
    </svg>
  );
}
