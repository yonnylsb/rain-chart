import React from 'react';
import chanceOfRain from '../../common/constants/helpers';
import './AmountOfRain.scss';

function AmountOfRain(props){
    let svgWidth = 800;
    let svgHeight = 460;
    let yAxisX = 0;
    let xAxisY = 460;
    let renderYaxis = [];
    let renderXaxis = [];

    let daysValues = props.daysValues;

    let minX = props.minX;
    let maxX = props.maxX;
    let stepX = props.stepX;
    let textX = props.textX;

    let minY = props.minY;
    let maxY = props.maxY;
    let stepY = props.stepY;
    let textY = props.textY;

    let amount = [];
    
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
        let idx = 0;
        for(let i = props.minX; i <= (props.maxX); i=i+props.stepX){
            renderXaxis.push(<text y={xAxisY} x={xAxisX} key={`axisX${xAxisX}`}>{i?i:""}</text>);

            if(xAxisX > 0){
                amount.push([xAxisX, (svgHeight - 2*daysValues[idx-1])]);
            }
            xAxisX = xAxisX + calculateStepX;
            idx++;
        }
    }

    let renderBars = amount.map((item, index)=>{
        return (
            <rect
                className="aor__bars"
                x={item[0]-18}
                y={item[1]}
                key={index}
                width="40px"
                height={460-item[1]}
            />
        );
    });

    return (
        <svg 
            viewBox={`0 0 ${svgWidth} ${svgHeight}`}
        >
            {renderBars}
            <line 
                x1="50" y1="0" x2="50" y2="410"
                className="aor__y-axis__line"
            />
            <line 
                x1="50" y1="410" x2="780" y2="410" 
                className="aor__x-axis__line"
            />
            <text
                x={20}
                y={60}
                className="aor__y-axis__text"
            >
                {textY}
            </text>
            <text
                x={400}
                y={450}
                className="aor__x-axis__text"
            >
                {textX}
            </text>
            <g className="aor__y-axis">
                {renderYaxis}
            </g>
            <g className="aor__x-axis">
                {renderXaxis}
            </g>
        </svg>
    );
}


export default AmountOfRain;