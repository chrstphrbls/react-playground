import * as React from "react";

import LogoMoemon from "ASSETS/PNG/MOEMON.png";

export const GlobalContainerContext = React.createContext({
  word: null,
  set_word: () => {}
});

export const GlobalContainerProvider = ({ children }) => {
  const [word, set_word] = React.useState("");
  const [suggestion, set_suggestion] = React.useState("look for nokempo");
  const [nokempoInamge, set_nokempoImage] = React.useState();
  const [nokemponem, set_nokemponem] = React.useState();
  const value = {
    nokempoInamge,
    set_nokempoImage,
    word,
    set_word,
    suggestion,
    set_suggestion,
    nokemponem,
    set_nokemponem
  };

  // GetCorrection
  return (
    <GlobalContainerContext.Provider value={value}>
      {children}
    </GlobalContainerContext.Provider>
  );
};
