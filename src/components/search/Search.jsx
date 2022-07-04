import React from "react";
import debounce from "lodash.debounce";
import classes from "./search.module.scss";
import { resetFilters, setSearch } from "../../redux/slices/filtersSlice";
import { useDispatch } from "react-redux";
import { useLocationParams } from "../../hooks/useLocationParams";

const Search = () => {
  const dispatch = useDispatch();
  const inputRef = React.useRef();
  const [params, setSearchParams] = useLocationParams();

  const [localValue, setLocalValue] = React.useState(params.title || "");

  const toClearInput = () => {
    setLocalValue("");
    dispatch(setSearch(""));
    dispatch(resetFilters());
    setSearchParams("");
    inputRef.current.focus();
  };

  const updateInput = React.useCallback(
    debounce((str) => {
      dispatch(resetFilters());
      dispatch(setSearch(str));
      setSearchParams({ title: str });
    }, 500),
    []
  );

  const onChangeInput = (e) => {
    setLocalValue(e.target.value);
    updateInput(e.target.value);
  };

  return (
    <div className={classes.control}>
      <label htmlFor="search" className={classes.searchIcon}>
        <svg width="24" height="24">
          <use href="/img/sprite.svg#search"></use>
        </svg>
      </label>
      <input
        ref={inputRef}
        className={classes.input}
        value={localValue}
        onChange={onChangeInput}
        id="search"
        type="text"
        placeholder="Найти пиццу..."
      />
      {localValue && (
        <button className={classes.clear} type="button" onClick={toClearInput}>
          <svg width="20" height="20">
            <use href="/img/sprite.svg#clear"></use>
          </svg>
        </button>
      )}
    </div>
  );
};

export default Search;
