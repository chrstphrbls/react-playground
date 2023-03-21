import * as React from "react";
import { Paper, Stack } from "@mui/material";
import BarChart from "./bar-chart/bar-chart.com.ui";
import ShowGraphButton from "./table/show-hide.com.ui";
import DynamicTable from "./table/table.com.ui.results";

import { ResultsHandlerHook } from "COMPONENT/MODEL/results/results-handler.com.model";

import DisplayNokempoSprite from "./image/sprite.com.ui.results.image";
import data from "./data.json";
import tableData from "./table-data.json";
// need to parse this data. must be available to both formats
import "./results-handler.styles.com.ui.scss";

const TableResult = () => {
  const { suggestion, word } = ResultsHandlerHook();
  return (
    <div className="results-handler">
      <Stack spacing={5}>
        <DynamicTable data={tableData} />
        <ShowGraphButton />
        <BarChart graphData={data} />
        {/* <DisplayNokempoSprite
          nokempoNem={
            suggestion !== "Look for nokempo" ? suggestion : "pikachu"
          }
        /> */}
      </Stack>
    </div>
  );
};
export default TableResult;
