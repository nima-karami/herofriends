import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import Card from './Card';
import reportWebVitals from './reportWebVitals';
import 'tachyons';
import { heroes } from './heroes';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Card id={heroes[0].id} name={heroes[0].name} image={heroes[0].image} />
    <Card id={heroes[1].id} name={heroes[1].name} image={heroes[1].image} />
    <Card id={heroes[2].id} name={heroes[2].name} image={heroes[2].image} />
    <Card id={heroes[3].id} name={heroes[3].name} image={heroes[3].image} />
    
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
