const Error = () => {
    let count = 0;

    const add = () => {
        count++;
        console.log(count);

        const num = document.querySelector("h2");
        num.textContent = count;
        // above code might create some confustion during rendering so avoid using it.
        // This was used to see if dom manipulation is possible withou "use" or not
    }
    return (
        <>
            <h2>0</h2>
            <button onClick={() => add()} className="btn">+</button>
        </>
    );
};

export default Error;
