import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom'
import Modal from './Modal';
import ProductForm from './ProductForm'
import SearchForm from './SearchForm';
import FilterForm from './FilterForm';

const Header = () => {
  const [openProd, setOpenProd] = useState(false)
  const [openSearch, setOpenSearch] = useState(false)
  const [openFilter, setOpenFilter] = useState(false)
  const navigate = useNavigate()
  

  return <header>
    <nav>
      <p onClick={() => navigate("/")}>Home</p>
      <p onClick={() => setOpenProd(true)}>Create Product</p>
      <p onClick={() => setOpenSearch(true)}>Search</p>
      <p onClick={() => setOpenFilter(true)}>Filter</p>
    </nav>

{/* -------- Search --------- */}
    {
      openSearch && 
      <Modal 
      titleTxt="Search"
      setOpen={setOpenSearch} >
        <SearchForm />
      </Modal>
    }

{/* -------- Create Product --------- */}
    {
      openProd && 
      <Modal 
      titleTxt="Create Product"
      setOpen={setOpenProd} >
        <ProductForm btnTxt="Add" />
      </Modal>
    }

{/* -------- Filter --------- */}
    {
      openFilter && 
      <Modal 
      titleTxt="Filter"
      setOpen={setOpenFilter} >
        <FilterForm />
      </Modal>
    }
  </header>;
};

export default Header;
