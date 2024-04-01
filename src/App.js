import React from 'react';
import Navbar from './components/Navbar';
import './App.css';
import Footer from './components/Footer';
import Home from './components/pages/Home';
import { BrowserRouter as Router, Route, Switch, Routes } from "react-router-dom";
import About from './components/pages/About';
import What from './components/pages/What';
import Mission from './components/pages/Mission';
import Impact from './components/pages/Impact';
import Team from './components/pages/Team';
import Founder from './components/pages/Founder';
import Pressroom from './components/pages/Pressroom';
import Partners from './components/pages/Partners'; // Import Partners component

function App() {
  return (
    <div className="App">
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" exact element={<Home />} /> // Use element syntax
          <Route path='/about' exact element={<About />} />
          <Route path='/what' exact element={<What />} />
          <Route path='/mission' exact element={<Mission />} />
          <Route path='/impact' exact element={<Impact />} />
          <Route path='/team' exact element={<Team />} />
          <Route path='/founder' exact element={<Founder />} />
          <Route path='/pressroom' exact element={<Pressroom />} />
          {/* Add the partner route (optional) */}
          <Route path='/partners' exact element={<Partners />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
