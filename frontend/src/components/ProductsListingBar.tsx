// ProductsListingBar.tsx
import { productTypes } from "@/lib/types/product";
import axios from "axios";
import React, { useEffect, useState } from "react";
import toast from "react-hot-toast";
import ProductCard from "./ProductCard";
import { useSelector } from "react-redux";
import { RootState } from "@/redux/store/store";
const baseURL = import.meta.env.VITE_BASE_URL;

interface ProductsListingProps {
  price: number;
  selectedCategories: string[];
}

const ProductsListingBar: React.FC<ProductsListingProps> = ({
  price,
  selectedCategories,
}) => {
  const [products, setProducts] = useState<productTypes[]>([]);
  const cartProducts = useSelector((state: RootState) => state.cart.items);

  const fetchProducts = async () => {
    await axios
      .get(`${baseURL}/products/`)
      .then((response) => setProducts(response.data))
      .catch((error) => toast.error(error.message));
  };

  useEffect(() => {
    fetchProducts();
  }, []);

  const filteredProducts = products
    .filter((product) => product.price < price)
    .filter(
      (product) =>
        selectedCategories.length === 0 ||
        selectedCategories.some((category) =>
          product.category.includes(category)
        )
    );

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-8">
      {filteredProducts.map((product) => (
        <ProductCard
          key={product._id}
          product={product}
          cartProducts={cartProducts}
        />
      ))}
      {filteredProducts.length === 0 && <div>No products found</div>}
    </div>
  );
};

export default ProductsListingBar;
