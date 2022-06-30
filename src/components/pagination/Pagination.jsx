import React from "react";
import ReactPaginate from "react-paginate";
import { useDispatch, useSelector } from "react-redux";
import { setCurrentPage } from "../../redux/slices/filtersSlice";
import classes from "./pagination.module.scss";

const Pagination = () => {
  const dispatch = useDispatch();
  const { pagesCount } = useSelector((state) => state.filter.pagination);

  const handlePageClick = (evt) => {
    dispatch(setCurrentPage(evt.selected));
  };
  return (
    <ReactPaginate
      className={classes.pagination}
      breakLabel="..."
      nextLabel=">"
      onPageChange={handlePageClick}
      pageRangeDisplayed={5}
      pageCount={pagesCount}
      previousLabel="<"
      renderOnZeroPageCount={null}
    />
  );
};

export default Pagination;
