import * as React from "react";

import Stack from "@mui/material/Stack";
import Paper from "@mui/material/Paper";

// import * as NokempoData from "ASSETS/DATA/predefined-nokempo";

export const PredefinedNokempoHook = () => {
  const predefinedSlice = (start, end, array) => {
    return array.slice(start, end).map((item, id) => {
      return (
        <Paper key={item} className="ul-paper" elevation={3}>
          <li id="nokempo-li">{item}</li>
        </Paper>
      );
    });
  };

  const nokempoList = (array) => {
    return (
      <div>
        <Stack direction="column" spacing={9}>
          <ul id="nokempo-ul">
            <Stack
              id="nokempo-upper"
              direction="row"
              spacing={4}
              justifyContent="center"
            >
              {predefinedSlice(0, 3, array)}
            </Stack>
            <Stack
              id="nokempo-lower"
              direction="row"
              spacing={4}
              justifyContent="center"
            >
              {predefinedSlice(3, 7, array)}
            </Stack>
          </ul>
        </Stack>
      </div>
    );
  };

  return React.useMemo(() => ({ nokempoList }), []);
};
