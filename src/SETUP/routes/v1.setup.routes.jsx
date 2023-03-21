import Main from "PAGES/MAIN/index.pages.main";
import Results from "PAGES/RESULTS/index.pages.results";
import Base from "PAGES/BASE/index.pages.base";

import { BrowserRouter, Route, Routes } from "react-router-dom";

const VersionAlpha = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route index element={<Main />} />
        {/* soon to be protected routes */}
        <Route path="/" element={<Base />}>
          <Route path="results" element={<Results />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};
export default VersionAlpha;
