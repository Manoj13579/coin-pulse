import { useState } from "react";
import { CiSearch } from "react-icons/ci";
import { useSelector } from "react-redux";
import statusCode from "../../Utils/statusCode";
import Loader from "../../Utils/Loader";
import { useNavigate } from "react-router-dom";

const CryptoTable = () => {

const [searchTerm, setSearchTerm] = useState('');
const [filteredData, setFilteredData] = useState([]);
const getAllCrypto = useSelector(state => state.getAllCrypto.data);
const status = useSelector(state => state.getAllCrypto.status);
const currencysymbols = useSelector(state => state.getAllCrypto.currencySymbols);
const navigate = useNavigate();





if (status === statusCode.LOADING) {
  return <Loader />;
}

if (status === statusCode.ERROR) {
  return (
    <p className="error-state-error">
      Something went wrong !!! please try again later
    </p>
  );
}


const handleSubmit = async (e) => {
  e.preventDefault();
  // getAllCrypto gets data from api so await
  const filtered = await getAllCrypto.filter(item =>
    item.name.toLowerCase().includes(searchTerm.toLowerCase())
  );
  setFilteredData(filtered);
};


 // Default to showing the first 10 results if no filter is applied
 const dataToDisplay = searchTerm ? filteredData : getAllCrypto.slice(0, 10);
  return (
    <>
    {/* Search Input */}
     <section>
<div className="bg-slate-900 flex justify-center items-center flex-col">
      <h1 className="text-white text-3xl font-bold">One Stop To Track Cryptocurrencies</h1>
      <p className="text-white">Monitor real-time prices, trends, and market data instantly </p>
      <p className="text-white">Customize your dashboard and stay updated on all your assets</p>
      </div>
    <form className="bg-slate-900 flex justify-center items-center h-40" onSubmit={handleSubmit}>
      <label className="relative block">
        <span className="sr-only">Search</span>
        <span className="absolute inset-y-0 left-0 flex items-center pl-2">
        <CiSearch className=" text-slate-400"/>
        </span>
        <div className="flex items-center">
        <input
          className="placeholder:italic placeholder:text-slate-400 block bg-white h-10  w-60 md:w-96  border-2 border-slate-400 rounded-md rounded-r-none border-r-0 py-2 pl-9 pr-3 shadow-sm focus:outline-none focus:border-cyan-500 focus:ring-cyan-500 focus:ring-1 text-sm md:text-base  text-slate-400"
          placeholder="Search Crypto Currency..."
          required
          type="text"
          name="search"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          list="coinlist"
        />
        <datalist id="coinlist">
         {getAllCrypto.map((item, index) => (<option key={index} value={item.name} />))}
        </datalist>
        <button type="submit" className="bg-white h-10 w-8 border-2 border-l-0 border-slate-400 rounded-l-0 rounded-r outline-none"><CiSearch className="text-slate-900 w-6 h-6"/></button>
        </div>
      </label>
    </form>
    </section>
    {/* Table */}
    <section className="bg-slate-900 p-6">
  <table className="table-auto border-collapse border border-slate-500 w-full">
    <caption className="caption-top text-teal-300">
      Top ten crypto currencies by market cap today
    </caption>
    <thead>
      <tr>
        <th className="border border-slate-600 p-2 text-teal-300 text-center">#</th>
        <th className="border border-slate-600 p-2 text-teal-300 text-center">Coins</th>
        <th className="border border-slate-600 p-2 text-teal-300 text-center">Price</th>
        <th className="border border-slate-600 p-2 text-teal-300 text-center">24H Change</th>
        <th className="border border-slate-600 p-2 text-teal-300 text-center hidden sm:table-cell">Market Cap</th>
      </tr>
    </thead>
    <tbody>
      {dataToDisplay.slice(0, 10).map((item, index) => (
        <tr key={index} onClick={() => navigate(`/search-result/${item.id}`)} className="cursor-pointer">
          <td className="border border-slate-700 p-2 text-teal-300 text-center">{item.market_cap_rank}</td>
          <td className="border border-slate-700 p-2 text-teal-300 text-center flex gap-2 items-center">
            <img src={item.image} className="w-6 h-6" alt={item.name} />
            {item.name + '-' + item.symbol}
          </td>
          <td className="border border-slate-700 p-2 text-teal-300 text-center">{currencysymbols } {item.current_price.toLocaleString()}</td>
          {/* to change percentage from api to just two numbers behind . */}
          <td className="border border-slate-700 p-2 text-teal-300 text-center"><span className={item.price_change_percentage_24h > 0 ? 'text-green-700' : 'text-red-700'}>{Math.floor(item.price_change_percentage_24h * 100)/100}</span></td>
          {/* toLocaleString converts to string so comma is added */}
          <td className="border border-slate-700 p-2 text-teal-300 text-center hidden sm:table-cell">{currencysymbols}{item.market_cap.toLocaleString()}</td>
        </tr>
      ))}
    </tbody>
  </table>
</section>
  </>
  )
}

export default CryptoTable;