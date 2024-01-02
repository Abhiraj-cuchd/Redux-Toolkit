/* eslint-disable react/prop-types */
import "./Card.css";
import { add } from "../../store/cartSlice";
import { useDispatch } from "react-redux";
 
export default function Card({ data }) {
  
  const disptach = useDispatch();

  const handleAdd = (product) => {
    disptach(add(product));
  };

  return (
    <div className="productCard">
      <img src={data.image} alt="image" />
      <span>{data.title}</span>
      <h4>₹ {data.price}</h4>
      <button onClick={() => handleAdd(data)} className="btn">
        Add to cart
      </button>
    </div>
  );
}
