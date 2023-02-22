import { createRoot } from "react-dom/client";
import { CssBaseline, ThemeProvider } from "@mui/material";
import { RCDTheme } from "./theme/RCDTheme";
import { renderStore } from "./store/renderStore";
import { Provider } from "react-redux";
import { WatchForNewAttackLogs } from "./communication/WatchForNewAttackLogs";
import { MechsDisplayContainer } from "./mechDisplay/MechsDisplayContainer";

const root = document.getElementById("root");
if (root) {
  const reactRoot = createRoot(root);
  reactRoot.render(
    <>
      <Provider store={renderStore}>
        <WatchForNewAttackLogs />
        <ThemeProvider theme={RCDTheme}>
          <CssBaseline />
          <MechsDisplayContainer />
        </ThemeProvider>
      </Provider>
    </>
  );
}
