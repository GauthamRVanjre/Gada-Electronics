import Navbar from "@/components/Navbar";
import { useDispatch, useSelector } from "react-redux";
import {
  addToCart,
  removeFromCart,
  subtractFromCart,
} from "../redux/cartSlice";
import { RootState } from "@/redux/store/store";

const Cart = () => {
  const dispatch = useDispatch();
  const cart = useSelector((state: RootState) => state.cart);
  return (
    <>
      {/* navbar content */}
      <Navbar />

      {/* cart page content */}
      <div>
        <button
          onClick={() =>
            dispatch(addToCart({ id: "1", name: "Product", quantity: 1 }))
          }
        >
          Add to Cart
        </button>
        <button onClick={() => dispatch(removeFromCart("1"))}>
          Remove from Cart
        </button>
        <button onClick={() => dispatch(subtractFromCart("1"))}>
          Subtract from Cart
        </button>

        <div>
          <h2>Shopping Cart</h2>
          <ul>
            {cart.items.map((item) => (
              <li key={item.id}>
                {item.name} - {item.quantity}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </>
  );
};

export default Cart;
