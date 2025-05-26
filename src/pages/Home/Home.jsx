import Products from "../../components/products/Products";

const Home = ({ loading, product }) => {
  return (
    <div>
      <Products loading={loading} product={product} />
    </div>
  );
};

export default Home;
