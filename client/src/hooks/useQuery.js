import { useState, useEffect, useCallback } from 'react';
import axios from 'axios';
import { toast } from 'react-toastify';

let cache = {};

const optDefault = { 
  sizeCache: 100,
  saveCache: false
}

const useQuery = (url, depends = [], option = optDefault) => {
  const [data, setData] = useState(null)
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState(null)

  const clearCache = useCallback(() => {
    if(Object.keys(cache).length >= option.sizeCache) cache = {}
  },[option.sizeCache])

  useEffect(() => {
    if(!url) return;
    
    let here = true;
    if(cache[url]){
      setData(cache[url])
    }
      
    if(!cache[url]) setLoading(true)

    axios.get(url)
      .then(res => {
        if(here) {
          setData(res.data)
          if(option.saveCache) {
            cache[url] = res.data
          }
        }
      })
      .catch(err => {
        if(here) {
          setError(err.response.data.msg)
          toast.error(err.response.data.msg)
        }
      })
      .finally(() => {
        if(here) setLoading(false)
      })

      clearCache()

    return () => here = false;
  }, [...depends, url, clearCache, option.saveCache])

  return { loading, error, data, cache }
};


export default useQuery;
