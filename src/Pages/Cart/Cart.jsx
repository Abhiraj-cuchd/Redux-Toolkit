import "./Cart.css";
import { useSelector, useDispatch } from "react-redux";
import "../../components/Card/Card.css";
import { remove } from "../../store/cartSlice";

export default function Cart() {
  const items = useSelector((state) => state.cart);
  const dispatch = useDispatch();

  const handleRemove = (id) => {
    dispatch(remove(id));
  };

  return (
    <div className="cart">
      <h3>Your Cart</h3>
      <div className="cartWrapper">
        {items.map((product, index) => (
          <div className="cartCard" key={index}>
            <img src={product.image} alt="" />
            <h5>{product.title}</h5>
            <h5>{product.price}</h5>
            <button onClick={() => handleRemove(product.id)} className="btn">
              Remove
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}
