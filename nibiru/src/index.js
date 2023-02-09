import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './index.css';
import reportWebVitals from './reportWebVitals';

import App from './App';
import Prices from './pages/pricing';

import Nav from './components/Nav'
import Footer from './components/Footer'
import ScrollToTop from './components/Scroll';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <ScrollToTop>
        <div className='bg-dark-blue'>
          <div className='sticky top-0'>
            <Nav />
          </div>
          <Routes>
            <Route path='/' element={<App />} />
            <Route path='/Prices' element={<Prices />}/>
          </Routes>
          <Footer />
        </div>
      </ScrollToTop>
    </BrowserRouter>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
