import { createBrowserRouter } from "react-router";
import { Layout } from "./components/Layout";
import { Home } from "./pages/Home";
import { About } from "./pages/About";
import { Exhibitions } from "./pages/Exhibitions";
import { Blog } from "./pages/Blog";
import { StudioPage } from "./pages/Studio";

export const router = createBrowserRouter([
  {
    path: "/studio",
    Component: StudioPage,
  },
  {
    path: "/studio/*",
    Component: StudioPage,
  },
  {
    path: "/",
    Component: Layout,
    children: [
      { index: true, Component: Home },
      { path: "about", Component: About },
      { path: "exhibitions", Component: Exhibitions },
      { path: "blog", Component: Blog },
    ],
  },
]);
