import { FiSearch } from "react-icons/fi";

function Search({ searchInput, setSearchInput }) {
  return (
    <div className="w-full flex items-center justify-center bg-[#131313]">
      <div className="p-2 m-5 relative bg-[#09090b] w-1/4 border-2 rounded-xl border-[#2f2f2f]">
        <input
          className="outline-none w-[90%] bg-[#09090b] placeholder:text-white/50 text-white p-2"
          type="text"
          value={searchInput}
          placeholder="Search..."
          onChange={(e) => setSearchInput(e.target.value)}
        />
        <button className="bg-white transition hover:bg-[#dfdfdf] active:bg-[#c2c2c2] absolute top-1/2 -translate-y-1/2 right-3 p-2 rounded-lg">
          <FiSearch color="black" />
        </button>
      </div>
    </div>
  );
}

export default Search;
