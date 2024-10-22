import React from "react";

export default function BurgerDisplay({ burger }) {
  return (
    <div>
      <img src={burger.image} alt={burger.name} />
      <h2>{burger.name}</h2>
      <p>Serving Size: {burger.servingSize}</p>
      <p>{burger.description}</p>
      <h4>Ingredients:</h4>
      <ul>
        {burger.ingredients.map((ingredient, i) => (
          <li key={i}>{ingredient}</li>
        ))}
      </ul>
      <h4>Steps:</h4>
      <ol>
        {burger.steps.map((step, i) => (
          <li key={i}>{step}</li>
        ))}
      </ol>
    </div>
  );
}
