export default function handler(req, res) {
    const burgers = [
      {
        name: "New Bacon-ings Burger",
        episode: "Season 1, Episode 1: Human Flesh",
        description: "A classic all-beef patty topped with lettuce, cheddar cheese, onion, tomato, and bacon. It’s what George Washington was fighting for.",
        ingredients: [
          "1 pound bacon",
          "French fries",
          "1 pound ground beef",
          "1 cup whole milk",
          "1 large egg",
          "4 buns",
          "Green leaf lettuce",
          "1 large tomato, sliced",
          "1 red onion, sliced"
        ],
        steps: [
          "Preheat your oven to 400°F. Cook your bacon, either in the oven or on the stovetop, until crispy.",
          "Cook your French fries.",
          "Combine the milk and egg in a large bowl.",
          "Shape the beef into 4 patties and cook them.",
          "Assemble the burger with toppings and serve."
        ],
        image: "https://via.placeholder.com/400x300?text=New+Bacon-ings+Burger"
      }
      // Add more burgers here if you want
    ];
  
    res.status(200).json(burgers);
  }
  