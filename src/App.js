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
  const [hero, setHero] = useState(null);

  useEffect(() => {
    const hero = async () => {
      await apiCall({urlParam: 'characters/1014858'}).then((data) => {
        setHero(data.data);
      });
    }

    hero();
  }, []);

  return (
    <div className="App">    
      <NavigationBar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/test' element={<Test />} />
      </Routes>
      <Hero hero={hero}></Hero>
      <Footer></Footer>
    </div>
  );
}

export default App;
