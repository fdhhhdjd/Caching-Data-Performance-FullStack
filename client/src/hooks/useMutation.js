import { useState } from 'react';
import { toast } from 'react-toastify';
import { useMyContext } from '../context/store';

const useMutation = () => {
  const [data, setData] = useState(null)
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState(null)
  const { refresh, dispatch } = useMyContext()

  const mutate = (callback) => {
    setLoading(true)
    callback()
      .then(res => {
        setData(res.data)
        dispatch({type: "SET_REFESH", payload: !refresh})
        toast.success('Success!')
      })
      .catch(err => {
        setError(err.response.data.msg)
        toast.error(err.response.data.msg)
      })
      .finally(() => setLoading(false))
  }

  return { loading, error, data, mutate }
};

export default useMutation;
