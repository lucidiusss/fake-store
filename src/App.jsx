import Header from "./components/Header.jsx";
import Banner from "./components/Banner.jsx";
import Search from "./components/Search.jsx";
import Cards from "./components/Cards.jsx";

import axios from "axios";
import { useDebounce } from "use-debounce";

import { useState, useEffect } from "react";

function App() {
  const [items, setItems] = useState([]);
  const [searchInput, setSearchInput] = useState("");
  const [debouncedSearchInput] = useDebounce(searchInput, 500);

  useEffect(() => {
    async function fetchData() {
      const res = await axios.get(
        "https://api.escuelajs.co/api/v1/products?offset=15&limit=10"
      );
      setItems(res.data);
    }
    fetchData();
  }, []);

  useEffect(() => {
    async function fetchData() {
      if (debouncedSearchInput.length > 0) {
        const res = await axios.get(
          `https://api.escuelajs.co/api/v1/products?title=${debouncedSearchInput}`
        );
        setItems(res.data);
      } else if (debouncedSearchInput.length === 0) {
        const res = await axios.get(
          "https://api.escuelajs.co/api/v1/products?offset=15&limit=10"
        );
        setItems(res.data);
      }
    }

    fetchData();
  }, [debouncedSearchInput]);

  return (
    <>
      <Header />
      <Banner />
      <Search searchInput={searchInput} setSearchInput={setSearchInput} />
      <div className="mx-20 my-5">
        <h1 className="text-3xl font-bold text-[#e8eaea]">New Arrivals</h1>
        <p className="text-md font-light  text-[#c9cccf]">
          Check out the latest products
        </p>
      </div>
      <Cards items={items} debouncesdSearchInput={debouncedSearchInput} />
      <div className="py-20 w-full bg-[#131313] flex items-center">
        <h1 className="mx-auto text-4xl font-thin text-[#e8eaea]">
          Free shipping on orders over $49
        </h1>
      </div>
    </>
  );
}

export default App;
