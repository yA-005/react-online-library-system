

import { useParams, Link } from "react-router-dom";
import { useState } from "react";
import { popularBooks } from "../data/dummyBooks";

function BrowseBooks() {
  const { category } = useParams();
  const [searchTerm, setSearchTerm] = useState("");
  let filteredBooks = popularBooks;
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
    <div>
      <h1>Browse Books</h1>
      <input
        type="text"
        placeholder="Search by title or author"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
      />
      <div className="book-grid">
        {filteredBooks.map(book => (
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
export default BrowseBooks;