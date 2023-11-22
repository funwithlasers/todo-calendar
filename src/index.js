import './input.css';
import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { ChoresProvider } from './context/chores';
import { DaysProvider } from './context/days';

const el = document.getElementById('root');
const root = ReactDOM.createRoot(el);

root.render(
  <ChoresProvider>
    <DaysProvider>
      <App />
    </DaysProvider>
  </ChoresProvider>
);
