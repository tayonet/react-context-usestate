import React, { useContext, useState } from "react";
import { BookContext } from "../context/BookContext";
import { useHistory } from "react-router-dom";
import "./addBook.css";
const AddBook = () => {
  const history = useHistory();
  const { books, addBook, removeBook } = useContext(BookContext);
  const [title, setTitle] = useState("");
  const [author, setAuthor] = useState("");
  const [price, setPrice] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    addBook(title, author, price);
    setTitle("");
    setAuthor("");
    setPrice("");
    history.push("/");
  };
  return (
    <div className="m-auto" style={{ width: "50%" }}>
      <form style={{ marginTop: "60px" }} onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="title">Title</label>
          <input
            type="text"
            className="form-control"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            name="title"
          />
        </div>
        <div className="form-group">
          <label htmlFor="author">Author</label>
          <input
            type="text"
            className="form-control"
            value={author}
            onChange={(e) => setAuthor(e.target.value)}
            name="author"
          />
        </div>
        <div className="form-group">
          <label htmlFor="price">Price</label>
          <input
            type="number"
            className="form-control"
            value={price}
            onChange={(e) => setPrice(e.target.value)}
            name="price"
          />
        </div>
        <div className="form-group">
          <input
            type="submit"
            className="btn btn-success"
            value="Add new Book"
          />
        </div>
      </form>
    </div>
  );
};

export default AddBook;
