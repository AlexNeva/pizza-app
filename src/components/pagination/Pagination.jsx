import React from "react";
import ReactPaginate from "react-paginate";
import classes from "./pagination.module.scss";

const Pagination = ({ pages, setPage }) => {
  const handlePageClick = (evt) => {
    setPage(evt.selected + 1);
  };
  return (
    <ReactPaginate
      className={classes.pagination}
      breakLabel="..."
      nextLabel=">"
      onPageChange={handlePageClick}
      pageRangeDisplayed={5}
      pageCount={pages}
      previousLabel="<"
      renderOnZeroPageCount={null}
    />
  );
};

export default Pagination;
