import React from "react";

export default function BurgerDisplay({ burger }) {
  return (
    <div className="burgerDisplayStyle">
      <div className="topMidSection">
        <div className="leftSide">
          <img className="burgerImageStyle"src={burger.image} alt={burger.name} />
          
        </div>
        <div className="rightSide">
          <h3>{burger.name}</h3>
          <h3>{burger.episode}</h3>
          <p>{burger.description}</p>
        </div>
      </div>
      <div className="midMidSection">
        <div className="servingSize">
          
        </div>
        <div className="details">
          <div className="ingredients">
          
            <ul>
            <p>Serving Size: {burger.servingSize}</p>
            <h4>Ingredients:</h4>
              {burger.ingredients.map((ingredient, i) => (
                <li key={i}>{ingredient}</li>
              ))}
            </ul>
          </div>
          <div className="steps">
            
            <ol>
              <h4>Steps:</h4>
              {burger.steps.map((step, i) => (
                <li key={i}>{step}</li>
              ))}
            </ol>
          </div>
        </div>
      </div>
    </div>
  );
}
