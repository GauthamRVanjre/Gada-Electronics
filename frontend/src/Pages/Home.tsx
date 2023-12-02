// Home.tsx
import Navbar from "@/components/Navbar";
import React from "react";

const Home: React.FC = () => {
  return (
    <div>
      {/* Navbar */}
      <Navbar />

      {/* Hero Section */}
      <div className="bg-gray-800 text-white py-16">
        <div className="container mx-auto text-center">
          <h1 className="text-4xl font-bold mb-4">Welcome to Our Shop</h1>
          <p className="text-lg">
            Discover a wide range of high-quality products.
          </p>
        </div>
      </div>

      {/* Main Content */}
      <div className="container mx-auto mt-8 flex">
        {/* Sidebar */}
        <aside className="w-1/4 pr-8">
          {/* Add your filter options and categories here */}
          <div className="mb-4">
            <h2 className="text-lg font-bold mb-2">Price Range</h2>
            {/* Add price range filters */}
          </div>
          <div>
            <h2 className="text-lg font-bold mb-2">Categories</h2>
            {/* Add category filters */}
          </div>
        </aside>

        {/* Product Listing */}
        <div className="w-3/4">{/* Add your product listing here */}</div>
      </div>
    </div>
  );
};

export default Home;
