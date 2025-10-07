import React from "react";
import download from '../assets/download.png'
import ratings from '../assets/star.png'

const HomeApps = ({data}) => {
  const {image, title, downloads, ratingAvg} = data

  return (
    <div className="card pt-10 bg-base-100 shadow-sm transition duration-500 hover:-translate-y-6">
      <figure className="h-35 flex items-center justify-center p-8">
        <img
          src={image}
        />
      </figure>
      <div className="card-body">
        <h2 className="text-[20px] text-[#001931] font-medium">
          {title}
        </h2>
        <div className="card-actions justify-between">
          <div className="bg-[#f1f5e8] px-4 py-2 badge text-[#00D390] gap-2 flex items-center">
            <img src={download} alt="" className="w-4 h-4" />
            {downloads}
          </div>
          <div className="bg-[#f1f5e8] px-4 py-2 badge text-[#FF8811] gap-2 flex items-center">
            <img src={ratings} alt="" className="w-4 h-4" />
            {ratingAvg}
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomeApps;
