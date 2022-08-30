import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import './index.css';
import Home from './Pages/Home/Home';
import Main from './Pages/Main/Main';
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <React.StrictMode>
        <BrowserRouter>
            <Main/>
        </BrowserRouter>
    </React.StrictMode>
);


reportWebVitals();
