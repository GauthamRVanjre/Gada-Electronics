// ProductsListingBar.tsx
import React from "react";

const ProductsListingBar: React.FC = () => {
  // Dummy data for demonstration
  const products = [
    {
      id: 1,
      name: "Product 1",
      price: "$19.99",
      image: "https://i.dummyjson.com/data/products/1/thumbnail.jpg",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      category: "Electronics",
      quantity: 10,
    },
    {
      id: 2,
      name: "Product 2",
      price: "$29.99",
      image: "https://i.dummyjson.com/data/products/2/thumbnail.jpg",
      description:
        "Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      category: "Clothing",
      quantity: 15,
    },
    {
      id: 3,
      name: "Product 3",
      price: "$39.99",
      image: "https://i.dummyjson.com/data/products/3/thumbnail.jpg",
      description:
        "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris.",
      category: "Home & Garden",
      quantity: 8,
    },
    // Add more product data as needed
  ];

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-8">
      {products.map((product) => (
        <div
          key={product.id}
          className="bg-white rounded-lg overflow-hidden shadow-md"
        >
          <img
            src={product.image}
            alt={product.name}
            className="w-full h-40 object-cover"
          />
          <div className="p-4">
            <h2 className="text-xl font-bold mb-2">{product.name}</h2>
            <p className="text-gray-600 mb-2">{product.price}</p>
            <p className="text-gray-800">{product.description}</p>
            <p className="text-gray-600 mt-2">Category: {product.category}</p>
            <p className="text-gray-600">Quantity: {product.quantity}</p>
          </div>
          {/* Add buttons or additional actions if needed */}
        </div>
      ))}
    </div>
  );
};

export default ProductsListingBar;
