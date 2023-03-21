import "./predefined-nokempo.styles.com.ui.scss";

import * as NokempoData from "ASSETS/DATA/predefined-nokempo";
import { PredefinedNokempoHook } from "COMPONENT/MODEL/predefined-nokempo/predefined-nokempo.com.model";

const PredefinedNokempo = () => {
  const { nokempo } = NokempoData;
  const { nokempoList } = PredefinedNokempoHook();

  return nokempoList(nokempo);
};
export default PredefinedNokempo;
