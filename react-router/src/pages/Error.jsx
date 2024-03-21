import { Link } from "react-router-dom";

const Error = () => {
  return (
    <section className='section'>
      <h2>Page not found</h2>
      <h4>Error 404</h4>
      <Link to="/" className="btn" >Home</Link>
    </section>
  );
};
export default Error;
