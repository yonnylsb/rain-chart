import React, { useState, useEffect } from 'react';
import rainchartConstants from '../common/constants';

export const SlidersContext = React.createContext();

export default function SliderContextProvider(props) {
    let [pressureGraph, setPressureGraph] = useState(rainchartConstants.pressure.min);
    let [temperatureGraph, setTemperatureGraph] = useState(rainchartConstants.temperature.min);
    let [daysValues, setDayValues] = useState([]);
    let context = {
        pressureGraph,
        setPressureGraph,
        temperatureGraph,
        setTemperatureGraph,
        daysValues
    };

    useEffect(()=>{
        fetch("http://private-4945e-weather34.apiary-proxy.com/weather34/rain")
            .then(response => response.json())
            .then((data)=>{
                let values = data[0].days.map((item)=>item.amount);
                setDayValues(values);
            })
            .catch(()=>setDayValues(rainchartConstants.fallbackData));
    }, []);

    return (
        <SlidersContext.Provider value={context}>
            {props.children}
        </SlidersContext.Provider>
    );
}
