import React from 'react';

export default function Mountains() {
  let points = [
    { x: Math.floor(Math.random() * 100), y: 0 },
    { x: Math.floor(Math.random() * 100), y: 0 },
    { x: Math.floor(Math.random() * 100), y: 0 },
    { x: Math.floor(Math.random() * 100), y: 0 },
    { x: Math.floor(Math.random() * 100), y: 0 }
  ];
  const dots = points.map(({x,y}) => <circle r="2" cx={x + '%'} cy={y + '%'} fill="white" />);
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
