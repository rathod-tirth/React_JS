// imports

// importing react and reactDOM files is neccecary for react
import React from "react";
import ReactDOM from "react-dom/client";

// importing CSS file requires to write the extensions and it imports the whole file
import "./index.css";

// creating an function component
function BookList() {
  return (
    // className is used instead of class
    <section className="booklist">
      {/* multiple component can be render, but must have one parent component */}
      <Book />
      <Book />
      <Book />
      <Book />
      <Book />
      <Book />
    </section>
  );
}

const author = "Rebecca Yarros";

// creating a arrow function component
const Book = () => {
  const title = "Iron Flame";
  return (
    <article className="book">
      <img src="./images/book_1.jpg" alt="Iron Flame" />
      {/* {} in JSX means going back to JS Land 
          value inside must be an expression (return value), can't be a statement */}
      <h2>{title}</h2>
      <h4>{author.toUpperCase()}</h4>
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
