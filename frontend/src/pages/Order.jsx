import React, { useState } from "react";

// Menu data copied from Menu.jsx for simplicity. In a real app, consider importing or centralizing this data.
const menuData = [
  {
    category: "Starters",
    items: [
      {
        name: "Crispy Coconut Shrimp",
        description: "Golden fried shrimp with a sweet chili dip.",
        price: "$9.99",
        image: "https://images.unsplash.com/photo-1504674900247-0877df9cc836?auto=format&fit=crop&w=400&q=80",
      },
      {
        name: "Island Salad",
        description: "Fresh greens, mango, and avocado with a citrus vinaigrette.",
        price: "$7.99",
        image: "https://images.unsplash.com/photo-1464306076886-debca5e8a6b0?auto=format&fit=crop&w=400&q=80",
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
        image: "https://images.unsplash.com/photo-1505250469679-203ad9ced0cb?auto=format&fit=crop&w=400&q=80",
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

function parsePrice(priceStr) {
  return parseFloat(priceStr.replace("$", ""));
}

export default function Order() {
  const [cart, setCart] = useState([]);
  const [orderPlaced, setOrderPlaced] = useState(false);

  const addToCart = (item) => {
    setCart((prev) => {
      const existing = prev.find((i) => i.name === item.name);
      if (existing) {
        return prev.map((i) =>
          i.name === item.name ? { ...i, quantity: i.quantity + 1 } : i
        );
      } else {
        return [...prev, { ...item, quantity: 1 }];
      }
    });
  };

  const removeFromCart = (itemName) => {
    setCart((prev) => prev.filter((i) => i.name !== itemName));
  };

  const updateQuantity = (itemName, delta) => {
    setCart((prev) =>
      prev
        .map((i) =>
          i.name === itemName ? { ...i, quantity: Math.max(1, i.quantity + delta) } : i
        )
        .filter((i) => i.quantity > 0)
    );
  };

  const total = cart.reduce(
    (sum, item) => sum + parsePrice(item.price) * item.quantity,
    0
  );

  const placeOrder = () => {
    setOrderPlaced(true);
    setCart([]);
  };

  return (
    <div className="min-h-screen bg-yellow-50 py-10 px-4">
      <h1 className="text-4xl font-extrabold text-center text-orange-600 mb-10">Order Food</h1>
      {orderPlaced && (
        <div className="bg-green-100 border border-green-400 text-green-700 px-4 py-3 rounded mb-6 text-center">
          Thank you! Your order has been placed.
        </div>
      )}
      <div className="max-w-5xl mx-auto grid md:grid-cols-3 gap-10">
        {/* Menu Section */}
        <div className="md:col-span-2 space-y-10">
          {menuData.map((section) => (
            <div key={section.category}>
              <h2 className="text-2xl font-bold text-gray-800 mb-4">{section.category}</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {section.items.map((item) => (
                  <div
                    key={item.name}
                    className="bg-white rounded-xl shadow-md flex flex-col md:flex-row items-center p-4"
                  >
                    <img
                      src={item.image}
                      alt={item.name}
                      className="w-24 h-24 object-cover rounded-lg mb-4 md:mb-0 md:mr-4"
                    />
                    <div className="flex-1">
                      <div className="flex justify-between items-center mb-2">
                        <h3 className="text-lg font-semibold text-gray-900">{item.name}</h3>
                        <span className="text-md font-bold text-orange-500">{item.price}</span>
                      </div>
                      <p className="text-gray-600 mb-2">{item.description}</p>
                      <button
                        className="bg-orange-500 hover:bg-orange-600 text-white px-3 py-1 rounded"
                        onClick={() => addToCart(item)}
                      >
                        Add to Order
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
        {/* Cart Section */}
        <div className="bg-white rounded-xl shadow-lg p-6 h-fit">
          <h2 className="text-xl font-bold mb-4 text-gray-800">Your Order</h2>
          {cart.length === 0 ? (
            <p className="text-gray-500">No items in your order yet.</p>
          ) : (
            <div className="space-y-4">
              {cart.map((item) => (
                <div key={item.name} className="flex items-center justify-between">
                  <div>
                    <span className="font-semibold">{item.name}</span> <br />
                    <span className="text-sm text-gray-500">{item.price} x {item.quantity}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <button
                      className="px-2 py-1 bg-gray-200 rounded"
                      onClick={() => updateQuantity(item.name, -1)}
                    >
                      -
                    </button>
                    <span>{item.quantity}</span>
                    <button
                      className="px-2 py-1 bg-gray-200 rounded"
                      onClick={() => updateQuantity(item.name, 1)}
                    >
                      +
                    </button>
                    <button
                      className="ml-2 text-red-500 hover:text-red-700"
                      onClick={() => removeFromCart(item.name)}
                    >
                      Remove
                    </button>
                  </div>
                </div>
              ))}
              <div className="border-t pt-4 mt-4 flex justify-between font-bold">
                <span>Total:</span>
                <span>${total.toFixed(2)}</span>
              </div>
              <button
                className="w-full bg-green-500 hover:bg-green-600 text-white py-2 rounded mt-4"
                onClick={placeOrder}
                disabled={cart.length === 0}
              >
                Place Order
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
