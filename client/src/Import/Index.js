//!Import
import { useMyContext } from "../Context/store";
import { createProduct, updateProduct, deleteProduct } from "../utils/Api";
//!Page
export { default as Home } from "../page/Home";
export { default as Header } from "../page/Header";
export { default as Search } from "../page/Search";
export { default as Filter } from "../page/Filter";
//!Custom Hook
export { default as usePagination } from "../CustomHook/usePagination";
export { default as useCustomRouter } from "../CustomHook/useCustomRouter";
export { default as useQuery } from "../CustomHook/useQuery";
export { default as useMutation } from "../CustomHook/useMutation";
export { default as useInfinity } from "../CustomHook/useInfinity";

//!Components
export { default as Products } from "../Components/Products";
export { default as ProductCard } from "../Components/ProductCard";
export { default as Modal } from "../Components/Modal";
export { default as ProductDetail } from "../Components/ProductDetail";
export { default as ProductInfo } from "../Components/ProductInfo";
export { default as Pagination } from "../Components/Pagination";
export { default as Sorting } from "../Components/Sorting";
export { default as SearchForm } from "../Components/SearchForm";
export { default as FilterForm } from "../Components/FilterForm";
export { default as ProductForm } from "../Components/ProductForm";
//!Export file
export { useMyContext, createProduct, updateProduct, deleteProduct };
