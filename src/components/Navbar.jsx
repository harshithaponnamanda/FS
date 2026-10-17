import { NavLink } from "react-router-dom";

function Navbar({ cartCount }) {
  return (
    <nav className="navbar">
      <h2 className="logo">🍽️ Smart Canteen</h2>
      <div className="nav-links">
        <NavLink to="/">Home</NavLink>
        <NavLink to="/menu">Menu</NavLink>
        <NavLink to="/cart">Cart ({cartCount})</NavLink>
        <NavLink to="/admin">Admin</NavLink>
      </div>
    </nav>
  );
}

export default Navbar;
