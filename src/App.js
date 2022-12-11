import './App.css';
import { useState, useEffect } from 'react';
import { apiCall } from './helpers/apiCall';

function App() {

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
      reponse && console.log(reponse)
    }
    </div>
  );
}

export default App;
