import { createRoot } from "react-dom/client";
import "./styles/index.css";
import "./i18n";

const root = createRoot(document.getElementById("root")!);

if (window.location.pathname.startsWith("/studio")) {
  Promise.all([import("sanity"), import("../sanity.config.js")]).then(
    ([{ Studio }, { default: config }]) => {
      root.render(<Studio config={config} />);
    },
  );
} else {
  import("./app/App.tsx").then(({ default: App }) => {
    root.render(<App />);
  });
}
