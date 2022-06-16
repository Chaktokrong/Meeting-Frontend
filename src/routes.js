import { useRoutes } from "react-router-dom";
import { Navigate } from "react-router-dom";
// layouts
// import Layout from "./Layout/LayoutOld";
import Layout from "./Layout/Layout";
//Page
import Dashboard from "./Pages/Dashboard";
import User from "./Pages/User";
import Report from "./Pages/Report";
import Teams from "./Pages/Teams";
import Login from "./Pages/Login";
import Calendar from "./Pages/Calendar";

export default function Router({ prefersDarkMode, setPrefersDarkMode }) {
  return useRoutes([
    {
      path: "/",
      element: (
        <Layout
          to="/dashboard"
          prefersDarkMode={prefersDarkMode}
          setPrefersDarkMode={setPrefersDarkMode}
        />
      ),
      children: [
        { path: "/", element: <Navigate to="/dashboard" /> },
        { path: "dashboard", element: <Dashboard /> },
        { path: "calendar", element: <Calendar /> },
        { path: "team", element: <Teams /> },
        { path: "user", element: <User /> },
        { path: "report", element: <Report /> },
      ],
    },
    { path: "login", element: <Login /> },
  ]);
}
