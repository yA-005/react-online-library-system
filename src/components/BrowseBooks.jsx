

import { useParams, Link } from "react-router-dom";
import { useState } from "react";
import { useSelector } from "react-redux";

function BrowseBooks() {
  const { category } = useParams();
  const [searchTerm, setSearchTerm] = useState("");
  const allBooks = useSelector(state => state.books.books);

  let filteredBooks = allBooks;
  if (category) {
    filteredBooks = filteredBooks.filter(book => book.category === category);
  }
  if (searchTerm) {
    filteredBooks = filteredBooks.filter(book =>
      book.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      book.author.toLowerCase().includes(searchTerm.toLowerCase())
    );
  }

  return (
    <div className="container">
      <h1>Browse Books</h1>
      <div className="search-bar">
        <input
          type="text"
          placeholder="Search by title or author..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
      </div>
      <div className="book-grid">
        {filteredBooks.length > 0 ? (
          filteredBooks.map(book => (
            <div key={book.id} className="book-card">
              <h3>{book.title}</h3>
              <p>{book.author}</p>
              <Link to={`/book/${book.id}`}>View Details</Link>
            </div>
          ))
        ) : (
          <p>No books found.</p>
        )}
      </div>
    </div>
  );
}

export default BrowseBooks;