import React, { useContext } from 'react';
import Container from '../Container';
import Slider from '../Slider';
import rainchartConstants from '../../common/constants';
import Pressure from '../../components/Pressure';
import { SlidersContext } from '../../providers/slidersContext';
import './Layout.scss';

function Layout(props){
    const {
        setPressureGraph,
        setTemperatureGraph
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
                <Pressure
                    minX={0}
                    maxX={7}
                    stepX={1}
                    textX="DAYS"
                    minY={0}
                    maxY={100}
                    stepY={20}
                    textY="% CHANCE OF RAIN"
                />
            </Container>
            <Container>
                <Slider
                    title="Temperature [°C]"
                    onSliderChange={setTemperatureGraph}
                    min={rainchartConstants.temperature.min}
                    max={rainchartConstants.temperature.max}
                />
                <Pressure
                    minX={0}
                    maxX={7}
                    stepX={1}
                    textX="DAYS"
                    minY={0}
                    maxY={100}
                    stepY={20}
                    textY="% AMOUNT OF RAIN"
                />
            </Container>
        </section>
    );
}

export default Layout;