import React, { useContext } from "react";
import { BookContext } from "../context/BookContext";
import "./bookListing.css";
export default function BookListing() {
  // collect data from BookContext
  const { books, removeBook } = useContext(BookContext);
  // loop through books array and display the data
  return (
    <div className="listing">
      {books.map((book, index) => (
        <div className="book-card" onClick={() => removeBook(book.title)}>
          <h4>Book Title : {book.title}</h4>
          <h5>Book Author : {book.author}</h5>
          <p>Book Price : {book.price}</p>
        </div>
      ))}
    </div>
  );
}
