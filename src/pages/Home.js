import axios from "axios";
import { useEffect, useState } from "react";
import CryptoList from "../components/CryptoList";
import Search from "../components/Search";

const Home = () => {
  const [cryptoList, setCryptoList] = useState([]);
  const [filteredList, setFilteredList] = useState([]);

  useEffect(() => {
    getAllCrypto();
  }, []);

  const filterCrypto = (symbol) => {
    const result = cryptoList.filter(
      (item) => item.symbol === symbol.toLowerCase()
    );
    if (result.length > 0) {
      setFilteredList(result);
    }
  };

  const getAllCrypto = () => {
    axios
      .get(
        `https://api.coingecko.com/api/v3/coins/markets?vs_currency=inr&order=market_cap_desc&per_page=100&page=1&sparkline=false`
      )
      .then((res) => {
        setCryptoList(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };
  return (
    <div className=" w-full md:w-1/2 bg-gray-100 home">
      <Search filterCrypto={filterCrypto} />
      <CryptoList
        cryptoList={filteredList.length > 0 ? filteredList : cryptoList}
      />
    </div>
  );
};

export default Home;
