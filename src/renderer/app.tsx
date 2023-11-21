import { createRoot } from "react-dom/client";
import { Provider } from "react-redux";
import { renderStore } from "./store/store";
import { BaseApp } from "./BaseApp";

const root = document.getElementById("root");

if (root) {
  const reactRoot = createRoot(root);

  reactRoot.render(
    <Provider store={renderStore}>
      <BaseApp />
    </Provider>,
  );
}
