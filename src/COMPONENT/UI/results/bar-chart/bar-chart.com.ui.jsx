import React from "react";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import ClearIcon from "@mui/icons-material/Clear";
import IconButton from "@mui/material/IconButton";
import CardHeader from "@mui/material/CardHeader";

import { useState, useEffect } from "react";
import { Bar } from "react-chartjs-2";

import {
  Chart as ChartJS,
  BarElement,
  CategoryScale,
  LinearScale,
  Tooltip,
  Legend
} from "chart.js";

ChartJS.register(BarElement, CategoryScale, LinearScale, Tooltip, Legend);

const BarChart = (props) => {
  // const [graphData] = useState(props.graphData);

  const [Label, set_Label] = useState();
  const [DatasetsData, set_DatasetsDAta] = useState();

  const setDataMap = (data, index) => {
    return data.map((item) => item[index]);
  };

  useEffect(() => {
    const addData = async () => {
      set_Label(setDataMap(await props.graphData, 0));
      set_DatasetsDAta(setDataMap(await props.graphData, 1));
    };

    addData();
  }, [props.graphData]);

  const data = {
    labels: Label,
    datasets: [
      {
        data: DatasetsData,
        backgroundColor: "#FBB040",
        borderColor: "#FBB040",
        borderWidth: 1
      }
    ]
  };

  const options = {
    plugins: {
      legend: {
        display: false
      }
    }
  };

  const HandleClick = () => {
    document.getElementById("BarChart").style.display = "none";
    document.getElementById("Paper").style.display = "none";
    document.getElementById("showhide").style.display = "inline";
  };
  const ClearChart = () => {
    return (
      <IconButton onClick={HandleClick}>
        {" "}
        <ClearIcon />{" "}
      </IconButton>
    );
  };

  return (
    <div>
      <Box
        sx={{
          display: "flex",
          flexWrap: "wrap",
          "& > :not(style)": {
            mx: 1,
            minHeight: 129,
            width: "100%",
            height: "100%"
          }
        }}
      >
        <Paper
          id={"Paper"}
          sx={{
            pl: 1,
            pt: 0,
            mt: 0,
            display: "none",
            paddingRight: 5,
            paddingLeft: 5
          }}
        >
          <CardHeader action={<ClearChart />} />
          <Bar
            id={"BarChart"}
            style={{ display: "none" }}
            data={data}
            options={options}
          />
        </Paper>
      </Box>
    </div>
  );
};
export default BarChart;
