import React from 'react';
import './Pressure.scss'

function Pressure(props){
  let svgWidth = 800;
  let svgHeight = 460;
  let yAxisX = 0;
  let xAxisY = 460;
  let renderYaxis = [];
  let renderXaxis = [];

  let minX = props.minX;
  let maxX = props.maxX;
  let stepX = props.stepX;
  let textX = props.textX;

  let minY = props.minY;
  let maxY = props.maxY;
  let stepY = props.stepY;
  let textY = props.textY;
  
  let calculateStepY = (svgHeight-60) / ((maxY-minY)/stepY);
  let calculateStepX = (svgWidth-60) / ((maxX-minX)/stepX);

  if(Number.isInteger(minY) && maxY && stepY){
    let yAxisY = svgHeight;
    for(let i = props.minY; i <= props.maxY; i=i+props.stepY){
      renderYaxis.push(<text y={yAxisY} x={yAxisX} key={`axisX${yAxisY}`}>{i}</text>);
      yAxisY = yAxisY - calculateStepY;
    }
  }

  if(Number.isInteger(minX) && maxX && stepX){
    let xAxisX = 0;
    for(let i = props.minX; i <= (props.maxX); i=i+props.stepX){
      renderXaxis.push(<text y={xAxisY} x={xAxisX} key={`axisX${xAxisX}`}>{i?i:""}</text>);
      xAxisX = xAxisX + calculateStepX;
    }
  }

    return (
        <svg 
          viewBox={`0 0 ${svgWidth} ${svgHeight}`}
        >
          <path
            className="graphLine"
            d="M 0 0 L 98.8 416.8 L 113.3 416.8 L 127.8 416.8 L 142.3 416.8 L 156.8 416.8 L 171.3 416.8 L 185.8 416.7 L 200.3 416.7 L 214.9 416.6 L 229.4 416.6 L 243.9 416.5 L 258.4 416.3 L 272.9 416 L 287.4 413.5 L 301.9 408.3 L 316.4 399.1 L 330.9 387.3 L 345.4 375.6 L 359.9 362 L 374.4 334.7 L 389 316.7 L 403.5 287.2 L 418 244.2 L 432.5 197.5 L 447 158.1 L 461.5 133.3 L 476 127.1 L 489.9 121.1 L 505.1 127 L 519.6 158.1 L 534.1 196.9 L 548.6 225.8 L 563.1 241.5 L 577.6 246.8 L 592.1 245.3 L 606.6 227.2 L 621.2 209.3 L 635.7 197.6 L 650.2 182.9 L 664.7 172.8 L 679.2 167.1 L 693.7 162.8 L 708.2 172.7 L 722.7 180.7 L 737.3 187 L 751.8 191.9 L 766.3 193 L 780.8 197.1"
          />
          <line 
            x1="50" y1="0" x2="50" y2="406"
            className="y-axis__line"
          />
          <line 
            x1="50" y1="406" x2="780" y2="406" 
            className="x-axis__line"
          />
          <text
            x={20}
            y={60}
            className="y-axis__text"
          >
            {textY}
          </text>
          <text
            x={400}
            y={450}
            className="x-axis__text"
          >
            {textX}
          </text>
          <g className="y-axis">
            {renderYaxis}
          </g>
          <g className="x-axis">
            {renderXaxis}
          </g>
        </svg>
    );
}


export default Pressure;