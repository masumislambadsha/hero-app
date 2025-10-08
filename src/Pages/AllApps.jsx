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
      }, 500); // 500ms delay for spinner visibility

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
        <input
          type="search"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          placeholder="Search your desired product"
          className="input input-bordered w-full max-w-xs"
        />
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
