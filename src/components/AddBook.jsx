

import { useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { addBook } from "../redux/booksSlice";

function AddBook() {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [form, setForm] = useState({
    title: "",
    author: "",
    category: "",
    rating: "",
    description: "",
  });

  const [errors, setErrors] = useState({});

  const validate = () => {
    let err = {};
    if (!form.title.trim()) err.title = "Title is required";
    if (!form.author.trim()) err.author = "Author is required";
    if (!form.category.trim()) err.category = "Category is required";
    if (!form.rating || form.rating < 1 || form.rating > 5)
      err.rating = "Rating must be between 1 and 5";
    if (!form.description.trim()) err.description = "Description is required";
    setErrors(err);
    return Object.keys(err).length === 0;
  };

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!validate()) return;

    const newBook = {
      id: Date.now(),
      title: form.title,
      author: form.author,
      category: form.category,
      rating: parseFloat(form.rating),
      description: form.description,
    };
    dispatch(addBook(newBook));
    navigate("/browse");
  };

  return (
    <div className="add-book-form">
      <h2>Add a New Book</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Title</label>
          <input
            type="text"
            name="title"
            value={form.title}
            onChange={handleChange}
          />
          {errors.title && <span className="error">{errors.title}</span>}
        </div>
        <div>
          <label>Author</label>
          <input
            type="text"
            name="author"
            value={form.author}
            onChange={handleChange}
          />
          {errors.author && <span className="error">{errors.author}</span>}
        </div>
        <div>
          <label>Category</label>
          <input
            type="text"
            name="category"
            value={form.category}
            onChange={handleChange}
          />
          {errors.category && <span className="error">{errors.category}</span>}
        </div>
        <div>
          <label>Rating (1-5)</label>
          <input
            type="number"
            name="rating"
            step="0.1"
            min="1"
            max="5"
            value={form.rating}
            onChange={handleChange}
          />
          {errors.rating && <span className="error">{errors.rating}</span>}
        </div>
        <div>
          <label>Description</label>
          <textarea
            name="description"
            rows="3"
            value={form.description}
            onChange={handleChange}
          ></textarea>
          {errors.description && <span className="error">{errors.description}</span>}
        </div>
        <button type="submit">Add Book</button>
      </form>
    </div>
  );
}

export default AddBook;