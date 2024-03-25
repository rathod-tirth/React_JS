import { Link, useParams } from "react-router-dom";
import products from "../data";

const SingleProduct = () => {
  const { proId } = useParams()
  const newData = products.find((product) => product.id === proId)

  return (
    <section className='section product'>
      <img src={newData.image} alt={newData.name} />
      <h2>{newData.name}</h2>
      <Link to="/products" className="btn" >Back</Link>
    </section>
  );
};

export default SingleProduct;
