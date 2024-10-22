import { useState, useEffect } from 'react';
import reactLogo from './assets/react.svg';
import viteLogo from '/vite.svg';
import './App.css';
import Burger from './components/burgerDisplay';
// Add serving sizes to the burgers

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
      < Burger burgers={burgers} />
    </div>
  );
}

export default App;
