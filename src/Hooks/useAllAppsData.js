import axios from "axios";
import React, { useEffect, useState } from "react";

const useAllAppsData = () => {
  const [datas, setDatas] = useState([]);
  const [loading, setLoading] = useState([true]);
  const [error, setError] = useState(null);

  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      axios("../allAppsData.json")
        .then((data) => setDatas(data.data))
        .catch((err) => setError(err))
        .finally(() => setLoading(false));
    },200);
  }, []);
  return { datas, loading, error };
};

export default useAllAppsData;
