import { Link } from "react-router-dom";

function Home() {
  return (
    <div className="home">
      <h1>Smart Canteen</h1>
      <p>Skip the queue! Browse the menu, add your favourite food to the cart and place your order in a few clicks.</p>
      <Link to="/menu" className="btn">View Menu</Link>
    </div>
  );
}

export default Home;
