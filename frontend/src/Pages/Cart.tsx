import Navbar from "@/components/Navbar";
import { useSelector } from "react-redux";
import { RootState } from "@/redux/store/store";
import CartItemsCard from "@/components/CartItemsCard";
import { useEffect, useState } from "react";
import {
  Table,
  TableBody,
  TableCaption,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import OrderSummary from "@/components/OrderSummary";

const Cart = () => {
  const cart = useSelector((state: RootState) => state.cart);
  const [cartTotal, setCartTotal] = useState(0);

  function calculatePrice() {
    let total = 0;
    cart.items.forEach((item) => (total += item.price * item.quantity));

    setCartTotal(total);
  }

  useEffect(() => {
    calculatePrice();
  }, [calculatePrice]);

  return (
    <>
      {/* navbar content */}
      <Navbar />

      {/* cart page content */}
      <div className="w-auto flex flex-col items-center">
        <div className="mt-4">
          <h2 className="text-xl font-semibold mb-4 text-center">Cart Items</h2>
          {cart.items.length === 0 ? (
            <p>Your cart is empty.</p>
          ) : (
            <div>
              <Table className="divide-y divide-gray-200 lg:w-[950px] min-w-full">
                <TableCaption>Cart Items</TableCaption>
                <TableHeader className="bg-gray-500">
                  <TableRow className="px-6 py-3 text-left  text-xs font-medium bg-gray-900 uppercase tracking-wider">
                    <TableHead className="text-white">Name</TableHead>
                    <TableHead className="text-white">Image</TableHead>
                    <TableHead className="text-white">Price</TableHead>
                    <TableHead className="text-white">Quantity</TableHead>
                    <TableHead className="text-white">Delete Product</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody className="bg-white divide-y divide-gray-200">
                  {cart.items.map((item) => (
                    <CartItemsCard item={item} />
                  ))}
                </TableBody>
              </Table>
              <div className="flex flex-row justify-between m-4">
                <div className="flex flex-row w-[160px] justify-between ml-4">
                  <div className="bg-black text-white p-2">Total Price: </div>
                  <div className="p-2">{cartTotal}</div>
                </div>

                <OrderSummary />
              </div>
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default Cart;
