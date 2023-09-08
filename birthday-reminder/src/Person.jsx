const Person = ({ name, age, image }) => {
   return (
      <article>
         <img src={image} alt="img" className="img" />
         <h2>{name}</h2>
         <p>{age} years</p>
      </article>
   )
}
export default Person