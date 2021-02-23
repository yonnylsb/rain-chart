import React from 'react';
import renderer from 'react-test-renderer';
import AmountOfRain from '../index';

test('AmountOfRain should render', () => {
    const component = renderer.create(
        <AmountOfRain></AmountOfRain>
    );

    let tree = component.toJSON();
    expect(tree).toMatchSnapshot();
});
