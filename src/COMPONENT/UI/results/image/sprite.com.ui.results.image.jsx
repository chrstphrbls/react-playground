import * as React from "react";
import GetNokempo from "COMPONENT/LIBRARY/API/nokempo-fetch.com.lib.api";
import { GlobalContainerContext } from "SETUP/app-context-manager/globals-container.setup";

const DisplayNokempoSprite = ({ nokempoNem }) => {
  const { nokempoInamge } = React.useContext(GlobalContainerContext);
  return (
    <div>
      <GetNokempo nokempoNem={nokempoNem} />
      {/* <img alt={nokempoInamge} src={nokempoInamge} /> */}
    </div>
  );
};
export default DisplayNokempoSprite;
