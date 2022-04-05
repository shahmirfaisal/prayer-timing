import { AiOutlineSearch } from "react-icons/ai";
import { IconContext } from "react-icons";
import classes from "./style.module.scss";
import { useState } from "react";

export const SearchBar = ({ placeholder, value, onChange, searchResult }) => {
  const [showResult, setShowResult] = useState(false);
  const [flag, setFlag] = useState(false);

  const focusInputHandler = (e) => {
    if (value.trim() !== "") {
      setShowResult(true);
    }
  };

  const blurInputHandler = (e) => {
    if (!flag) setShowResult(false);
  };

  const changeInputHandler = (e) => {
    onChange(e);
    if (e.target.value.trim() === "") {
      setShowResult(false);
    } else {
      setShowResult(true);
    }
  };

  return (
    <div className={classes.searchContainer}>
      <div className={classes.searchBar}>
        <IconContext.Provider value={{ size: "1.7em", color: "#9A9A9A" }}>
          <AiOutlineSearch />
        </IconContext.Provider>
        <input
          type="text"
          placeholder={placeholder}
          onFocus={focusInputHandler}
          onBlur={blurInputHandler}
          value={value}
          onChange={changeInputHandler}
        />
      </div>

      <div
        className={[
          classes.searchResult,
          showResult ? null : classes.hideSearchResult,
        ].join(" ")}
        onMouseDown={() => setFlag(true)}
        onMouseUp={() => setFlag(false)}
      >
        <ul>
          {searchResult}
          {!searchResult.length && <p>No result found!</p>}
        </ul>
      </div>
    </div>
  );
};
