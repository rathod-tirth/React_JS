import { Link, useParams } from "react-router-dom";

const SingleProduct = () => {
  const { proId } = useParams()
  return (
    <section className='section product'>
      <h2>{proId}</h2>
      <Link to="/products" className="btn" >Back</Link>
    </section>
  );
};

export default SingleProduct;
