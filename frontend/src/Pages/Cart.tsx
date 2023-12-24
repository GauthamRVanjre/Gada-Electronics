import Navbar from "@/components/Navbar";
import { useSelector } from "react-redux";
import { RootState } from "@/redux/store/store";
import CartItemsCard from "@/components/CartItemsCard";
import { useContext, useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import axios from "axios";
import { cartItemsForBackendType } from "@/lib/types/product";
import UserContext from "@/context/userContext";
import toast from "react-hot-toast";

const Cart = () => {
  const cart = useSelector((state: RootState) => state.cart);
  const [cartTotal, setCartTotal] = useState(0);
  const [cartItems, setCartItems] = useState<cartItemsForBackendType[]>([]);
  const { user } = useContext(UserContext);

  console.log("cart items", cartItems);
  function calculatePrice() {
    let total = 0;
    cart.items.forEach((item) => (total += item.price * item.quantity));

    setCartTotal(total);
  }

  useEffect(() => {
    calculatePrice();
  }, [calculatePrice]);

  function constructArrayForBackend() {
    const arr: cartItemsForBackendType[] = [];
    cart.items.forEach((item) => {
      const obj = { product: item._id, quantity: item.quantity };
      arr.push(obj);
    });

    setCartItems(arr);
  }

  const handleOrderPlacement = async () => {
    constructArrayForBackend();
    try {
      const res = await axios.post(
        "http://localhost:5555/orderItems",
        cartItems
      );
      const arrayIDs = res.data;
      const orderPlace = await axios({
        method: "POST",
        url: "http://localhost:5555/orders",
        data: {
          user: user?.id,
          totalAmount: cartTotal,
          orderItems: arrayIDs,
        },
      });
      console.log("order place status", orderPlace.data._id);
      toast.success(`Order placed successfully with id ${orderPlace.data._id}`);
    } catch (error) {
      toast.error("order could not be placed");
    }
  };

  return (
    <>
      {/* navbar content */}
      <Navbar />

      {/* cart page content */}
      <div className="w-auto flex flex-col items-center">
        <div className="mt-4">
          <h2 className="text-xl font-semibold mb-4 text-center">
            Shopping Cart
          </h2>
          {cart.items.length === 0 ? (
            <p>Your cart is empty.</p>
          ) : (
            <div>
              <table className="divide-y divide-gray-200 lg:w-[950px] min-w-full">
                <thead className="bg-gray-500">
                  <tr>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-800 uppercase tracking-wider">
                      Name
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-800 uppercase tracking-wider">
                      Image
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-800 uppercase tracking-wider">
                      Price
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-800 uppercase tracking-wider">
                      Quantity
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-800 uppercase tracking-wider">
                      Delete Product
                    </th>
                  </tr>
                </thead>
                <tbody className="bg-white divide-y divide-gray-200">
                  {cart.items.map((item) => (
                    <CartItemsCard item={item} />
                  ))}
                </tbody>
              </table>
              <div className="flex flex-row justify-between m-4">
                <div className="flex flex-row w-[150px] justify-between ml-4">
                  <div className="bg-black text-white p-2">Total Price: </div>
                  <div className="p-2">{cartTotal}</div>
                </div>
                <Button className="mr-2" onClick={handleOrderPlacement}>
                  Place Order
                </Button>
              </div>
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default Cart;
