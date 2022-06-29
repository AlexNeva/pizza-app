import React from "react";
import debounce from "lodash.debounce";
import classes from "./search.module.scss";

const Search = ({ value, setValue }) => {
  const inputRef = React.useRef();

  const [localValue, setLocalValue] = React.useState("");

  const toClearInput = () => {
    setLocalValue("");
    setValue("");
    inputRef.current.focus();
  };

  const updateInput = React.useCallback(
    debounce((str) => {
      setValue(str);
    }, 500),
    []
  );

  const onChangeInput = (e) => {
    setLocalValue(e.target.value);
    updateInput(localValue);
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
