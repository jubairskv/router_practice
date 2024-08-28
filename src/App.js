//import logo from './logo.svg';
import "./App.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Dashborad from "./components/Dashborad";
import Profile from "./components/Profile";
import User from "./components/User";
import SideBar from "./components/SideBar";
import Header from "./components/Header";
import Body from "./components/Body";

function App() {
  const appRouter = createBrowserRouter([
    {
      path: "/",
      element: <Dashborad />,
      children: [
        {
          path: "/", //if u passig dynamic path u need pass like without / - "profile"
          element: <Body />,
        },
        {
          path: "/profile",
          element: <Profile />,
        },
        {
          path: "/user",
          element: <User />,
        },
        {
          path: "/header",
          element: <Header />,
        },
        {
          path: "/sidebar",
          element: <SideBar />,
        },
      ],
    },
  ]);
  return (
    <div className="App">
      <RouterProvider router={appRouter} />
    </div>
  );
}

export default App;
