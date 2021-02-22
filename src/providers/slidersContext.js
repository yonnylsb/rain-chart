import React, { useState } from 'react';
import rainchartConstants from '../common/constants';

export const SlidersContext = React.createContext();

export default function SliderContextProvider(props) {
    let [pressureGraph, setPressureGraph] = useState(rainchartConstants.pressure.min);
    let [temperatureGraph, setTemperatureGraph] = useState(rainchartConstants.temperature.min);
    let context = {
        pressureGraph,
        setPressureGraph,
        temperatureGraph,
        setTemperatureGraph
    };

    return (
        <SlidersContext.Provider value={context}>
            {props.children}
        </SlidersContext.Provider>
    );
}
