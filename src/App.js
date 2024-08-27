import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Contact from './pages/Contact';
import Home from './pages/Home';
import Career from './pages/Career'
import AboutUs from './pages/AboutUs';
import WebDevelopment from './pages/WebDevelopment';
import AppDevelopment from './pages/AppDevelopment';
import SEO from './pages/SEO';
import Digital from './pages/Digital';
import Privacy from './pages/Privacy';
import Term from './pages/Term';
function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<AboutUs/>} />
          <Route path="/career" element={<Career/>} />
          <Route path="/contact" element={<Contact />} />
          <Route path='/web-development' element={<WebDevelopment/>} />
          <Route path='/app-development' element={<AppDevelopment/>} />
          <Route path='/seo' element={<SEO/>} />
          <Route path='/digital-marketing' element={<Digital/>} />
          <Route path='/privacy' element={<Privacy/>} />
          <Route path='/terms-condition' element={<Term/>} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;

