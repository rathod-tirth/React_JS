import React from 'react'

const Book = (props) => {

    const { title, author, img, getBook, id } = props;

    return (
        <article className="book">
            <img src={img} alt={title} />
            <h2>{title}</h2>
            <button onClick={() => getBook(id)}>Click me</button>
            <h4>{author}</h4>
        </article>
    );
};

export default Book