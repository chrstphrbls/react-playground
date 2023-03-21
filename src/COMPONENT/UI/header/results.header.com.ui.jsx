import { Paper, Stack } from "@mui/material";
import * as ImagePNG from "ASSETS/PNG/img.png.assets";
import SearchFormGroup from "COMPONENT/UI/search-form-group/search-form-group.com.ui";

import "./results.styles.header.com.ui.scss";
const Header = () => {
  const { MoemonLogoSmall } = ImagePNG;
  return (
    <div className="header">
      <Paper elevation="3">
        <Stack direction="row">
          <div className="logo-small">
            <MoemonLogoSmall />
          </div>
          <div className="form-group">
            <SearchFormGroup />
          </div>
          <div className="others"></div>
        </Stack>
      </Paper>
    </div>
  );
};
export default Header;
