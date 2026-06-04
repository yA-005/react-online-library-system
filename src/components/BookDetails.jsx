

import { useParams, Link } from "react-router-dom";
import { useSelector } from "react-redux";

function BookDetails() {
  const { id } = useParams();
  const book = useSelector(state =>
    state.books.books.find(b => b.id === parseInt(id))
  );

  if (!book) {
    return (
      <div className="container">
        <h2>Book not found</h2>
        <Link to="/browse">← Back to Browse</Link>
      </div>
    );
  }

  return (
    <div className="container">
      <div className="book-details">
        <h1>{book.title}</h1>
        <p><strong>Author:</strong> {book.author}</p>
        <p><strong>Category:</strong> {book.category}</p>
        <p><strong>Rating:</strong> {book.rating} / 5</p>
        <p><strong>Description:</strong> {book.description}</p>
        <Link to="/browse" className="back-link">← Back to Browse</Link>
      </div>
    </div>
  );
}

export default BookDetails;