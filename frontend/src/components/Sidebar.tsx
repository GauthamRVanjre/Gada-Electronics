const Sidebar = () => {
  return (
    <>
      <div className="mb-4">
        <h2 className="text-lg font-bold mb-2">Filter Options</h2>
        {/* Add price range filters */}
        <label className="block mb-2">
          Price Range:
          {/* Add your price range input/select components here */}
        </label>
      </div>
      <div>
        <h2 className="text-lg font-bold mb-2">Categories</h2>
        {/* Add category filters */}
        <label className="block mb-2">
          <input type="checkbox" className="mr-2" />
          Category 1
        </label>
        <label className="block mb-2">
          <input type="checkbox" className="mr-2" />
          Category 2
        </label>
        {/* Add more category options as needed */}
      </div>
    </>
  );
};

export default Sidebar;
