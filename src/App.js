import React from 'react'
import './App.css';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import Home from './pages';
import SignInPage from './pages/signin';
import TutorialPage from './pages/tutorial';
import PassionPage from './pages/passions';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} exact />
        <Route path="/signin" element={<SignInPage />} exact />
        <Route path="/passions" element={<PassionPage />} exact />
        <Route path="/tutorial" element={<TutorialPage />} exact />
      </Routes>      
    </Router>
  );
}

export default App;