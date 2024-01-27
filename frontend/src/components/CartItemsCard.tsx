import { cartProduct } from "@/lib/types/product";
import React from "react";
import { useDispatch } from "react-redux";
import {
  removeFromCart,
  subtractFromCart,
  addToCart,
} from "../redux/cartSlice";
import { TableRow, TableCell } from "./ui/table";

interface CartItemsCardProps {
  item: cartProduct;
  hidden?: boolean;
}
const CartItemsCard: React.FC<CartItemsCardProps> = ({ item, hidden }) => {
  const dispatch = useDispatch();

  return (
    <TableRow key={item._id}>
      <TableCell className="px-6 py-4 whitespace-nowrap">{item.name}</TableCell>
      <TableCell hidden={hidden} className="px-6 py-4 whitespace-nowrap">
        <img
          src={item.image}
          alt="item image"
          className="w-40 h-40 object-cover"
        />
      </TableCell>
      <TableCell className="px-6 py-4 whitespace-nowrap">
        ${item.price.toFixed(2)}
      </TableCell>
      <TableCell className="px-6 py-4 whitespace-nowrap">
        <div className="flex items-center space-x-2">
          <button
            hidden={hidden}
            className="bg-gray-800 text-white px-2 py-1"
            onClick={() => dispatch(subtractFromCart(item._id))}
          >
            -
          </button>
          <span>{item.quantity}</span>
          <button
            hidden={hidden}
            className="bg-gray-800 text-white px-2 py-1"
            onClick={() =>
              dispatch(
                addToCart({
                  name: item.name,
                  quantity: item.quantity + 1,
                  _id: item._id,
                  image: item.image,
                  price: item.price,
                })
              )
            }
          >
            +
          </button>
        </div>
      </TableCell>
      <TableCell hidden={hidden} className="px-6 py-4 whitespace-nowrap ">
        <svg
          fill="#000000"
          version="1.1"
          id="Capa_1"
          xmlns="http://www.w3.org/2000/svg"
          width="40px"
          height="40px"
          viewBox="0 0 485 485"
          className="cursor-pointer"
          onClick={() => dispatch(removeFromCart(item._id))}
        >
          <g>
            <g>
              <rect x="67.224" width="350.535" height="71.81" />
              <path
                d="M417.776,92.829H67.237V485h350.537V92.829H417.776z M165.402,431.447h-28.362V146.383h28.362V431.447z M256.689,431.447
			h-28.363V146.383h28.363V431.447z M347.97,431.447h-28.361V146.383h28.361V431.447z"
              />
            </g>
          </g>
        </svg>
      </TableCell>
    </TableRow>
  );
};

export default CartItemsCard;
