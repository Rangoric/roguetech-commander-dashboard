import { createRoot } from "react-dom/client";
import { CssBaseline, ThemeProvider } from "@mui/material";
import { Provider } from "react-redux";
import { ReceiveMessages } from "../communication/ReceiveMessages";
import { renderStore } from "./store/store";
import { RCDTheme } from "./theme/RCDTheme";
import { Layout } from "./Layout";

const root = document.getElementById("root");

if (root) {
  const reactRoot = createRoot(root);

  reactRoot.render(
    <>
      <Provider store={renderStore}>
        <ReceiveMessages />
        <ThemeProvider theme={RCDTheme}>
          <CssBaseline />
          <Layout />
        </ThemeProvider>
      </Provider>
    </>
  );
}
