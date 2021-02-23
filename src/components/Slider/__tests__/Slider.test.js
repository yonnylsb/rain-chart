import React from 'react';
import renderer from 'react-test-renderer';
import Slider from '../index';

test('Slider should render', () => {
    const component = renderer.create(
        <Slider
            onSliderChange={()=>{}}
        ></Slider>
    );

    let tree = component.toJSON();
    expect(tree).toMatchSnapshot();
});

test('Slider should render with props', () => {
    const component = renderer.create(
        <Slider
            title="title Test"
            onSliderChange={()=>{}}
            min={0}
            max={200}
        ></Slider>
    );

    let tree = component.toJSON();
    expect(tree).toMatchSnapshot();
});
