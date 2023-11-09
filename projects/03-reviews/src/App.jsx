import { useState } from "react";
import reviews from "./data";
import { FaChevronLeft, FaChevronRight, FaQuoteRight } from "react-icons/fa";

function App() {
  const [index, setIndex] = useState(0);
  const { name, job, image, text } = reviews[index];

  const Next = () => {
    if (index === reviews.length - 1) {
      setIndex(0);
    } else {
      setIndex(index + 1);
    }
  };

  const Prev = () => {
    if (index === 0) {
      setIndex(reviews.length - 1);
    } else {
      setIndex(index - 1);
    }
  };

  const random = () => {
    setIndex(Math.floor(Math.random() * reviews.length));
  };

  return (
    <main>
      <article className="review">
        <div className="img-container">
          <img className="person-img" src={image} alt={name} />
          <span className="quote-icon">
            <FaQuoteRight />
          </span>
        </div>
        <h3 className="author">{name}</h3>
        <h4 className="job">{job}</h4>
        <p className="info">{text}</p>
        <div className="btn-container">
          <button className="prev-btn" onClick={() => Prev()}><FaChevronLeft /></button>
          <button className="next-btn" onClick={() => Next()}><FaChevronRight /></button>
        </div>
        <button className="btn btn-hipster" onClick={() => random()}>Random</button>
      </article>
    </main>
  );
}

export default App
