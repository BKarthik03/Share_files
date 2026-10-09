const recipes = [
  {
    id: 1,
    name: "Samosa",
    category: "Snack",
    time: 40,
    description: "Crispy samosa filled with spiced potatoes and peas.",
    image:
      "https://images.unsplash.com/photo-1601050690597-df0568f70950?w=800&q=80",
    ingredients: [
      "2 cups flour",
      "3 potatoes",
      "1/2 cup peas",
      "Spices and salt",
    ],
    instructions: [
      "Prepare the dough.",
      "Make the potato filling.",
      "Fill, shape, and seal the samosas.",
      "Deep-fry until golden brown.",
    ],
    isFavorite: false,
    isUserAdded: false,
  },
  {
    id: 2,
    name: "Masala Dosa",
    category: "Breakfast",
    time: 30,
    description: "Crispy dosa filled with flavorful potato masala.",
    image:
      "https://images.unsplash.com/photo-1668236543090-82eba5ee5976?w=800&q=80",
    ingredients: [
      "2 cups dosa batter",
      "3 potatoes",
      "1 onion",
      "Spices and salt",
    ],
    instructions: [
      "Prepare the potato masala.",
      "Spread dosa batter on a hot pan.",
      "Cook until crispy.",
      "Add the masala, fold, and serve.",
    ],
    isFavorite: false,
    isUserAdded: false,
  },
];

export default recipes;
