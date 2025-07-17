import { Link } from "react-router-dom";

const NavBar = () => (
  <nav className="bg-gray-800 text-white p-4 flex gap-6">
    <Link to="/">Dashboard</Link>
    <Link to="/search">Search</Link>
    <Link to="/about">About</Link>
  </nav>
);
export default NavBar;
