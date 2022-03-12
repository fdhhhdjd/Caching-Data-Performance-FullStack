import React, { useState, useEffect, useRef } from 'react';
import useQuery from '../hooks/useQuery';

const DEFAUL_OPTION = {
  limit: 5,
  stop: false,
}

const useInfinityQuery = (url, depends = [], option = DEFAUL_OPTION) => {
  const [page, setPage] = useState(1)

  const newUrl = `${url}&limit=${option.limit}&page=${page}`;
  const query = useQuery(newUrl)

  const btnRef = useRef(null)
  const [isLoad, setIsLoad] = useState(false)

  const handleLoadMore = () => {
    if(option.stop) return;
    setPage(() => page + 1)
  }

  useEffect(() => {
    setPage(1)
  }, depends)


  useEffect(() => {
    if(option.stop || query.loading) return;
    if(isLoad && query.data) {
      setPage(page => page + 1)
    }
    // eslint-disable-next-line
  },[isLoad])

  useEffect(() => {
    const btn = btnRef.current;

    const observer = new IntersectionObserver(entries => {
      setIsLoad(entries[0].isIntersecting)
    })

    if(btn) observer.observe(btn)

    return () => {
      if(btn) observer.unobserve(btn)
    }
    // eslint-disable-next-line
  },[])

  

  const btnRender = () => {
    return (
      <button onClick={handleLoadMore}
      className="btn-load_more"
      disabled={option.stop}
      ref={btnRef} >
        Load more
      </button>
    )
  }

  return { ...query, btnRender }
}

export default useInfinityQuery