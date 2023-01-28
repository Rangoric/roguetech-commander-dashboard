import { createRoot } from "react-dom/client";

const root = document.getElementById("root");
if (root) {
  const reactRoot = createRoot(root);
  reactRoot.render(<h2>Welcome Commander</h2>);
}
