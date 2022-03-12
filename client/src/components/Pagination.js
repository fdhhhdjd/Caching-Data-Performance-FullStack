import React from 'react';
import usePagination from '../hooks/usePagination'

const Pagination = React.memo(({ totalPages }) => {
  const { 
    page, firstArr, lastArr, next, prev, jump 
  } = usePagination(totalPages)

  const isActive = (index) => {
    if(index === page) return "active";
    return ""
  }

  return <div className='pagination'>
    <button onClick={prev}>&laquo;</button>

    {
      firstArr.map(num => (
        <button key={num} className={`${isActive(num)}`}
        onClick={() => jump(num)}>
          {num}
        </button>
      ))
    }

    { lastArr.length > 0 && <button>...</button> }

    {
      lastArr.map(num => (
        <button key={num} className={`${isActive(num)}`}
        onClick={() => jump(num)}>
          {num}
        </button>
      ))
    }

    <button onClick={next}>&raquo;</button>
  </div>;
});

export default Pagination;
