/*
import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)
*/

import { createRoot } from "react-dom/client";

import App from "./App";

import './reset.css';

import './index.css';




const rootEl = document.getElementById("root");

const root = createRoot(rootEl);



root.render(<App />);



// react - component ( jsx ) - react için bir fonksiyonun component fonksiyonu olabilmesi için fonksiyon adının büyük harfle başlaması gerekir.
