import React, { useState } from 'react';
import useAllAppsData from '../Hooks/useAllAppsData';
import HomeApps from '../compoenets/HomeApps';

const AllApps = () => {
  const {datas, loading, error} = useAllAppsData();
  const [search, setSearch] = useState("");

  const term = search.trim().toLowerCase();
  const searchedDatas = term
    ? datas.filter(data => data.title.toLowerCase().includes(term))
    : datas;

  if (loading) return <div className="text-center mt-20">Loading...</div>;
  if (error) return <div className="text-center mt-20">Error loading apps</div>;

  return (
    <div className='container mx-auto px-4'>
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

      <div className="grid lg:grid-cols-4 md:grid-cols-2 grid-cols-1 md:gap-10 md:pb-10">
        {searchedDatas.map((data) => (
          <HomeApps key={data.id} data={data} />
        ))}
      </div>
    </div>
  );
};

export default AllApps;
