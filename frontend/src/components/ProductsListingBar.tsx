// ProductsListingBar.tsx
import { productTypes } from "@/lib/types/product";
import axios from "axios";
import React, { useEffect, useState } from "react";
import toast from "react-hot-toast";
import ProductCard from "./ProductCard";

interface ProductsListingProps {
  price: number;
  selectedCategories: string[];
}

const ProductsListingBar: React.FC<ProductsListingProps> = ({
  price,
  selectedCategories,
}) => {
  const [products, setProducts] = useState<productTypes[]>([]);

  const fetchProducts = async () => {
    await axios
      .get(`http://localhost:5555/products/`)
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
        <ProductCard key={product._id} product={product} />
      ))}
    </div>
  );
};

export default ProductsListingBar;
