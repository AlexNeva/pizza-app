import React from "react";
import classes from "./search.module.scss";

const Search = ({ value, setValue }) => {
  return (
    <div className={classes.control}>
      <label htmlFor="search" className={classes.searchIcon}>
        <svg width="24" height="24">
          <use href="/img/sprite.svg#search"></use>
        </svg>
      </label>
      <input
        className={classes.input}
        value={value}
        onChange={(e) => setValue(e.target.value)}
        id="search"
        type="text"
        placeholder="Найти пиццу..."
      />
      {value && (
        <button
          className={classes.clear}
          type="button"
          onClick={() => setValue("")}
        >
          <svg width="20" height="20">
            <use href="/img/sprite.svg#clear"></use>
          </svg>
        </button>
      )}
    </div>
  );
};

export default Search;
