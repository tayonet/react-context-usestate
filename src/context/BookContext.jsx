import React, { createContext, useState } from "react";

// create the context object that will also be exported

export const BookContext = createContext();

// create the provider component that takes children props

const BookProvider = ({ children }) => {
  // create the useState object

  const [books, setBooks] = useState([
    { title: "Things fall Apart", author: "Chinue Achebe", price: 4500 },
    { title: "The Ultimate Question", author: "Fred Reicheld", price: 20000 },
    { title: "The Four Quandrant", author: "Robert Kiyosaki", price: 16500 },
  ]);

  // create addBook method

  const addBook = (title, author, price) => {
    // use the setter setBooks to set the books in the books array
    setBooks([{ title: title, author: author, price: price }, ...books]);
  };

  // remove a book from the books array
  const removeBook = (title) => {
    setBooks(books.filter((book) => book.title !== title));
  };

  // return the BookContext with its Provider property
  // pass the objects into the BookContext.Provider component
  return (
    <BookContext.Provider value={{ books, addBook, removeBook }}>
      {/* pass the children props that represents all components that the context will be wrapped in  */}
      {children}
    </BookContext.Provider>
  );
};

// export the provider as default export
export default BookProvider;
