import { useContext, useEffect, useState, useRef } from "react";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import {
  Table,
  TableBody,
  TableCaption,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import axios from "axios";
import { cartItemsForBackendType } from "@/lib/types/product";
import UserContext from "@/context/userContext";
import toast from "react-hot-toast";
import { useSelector } from "react-redux";
import { RootState } from "@/redux/store/store";
import { Loader2 } from "lucide-react";
import CartItemsCard from "./CartItemsCard";
import { useReactToPrint } from "react-to-print";

const baseURL = import.meta.env.VITE_BASE_URL;

const OrderSummary = () => {
  const cart = useSelector((state: RootState) => state.cart);
  const [cartTotal, setCartTotal] = useState(0);
  const [cartItems, setCartItems] = useState<cartItemsForBackendType[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const { user } = useContext(UserContext);

  // React to print
  const componentRef = useRef(null);
  const handlePrint = useReactToPrint({
    content: () => componentRef.current,
  });

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
    setIsLoading(true);
    constructArrayForBackend();
    try {
      const res = await axios.post(`${baseURL}/orderItems`, cartItems);
      const arrayIDs = res.data;
      console.log(arrayIDs);
      if (arrayIDs.length < 0) {
        throw new Error("Ordered Items cannot be empty");
      }
      const orderPlace = await axios({
        method: "POST",
        url: `${baseURL}/orders`,
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
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <>
      <Dialog>
        <DialogTrigger asChild>
          <Button>Place Order</Button>
        </DialogTrigger>
        <DialogContent className=" w-[450px]">
          <DialogHeader>
            <DialogTitle>Order Summary</DialogTitle>
            <DialogDescription>
              This is your order details. Please click place order when you want
              to order.
            </DialogDescription>
          </DialogHeader>
          {/* body here */}
          {cart.items.length === 0 ? (
            <p>Your cart is empty.</p>
          ) : (
            <div ref={componentRef}>
              <Table className="divide-y divide-gray-200 lg:w-[350px] min-w-full">
                <TableCaption>Cart Items</TableCaption>
                <TableHeader className="bg-gray-500">
                  <TableRow className="px-6 py-3 text-left  text-xs font-medium bg-gray-900 uppercase tracking-wider">
                    <TableHead className="text-white">Name</TableHead>
                    <TableHead className="text-white">Price</TableHead>
                    <TableHead className="text-white">Quantity</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody className="bg-white divide-y divide-gray-200">
                  {cart.items.map((item) => (
                    <CartItemsCard item={item} hidden={true} />
                  ))}
                </TableBody>
              </Table>
              <div className="flex flex-row justify-between m-4">
                <div className="flex flex-row w-[160px] justify-between ml-4">
                  <div className="bg-black text-white p-2">Total Price: </div>
                  <div className="p-2">{cartTotal}</div>
                </div>
              </div>
            </div>
          )}

          <DialogFooter>
            <Button onClick={handlePrint}>Print order</Button>
            <DialogClose>
              <Button
                disabled={isLoading}
                className="mr-2 mb-2 w-full"
                onClick={handleOrderPlacement}
              >
                {isLoading ? (
                  <>
                    <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                    Please wait
                  </>
                ) : (
                  "Place Order"
                )}
              </Button>
            </DialogClose>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </>
  );
};

export default OrderSummary;
