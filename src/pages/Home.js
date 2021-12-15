import axios from "axios";
import { useEffect, useState } from "react";
import CryptoList from "../components/CryptoList";
import Search from "../components/Search";
import { toast } from "react-hot-toast";
const Home = () => {
  const [cryptoList, setCryptoList] = useState([]);
  const [filteredList, setFilteredList] = useState([]);

  useEffect(() => {
    getAllCrypto();
  }, []);

  const filterCrypto = (symbol) => {
    const result = cryptoList.filter((item) =>
      item.symbol.startsWith(symbol.toLowerCase())
    );
    if (result.length > 0) {
      setFilteredList(result);
    } else {
      if (symbol.length >= 3) {
        toast.error("Not Found");
      }
      setFilteredList(cryptoList);
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
      <h2 className="text-center font-bold text-2xl font-readexPro">
        Coins by MarketCap
      </h2>
      <CryptoList
        cryptoList={filteredList.length > 0 ? filteredList : cryptoList}
      />
    </div>
  );
};

export default Home;
