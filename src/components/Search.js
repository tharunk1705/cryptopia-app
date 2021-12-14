import { useRef } from "react";

const Search = ({ filterCrypto }) => {
  const inputRef = useRef("");
  const searchHandler = () => {
    filterCrypto(inputRef.current.value);
  };
  return (
    <div className="flex flex-col md:flex-row justify-center w-full p-10 ">
      <input
        type="text"
        name="searchKey"
        ref={inputRef}
        placeholder="Search for any symbol eg.BTC"
        className="border-2 border-indigo-500 rounded-md px-3 py-1 md:mx-2 focus:outline-none focus:ring-2"
      />
      <button
        className="bg-indigo-500 px-5 py-2 rounded-md shadow-xl my-2 md:my-0 shadow-indigo-200 text-white font-semibold "
        onClick={searchHandler}
      >
        Search
      </button>
    </div>
  );
};

export default Search;
