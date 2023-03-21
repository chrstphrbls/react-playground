import { Typography } from "@mui/material";
import "./home-smol-header.styles.com.ui.scss";

import * as Text from "ASSETS/TYPOGRAPHY/texts.assets.typography";

const HomeSmolHeader = () => {
  const header = Text.smolHeaderText;

  return <Typography variant="h6">{header}</Typography>;
};
export default HomeSmolHeader;
