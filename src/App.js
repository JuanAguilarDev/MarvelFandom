import React from 'react';
import { Routes, Route } from 'react-router-dom';
import './App.css';
import { useState, useEffect } from 'react';
import { apiCall } from './helpers/apiCall';
import NavigationBar from './components/Navbar/Navbar';
import Home from './components/pages/Home';
import Test from './components/pages/Test';
import { Footer } from './components/Footer/Footer';
import { Hero } from './components/Hero/Hero';

function App() {

  // ApiCall use example
  const [response, setResponse] = useState(null);

  useEffect(() => {
    const response = async () => {
      await apiCall({urlParam: 'characters'}).then((data) => {
        setResponse(data.data);
      });
    }

    response();
  }, []);

  return (
    <div className="App">    
    {
      // ApiCall data example
      response && console.log(response)
    {
    
      <NavigationBar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/test' element={<Test />} />
      </Routes>
      <Hero></Hero>
      <Footer></Footer>
    </div>
  );
}

export default App;
