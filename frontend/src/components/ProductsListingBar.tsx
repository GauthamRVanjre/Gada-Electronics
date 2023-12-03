// ProductsListingBar.tsx
import { productTypes } from "@/lib/types/product";
import axios from "axios";
import React, { useEffect, useState } from "react";
import toast from "react-hot-toast";

const ProductsListingBar: React.FC = () => {
  const [products, setProducts] = useState<productTypes[]>([]);

  const fetchProducts = async () => {
    await axios
      .get("http://localhost:5555/products")
      .then((response) => setProducts(response.data))
      .catch((error) => toast.error(error.message));
  };

  useEffect(() => {
    fetchProducts();
  }, []);

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-8">
      {products.map((product) => (
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
              <p className="text-gray-600 mt-2 p-2 w-fit">{product.category}</p>
              <p className="text-white mt-2 bg-blue-600 p-2 w-fit">
                Add to Cart
              </p>
            </div>
          </div>
          {/* Add buttons or additional actions if needed */}
        </div>
      ))}
    </div>
  );
};

export default ProductsListingBar;
