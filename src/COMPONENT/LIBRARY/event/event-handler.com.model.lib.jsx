import { useRouter } from "SETUP/routes/v1.setup.routes";
// import { useNavigate } from "react-router-dom";
const focusInput = () => {
  document.getElementById("input-field").focus();
  // alert("clicked");//starter engine
};

export const searchFormClick = () => {
  // focusInput();
  ToResultsPage();
};

export const handleFormClick = () => {
  focusInput();
};

export const ClearIconClick = () => {
  document.getElementById("input-field").value = "";
  document.getElementById("input-field").style.width = "1px";
};
export const ToResultsPage = () => {
  // const navigate = useNavigate();
  // if (document.getElementById("input-field").value) navigate("/results");
};
