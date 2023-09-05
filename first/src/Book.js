import React from 'react'

const Book = (props) => {

    const { title, author, img, getBook, id, num } = props;

    return (
        <article className="book">
            <p className='num'>#{(num + 1)}</p>
            <img src={img} alt={title} />
            <h2>{title}</h2>
            <button onClick={() => getBook(id)}>Click me</button>
            <h4>{author}</h4>
        </article>
    );
};

export default Book