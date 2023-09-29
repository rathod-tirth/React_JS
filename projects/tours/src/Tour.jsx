function Tour({ tour }) {
   const { image, info, name, price } = tour;
   return (
      <>
         <div>
            <img src={image} alt="img" />
            <h2>{name}</h2>
            <h3>${price}</h3>
            <p>{info}</p>
         </div>
      </>
   )
}
export default Tour