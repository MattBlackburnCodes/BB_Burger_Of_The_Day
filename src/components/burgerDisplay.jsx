export default function BurgerDisplay({burgers}) {
    return(
        <p>{burgers.map((burger, index) => (
            <div key={index}>
                <img src={burger.image} alt={burger.name} />
                <h2>{burger.name}</h2>
                <p>Serving Size: {burger.servingSize}</p>
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
            ))}
        </p>
    )

}