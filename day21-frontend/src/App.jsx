import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import SearchPage from '../pages/SearchPage';
import Home from '../pages/Home';
import SignUp from '../pages/SignUp';



const App = () => {
  return (
    <Router>
      <div>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/search" element={<SearchPage />} />
          
        </Routes>
      </div>
    </Router>
  );
};

export default App;