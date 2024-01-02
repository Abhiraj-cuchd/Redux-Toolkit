import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import "./Navbar.css";

export default function Navbar() {
  const items = useSelector((state) => state.cart);

  return (
    <div className="nav">
      <span className="logo">REDUX STORE</span>
      <div className="actions">
        <Link className="navLinks" to="/">
          Home
        </Link>
        <Link className="navLinks" to="/cart">
          {" "}
          Cart{" "}
        </Link>
        <span className="cartCount">Cart Items: {items.length}</span>
      </div>
    </div>
  );
}
