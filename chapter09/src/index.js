import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
//firebase dependancies
import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAetxX_m5n9weS8jjUdD1Ie6bnU9cN7Ofk",
  authDomain: "ethan-bcf8c.firebaseapp.com",
  projectId: "ethan-bcf8c",
  storageBucket: "ethan-bcf8c.firebasestorage.app",
  messagingSenderId: "480440159180",
  appId: "1:480440159180:web:619017375b9abb5433ab69",
  measurementId: "G-Q7JQDN1QXP"
};

firebase.initializeApp(firebaseConfig);
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
