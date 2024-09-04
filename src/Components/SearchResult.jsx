import axios from "axios";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { toast } from "react-toastify";
import Loader from "../Utils/Loader";
import LineChart from "../Utils/LineChart";


const SearchResult = () => {
  const [historicalData, setHistoricalData] = useState(null);
  const [loading, setLoading] = useState(false);
  const param = useParams();
  const cryptoId = param.id;
  const getAllCrypto = useSelector((item) => item.getAllCrypto.data);
  const searchedCrypto = getAllCrypto.find((item) => item.id === cryptoId);
  const currencysymbols = useSelector(
    (state) => state.getAllCrypto.currencySymbols
  );
  const currency = useSelector((state) => state.getAllCrypto.currency);
  console.log("currency", currency);
  console.log("historicalData", historicalData);
  console.log(searchedCrypto);

  const getHistoricalData = async (currency) => {
    setLoading(true);
    if (currency && searchedCrypto) {
      try {
        // interval=daily for 1 data for 1 day
        const response = await axios.get(
          `https://api.coingecko.com/api/v3/coins/${cryptoId}/market_chart?vs_currency=${currency}&days=10&interval=daily`,
          {
            headers: {
              accept: "application/json",
              "x-cg-demo-api-key": "CG-u4oatFacLBnJXLZtvwVWjtt5",
            },
          }
        );
        setHistoricalData(response.data);
        toast.success("successfully fetched historical data");
      } catch (error) {
        console.error(error);
        toast.error("error in fetching data. try again");
      }
    } else {
      toast.error("no currency selected to show data");
    }
    setLoading(false);
  };

  useEffect(() => {
    getHistoricalData(currency);
  }, [currency, searchedCrypto]);

  return (
    <>
      {loading && <Loader />}
      <section className="bg-slate-900">
        <div className="bg-slate-900 flex items-center justify-center flex-col">
          <img src={searchedCrypto?.image} className="h-28 w-28" />
          <p className=" text-teal-300 font-semibold text-2xl">
            {searchedCrypto?.name + "-" + searchedCrypto?.symbol.toUpperCase()}
          </p>
        </div>
        <div className="p-4">
          {historicalData && (
            <LineChart
            historicalData={historicalData}
            />
          )
          }
        </div>
        <div className="flex items-center justify-center flex-col gap-4 text-teal-300">
          <ul className="flex gap-2">
            <li>Crypto Market Cap Rank -</li>
            <li>{searchedCrypto?.market_cap_rank}</li>
          </ul>
          <ul className="flex gap-2">
            <li>Current Price -</li>
            <li>{currencysymbols} {searchedCrypto?.current_price.toLocaleString()}</li>
          </ul>
          <ul className="flex gap-2">
            <li>Market Cap -</li>
            <li>{currencysymbols} {searchedCrypto?.market_cap.toLocaleString()}</li>
          </ul>
          <ul className="flex gap-2">
            <li>24H High -</li>
            <li>{currencysymbols} {searchedCrypto?.high_24h.toLocaleString()}</li>
          </ul>
          <ul className="flex gap-2">
            <li>24H Low -</li>
            <li>{currencysymbols} {searchedCrypto?.low_24h.toLocaleString()}</li>
          </ul>
        </div>
      </section>
    </>
  );
};

export default SearchResult;
