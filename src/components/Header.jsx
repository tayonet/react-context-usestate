import React from "react";
import "./header.css";
import { Link } from "react-router-dom";
import { useContext } from "react";
import { BookContext } from "../context/BookContext";
export default function Header() {
  const { books } = useContext(BookContext);
  return (
    <div className="header">
      <Link
        to="/"
        className="btn btn-dark"
        style={{
          color: "#fff",
          cursor: "pointer",
        }}
      >
        Home
      </Link>
      <h3>You have {books.length} books in your library</h3>
      <Link
        to="/add-book"
        className="btn btn-dark"
        style={{
          color: "#fff",
          cursor: "pointer",
        }}
      >
        Add new Book
      </Link>
    </div>
  );
}
