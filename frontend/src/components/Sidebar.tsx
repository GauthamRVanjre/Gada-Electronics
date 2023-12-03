import { Slider } from "@/components/ui/slider";
import { Checkbox } from "@/components/ui/checkbox";
import React, { Dispatch, SetStateAction } from "react";

interface SidebarProps {
  price: number[];
  setPrice: Dispatch<SetStateAction<number[]>>;
  selectedCategories: string[];
  handleCheckboxChange: (categoryId: string) => void;
}

const Sidebar: React.FC<SidebarProps> = ({
  price,
  setPrice,
  selectedCategories,
  handleCheckboxChange,
}) => {
  // categories configuration
  const categories = [
    {
      id: "smartphones",
      label: "Smartphones",
    },
    {
      id: "laptops",
      label: "Laptops",
    },
    {
      id: "lighting",
      label: "Lightings",
    },
    {
      id: "automotive",
      label: "Automotive",
    },
  ] as const;

  return (
    <>
      <div className="mb-4">
        <h2 className="text-lg font-bold mb-2">Filter Options</h2>
        {/* Add price range filters */}
        <label className="block mb-2">
          Price Range: Rs.{price}
          {/* Add your price range input/select components here */}
          <Slider
            className="mt-2"
            defaultValue={[500]}
            max={2000}
            step={50}
            value={price}
            onValueChange={setPrice}
          />
        </label>
      </div>
      <div>
        <h2 className="text-lg font-bold mb-2">Categories</h2>

        {categories.map((category) => {
          return (
            <div className="flex flex-row items-stretch mb-2">
              <Checkbox
                id={category.id}
                checked={selectedCategories.includes(category.id)}
                onCheckedChange={() => handleCheckboxChange(category.id)}
              />
              <div className="grid gap-1.5 leading-none">
                <label htmlFor="terms1" className="pl-2">
                  {category.label}
                </label>
              </div>
            </div>
          );
        })}

        <div>
          <p>Selected Categories: {selectedCategories.join(", ")}</p>
        </div>
      </div>
    </>
  );
};

export default Sidebar;
