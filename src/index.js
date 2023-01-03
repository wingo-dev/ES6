import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

var numbers = [3, 56, 2, 48, 5];

const newNumbers = numbers.map((x) => {
  return x * x;
})
console.log(newNumbers);

const newNums = numbers.filter((x) => {
  return x > 10;
})

console.log(newNums);

const newfind = numbers.find((x) => {
  return x > 10;
})

console.log(newfind);

const reduceNum = numbers.reduce((acc, current) => {
  return acc += current;
})

console.log(reduceNum);