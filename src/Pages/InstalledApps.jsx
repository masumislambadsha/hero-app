import React, { useEffect, useState } from "react";
import download from "../assets/download.png";
import star from "../assets/star.png";
import Swal from "sweetalert2";
import LoadingSpinner from "../compoenets/LoadingSpinner";
const InstalledApps = () => {
  const [installedApps, setInstalled] = useState([]);
  const [sortOrder, setSortOrder] = useState("none");
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timeoutId = setTimeout(() => {
      const savedList = JSON.parse(localStorage.getItem("installed"));
      if (savedList) {
        setInstalled(savedList);
      }
      setLoading(false);
    }, 300);

    return () => clearTimeout(timeoutId);
  }, []);

  const sortedItems = (() => {
    const items = [...installedApps];
    if (sortOrder === "small") {
      return items.sort((a, b) => a.downloads - b.downloads);
    } else if (sortOrder === "large") {
      return items.sort((a, b) => b.downloads - a.downloads);
    } else {
      return items;
    }
  })();

  const handleRemove = (id) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        const stored = JSON.parse(localStorage.getItem("installed"));
        let updated = stored.filter((p) => p.id !== id);
        setInstalled(updated);
        localStorage.setItem("installed", JSON.stringify(updated));

        Swal.fire({
          title: "Deleted!",
          text: "Your file has been deleted.",
          icon: "success",
        });
      }
    });
  };

  if (loading) {
    return <LoadingSpinner />;
  }

  return (
    <div className="container mx-auto my-20 min-h-[540px]">
      <div className="text-center mt-[80px]">
        <h3 className="font-bold text-5xl text-[#001931] mb-4 px-1">
          Your Installed Apps
        </h3>
        <p className="font-normal text-lg text-[#627382] my-5">
          Explore All Apps on the Market developed by us. We code for Millions
        </p>
      </div>
      <div
        className="flex justify-between px-3 py-5 items-center"
        style={{
          justifyContent: "space-between",
        }}
      >
        <h1 className="text-3xl font-semibold">
          {sortedItems.length} product found
        </h1>
        <label className="form-control md:w-full max-w-xs">
          <div className="relative ">
            <select
              className="select w-full
                 bg-white
                 border-2 border-gray-200
                 hover:border-blue-400 hover:-translate-y-1
                 focus:border-blue-500 focus:ring-4 focus:ring-blue-100 focus:-translate-y-1
                 transition-all duration-300 ease-out
                 cursor-pointer
                 text-gray-800 font-semibold text-base
                 shadow-md hover:shadow-2xl
                 rounded-xl
                 md:px-7 "
              value={sortOrder}
              onChange={(e) => setSortOrder(e.target.value)}
            >
              <option value="none">🎯 Sort By Downloads</option>
              <option value="small">⬆️ Low to High</option>
              <option value="large">⬇️ High to Low</option>
            </select>
            <div className="absolute inset-0 rounded-xl bg-gradient-to-r from-blue-400 to-cyan-400 opacity-0 hover:opacity-10 transition-opacity duration-300 -z-10" />
          </div>
        </label>
      </div>
      <div className="space-y-6 md:p-0 p-7">
        {sortedItems.map((installedApp) => (
          <div
            key={installedApp.id}
            className="card md:card-side bg-[#ffffff] shadow-lg rounded-[25px]  md:py-0 py-5"
          >
            <figure className="md:pl-2 md:p-0 p-10">
              <img
                className="md:p-3 p-10 rounded md:h-20 md:w-20 object-cover"
                src={installedApp.image}
                alt={installedApp.name}
              />
            </figure>
            <div className="md:card-body pt-0">
              <h3 className="md:card-title text-center text-xl font-bold ml-1">
                {installedApp.title}
              </h3>
              <div className="space-x-6 mt-1 md:text-start text-center">
                <p className="text-[#00D390] md:text-start text-center font-semibold inline">
                  <span>
                    <img src={download} className="pr-2 inline pl-" alt="" />
                  </span>
                  {installedApp.downloads}M
                </p>
                <p className="text-[#00D390] md:text-start space-y-10 text-center font-semibold inline">
                  <span>
                    <img src={star} className="pr-2 inline" alt="" />
                  </span>
                  {installedApp.ratingAvg}{" "}
                </p>
                <p className="text-[#627382] md:text-start space-y-10 text-center font-semibold inline">
                  {installedApp.size}MB
                </p>
              </div>
            </div>
            <div className="px-4 py-2 md:py-0 flex justify-center items-center gap-4">
              <button
                onClick={() => handleRemove(installedApp.id)}
                className="btn rounded-lg bg-[#00D390] text-white btn-outline"
              >
                Uninstall
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default InstalledApps;
