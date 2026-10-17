import { useState } from "react";
import { Routes, Route, useNavigate } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import Menu from "./components/Menu";
import Cart from "./components/Cart";
import Order from "./components/Order";
import Admin from "./components/Admin";

function App() {
  // Shared state lives in the parent and is passed down using props
  const [cart, setCart] = useState([]);
  const [orders, setOrders] = useState([]);
  const [lastToken, setLastToken] = useState(null);
  const [nextToken, setNextToken] = useState(101);
  const navigate = useNavigate();

  const addToCart = (item) => {
    const existing = cart.find((c) => c.id === item.id);
    if (existing) {
      setCart(cart.map((c) => (c.id === item.id ? { ...c, quantity: c.quantity + 1 } : c)));
    } else {
      setCart([...cart, { ...item, quantity: 1 }]);
    }
  };

  // change is +1 or -1; items with quantity 0 are removed
  const changeQuantity = (id, change) => {
    setCart(
      cart
        .map((c) => (c.id === id ? { ...c, quantity: c.quantity + change } : c))
        .filter((c) => c.quantity > 0)
    );
  };

  const placeOrder = () => {
    if (cart.length === 0) return;
    const total = cart.reduce((sum, c) => sum + c.price * c.quantity, 0);
    const newOrder = { token: nextToken, items: cart, total, status: "Preparing" };

    setOrders([...orders, newOrder]);
    setLastToken(nextToken);
    setNextToken(nextToken + 1);
    setCart([]);
    navigate("/order");
  };

  const updateStatus = (token, status) => {
    setOrders(orders.map((o) => (o.token === token ? { ...o, status } : o)));
  };

  const cartCount = cart.reduce((sum, c) => sum + c.quantity, 0);

  return (
    <div>
      <Navbar cartCount={cartCount} />
      <main className="container">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/menu" element={<Menu addToCart={addToCart} />} />
          <Route
            path="/cart"
            element={<Cart cart={cart} changeQuantity={changeQuantity} placeOrder={placeOrder} />}
          />
          <Route path="/order" element={<Order order={orders.find((o) => o.token === lastToken)} />} />
          <Route path="/admin" element={<Admin orders={orders} updateStatus={updateStatus} />} />
        </Routes>
      </main>
    </div>
  );
}

export default App;
