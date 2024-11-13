import { createBrowserRouter } from "react-router-dom";

import HomeView from "../../views/HomeView";
import CountryView from "../../views/CountryView";
import RootView from "../../views/routing/RootView";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <RootView />,
    children: [
      {
        path: "",
        element: <HomeView />,
      },
      {
        path: "country",
        element: <CountryView />,
      },
    ],
  },
]);
