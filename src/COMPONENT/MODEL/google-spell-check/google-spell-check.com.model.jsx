import * as React from "react";
import { SearchGroupHook } from "COMPONENT/MODEL/search-group/search-group.com.model";

// import { getJson } from "serpapi";

export const GoogleSpellCheck = () => {
  const { suggestion, set_suggestion, word, set_word } = SearchGroupHook();

  return React.useMemo(() => ({ word, suggestion }), [word, suggestion]);
};
