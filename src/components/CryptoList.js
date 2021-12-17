import CryptoListItem from "./CryptoListItem";

const CryptoList = ({ cryptoList }) => {
  return (
    <div className="flex flex-col p-4 w-full">
      {cryptoList.map((item) => {
        return (
          <CryptoListItem
            image={item.image}
            symbol={item.symbol}
            name={item.name}
            price={item.current_price}
            percentage={item.price_change_percentage_24h}
            key={item.id}
            id={item.id}
          />
        );
      })}
    </div>
  );
};

export default CryptoList;
