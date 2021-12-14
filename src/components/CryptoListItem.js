const CryptoListItem = ({ image, symbol, name, price, percentage }) => {
  return (
    <div className="grid gap-1 grid-cols-10 w-full bg-white border-gray-200 hover:bg-gray-100 hover:cursor-pointer border-2 shadow-md rounded-lg my-2 p-2">
      <div className="col-span-1 flex justify-center items-center">
        <img src={image} alt={name} className="h-6 w-6" />
      </div>
      <div className="col-span-4 pl-1">
        <div className="font-semibold font-readexPro">
          {symbol.toUpperCase()}
        </div>
        <div className="font-light ">{name}</div>
      </div>
      <div className="col-span-3 flex justify-end items-center font-readexPro text-lg pr-2">
        &#8377; {price.toString().length > 8 ? price.toFixed(3) : price}
      </div>
      <div className="col-span-2 flex justify-center items-center text-white ">
        <span
          className={` ${
            percentage > 0 ? "bg-green-500" : "bg-red-500"
          }  rounded-lg px-2 py-1`}
        >
          {percentage.toFixed(2)}%
        </span>
      </div>
    </div>
  );
};

export default CryptoListItem;
