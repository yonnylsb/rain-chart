import React from 'react';
import chanceOfRain from '../../common/constants/helpers';
import './ChanceOfRain.scss';

function ChanceOfRain(props){
    let svgWidth = 800;
    let svgHeight = 460;
    let yAxisX = 0;
    let xAxisY = 460;
    let renderYaxis = [];
    let renderXaxis = [];

    let daysValues = props.daysValues;
    let pressureGraph = props.pressureGraph;
    let temperatureGraph= props.temperatureGraph;

    let minX = props.minX;
    let maxX = props.maxX;
    let stepX = props.stepX;
    let textX = props.textX;

    let minY = props.minY;
    let maxY = props.maxY;
    let stepY = props.stepY;
    let textY = props.textY;

    let upper = [];
    let medMpah = [];
    let lower = [];
    
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
                let parseChanceOfRain = chanceOfRain(pressureGraph, temperatureGraph, daysValues[idx-1]);
                upper.push([xAxisX, (svgHeight - 4*parseChanceOfRain[0])]);
                medMpah.push([xAxisX, (svgHeight - 4*parseChanceOfRain[1])]);
                lower.push([xAxisX, (svgHeight - 4*parseChanceOfRain[2])]);
            }
            xAxisX = xAxisX + calculateStepX;
            idx++;
        }
    }

    function parseNodes(arr){
        return arr.map((item, index)=>{
            return index ? `L ${item[0]} ${item[1]}`: `M ${item[0]} ${item[1]}`;
        }).join(" ");
    }

    return (
        <svg 
            viewBox={`0 0 ${svgWidth} ${svgHeight}`}
        >
            <path
                className="cor__upper"
                d={parseNodes(upper)}
            />
            <path
                className="cor__med"
                d={parseNodes(medMpah)}
            />
            <path
                className="cor__lower"
                d={parseNodes(lower)}
            />
            <line 
                x1="50" y1="0" x2="50" y2="410"
                className="cor__y-axis__line"
            />
            <line 
                x1="50" y1="410" x2="780" y2="410" 
                className="cor__x-axis__line"
            />
            <text
                x={20}
                y={60}
                className="cor__y-axis__text"
            >
                {textY}
            </text>
            <text
                x={400}
                y={450}
                className="cor__x-axis__text"
            >
                {textX}
            </text>
            <g className="cor__y-axis">
                {renderYaxis}
            </g>
            <g className="cor__x-axis">
                {renderXaxis}
            </g>
        </svg>
    );
}


export default ChanceOfRain;