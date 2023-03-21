import * as React from "react";

import { GlobalContainerContext } from "SETUP/app-context-manager/globals-container.setup";

import * as Events from "COMPONENT/LIBRARY/event/event-handler.com.model.lib";

export const ClearIconHook = () => {
  const { suggestion, set_suggestion, word, set_word } = React.useContext(
    GlobalContainerContext
  );
  const { ClearIconClick } = Events;

  return React.useMemo(() => ({ word, suggestion }), [word, suggestion]);
};
