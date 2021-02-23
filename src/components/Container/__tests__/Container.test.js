import React from 'react';
import renderer from 'react-test-renderer';
import Container from '../index';

test('Container should render', () => {
    const component = renderer.create(
        <Container></Container>
    );

    let tree = component.toJSON();
    expect(tree).toMatchSnapshot();
});
