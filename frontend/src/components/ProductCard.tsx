import { productTypes } from "@/lib/types/product";
import React from "react";

interface ProductCardProps {
  product: productTypes;
}
const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
  return (
    <div
      key={product._id}
      className="bg-white rounded-lg overflow-hidden shadow-md transform transition-transform hover:scale-110 cursor-pointer"
    >
      <img
        src={product.image}
        alt={product.name}
        className="w-full h-40 object-cover"
      />
      <div className="p-4">
        <h2 className="text-xl font-bold mb-2">{product.name}</h2>
        <div className="flex flex-row justify-between">
          <p className="font-medium text-2xl">₹{product.price}</p>

          <div className="flex flex-row">
            <p className="text-gray-500">Available stock: </p>
            <p className="font-medium text-2xl ml-2">{product.quantity}</p>
          </div>
        </div>
        <p className="text-gray-800 mt-2">
          {product.description.slice(0, 50)}...
        </p>
        <div className="flex flex-row justify-between mt-4">
          <p className="text-white mt-2 p-2 w-fit bg-gray-800">
            #{product.category}
          </p>
          <p className="text-white mt-2 bg-blue-600 p-2 w-fit">Add to Cart</p>
        </div>
      </div>
      {/* Add buttons or additional actions if needed */}
    </div>
  );
};

export default ProductCard;
