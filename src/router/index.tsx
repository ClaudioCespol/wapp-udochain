// [F24] frontend/src/router/index.tsx — DL1111700
import { createBrowserRouter } from "react-router-dom";
import RootLayout from "../shared/RootLayout";
import Home from "../pages/Home";
import Dashboard from "../pages/Dashboard";
import Validate from "../pages/Validate";
import Sign from "../pages/Sign";
import Vote from "../pages/Vote";
import Trace from "../pages/Trace";
import Settings from "../pages/Settings";
import Legal from "../pages/Legal";
import NotFound from "../pages/NotFound";

const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    children: [
      { index: true, element: <Home /> },
      { path: "dashboard", element: <Dashboard /> },
      { path: "validate", element: <Validate /> },
      { path: "sign", element: <Sign /> },
      { path: "vote", element: <Vote /> },
      { path: "trace", element: <Trace /> },
      { path: "settings", element: <Settings /> },
      { path: "legal", element: <Legal /> },
      { path: "*", element: <NotFound /> }
    ]
  }
]);

export default router;
