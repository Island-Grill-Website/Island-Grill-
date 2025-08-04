import React from "react";
const menuData = [
  {
    category: "Starters",
    items: [
      {
        name: "Crispy Coconut Shrimp",
        description: "Golden fried shrimp with a sweet chili dip.",
        price: "$9.99",
        image: "https://cdn.localdatacdn.com/ny/brooklyn/4976190/original/WhQqw6yzf5.jpg",
      },
      {
        name: "Island Salad",
        description: "Fresh greens, mango, and avocado with a citrus vinaigrette.",
        price: "$7.99",
        image: "https://cdn10.localdatacdn.com/ny/brooklyn/4976190/original/yJu5D4vcKg.jpg",
      },
    ],
  },
  {
    category: "Main Courses",
    items: [
      {
        name: "Jerk Chicken",
        description: "Spicy grilled chicken served with rice and peas.",
        price: "$14.99",
        image: "https://images.unsplash.com/photo-1519864600265-abb23847ef2c?auto=format&fit=crop&w=400&q=80",
      },
      {
        name: "Curry Goat",
        description: "Tender goat meat simmered in aromatic curry spices.",
        price: "$16.99",
        image: "https://images.unsplash.com/photo-1502741338009-cac2772e18bc?auto=format&fit=crop&w=400&q=80",
      },
    ],
  },
  {
    category: "Desserts",
    items: [
      {
        name: "Rum Cake",
        description: "Moist cake soaked in Caribbean rum.",
        price: "$5.99",
        image: "https://cdn7.localdatacdn.com/ny/brooklyn/4976190/original/U1s0EIMcos.jpg",
      },
      {
        name: "Tropical Fruit Bowl",
        description: "A medley of fresh island fruits.",
        price: "$4.99",
        image: "https://images.unsplash.com/photo-1465101046530-73398c7f28ca?auto=format&fit=crop&w=400&q=80",
      },
    ],
  },
];
export function Menu() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
      {menuData.map((category) => (
        <div key={category.category} className="category">
          <h2 className="text-xl font-semibold mb-4">{category.category}</h2>
          {category.items.map((item) => (
            <div key={item.name} className="card group">
              <div className="relative overflow-hidden rounded-t-xl">
                <img
                  src={item.image}
                  alt={item.name}
                  className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
                <div className="absolute bottom-4 left-4 text-white">
                  <h3 className="text-xl font-semibold">{item.name}</h3>
                  <p className="text-island-200">{item.price}</p>
                </div>
              </div>
              <div className="p-6">
                <p className="text-gray-600 mb-4">{item.description}</p>
                <button className="btn-primary w-full">Add to Cart</button>
              </div>
            </div>
          ))}
        </div>
      ))}
    </div>
  );
}