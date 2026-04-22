import React from 'react';
import ReactDOM from 'react-dom/client';
import './styles/main.scss';
import App from './App';

import { BrowserRouter } from 'react-router';
import { AppStateProvider } from './context';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <React.StrictMode>
        <BrowserRouter>
            <AppStateProvider>
                <App />
            </AppStateProvider>
        </BrowserRouter>
    </React.StrictMode>,
);
