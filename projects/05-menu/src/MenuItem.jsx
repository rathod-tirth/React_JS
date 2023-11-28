function MenuItem({ title, price, img, desc }) {
   return (
      <div className="item-info">
         <img src={img} alt={title} className="img" />
         <h5>{title}</h5>
         <span className="item-price">{price}</span>
         <p className="item-text">{desc}</p>
      </div>
   )
}
export default MenuItem