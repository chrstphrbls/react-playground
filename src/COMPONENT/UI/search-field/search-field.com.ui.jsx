import * as React from "react";
import "./search-field.styles.com.ui.scss";

import Paper from "@mui/material/Paper";
import Box from "@mui/material/Box";

import { SearchFieldHook } from "./../../MODEL/search-field/search-field.com.model";

const SearchField = (props) => {
  const { changeHandler, width, content, span } = SearchFieldHook();
  const { handleClick } = props;

  return (
    <wrapper is="custom">
      <span id="hide" ref={span}>
        {content}
      </span>
      <input
        // ref={inputRef}
        // onFocus={handleClick}
        autoComplete="off"
        id="input-field"
        className="input"
        type="text"
        style={{ width }}
        onChange={changeHandler}
      />
    </wrapper>
  );
};
export default SearchField;
