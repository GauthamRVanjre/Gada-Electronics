import Navbar from "@/components/Navbar";
import { useSelector } from "react-redux";
import { RootState } from "@/redux/store/store";
import CartItemsCard from "@/components/CartItemsCard";

const Cart = () => {
  const cart = useSelector((state: RootState) => state.cart);
  console.log("cart", cart);

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
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default Cart;
