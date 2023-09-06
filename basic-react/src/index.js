import React from "react";
import ReactDOM from "react-dom/client";

import "./index.css";
import { books } from "./Data";
import Book from "./Book";

function BookList() {
  const getBook = (id) => {
    let res = books.find((book) => book.id === id);
    console.log(res);
  };

  return (
    <>
      <h1>amazon bestseller books</h1>
      <section className="booklist">
        {books.map((book, index) => {
          return <Book {...book} key={book.id} getBook={getBook} num={index} />;
        })}
      </section>
    </>
  );
}

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<BookList />);
