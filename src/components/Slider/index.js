import React, {useState, useEffect} from 'react';
import './Slider.scss'

function Slider(props){
    const calcDefault = props.max - Math.floor((props.max - props.min)/2);
    const [sliderValue, setSliderValue] = useState(calcDefault || 0);

    useEffect(()=>{
        props.onSliderChange(calcDefault);
    }, []);

    return (
        <form className="slider">
            <label
                className="slider-label"
                htmlFor={props.identifier}
            >
                {props.title}
            </label>
            <input 
                id={props.identifier}
                className="slider-input"
                type="range"
                min={props.min}
                max={props.max}
                step="1"
                onChange={onChange}
                value={sliderValue}
            />
            <div
                className="slider-value"
            >
                {sliderValue}
            </div>
        </form>
    )

    function onChange(e){
        let value = e.target.value;

        setSliderValue(value);

        if(props.onSliderChange){
            props.onSliderChange(value);
        }
    }
}


export default Slider;