import React from 'react';
import useAllAppsData from '../Hooks/useAllAppsData';
import HomeApps from '../compoenets/HomeApps';

const AllApps = () => {
  const {datas} = useAllAppsData()
  console.log(datas);

  return (
    <div className='container mx-auto'>
       <div className="text-center mt-[80px]">
        <h3 className="font-bold text-5xl text-[#001931] mb-4">
          Our All Applications
        </h3>
        <p className="font-normal text-lg text-[#627382]  my-5">
         Explore All Apps on the Market developed by us. We code for Millions
        </p>
        </div>
         <div className="flex md:flex-row flex-col md:gap-0 gap-4 justify-between mt-4 md:p-0 px-2">
        <h1 className="card-title text-2xl text-center">
          All Products{" "}
          <span className="text-sm mt-2.5">
            ({datas.length}) products found
          </span>
        </h1>
        <label className="input">
          <input
            type="search"
            // value={search}
            // onChange={(e) => setSearch(e.target.value)}
            placeholder="Search your desired product"
          />
        </label>
      </div>
        <div className="container mx-auto grid lg:grid-cols-4 md:grid-cols-2 grid-cols-1 md:gap-10 md:px-30">
        {datas.map((data) => (
          <HomeApps key={data.id} data={data}></HomeApps>
        ))}
      </div>

    </div>
  );
};

export default AllApps;
