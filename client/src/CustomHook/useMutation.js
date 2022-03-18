import { useState } from "react";
import axios from "axios";
import { toast } from "react-toastify";
import { useMyContext } from "../Import/Index";
const useMutation = () => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const { refetching, setRefetching } = useMyContext();
  const mutate = (callback) => {
    setLoading(true);
    callback()
      .then((res) => {
        setData(res.data);
        toast.success("Success!");
        setRefetching((prev) => !prev);
      })
      .catch((err) => {
        setError(err.response.data.msg);
        toast.error(err.response.data.msg);
      })
      .finally(() => setLoading(false));
  };
  return { loading, mutate, error };
};

export default useMutation;
