
 import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';
import HomePage from './pages/HomePage'; 
import LoginPage from './pages/LoginPage';
import SignUpPage from './pages/SignUpPage';
import NotFoundPage from './pages/NotFoundPage';
 
function App() {
  return (
<Router>
<div className="App">
<Routes>
<Route path="/" element={<HomePage />} /> 
<Route path="/login" element={<LoginPage />} />
<Route path="/signup" element={<SignUpPage />} />
<Route path="*" element={<NotFoundPage />} /> 
</Routes>
</div>
</Router>
  );
}
 
export default App;