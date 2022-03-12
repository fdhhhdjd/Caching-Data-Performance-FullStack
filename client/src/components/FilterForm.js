import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom'

const FilterForm = () => {
  const [price, setPrice] = useState('')
  const [filter, setFilter] = useState('lt')
  const navigate = useNavigate()

  const handleSubmit = (e) => {
    e.preventDefault()
    if(!price.trim()) return;

    return navigate(`/product/price/${filter}/${price}`)
  }

  return (
    <div className='filter_form' title='Enter to filter'>
      <form onSubmit={handleSubmit}>
        <div>
          <input type="text" value={price}
          placeholder="0" required
          onChange={e => setPrice(e.target.value)}
          />

          <select onChange={e => setFilter(e.target.value)}>
            <option value="lt" title='lesser than'>LT</option>
            <option value="lte" title='lesser than or equal'>LTE</option>
            <option value="gt" title='greater than'>GT</option>
            <option value="gte" title='greater than or equal'>GTE</option>
          </select>
        </div>
        <button>Submit</button>
      </form>
      
    </div>
  )
}

export default FilterForm