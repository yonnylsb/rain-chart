import React from 'react';
import ReactDOM from 'react-dom';
import Layout from './components/Layout';
import SliderContextProvider from './providers/slidersContext';
import './style.scss'

ReactDOM.render(
    <SliderContextProvider>
        <Layout></Layout>
    </SliderContextProvider>
    , document.getElementById('root')
)
