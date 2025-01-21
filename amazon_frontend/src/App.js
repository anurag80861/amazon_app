import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Homepage from './pages/Homepage';
import AddCart from './pages/AddCart';

import SignInForm from './components/Section/SignInForm';

function App() {
  return (
    <Router>

      <div>
        <Routes>
          <Route exact path="/" element={<Homepage />} />
          <Route path="/cart" element={<AddCart />} />
          <Route path="/sign" element={<SignInForm/>} />
        </Routes>
      </div>
      
    </Router>
  );
}

export default App;