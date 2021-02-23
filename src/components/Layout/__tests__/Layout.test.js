import React from 'react';
import renderer from 'react-test-renderer';
import { SlidersContext } from '../../../providers/slidersContext';
import Layout from '../index';

test('<Layout/>', () => {
    const mockContext = {
        pressureGraph: 123,
        setPressureGraph: ()=>{},
        temperatureGraph: 12,
        setTemperatureGraph: ()=>{},
        daysValues: [1,2,3,4,5]
    };
    const component = renderer.create(
        <SlidersContext.Provider value={mockContext}>
            <Layout></Layout>
        </SlidersContext.Provider>
    );
    let tree = component.toJSON();
    expect(tree).toMatchSnapshot();
});
