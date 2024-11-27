import React from 'react';
import { useState, useEffect } from 'react';
import './App.css';
import BurgerDisplay from './components/burgerDisplay'; // Burger component
import NextBurger from './components/nextBurger'; // Next button component
import PrevBurger from './components/prevBurger'; // Previous button component
import RandomBurger from './components/randomBurger'; // Random button component
import BBLogo from '../src/assets/images/BB-Logo.png';
import Disclaimer from './components/disclaimer';

//Make next and prev buttons arrow icons
//Center the logo more
//Change Rye bread image to make it rye bread and not a burger.

export default function App() {
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
    
    setBurgerItem((prevBurgerItem) => (prevBurgerItem + 1) % burgers.length); // Cycle to the next burger
  };
  
  const handlePrevBurger = () => {
    setBurgerItem((prevBurgerItem) => 
      (prevBurgerItem === 0 ? burgers.length - 1 : prevBurgerItem - 1));
  };

  const handleRandomBurger = () => {
    setBurgerItem(Math.floor(Math.random() * burgers.length));
  };

  return (
    <div className="mainBurgerApp">
      {/* Only render BurgerDisplay when burgers have been loaded */}
      {burgers.length > 0 && (
        <>
          <div className="logoContainer">
            <img src={BBLogo} alt={`Bob's Burgers Logo`} className="BBLogo"></img>
            <p></p>
          </div>
          
          
          <BurgerDisplay burger={burgers[burgerItem]} /> {/* Pass current burger */}
          <div className="burgerButtonsStyle">
            <PrevBurger handlePrevBurger={handlePrevBurger}/>
            <RandomBurger handleRandomBurger={handleRandomBurger}/>
            <NextBurger handleNextBurger={handleNextBurger} /> {/* Pass next button handler */}
          </div>
          <Disclaimer />
        </>
      )}
      {burgers.length === 0 && <p>Loading burgers...</p>}
    </div>
  );
}