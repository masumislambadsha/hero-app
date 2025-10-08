import React, { useState, useEffect } from "react";
import useAllAppsData from "../Hooks/useAllAppsData";
import AppCard from "../compoenets/HomeApps";
import errImg from "../assets/App-Error.png";
import LoadingSpinner from "../compoenets/LoadingSpinner";

const AllApps = () => {
  const { datas, loading } = useAllAppsData();
  const [search, setSearch] = useState("");
  const [searchLoading, setSearchLoading] = useState(false);
  const [searchedDatas, setSearchedDatas] = useState([]);

  useEffect(() => {
    const term = search.trim().toLowerCase();

    if (term) {
      setSearchLoading(true);

      const timer = setTimeout(() => {
        const filtered = datas.filter((data) =>
          data.title.toLowerCase().includes(term)
        );
        setSearchedDatas(filtered);
        setSearchLoading(false);
      }, 300);

      return () => clearTimeout(timer);
    } else {
      setSearchedDatas(datas);
      setSearchLoading(false);
    }
  }, [search, datas]);

  if (loading) {
    return <LoadingSpinner />;
  }

  return (
    <div className="container mx-auto px-4">
      <div className="text-center mt-[80px]">
        <h3 className="font-bold text-5xl text-[#001931] mb-4">
          Our All Applications
        </h3>
        <p className="font-normal text-lg text-[#627382] my-5">
          Explore All Apps on the Market developed by us. We code for Millions
        </p>
      </div>

      <div className="flex md:flex-row flex-col md:gap-0 gap-4 justify-between my-8">
        <h1 className="card-title text-2xl">
          All Products{" "}
          <span className="text-sm font-normal text-gray-500 mt-1">
            ({searchedDatas.length}) products found
          </span>
        </h1>
        <div className="relative w-full max-w-xl">
          <input
            type="search"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            placeholder=""
            className="peer w-full pl-12 pr-4 py-4 pt-5 rounded-2xl bg-white/20 backdrop-blur-lg border border-white/30 text-gray-800 focus:outline-none focus:ring-2 focus:ring-white/50 shadow-xl transition-all duration-300 hover:bg-white/30"
          />
          <label className="absolute left-12 top-0 text-gray-600 text-base transition-all duration-300 pointer-events-none peer-placeholder-shown:text-gray-500 peer-placeholder-shown:top-4 peer-focus:text-[15px] peer-focus:top-1 peer-focus:text-blue-600 peer-[:not(:placeholder-shown)]:text-[15px] peer-[:not(:placeholder-shown)]:top-1 peer-[:not(:placeholder-shown)]:text-blue-600">
            Search your desired product
          </label>
          <svg
            className="absolute left-3 top-1/2 transform -translate-y-1/2 w-6 h-6 text-gray-600 peer-focus:text-blue-600 transition-colors duration-300"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
            />
          </svg>
        </div>
      </div>

      {searchLoading ? (
        <LoadingSpinner />
      ) : searchedDatas.length === 0 ? (
        <div className="text-center py-10">
          <img src={errImg} alt="No App Found" className="w-80 mx-auto mb-6" />
          <h2 className="text-3xl font-bold text-gray-700 mb-3">
            No App Found
          </h2>
          <p className="text-gray-500">Try searching with different keywords</p>
        </div>
      ) : (
        <div className="container mx-auto grid lg:grid-cols-4 md:grid-cols-2 grid-cols-1 px-5 gap-5 md:gap-10 md:px-3 my-10">
          {searchedDatas.map((data) => (
            <AppCard key={data.id} data={data} />
          ))}
        </div>
      )}
    </div>
  );
};

export default AllApps;
