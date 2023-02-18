import React from "react";
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
const root=ReactDOM.createRoot(document.getElementById('root')) //the only place where we're fetching from the DOM

root.render(<App/>)