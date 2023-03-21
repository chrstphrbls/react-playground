import * as React from "react";
import ClearIcon from "@mui/icons-material/Clear";
import IconButton from "@mui/material/IconButton";

import "./clear-icon.styles.com.ui.scss";

import { GlobalContainerContext } from "SETUP/app-context-manager/globals-container.setup";
// import { ClearIconHook } from "COMPONENT/MODEL/clear-icon/clear-icon.com.model";
import * as Events from "COMPONENT/LIBRARY/event/event-handler.com.model.lib";

const ClearIconButton = (props) => {
  const { value } = props;
  const { suggestion, set_suggestion, word, set_word } = React.useContext(
    GlobalContainerContext
  );

  // this component will clear the search component if clicked, and then the
  // suggestion information and the spelling suggestion will be hidden on click
  // the image will also be hidden if the button is already clicked
  // storing the boolean value in the context global library.

  const handleClick = () => {
    Events.ClearIconClick();
    set_suggestion("look for nokempo");
    set_word("");
  };

  if (value)
    return (
      <IconButton className="clear-icon" onClick={handleClick}>
        <ClearIcon />
      </IconButton>
    );
};
export default ClearIconButton;
