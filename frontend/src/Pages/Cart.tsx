import Navbar from "@/components/Navbar";
import { useDispatch, useSelector } from "react-redux";
import { removeFromCart, subtractFromCart } from "../redux/cartSlice";
import { RootState } from "@/redux/store/store";
import CartItemsCard from "@/components/CartItemsCard";

const Cart = () => {
  const dispatch = useDispatch();
  const cart = useSelector((state: RootState) => state.cart);
  console.log("cart", cart);

  return (
    <>
      {/* navbar content */}
      <Navbar />

      {/* cart page content */}
      <div>
        <button>Add to Cart</button>
        <button onClick={() => dispatch(removeFromCart("1"))}>
          Remove from Cart
        </button>
        <button onClick={() => dispatch(subtractFromCart("1"))}>
          Subtract from Cart
        </button>

        <div className="mt-4">
          <h2 className="text-xl font-semibold mb-4">Shopping Cart</h2>
          {cart.items.length === 0 ? (
            <p>Your cart is empty.</p>
          ) : (
            <div className="flex flex-col  w-auto">
              <table className="divide-y divide-gray-200 w-[650px]">
                <thead className="bg-gray-50">
                  <tr>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Name
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Price
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Quantity
                    </th>
                  </tr>
                </thead>
                <tbody className="bg-white divide-y divide-gray-200">
                  {cart.items.map((item) => (
                    <CartItemsCard item={item} />
                  ))}
                </tbody>
              </table>
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default Cart;
