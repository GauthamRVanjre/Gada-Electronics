import UserContext from "@/context/userContext";
import { cartProduct, productTypes } from "@/lib/types/product";
import { addToCart, subtractFromCart } from "@/redux/cartSlice";
import React, { useContext, useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { Button } from "./ui/button";

interface ProductCardProps {
  product: productTypes;
  cartProducts: cartProduct[];
}
const ProductCard: React.FC<ProductCardProps> = ({ product, cartProducts }) => {
  // navigate to navigate the user to login if he is not logged in
  const navigate = useNavigate();

  // check if the product exists in the cart
  const productExists = cartProducts.find((item) => item._id === product._id);

  // product quantity tracker
  const [productQuantityExceeds, setProductQuantityExceeds] = useState(false);

  useEffect(() => {
    // check if the product exceed the specified quantity
    if (productExists && productExists?.quantity >= product.quantity) {
      setProductQuantityExceeds(true);
    } else {
      setProductQuantityExceeds(false);
    }
  }, [productExists?.quantity]);

  // user context to check if user is logged in
  const { user } = useContext(UserContext);

  // redux dispatch function to add the product to the cart
  const dispatch = useDispatch();

  // function to handle product clicks(add to cart)
  const handleProductClick = (product: productTypes) => {
    if (user === null) {
      navigate("/login");
    } else {
      dispatch(
        addToCart({
          _id: product._id,
          name: product.name,
          quantity: 1,
          image: product.image,
          price: product.price,
        })
      );
    }
  };

  return (
    <div
      key={product._id}
      className="bg-white rounded-lg overflow-hidden shadow-md transform transition-transform hover:scale-110 cursor-pointer"
    >
      <img
        src={product.image}
        alt={product.name}
        className="w-full h-40 object-fill"
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
        <div className="flex lg:flex-row flex-col justify-between mt-4">
          <p className="text-white mt-2 p-2 w-fit bg-gray-800">
            #{product.category}
          </p>
          {!productExists ? (
            <p
              onClick={() => handleProductClick(product)}
              className="text-white mt-2 bg-blue-600 p-2 w-fit"
            >
              Add to Cart
            </p>
          ) : (
            <div className="flex items-center space-x-2">
              <Button
                className="bg-gray-800 text-white px-2 py-1"
                onClick={() => dispatch(subtractFromCart(product._id))}
              >
                -
              </Button>
              <span>{productExists?.quantity}</span>
              <Button
                disabled={productQuantityExceeds}
                className="bg-gray-800 text-white px-2 py-1"
                onClick={() => handleProductClick(product)}
              >
                +
              </Button>
            </div>
          )}
        </div>
      </div>
      {/* Add buttons or additional actions if needed */}
    </div>
  );
};

export default ProductCard;
