

import { useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { addBook } from "../redux/booksSlice";

function AddBook() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [form, setForm] = useState({ title: "", author: "", category: "", rating: "", description: "" });
  const [errors, setErrors] = useState({});

  const validate = () => {
    let err = {};
    if (!form.title) err.title = "Title required";
    if (!form.author) err.author = "Author required";
    if (!form.category) err.category = "Category required";
    if (!form.rating || form.rating < 1 || form.rating > 5) err.rating = "Rating 1-5";
    if (!form.description) err.description = "Description required";
    setErrors(err);
    return Object.keys(err).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!validate()) return;
    const newBook = {
      id: Date.now(),
      ...form,
      rating: parseFloat(form.rating),
    };
    dispatch(addBook(newBook));
    navigate("/browse");
  };

  return (
    <form onSubmit={handleSubmit}>
      <input name="title" placeholder="Title" onChange={(e) => setForm({...form, title: e.target.value})} />
      {errors.title && <span>{errors.title}</span>}
      {/* similar for author, category, rating, description */}
      <button type="submit">Add Book</button>
    </form>
  );
}
export default AddBook;