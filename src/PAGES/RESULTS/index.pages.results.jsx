import TableResult from "COMPONENT/UI/results/results-handler.com.ui";
import { Footer, Header } from "COMMONS/COMPONENT/ui.com.commons";
import Stack from "@mui/material/Stack";
import "./index.styles.pages.results.scss";

const Results = () => {
  return (
    <Stack spacing={4}>
      <Header />
      <div>
        <TableResult />
      </div>
      <div className="footer-results">
        <Footer />
      </div>
    </Stack>
  );
};
export default Results;
