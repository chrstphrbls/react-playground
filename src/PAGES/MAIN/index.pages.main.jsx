import * as ImagePNG from "ASSETS/PNG/img.png.assets";
import { Footer } from "COMMONS/COMPONENT/ui.com.commons";
import SearchFormGroup from "COMPONENT/UI/search-form-group/search-form-group.com.ui";
import HomeSmolHeader from "COMPONENT/UI/home-smol-header/home-smol-header.com.ui";
import PredefinedNokempo from "COMPONENT/UI/predefined-nokempo/predefined-nokempo.com.ui";

import Stack from "@mui/material/Stack";
import "./index.styles.pages.main.scss";

const homepage = () => {
  const { MoemonLogo } = ImagePNG;
  // return <BaseUrl MoemonLogo={MoemonLogo}/>
  return (
    <Stack className="home">
      <div className="logo">
        <MoemonLogo />
      </div>
      <div className="smol-header">
        <HomeSmolHeader />
      </div>
      <div className="input-form">
        <SearchFormGroup />
      </div>
      <div className="predefined-nokempo">
        <PredefinedNokempo />
      </div>
      <div className="footer-main">
        <Footer />
      </div>
    </Stack>
  );
};
export default homepage;
