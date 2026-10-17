import { Link } from "react-router-dom";

function Cart({ cart, changeQuantity, placeOrder }) {
  const total = cart.reduce((sum, item) => sum + item.price * item.quantity, 0);

  // Conditional rendering: show a message if the cart is empty
  if (cart.length === 0) {
    return (
      <div>
        <h1>Your Cart</h1>
        <p>Your cart is empty.</p>
        <Link to="/menu" className="btn">Go to Menu</Link>
      </div>
    );
  }

  return (
    <div>
      <h1>Your Cart</h1>

      {cart.map((item) => (
        <div className="cart-item" key={item.id}>
          <span className="cart-name">{item.name}</span>
          <span>₹{item.price}</span>
          <div className="qty">
            <button onClick={() => changeQuantity(item.id, -1)}>-</button>
            <span>{item.quantity}</span>
            <button onClick={() => changeQuantity(item.id, 1)}>+</button>
          </div>
          <span>₹{item.price * item.quantity}</span>
        </div>
      ))}

      <h2>Total: ₹{total}</h2>
      <button className="btn" onClick={placeOrder}>Place Order</button>
    </div>
  );
}

export default Cart;
