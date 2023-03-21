// import ImagePNG from "ASSETS/PNG/img.png.assets";

import LogoMoemon from "ASSETS/PNG/MOEMON.png";
import "./img.styles.png.assets.scss";
import { Link } from "react-router-dom";

export const MoemonLogo = () => {
  //full sized logo
  return <img src={LogoMoemon} alt="moemon-logo" />;
};

export const MoemonLogoSmall = () => {
  //small sized logo
  return (
    <Link to="/">
      <img className="logo-small" src={LogoMoemon} alt="moemon-logo" />
    </Link>
  );
};
