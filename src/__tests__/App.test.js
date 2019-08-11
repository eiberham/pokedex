import React from 'react';
import ReactDOM from 'react-dom';
import App from '../App';

let container;
let render;
let unmount;

describe('App', () => {
    beforeEach(() => {
        container = document.createElement('div');
    });

    render = component => ReactDOM.render(component, container);
    unmount = container => ReactDOM.unmountComponentAtNode(container);

    it('renders without crashing', () => {
        render(<App />, container);
        unmount(container);
    });
});



