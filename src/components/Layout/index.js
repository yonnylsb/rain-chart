import React, { useContext } from 'react';
import Container from '../Container';
import Slider from '../Slider';
import rainchartConstants from '../../common/constants';
import ChanceOfRain from '../../components/ChanceOfRain';
import AmountOfRain from '../AmountOfRain';
import { SlidersContext } from '../../providers/slidersContext';
import './Layout.scss';

function Layout(props){
    const {
        pressureGraph,
        setPressureGraph,
        temperatureGraph,
        setTemperatureGraph,
        daysValues
    } = useContext(SlidersContext);
    return (
        <section className="layout">
            <Container>
                <Slider
                    title="Pressure [hPa]"
                    onSliderChange={setPressureGraph}
                    min={rainchartConstants.pressure.min}
                    max={rainchartConstants.pressure.max}
                />
                <ChanceOfRain
                    minX={0}
                    maxX={7}
                    stepX={1}
                    textX="DAYS"
                    minY={0}
                    maxY={100}
                    stepY={20}
                    textY="% CHANCE OF RAIN"
                    daysValues={daysValues}
                    pressureGraph={pressureGraph}
                    temperatureGraph={temperatureGraph}
                />
            </Container>
            <Container>
                <Slider
                    title="Temperature [°C]"
                    onSliderChange={setTemperatureGraph}
                    min={rainchartConstants.temperature.min}
                    max={rainchartConstants.temperature.max}
                />
                <AmountOfRain
                    minX={0}
                    maxX={7}
                    stepX={1}
                    textX="DAYS"
                    minY={0}
                    maxY={200}
                    stepY={20}
                    textY="(mm) AMOUNT OF RAIN"
                    daysValues={daysValues}
                />
            </Container>
        </section>
    );
}

export default Layout;