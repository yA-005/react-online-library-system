

import { useParams, Link } from "react-router-dom";
import { popularBooks } from "../data/dummyBooks";

function BookDetails() {
  const { id } = useParams();
  const book = popularBooks.find(b => b.id === parseInt(id));
  if (!book) return <h2>Book not found</h2>;
  return (
    <div>
      <h1>{book.title}</h1>
      <p><strong>Author:</strong> {book.author}</p>
      <p><strong>Category:</strong> {book.category}</p>
      <p><strong>Rating:</strong> {book.rating} / 5</p>
      <p>{book.description}</p>
      <Link to="/browse">← Back to Browse</Link>
    </div>
  );
}
export default BookDetails;