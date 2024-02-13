import React from 'react';
import ReactDOM from 'react-dom/client';
import { App } from './app/App';
import "./scss/app.scss"; // импортируем обнуление стилей всего сайта

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App></App>);