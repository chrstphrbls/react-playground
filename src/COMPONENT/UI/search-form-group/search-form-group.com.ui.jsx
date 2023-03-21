import "./search-form-group.styles.com.ui.scss";
import Grid from "@mui/material/Grid";
import { Typography } from "@mui/material";
import Paper from "@mui/material/Paper";

import { SearchGroupHook } from "COMPONENT/MODEL/search-group/search-group.com.model";

import * as Events from "COMPONENT/LIBRARY/event/event-handler.com.model.lib";
import SearchField from "./../search-field/search-field.com.ui";
import BasicButton from "../button-rectangle/button-rectangle.com.ui";
import PressTabInfo from "COMPONENT/UI/press-tab-info/press-tab-info.com.ui.jsx";
import ClearIconButton from "COMPONENT/UI/clear-icon/clear-icon.com.ui";

const SearchFormGroup = () => {
  const { suggestion, word } = SearchGroupHook();
  const { handleFormClick, ToResultsPage } = Events;

  return (
    <div onClick={handleFormClick}>
      <PressTabInfo value={suggestion} />
      <Grid container className="grid" direction="row">
        <Grid item />
        <Grid item justifyContent="left">
          <Paper className="input" elevation={0}>
            <SearchField />
          </Paper>
        </Grid>
        <Grid className="suggestion">
          <Typography id="results" variant="h6">
            {" "}
            {suggestion}
          </Typography>
        </Grid>
        <Grid className="basic-button" container xs={10} justifyContent="right">
          <ClearIconButton className="clear-icon" value={word} />
          <BasicButton buttonProps={"Search"} onClick={ToResultsPage} />
        </Grid>
      </Grid>
    </div>
  );
};

export default SearchFormGroup;
