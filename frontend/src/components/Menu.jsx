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
    <div className="min-h-screen bg-black py-10 px-4">
      <h1 className="text-4xl font-extrabold text-center text-green-500 mb-10">Our Menu</h1>
      <div className="max-w-5xl mx-auto space-y-16">
        {menuData.map((section) => (
          <div key={section.category}>
            <h2 className="text-2xl font-bold text-green-400 mb-6">{section.category}</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {section.items.map((item) => (
                <div
                  key={item.name}
                  className="bg-gray-900 rounded-xl shadow-md flex flex-col md:flex-row items-center p-4"
                >
                  <img
                    src={item.image}
                    alt={item.name}
                    className="w-32 h-32 object-cover rounded-lg mb-4 md:mb-0 md:mr-6"
                  />
                  <div className="flex-1">
                    <div className="flex justify-between items-center mb-2">
                      <h3 className="text-xl font-semibold text-white">{item.name}</h3>
                      <span className="text-lg font-bold text-green-400">{item.price}</span>
                    </div>
                    <p className="text-green-200">{item.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}