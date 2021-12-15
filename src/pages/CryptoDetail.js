import { useParams, Link } from "react-router-dom";
import axios from "axios";
import { useEffect, useRef, useState } from "react";
const CryptoDetail = () => {
  const { id } = useParams();
  const hasFetchedData = useRef(false);
  const [detail, setDetail] = useState({});
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (!hasFetchedData.current) {
      axios
        .get(`https://api.coingecko.com/api/v3/coins/${id}`)
        .then((res) => {
          console.log(res.data);
          setDetail(res.data);
          setLoading(false);
        })
        .catch((error) => {
          console.log(error);
        });
      hasFetchedData.current = true;
    }
  }, [id]);

  const parseDate = (date) => {
    let resultDate = new Date(date);
    let athDate =
      resultDate.getDate() +
      "." +
      resultDate.getMonth() +
      "." +
      resultDate.getFullYear();
    return athDate;
  };

  return (
    <div className="p-6  w-full md:w-1/2 flex flex-col justify-center items-center bg-gray-100 home">
      {loading ? (
        <p>Loading....</p>
      ) : (
        <>
          <div className="flex justify-between items-center w-full">
            <div className="flex justify-start items-center">
              <img
                src={detail.image.large}
                alt={detail.name}
                className="w-10 h-10 md:w-20 md:h-20"
              />
              <div className="flex flex-col ml-4">
                <span className="font-bold font-readexPro text-xl  md:text-3xl">
                  {detail.symbol.toUpperCase()}
                </span>
                <span className="font-normal md:text-xl text-slate-500">
                  {detail.name}
                </span>
              </div>
            </div>
            <div
              className="text-2xl font-bold font-readexPro flex justify-center items-center"
              title="market Cap Rank"
            >
              #{detail.market_cap_rank}
            </div>
          </div>
          <div className="m-4 bg-gray-200 flex flex-col justify-center items-center rounded-lg p-2  w-full">
            <p className=" text-xl">Current Price</p>
            <span className="font-bold font-readexPro text-3xl">
              &#8377; {detail.market_data.current_price.inr}
            </span>
          </div>
          <div className="bg-gray-200 p-2 flex flex-col justify-center items-center rounded-lg m-4  w-full">
            <p className=" text-xl">All Time High</p>
            <span className="font-bold font-readexPro text-3xl">
              &#8377; {detail.market_data.ath.inr}
            </span>
            <p>
              on <span>{parseDate(detail.market_data.ath_date.inr)}</span>
            </p>
          </div>
          <div className="bg-gray-200 p-2 flex flex-col justify-center items-center rounded-lg m-4  w-full">
            <p className=" text-xl">Price Change</p>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 m-2">
              <div
                className={`col-span-1 flex flex-col justify-center items-center rounded-lg text-white px-3 py-1 ${
                  detail.market_data.price_change_percentage_1h_in_currency
                    .inr > 0
                    ? "bg-green-500"
                    : "bg-red-500"
                }`}
              >
                <div className="">1H</div>
                <div>
                  {detail.market_data.price_change_percentage_1h_in_currency.inr.toFixed(
                    2
                  )}{" "}
                  %
                </div>
              </div>
              <div
                className={`col-span-1 flex flex-col justify-center items-center rounded-lg text-white px-3 py-1 ${
                  detail.market_data.price_change_percentage_24h_in_currency
                    .inr > 0
                    ? "bg-green-500"
                    : "bg-red-500"
                }`}
              >
                <div className="">1D</div>
                <div>
                  {detail.market_data.price_change_percentage_24h_in_currency.inr.toFixed(
                    2
                  )}{" "}
                  %
                </div>
              </div>
              <div
                className={`col-span-1 flex flex-col justify-center items-center rounded-lg text-white px-3 py-1 ${
                  detail.market_data.price_change_percentage_30d_in_currency
                    .inr > 0
                    ? "bg-green-500"
                    : "bg-red-500"
                }`}
              >
                <div className="">1M</div>
                <div>
                  {detail.market_data.price_change_percentage_30d_in_currency.inr.toFixed(
                    2
                  )}{" "}
                  %
                </div>
              </div>
              <div
                className={`col-span-1 flex flex-col justify-center items-center rounded-lg text-white px-3 py-1 ${
                  detail.market_data.price_change_percentage_1y_in_currency
                    .inr > 0
                    ? "bg-green-500"
                    : "bg-red-500"
                }`}
              >
                <div className="">1Y</div>
                <div>
                  {detail.market_data.price_change_percentage_1y_in_currency.inr.toFixed(
                    2
                  )}{" "}
                  %
                </div>
              </div>
            </div>
          </div>
          <div className="flex justify-center items-center m-4">
            <Link
              className="bg-indigo-500 px-3 py-1 rounded-lg text-white font-bold"
              to="/"
            >
              Back to Home
            </Link>
          </div>
        </>
      )}
    </div>
  );
};

export default CryptoDetail;
