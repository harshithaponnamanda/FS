Smart Canteen

A simple canteen ordering web application built with React JS as a college assignment. Users can browse a menu, add items to a cart, place an order and receive a token number. A basic admin page lets staff update the order status.

The project is meant to demonstrate core React concepts. It uses static sample data and has no backend, database, authentication or payment gateway.

Features
Home: title, short description and a button to view the menu
Menu: food cards with name, price, category and an Add to Cart button, plus category filters (All, Snacks, Meals, Drinks)
Cart: shows selected items, lets you increase or decrease quantities, calculates the total and has a Place Order button
Order Confirmation: "Order Placed Successfully" message, token number, ordered items, total amount and status
Admin: table of all orders (token, items, total, status) with buttons to switch the status between Preparing, Ready and Completed
Tech Stack
React 18 (functional components)
React Router DOM v6
Vite
Plain CSS
React Concepts Demonstrated
Concept	Where it is used
Components	Navbar, Home, Menu, FoodCard, Cart, Order, Admin
Props	FoodCard receives item and addToCart; Cart and Admin receive data and handlers from App
useState	Cart, orders and token in App.jsx; selected category in Menu.jsx
useEffect	Sets the page title when Menu loads
Event handling	onClick on buttons for cart, filters, placing orders and status changes
Conditional rendering	Empty cart message, "No orders yet", "No order found", category filtering
React Router	BrowserRouter, Routes, Route, NavLink, Link, useNavigate
Lifting state up	Cart and orders are stored in App and shared across pages
Project Structure
smart-canteen/
├── index.html
├── package.json
├── vite.config.js
└── src/
    ├── main.jsx            # Entry point, wraps app in BrowserRouter
    ├── App.jsx             # Routes and shared state
    ├── App.css             # Styling
    ├── data/
    │   └── foodItems.js    # Static sample menu
    └── components/
        ├── Navbar.jsx
        ├── Home.jsx
        ├── Menu.jsx
        ├── FoodCard.jsx
        ├── Cart.jsx
        ├── Order.jsx
        └── Admin.jsx
Getting Started
Prerequisites
Node.js version 18 or newer
Installation and Run
bash
# 1. Go into the project folder (the one containing package.json)
cd smart-canteen

# 2. Install dependencies
npm install

# 3. Start the development server
npm run dev

Open the address shown in the terminal, usually http://localhost:5173.

Build for production (optional)
bash
npm run build
npm run preview
Pages and Routes
Route	Page
/	Home
/menu	Menu
/cart	Cart
/order	Order Confirmation
/admin	Admin
How to Use
Click View Menu on the Home page.
Filter by category and click Add to Cart on the items you want.
Open Cart, adjust quantities and click Place Order.
Note your token number on the confirmation page.
Open Admin to see the order and change its status.
Notes
Data is stored in memory only, so refreshing the page clears the cart and orders.
To add or change food items, edit src/data/foodItems.js. Category must be Snacks, Meals or Drinks.
Author

Harshitha Ponnamanda GitHub: harshithaponnamanda