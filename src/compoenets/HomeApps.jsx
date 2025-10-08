import React from "react";
import download from "../assets/download.png";
import ratings from "../assets/star.png";
import { Link } from "react-router";

const AppCard = ({ data }) => {
  const { image, title, downloads, ratingAvg, id } = data;

  return (
    <div>
      <Link to={`/details/${id}`}>
        <div className="card bg-base-100 shadow-sm transition duration-500 md:p-0 hover:-translate-y-6">
          <figure className="h-48 bg-base-200 flex items-center justify-center p-6">
            <img
              src={image}
              alt={title}
              className="w-32 h-32 object-contain"
              onError={(e) => {
                e.target.onerror = null;
                e.target.src =
                  "https://via.placeholder.com/200x200?text=No+Image";
              }}
            />
          </figure>
          <div className="card-body">
            <h2 className="text-[18px] text-[#001931] font-medium line-clamp-2">
              {title}
            </h2>
            <div className="card-actions justify-between mt-2">
              <div className="bg-[#f1f5e8] px-3 py-1.5 rounded-full text-[#00D390] text-sm gap-1.5 flex items-center">
                <img src={download} alt="" className="w-3.5 h-3.5" />
                {downloads}
              </div>
              <div className="bg-[#f1f5e8] px-3 py-1.5 rounded-full text-[#FF8811] text-sm gap-1.5 flex items-center">
                <img src={ratings} alt="" className="w-3.5 h-3.5" />
                {ratingAvg}
              </div>
            </div>
          </div>
        </div>
      </Link>
    </div>
  );
};

export default AppCard;
