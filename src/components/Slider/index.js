import React, {useState} from 'react';
import './Slider.scss'

function Slider(props){
    const [sliderValue, setSliderValue] = useState(props.min || 0); 

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