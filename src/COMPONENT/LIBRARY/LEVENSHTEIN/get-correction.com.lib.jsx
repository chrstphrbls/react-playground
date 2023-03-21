import * as React from "react";
import { findMostSimilarWord } from "COMPONENT/LIBRARY/LEVENSHTEIN/levenshtein.com.lib";
import nokempo from "ASSETS/DATA/nokempo";

import { GlobalContainerContext } from "SETUP/app-context-manager/globals-container.setup";

export const GetCorrection = () => {
  const { word, suggestion, set_suggestion } = React.useContext(
    GlobalContainerContext
  );
  // findMostSimilarWord(word, dictionary);

  if (word) set_suggestion(findMostSimilarWord(word, nokempo));
  if (word === "") set_suggestion("look for nokempo");
};
