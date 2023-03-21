import { Outlet } from "react-router-dom";

// import "./index.styles.pages.main.scss";

const base = () => {
  // return <BaseUrl MoemonLogo={MoemonLogo}/>
  return (
    <div>
      <Outlet />
    </div>
  );
};
export default base;
