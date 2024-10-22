import { useState, useEffect } from 'react';
import './App.css';
import BurgerDisplay from './components/BurgerDisplay'; // Burger component
import NextBurger from './components/NextBurger'; // Next button component

function App() {
  const [burgers, setBurgers] = useState([]); 
  const [burgerItem, setBurgerItem] = useState(0); // Keep track of the current burger

  useEffect(() => {
    fetch('https://bb-botd-api.vercel.app/api/burgers')
      .then((res) => res.json())
      .then((data) => {
        setBurgers(data);   // Set the fetched data in state
      })
      .catch((error) => {
        console.error("Error fetching burgers:", error); // Handle fetch errors
      });
  }, []);

  const handleNextBurger = () => {
    setBurgerItem((prevIndex) => (prevIndex + 1) % burgers.length); // Cycle to the next burger
  };
  
  return (
    <div>
      {/* Only render BurgerDisplay when burgers have been loaded */}
      {burgers.length > 0 && (
        <>
          <BurgerDisplay burger={burgers[burgerItem]} /> {/* Pass current burger */}
          <NextBurger handleNextBurger={handleNextBurger} /> {/* Pass next button handler */}
        </>
      )}
      {burgers.length === 0 && <p>Loading burgers...</p>}
    </div>
  );
}

export default App;
