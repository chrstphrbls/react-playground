import * as React from "react";

import { GlobalContainerContext } from "SETUP/app-context-manager/globals-container.setup";

export const ResultsHandlerHook = () => {
  const { word, suggestion } = React.useContext(GlobalContainerContext);

  return React.useMemo(() => ({ word, suggestion }), [word, suggestion]);
};
