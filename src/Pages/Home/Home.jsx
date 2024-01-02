import Products from "../../components/Products/Products";
import './Home.css';

const Home = () => {
  return (
    <div className="Home">
      <h1 className="heading"> Welcome to Redux Toolkit Store</h1>
      <section className="HomeSection">
        <h3>Products</h3>
        <Products />
      </section>
    </div>
  );
};

export default Home;
