import { Link } from 'react-router-dom';
import products from '../data'

const Products = () => {
  return (
    <>
      <div className="products">
        {products.map((item) => {
          return (
            <article key={item.id}>
              <h5>{item.name}</h5>
              <Link to={`/products/${item.id}`} >More info</Link>
            </article>
          )
        })}
      </div>
    </>
  );
};

export default Products;
