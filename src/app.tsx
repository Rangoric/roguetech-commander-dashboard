import { createRoot } from "react-dom/client";
import { CssBaseline, ThemeProvider } from "@mui/material";
import { RCDTheme } from "./theme/RCDTheme";
import { store } from "./store/store";
import { Provider } from "react-redux";
import { WatchForNewAttackLogs } from "./communication/WatchForNewAttackLogs";
import { MechsDisplayContainer } from "./mechDisplay/MechsDisplayContainer";

const root = document.getElementById("root");
if (root) {
  const reactRoot = createRoot(root);
  reactRoot.render(
    <>
      <ThemeProvider theme={RCDTheme}>
        <CssBaseline />
        <Provider store={store}>
          <WatchForNewAttackLogs />
          <MechsDisplayContainer />
        </Provider>
      </ThemeProvider>
    </>
  );
}
