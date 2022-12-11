import React from 'react';
import { Routes, Route } from 'react-router-dom';
import './App.css';
import NavigationBar from './components/Navbar/Navbar';
import Home from './components/pages/Home';
import Test from './components/pages/Test';

function App() {
  return (
    <div className="App">
      <NavigationBar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/test' element={<Test />} />
      </Routes>
    </div>
  );
}

export default App;
