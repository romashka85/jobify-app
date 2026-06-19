import { createBrowserRouter, RouterProvider } from "react-router-dom";
import {
  AddJob,
  Admin,
  AllJobs,
  DashboardLayout,
  EditJob,
  Error,
  HomeLayout,
  Landing,
  Login,
  Profile,
  Register,
  Stats,
} from "./pages";

import { action as addJobAction } from "./pages/AddJob";
import { loader as adminLoader } from "./pages/Admin";
import { loader as allJobsLoader } from "./pages/AllJobs";
import { loader as dashboardLoader } from "./pages/DashboardLayout";
import { action as deleteJobAction } from "./pages/DeleteJob";
import {
  action as editJobAction,
  loader as editJobLoader,
} from "./pages/EditJob";
import { action as loginAction } from "./pages/Login";
import { action as profileAction } from "./pages/Profile";
import { action as registerAction } from "./pages/Register";
import { loader as statsLoader } from "./pages/Stats";

export const checkDefaultTheme = () => {
  const isaDarkTheme = localStorage.getItem("darkTheme") === "true";
  document.body.classList.toggle("dark-theme", isaDarkTheme);
  return isaDarkTheme;
};

checkDefaultTheme();

const router = createBrowserRouter([
  {
    path: "/",
    element: <HomeLayout />,
    errorElement: <Error />,
    children: [
      {
        index: true,
        element: <Landing />,
      },
      {
        path: "register",
        element: <Register />,
        action: registerAction,
      },
      {
        path: "login",
        element: <Login />,
        action: loginAction,
      },
      {
        path: "dashboard",
        element: <DashboardLayout />,
        loader: dashboardLoader,
        children: [
          {
            index: true,
            element: <AddJob />,
            action: addJobAction,
          },
          {
            path: "stats",
            element: <Stats />,
            loader: statsLoader,
          },
          {
            path: "all-jobs",
            element: <AllJobs />,
            loader: allJobsLoader,
          },
          {
            path: "profile",
            element: <Profile />,
            action: profileAction,
          },
          {
            path: "admin",
            element: <Admin />,
            loader: adminLoader,
          },
          {
            path: "edit-job/:id",
            element: <EditJob />,
            action: editJobAction,
            loader: editJobLoader,
          },
          {
            path: "delete-job/:id",
            action: deleteJobAction,
          },
        ],
      },
    ],
  },
]);
const App = () => {
  return (
    <RouterProvider router={router} future={{ v7_startTransition: true }} />
  );
};

export default App;
