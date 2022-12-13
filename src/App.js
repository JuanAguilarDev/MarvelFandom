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
  const [idCharacter, setIdCharacter] = useState('');
  const [heroStories, setHeroStories] = useState(null);

  useEffect(() => {
      apiCall({urlParam: `characters/${idCharacter}`})
        .then(data => {
          setHero(data.data);
        });

      apiCall({urlParam: `characters/${idCharacter}/stories`})
        .then(data => {
          setHeroStories(data.data);
        });

  }, [idCharacter]);

  return (
    <div className="App">    
    {
      heroStories && console.log(heroStories)
    }
      <NavigationBar setIdCharacter={setIdCharacter}/>
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
