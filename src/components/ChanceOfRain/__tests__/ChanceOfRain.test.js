import React from 'react';
import renderer from 'react-test-renderer';
import ChanceOfRain from '../index';

test('ChanceOfRain should render', () => {
    const component = renderer.create(
        <ChanceOfRain></ChanceOfRain>
    );

    let tree = component.toJSON();
    expect(tree).toMatchSnapshot();
});
