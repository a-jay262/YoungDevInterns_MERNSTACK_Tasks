import React from 'react';
import Home from './Pages/Home.js';
import About from './Pages/About.js';
import Internship from './Pages/Internship.js';

import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

function AppContent() {
  return (
    <div className="">
      <Router>

        {/* Navbar */}
        <div className="sm:mx-6 md:mx-10 lg:mx-12 px-3 justify-center">
          {/* Rentals */}
          {/*<Rentals />*/}
        </div>

        {/* Footer */}

        {/*userRole === 'customer' && <CustomerPage />*/}
        <Routes>
          <Route exact path="/" element={<Home />}  />
          <Route exact path="/About" element={<About />}  />
          <Route exact path="/Internship" element={<Internship />}  />


        </Routes>

        {/* Filters */}
        
      </Router>

    </div>

  );
}

function App() {
  return (
      <AppContent />
  );
}

export default App;


