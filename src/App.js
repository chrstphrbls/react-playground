import "./app.styles.scss";

import { GlobalContainerProvider } from "SETUP/app-context-manager/globals-container.setup";

import VersionAlpha from "SETUP/routes/v1.setup.routes";

export default function App() {
  return (
    <div className="App">
      <GlobalContainerProvider>
        <VersionAlpha />
      </GlobalContainerProvider>
    </div>
  );
}
