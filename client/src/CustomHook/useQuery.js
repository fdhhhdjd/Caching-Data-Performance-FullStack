import axios from "axios";
import { useEffect, useState } from "react";
const useQuery = (url) => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  useEffect(() => {
    let here = true; //Chống rò rĩ bộ nhớ
    setLoading(true);
    axios
      .get(url)
      .then((response) => {
        if (!here) return;
        setData(response.data);
      })
      .catch((error) => {
        if (!here) return;
        setError(error.response.data.msg);
      })
      .finally(() => {
        if (!here) return;
        setLoading(false);
      });

    return () => {
      here = false;
    };
  }, [url]);
  return { data, loading, error };
};

export default useQuery;
