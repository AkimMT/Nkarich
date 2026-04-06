import { createRoot } from "react-dom/client";
import "./styles/index.css";
import "./i18n";

const isStudio = window.location.pathname.startsWith("/studio");

if (isStudio) {
  import("sanity").then(({ Studio }) => {
    import("../sanity.config.js").then(({ default: config }) => {
      createRoot(document.getElementById("root")!).render(
        <Studio config={config} />,
      );
    });
  });
} else {
  import("./app/App.tsx").then(({ default: App }) => {
    createRoot(document.getElementById("root")!).render(<App />);
  });
}
