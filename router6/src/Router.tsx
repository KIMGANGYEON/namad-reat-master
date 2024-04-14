import {
  BrowserRouter,
  Route,
  Routes,
  createBrowserRouter,
} from "react-router-dom";
import Header from "./components/Header";
import Home from "./screnns/Home";
import About from "./screnns/About";
import Root from "./Root";
import NotFound from "./screnns/NotFound";
import ErrorComponent from "./components/ErrorComponent";
import User from "./screnns/users/User";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    children: [
      {
        path: "",
        element: <Home />,
        errorElement: <ErrorComponent />,
      },
      {
        path: "about",
        element: <About />,
      },
      {
        path: "users/:userId",
        element: <User />,
      },
    ],
    errorElement: <NotFound />,
  },
]);

export default router;
