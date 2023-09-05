import React from "react";
import ReactDOM from "react-dom/client";

import "./index.css";

const books = [
  {
    id: 1,
    title: "Iron Flame",
    author: "Rebecca Yarros",
    img: "./images/book_1.jpg",
  },
  {
    id: 2,
    title: "Fourth Wing",
    author: "Rebecca Yarros",
    img: "https://images-na.ssl-images-amazon.com/images/I/91n7p-j5aqL._AC_UL600_SR600,400_.jpg",
  },
  {
    id: 3,
    title: "Atomic Habits",
    author: "James Clear",
    img: "https://images-na.ssl-images-amazon.com/images/I/81bGKUa1e0L._AC_UL600_SR600,400_.jpg",
  },
  {
    id: 4,
    title: "The Four Agreements",
    author: "Don Miguel Ruiz",
    img: "https://images-na.ssl-images-amazon.com/images/I/81hHy5XrdKL._AC_UL600_SR600,400_.jpg",
  },
  {
    id: 5,
    title: "A Little Life",
    author: "Hanya Yanagihara",
    img: "https://images-na.ssl-images-amazon.com/images/I/91fRT+cJNzL._AC_UL600_SR600,400_.jpg",
  },
  {
    id: 6,
    title: "It Ends with Us",
    author: "Colleen Hoover",
    img: "https://images-na.ssl-images-amazon.com/images/I/81s0B6NYXML._AC_UL600_SR600,400_.jpg",
  },
];

function BookList() {
  return (
    <section className="booklist">
      {books.map((book) => {
        // console.log(book);
        return <Book {...book} key={book.id} />;
      })}
    </section>
  );
}

const Book = (props) => {

  const { title, author, img } = props;

  const displayTitle = () => {
    console.log(title);
  };
  return (
    <article className="book">
      <img src={img} alt={title} />
      <h2>{title}</h2>
      <button onClick={displayTitle}>Click me</button>
      <h4>{author}</h4>
    </article>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<BookList />);
