import { useEffect } from "react";
import "./Products.css";
import Card from "../Card/Card";
import { fetchProducts } from "../../store/productSlice";
import { useDispatch, useSelector } from "react-redux";
import { STATUSES } from "../../store/productSlice";

export default function Products() {
  const dispatch = useDispatch();
  const { data: products, status } = useSelector((state) => state.product);

  useEffect(() => {
    dispatch(fetchProducts());
  }, []);

  if (status === STATUSES.LOADING) {
    return <h2>Loading....</h2>
  }

  if (status === STATUSES.ERROR) {
    return <h2>Something went wrong....</h2>
  }

  return (
    <div className="products">
      {products?.map((product, index) => (
        <Card data={product} key={index} />
      ))}
    </div>
  );
}
