// refer readme file for more info

// importing react and reactDOM files is neccecary for react
import React from "react";
import ReactDOM from "react-dom/client";

// importing CSS file requires to write the extensions and it imports the whole file
import "./index.css";

const books = [
  {
    title: "Iron Flame",
    author: "Rebecca Yarros",
    img: "./images/book_1.jpg",
  },
  {
    title: "Fourth Wing",
    author: "Rebecca Yarros",
    img: "https://images-na.ssl-images-amazon.com/images/I/91n7p-j5aqL._AC_UL600_SR600,400_.jpg",
  },
  {
    title: "Atomic Habits",
    author: "James Clear",
    img: "https://images-na.ssl-images-amazon.com/images/I/81bGKUa1e0L._AC_UL600_SR600,400_.jpg",
  },
  {
    title: "The Four Agreements",
    author: "Don Miguel Ruiz",
    img: "https://images-na.ssl-images-amazon.com/images/I/81hHy5XrdKL._AC_UL600_SR600,400_.jpg",
  },
  {
    title: "A Little Life",
    author: "Hanya Yanagihara",
    img: "https://images-na.ssl-images-amazon.com/images/I/91fRT+cJNzL._AC_UL600_SR600,400_.jpg",
  },
  {
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
      {books.map((book) => {
        console.log(book);
        return <Book title={book.title} author={book.author} img={book.img} />;
      })}
    </section>
  );
}

// creating a arrow function component
const Book = (props) => {
  // props is an object passed in an component, which is useful to make our code dynamic

  // destructuring the props object to optimize our code
  const { title, author, img } = props;
  return (
    <article className="book">
      <img src={img} alt={title} />
      {/* {} in JSX means going back to JS Land 
          value inside must be an expression (return value), can't be a statement */}
      <h2>{title}</h2>
      <h4>{author}</h4>
      {/* {children} */}
      {/* children props can only be accessed by writing the childern as the object parameter */}
    </article>
  );
};

/*
// assests like images can be referenced locally by putting in public or src folder
// here we are looking at public folder method which is less performant
const Image = () => <img src="./images/book_1.jpg" alt="Iron Flame" />;

// inline CSS is given by writing CSS as JS object
const Title = () => <h2 style={{ fontWeight: "800" }}>Iron Flame</h2>;

// since inline style takes value in a JS manner, we can pass an object with CSS
const Author = () => {
  const inlineCSS = {
    color: "#617d98",
    fontSize: "0.75rem",
    marginTop: "0.5rem",
  };
  return <h4 style={inlineCSS}>Rebecca Yarros</h4>;
};
*/

// whole site is render by this one root element
// using the ReactDOM module which we imported to create the root element
const root = ReactDOM.createRoot(document.getElementById("root"));

// rendering the root element with the desired component
root.render(<BookList />);
