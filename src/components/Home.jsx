

import { Link } from "react-router-dom";
import { categories, popularBooks } from "../data/dummyBooks";

function Home() {
  return (
    <div className="container">
      <h1>Welcome to Online Library</h1>

      <h2>Categories</h2>
      <ul className="categories-list">
        {categories.map(cat => (
          <li key={cat}><Link to={`/browse/${cat}`}>{cat}</Link></li>
        ))}
      </ul>

      <h2>Popular Books</h2>
      <div className="book-grid">
        {popularBooks.map(book => (
          <div key={book.id} className="book-card">
            <h3>{book.title}</h3>
            <p>{book.author}</p>
            <Link to={`/book/${book.id}`}>View Details</Link>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Home;