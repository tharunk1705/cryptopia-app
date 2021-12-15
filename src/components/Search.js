import { useRef } from "react";
import toast from "react-hot-toast";

const Search = ({ filterCrypto }) => {
  const inputRef = useRef("");
  const searchHandler = () => {
    if (inputRef.current.value === "") {
      toast("Input cannot be empty!", {
        icon: "⚠️",
      });
    }
    filterCrypto(inputRef.current.value);
  };
  const onChangeHandler = (event) => {
    filterCrypto(event.target.value);
  };
  return (
    <div className="flex flex-col md:flex-row justify-center w-full p-10 ">
      <input
        type="text"
        name="searchKey"
        ref={inputRef}
        onChange={onChangeHandler}
        placeholder="Search for any symbol eg.BTC"
        className="md:w-3/5 border-2 border-indigo-500 rounded-md px-3 py-1 md:mx-2 focus:outline-none focus:ring-2"
      />
      <button
        className="bg-indigo-500 px-5 py-2 rounded-md shadow-xl my-2 md:my-0 shadow-indigo-200 text-white font-semibold hover:bg-indigo-800 active:scale-95"
        onClick={searchHandler}
      >
        Search
      </button>
    </div>
  );
};

export default Search;
