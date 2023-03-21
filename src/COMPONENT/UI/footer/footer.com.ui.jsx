import * as React from "react";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";

import * as Text from "ASSETS/TYPOGRAPHY/texts.assets.typography";

import "./footer.styles.com.ui.scss";

const Footer = () => {
  const { footerText, footerTextLink } = Text;
  return (
    <Box className="footer-component">
      <Typography variant="body1" color="text.secondary">
        {footerText} {footerTextLink}
      </Typography>
    </Box>
  );
};
export default Footer;
