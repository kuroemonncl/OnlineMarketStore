import React from 'react';
import ReactDOM from 'react-dom';
import Main from './Main';
import { BrowserRouter } from 'react-router-dom';

console.log('Rendering App Entry Point');

ReactDOM.render(
    <BrowserRouter>
    <Main />
    </BrowserRouter>,
    document.getElementById('root')
);
