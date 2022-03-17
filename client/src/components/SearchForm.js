import React, { useRef, useState } from "react";
import { useNavigate } from "react-router-dom";

const SearchForm = () => {
  const [search, setSearch] = useState("");
  const navigate = useNavigate();
  const ref = useRef(0);
  const inputRef = useRef();
  console.log(ref);
  const handleSearch = (e) => {
    e.preventDefault();
    const value = inputRef.current.value;
    console.log(value);
    if (!value.trim()) return;
    return navigate(`/search/${value}`);
  };
  let count = 0;

  return (
    <div className="search_form">
      <h2>render Search:{ref.current++}</h2>
      <h2>Count:{count++}</h2>
      <form onSubmit={handleSearch}>
        <input type="text" ref={inputRef} />
        <button>Search</button>
      </form>
    </div>
  );
};

export default SearchForm;
