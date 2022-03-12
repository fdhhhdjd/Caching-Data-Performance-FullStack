import React from 'react';

const Sorting = ({calback, sort}) => {
  const handleSort = (e) => {
    const { value } = e.target;
    calback(value)
    // pushQuery({page, sort: value})
  }


  return <div className='sorting'>
    <select onChange={handleSort} value={sort}>
      <option value="-createdAt">Newest</option>
      <option value="createdAt">Oldest</option>
      <option value="-price">Price: Hight-Low</option>
      <option value="price">Price: Low-Hight</option>
    </select>
    <h2>&#8678;Sort</h2>
  </div>;
};

export default Sorting;
