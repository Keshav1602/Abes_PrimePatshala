import { useEffect, useState } from "react";

const useGetProducts = (searchText = "") => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(false);

  const getData = async () => {
    try {
      setLoading(true);
      const resp = await fetch(
        `http://localhost:9000/api/v1/products?q=${searchText}`,
        {
          method: "GET",
        }
      );
      const result = await resp.json();
      setProducts(result.data.products || []); // Ensure products is an array
    } catch (err) {
      console.error("Error fetching products:", err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    // if (searchText.trim() !== "") {
    getData();
    // }
  }, [searchText]); // Re-run when searchText changes

  return { products, loading };
};

export { useGetProducts };
