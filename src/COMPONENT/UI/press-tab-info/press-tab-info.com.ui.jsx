import InfoIcon from "@mui/icons-material/Info";
import { Typography } from "@mui/material";
import Stack from "@mui/material/Stack";

import * as Text from "ASSETS/TYPOGRAPHY/texts.assets.typography";

import "./press-tab-info.styles.com.ui.scss";

const PressTabInfo = (props) => {
  const { value } = props;

  if (value && value !== "Look for nokempo")
    return (
      <Stack className="press-tab-info" id="press-tab-info-id" direction="row">
        <InfoIcon /> <Typography>{Text.pressTabInfoText}</Typography>
      </Stack>
    );
};
export default PressTabInfo;
