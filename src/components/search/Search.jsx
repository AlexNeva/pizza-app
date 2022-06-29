import React from "react";
import { useRef } from "react";
import classes from "./search.module.scss";

const Search = ({ value, setValue }) => {
  const inputRef = useRef();

  const toClearInput = () => {
    setValue("");
    inputRef.current.focus();
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
        value={value}
        onChange={(e) => setValue(e.target.value)}
        id="search"
        type="text"
        placeholder="Найти пиццу..."
      />
      {value && (
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
