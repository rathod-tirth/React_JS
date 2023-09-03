// refer readme file for more info

// importing react and reactDOM files is neccecary for react
import React from "react";
import ReactDOM from "react-dom/client";

// importing CSS file requires to write the extensions and it imports the whole file
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

// creating an function component
function BookList() {
  return (
    // className is used instead of class
    <section className="booklist">
      {/* using the map funciton to iterate the component */}
      {books.map((book) => {
        console.log(book);
        return <Book {...book} key={book.id} />;
      })}
    </section>
  );
}

// creating a arrow function component
const Book = (props) => {
  // props is an object passed in an component, which is useful to make our code dynamic

  // destructuring the props object to optimize our code
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

// whole site is render by this one root element
// using the ReactDOM module which we imported to create the root element
const root = ReactDOM.createRoot(document.getElementById("root"));

// rendering the root element with the desired component
root.render(<BookList />);
