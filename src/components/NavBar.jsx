import { Link } from "react-router-dom";
import "./Navbar.css";

const NavBar = () => {
  return (
    <nav className="navbar">
      <Link to="/">Bisimwa14</Link>
      <div className="navLinks">
        <Link to="/">Home</Link>
        <Link to="/Data">Data</Link>
        <Link to="/register">Registration</Link>
      </div>
    </nav>
  );
};

export default NavBar;
