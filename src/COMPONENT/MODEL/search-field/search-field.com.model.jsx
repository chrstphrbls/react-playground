import * as React from "react";

import { GlobalContainerContext } from "SETUP/app-context-manager/globals-container.setup";

export const SearchFieldHook = () => {
  const { set_word } = React.useContext(GlobalContainerContext);

  const [content, setContent] = React.useState("");
  const [width, setWidth] = React.useState("");

  const span = React.useRef();

  React.useEffect(() => {
    setWidth(span.current.offsetWidth);
    set_word(() => content);
  }, [content, set_word]);

  const changeHandler = (e) => {
    const targetvalue = e.target.value;
    setContent(targetvalue);
  };

  return React.useMemo(() => ({ content, width, span, changeHandler }), [
    content,
    width
  ]);
};
