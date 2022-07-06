import React from "react";
import ReactPaginate from "react-paginate";
import { useDispatch, useSelector } from "react-redux";
import { useLocationParams } from "../../hooks/useLocationParams";
import { setCurrentPage } from "../../redux/slices/filtersSlice";
import classes from "./pagination.module.scss";

const Pagination = () => {
  const dispatch = useDispatch();
  const { currentPage } = useSelector((state) => state.filter.pagination);
  const { count } = useSelector((state) => state.items.data);

  const pagesCount = Math.ceil(count / 8);

  const [params, setSearchParams] = useLocationParams();

  const handlePageClick = (evt) => {
    setSearchParams({ ...params, page: evt.selected + 1 });
    dispatch(setCurrentPage(evt.selected));
  };
  return (
    <ReactPaginate
      className={classes.pagination}
      breakLabel="..."
      nextLabel=">"
      onPageChange={handlePageClick}
      forcePage={currentPage - 1}
      pageRangeDisplayed={5}
      pageCount={pagesCount}
      previousLabel="<"
      renderOnZeroPageCount={null}
    />
  );
};

export default Pagination;
