import { useState, useEffect } from 'react';
import reactLogo from './assets/react.svg';
import viteLogo from '/vite.svg';
import './App.css';

function App() {
  const [burgers, setBurgers] = useState([]); 

  useEffect(() => {
    fetch('https://bb-botd-api.vercel.app/api/burgers')
      .then((res) => res.json())
      .then((data) => {
        setBurgers(data);   // Set the fetched data in state
        console.log(burgers);  // Log the fetched data to ensure it's working
      })
      .catch((error) => {
        console.error("Error fetching burgers:", error); // Handle fetch errors
      });
  }, []);
  
  return (
    <div>
      <p>{burgers.map((burger, index) => (
        <div key={index}>
          <h2>{burger.name}</h2>
          <p>{burger.description}</p>
          <ul>{burger.ingredients.map((ingredient, i) =>
            <li key={i}>{ingredient}</li>
            )}
          </ul>
          <ul>{burger.steps.map((step, i) =>
            <li key={i}>{step}</li>
            )}
          </ul>
        </div>
      ))}</p>
    </div>
  );
}

export default App;
