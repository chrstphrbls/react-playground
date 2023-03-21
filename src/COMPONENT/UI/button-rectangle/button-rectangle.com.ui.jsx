import * as React from "react";
import Button from "@mui/material/Button";
import SearchIcon from "@mui/icons-material/Search";
import * as Text from "ASSETS/TYPOGRAPHY/texts.assets.typography";
import * as Events from "COMPONENT/LIBRARY/event/event-handler.com.model.lib";

import { Link } from "react-router-dom";
import "./button-rectangle.styles.com.ui.scss";

const BasicButton = (props) => {
  const [buttonType, set_buttonType] = React.useState({
    searchText: Text.searchButtonText,
    searchIcon: "Search-icon"
  });
  // const { searchFormClick } = Events;
  let redirect = "results";
  const { buttonProps } = props;
  const handleClick = () => {
    Events.searchFormClick();
  };

  switch (buttonProps) {
    case "Search":
      return (
        <Button
          className="button-text-search"
          as={Link}
          to={`/${redirect}`}
          disabled={true}
          variant="contained"
          onClick={handleClick}
        >
          {" "}
          {Text.searchButtonText}
        </Button>
      );
    case "Search-icon":
      return <Button disabled variant="contained" src={SearchIcon}></Button>;
    default:
  }
};
export default BasicButton;
