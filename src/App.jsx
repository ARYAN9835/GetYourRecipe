import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Footer from './Component/footer.jsx';
import Navbar from './Component/Navbar.jsx';
import Home from './Pages/Home.jsx';
import RecipePage from './Pages/RecipePage.jsx';
import Awareness from './Pages/Awareness.jsx';
import './App.css';
 
const App = () => {
  return (
    <div className="App">              
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/recipes" element={<RecipePage />} />                      
          <Route path="/awareness" element={<Awareness />} />                         
        </Routes>
       <Footer />
      </Router>
    </div>
  );
};

export default App;
