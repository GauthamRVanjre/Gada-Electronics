// Home.tsx
import Hero from "@/components/Hero";
import Navbar from "@/components/Navbar";
import ProductsListingBar from "@/components/ProductsListingBar";
import Sidebar from "@/components/Sidebar";
import React, { useState } from "react";

const Home: React.FC = () => {
  const [price, setPrice] = useState([500]);
  const [selectedCategories, setSelectedCategories] = useState<string[]>([]);
  // Function to handle checkbox change
  const handleCheckboxChange = (categoryId: string) => {
    setSelectedCategories((prevSelectedCategories) => {
      if (prevSelectedCategories.includes(categoryId)) {
        // If category is already selected, remove it
        return prevSelectedCategories.filter((id) => id !== categoryId);
      } else {
        // If category is not selected, add it
        return [...prevSelectedCategories, categoryId];
      }
    });
  };

  return (
    <div>
      {/* Navbar */}
      <Navbar />

      {/* Hero Section */}
      <Hero />

      {/* Main Content */}
      <div className="container mx-auto mt-8 flex flex-col md:flex-row">
        {/* Sidebar */}
        {/* Sidebar (For larger screens) */}
        <div className="md:w-1/4 md:pr-8 hidden md:block">
          <Sidebar
            price={price}
            setPrice={setPrice}
            selectedCategories={selectedCategories}
            handleCheckboxChange={handleCheckboxChange}
          />
        </div>

        {/* Sidebar (for smaller screens) */}
        <div className="md:hidden mb-4">
          <Sidebar
            price={price}
            setPrice={setPrice}
            selectedCategories={selectedCategories}
            handleCheckboxChange={handleCheckboxChange}
          />
        </div>

        {/* Product Listing */}
        <div className="w-3/4">
          <ProductsListingBar
            price={price[0]}
            selectedCategories={selectedCategories}
          />
        </div>
      </div>
    </div>
  );
};

export default Home;
