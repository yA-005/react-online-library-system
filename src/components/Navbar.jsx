

import { Link } from "react-router-dom";
function Navbar() {
  return (
    <nav>
      <Link to="/">Home</Link>
      <Link to="/browse">Browse Books</Link>
      <Link to="/add">Add Book</Link>
    </nav>
  );
}
export default Navbar;