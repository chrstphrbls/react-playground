import Button from "@mui/material/Button";

const ShowGraphButton = () => {
  const HandleClick = () => {
    document.getElementById("BarChart").style.display = "inline";
    document.getElementById("Paper").style.display = "inline";
    document.getElementById("showhide").style.display = "none";
  };

  return (
    <Button
      size="large"
      id={"showhide"}
      variant="text"
      onClick={HandleClick}
      style={{
        textTransform: "none",
        border: "none",
        color: "#4C84C4",
        textDecoration: "underline",
        outline: "none"
      }}
    >
      See query result in graphical format{" "}
    </Button>
  );
};
export default ShowGraphButton;
