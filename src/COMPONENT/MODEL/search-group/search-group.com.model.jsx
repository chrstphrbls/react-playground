import * as React from "react";

import { GlobalContainerContext } from "SETUP/app-context-manager/globals-container.setup";
import { GetCorrection } from "COMPONENT/LIBRARY/LEVENSHTEIN/get-correction.com.lib";

export const SearchGroupHook = () => {
  const { word, suggestion, set_suggestion } = React.useContext(
    GlobalContainerContext
  );
  // get the last word by splitting the sentence into words
  let split = word.split(" ");
  let last_word = split[split.length - 1];

  // check if user inputs a word, if none use the placeholder
  if (word && word.length > 0) GetCorrection();
  else set_suggestion("Look for nokempo");

  return React.useMemo(() => ({ last_word, word, suggestion }), [
    word,
    suggestion,
    last_word
  ]);
};
