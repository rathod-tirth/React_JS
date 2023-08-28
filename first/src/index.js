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

// creating a arrow function component
const Book = () => {
  const inlineCSS = {
    color: "#617d98",
    fontSize: "0.75rem",
    marginTop: "0.5rem",
  };
  return (
    <article className="book">
      <img src="./images/book_1.jpg" alt="Iron Flame" />
      <h2 style={{ fontWeight: "800" }}>Iron Flame</h2>
      <h4 style={inlineCSS}>Rebecca Yarros</h4>
    </article>
  );
};

// assests like images can be referenced locally by putting in public or src folder
// here we are looking at public folder method which is less performant
const Image = () => <img src="./images/book_1.jpg" alt="Iron Flame" />;

// inline CSS is given by writing CSS as JS object
const Title = () => <h2 style={{ fontWeight: "800" }}>Iron Flame</h2>;

// since inline style takes in a JS manner, we can pas an variable with CSS object
const Author = () => {
  const inlineCSS = {
    color: "#617d98",
    fontSize: "0.75rem",
    marginTop: "0.5rem",
  };
  return <h4 style={inlineCSS}>Rebecca Yarros</h4>;
};

// whole site is render by this one root element
// using the ReactDOM module which we imported to create the root element
const root = ReactDOM.createRoot(document.getElementById("root"));

// rendering the root element with the desired component
root.render(<BookList />);
