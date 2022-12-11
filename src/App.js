import React from 'react';
import { Routes, Route } from 'react-router-dom';
import './App.css';
import { useState, useEffect } from 'react';
import { apiCall } from './helpers/apiCall';
import NavigationBar from './components/Navbar/Navbar';
import Home from './components/pages/Home';
import Test from './components/pages/Test';

function App() {

  // ApiCall use example
  const [reponse, setReponse] = useState(null);

  useEffect(() => {
    const response = async () => {
      await apiCall({urlParam: 'characters'}).then((data) => {
        setReponse(data.data);
      });
    }

    response();
  }, []);

  return (
    <div className="App">
    {
    // ApiCall data example
      reponse && console.log(reponse)
    }
      <NavigationBar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/test' element={<Test />} />
      </Routes>
    </div>
  );
}

export default App;
