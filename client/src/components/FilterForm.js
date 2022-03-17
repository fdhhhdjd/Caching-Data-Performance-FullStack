import React, { useRef, useState } from "react";
import { useNavigate } from "react-router-dom";

const FilterForm = () => {
  const [price, setPrice] = useState("");
  const [filter, setFilter] = useState("lt");
  const navigate = useNavigate();
  const inputRef = useRef();
  const selectRef = useRef("lt");
  const handleSubmit = (e) => {
    e.preventDefault();
    const value = inputRef.current.value;
    const option = selectRef.current.value;
    if (!value.trim()) return;
    return navigate(`/filter/${option}/${value}`);
  };

  return (
    <div className="filter_form" title="Enter to filter">
      <form onSubmit={handleSubmit}>
        <div>
          <input type="text" placeholder="0" required ref={inputRef} />

          <select ref={selectRef}>
            <option value="lt" title="lesser than">
              LT
            </option>
            <option value="lte" title="lesser than or equal">
              LTE
            </option>
            <option value="gt" title="greater than">
              GT
            </option>
            <option value="gte" title="greater than or equal">
              GTE
            </option>
          </select>
        </div>
        <button>Submit</button>
      </form>
    </div>
  );
};

export default FilterForm;
