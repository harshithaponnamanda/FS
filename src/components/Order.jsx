import { Link } from "react-router-dom";

function Order({ order }) {
  // Conditional rendering: no order has been placed yet
  if (!order) {
    return (
      <div>
        <h1>No order found</h1>
        <Link to="/menu" className="btn">Go to Menu</Link>
      </div>
    );
  }

  return (
    <div className="order-box">
      <h1 className="success">✅ Order Placed Successfully</h1>
      <h2>Token Number: #{order.token}</h2>

      <h3>Ordered Items</h3>
      <ul>
        {order.items.map((item) => (
          <li key={item.id}>
            {item.name} x {item.quantity} = ₹{item.price * item.quantity}
          </li>
        ))}
      </ul>

      <h3>Total Amount: ₹{order.total}</h3>
      <p>Status: <span className={`status ${order.status}`}>{order.status}</span></p>
    </div>
  );
}

export default Order;
