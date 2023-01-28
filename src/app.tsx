import "@fontsource/roboto/300.css";
import "@fontsource/roboto/400.css";
import "@fontsource/roboto/500.css";
import "@fontsource/roboto/700.css";
import { createRoot } from "react-dom/client";

const root = document.getElementById("root");
if (root) {
  const reactRoot = createRoot(root);
  reactRoot.render(<h2>Welcome Commander</h2>);
}
