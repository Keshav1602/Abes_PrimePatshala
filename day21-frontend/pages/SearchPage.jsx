import React, { useState } from "react";
import { useGetProducts } from "../hooks/useGetProducts";

const SearchPage = () => {
  const [searchText, setSearchText] = useState("");
  const [triggerSearch, setTriggerSearch] = useState(false);
  const { products, loading } = useGetProducts(triggerSearch ? searchText : "");

  const handleSearch = () => {
    setTriggerSearch(true); // Trigger the search when the button is clicked
  };

  return (
    <div className="p-6">
      <div className="flex items-center gap-4 mb-6">
        <input
          type="text"
          value={searchText}
          onChange={(e) => {
            setSearchText(e.target.value);
            setTriggerSearch(false); // Reset the trigger when typing
          }}
          className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          placeholder="Search for products..."
        />
        <button
          type="button"
          onClick={handleSearch} // Call the search handler
          className="px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600"
        >
          Search
        </button>
      </div>
      <div>
        {loading ? (
          <div>
            <h1 className="text-2xl font-bold mb-4">products</h1>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
            {Array.from({ length: 6 }).map((_, index) => (
              <div
              key={index}
              className="border border-gray-300 rounded-md p-4 shadow-xl animate-pulse"
              >
                <div className="h-6 bg-gray-300 rounded mb-4"></div>
                <div className="h-4 bg-gray-300 rounded mb-2"></div>
                <div className="h-4 bg-gray-300 rounded mb-2"></div>
                <div className="h-4 bg-gray-300 rounded"></div>
              </div>
            ))}
            </div>
          </div>
        ) : (
          <div>
            <h1 className="text-2xl font-bold mb-4">products</h1>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
              {products.map((product) => {
                return (
                  <div
                    className="border border-gray-300 rounded-md p-4 shadow-xl"
                    key={product._id}
                  >
                    <h2 className="text-lg font-semibold mb-2">
                      {product.title}
                    </h2>
                    <p className="text-gray-600 mb-2">{product.description}</p>
                    <p className="text-blue-500 font-bold mb-2">
                      Price: ${product.price}
                    </p>
                    <p className="text-gray-500">Stock: {product.stock}</p>
                  </div>
                );
              })}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default SearchPage;
