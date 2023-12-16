import { cartProduct } from "@/lib/types/product";
import React from "react";

interface CartItemsCardProps {
  item: cartProduct;
}
const CartItemsCard: React.FC<CartItemsCardProps> = ({ item }) => {
  return (
    <tr key={item._id}>
      <td className="px-6 py-4 whitespace-nowrap">{item.name}</td>
      <td className="px-6 py-4 whitespace-nowrap">${item.price.toFixed(2)}</td>
      <td className="px-6 py-4 whitespace-nowrap">
        <div className="flex items-center space-x-2">
          <button className="bg-gray-800 text-white px-2 py-1">-</button>
          <span>{item.quantity}</span>
          <button className="bg-gray-800 text-white px-2 py-1">+</button>
        </div>
      </td>
    </tr>
  );
};

export default CartItemsCard;
