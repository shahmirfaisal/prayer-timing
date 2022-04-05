import { AiOutlineSearch } from "react-icons/ai";
import { IconContext } from "react-icons";
import classes from "./style.module.scss";
import Link from "next/link";
import { useState } from "react";

export const SearchBar = ({ placeholder, value, onChange, searchResult }) => {
  const [showResult, setShowResult] = useState(false);

  const focusInputHandler = (e) => {
    console.log("Focused");
    // setShowResult(true);
  };

  const blurInputHandler = (e) => {
    console.log("Blurred");
    // setShowResult(false);
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
      >
        <ul>{searchResult}</ul>
      </div>
    </div>
  );
};
