import React from 'react'
import ReactDOM from 'react-dom/client';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import App from './App.jsx'
import Home from './Home.jsx';
import './style/index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
      <Router>
          <Routes>
              <Route path="/" element={<App />} />
              <Route path="/home" element={<Home />} />
          </Routes>
      </Router>
  </React.StrictMode>
)
