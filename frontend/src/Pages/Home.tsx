// Home.tsx
import Navbar from "@/components/Navbar";
import ProductsListingBar from "@/components/ProductsListingBar";
import Sidebar from "@/components/Sidebar";
import React from "react";

const Home: React.FC = () => {
  return (
    <div>
      {/* Navbar */}
      <Navbar />

      {/* Hero Section */}
      <div className="bg-gray-800 text-white py-16">
        <div className="container mx-auto text-center">
          <h1 className="text-4xl font-bold mb-4">
            Welcome to Gada Electronics
          </h1>
          <p className="text-lg">Best price on Best Brand</p>
        </div>
      </div>

      {/* Main Content */}
      <div className="container mx-auto mt-8 flex flex-col md:flex-row">
        {/* Sidebar */}
        {/* Sidebar (For larger screens) */}
        <div className="md:w-1/4 md:pr-8 hidden md:block">
          <Sidebar />
        </div>

        {/* Sidebar (for smaller screens) */}
        <div className="md:hidden mb-4">
          <Sidebar />
        </div>

        {/* Product Listing */}
        <div className="w-3/4">
          <ProductsListingBar />
        </div>
      </div>
    </div>
  );
};

export default Home;
