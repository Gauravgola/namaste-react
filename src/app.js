import React, { lazy, Suspense, useEffect, useState } from "react";
import ReactDOM from "react-dom/client";
import {Header} from "./components/Header";
import Body from "./components/Body";
import { createBrowserRouter, RouterProvider, Outlet} from "react-router-dom";
import About from "./components/About";
import Contact from "./components/contact";
import Error from "./components/error";
import RestaurantMenu from "./components/RestaurantMenu";
import UserContext from "./utils/userContext";
// import Grocery from "./components/Grocery";


const Grocery = lazy(() => import("./components/Grocery"));

const AppLayout = () => {

  const [userName, setUserName] = useState();

  //Authentication
  useEffect(() => {
    // make an api call send username and password
    const data = {
      name:"Gaurav Gola",                  // now i want to keep this data in the userInfo
    }                                         // to pass this new information in app we will use context provider
    setUserName(data.name);
  },[]);

  return (
    <UserContext.Provider value={{ loggedInUser : userName, setUserName }}>
    <div className="app">
      <UserContext.Provider value={{ loggedInUser : "Namaste React"}}>
      <Header />
      </UserContext.Provider>
      <Outlet />
    </div>
    </UserContext.Provider>
  );
};

const appRouter = createBrowserRouter([

    {
      path:"/",
      element:<AppLayout />,
      children:[
        {
          path:"/",
          element:<Body />,
        },
        {
          path:"/about",
          element:<About />,
        },
    
        {
          path:"/contact",
          element:<Contact />,
        },

        {
          path:"/grocery",
          element:<Suspense fallback={<h1>Loading....</h1>}><Grocery /></Suspense>,  //fallback work as place holder
        },

        {
          path:"/restaurant/:resId",
          element:<RestaurantMenu />,
        },
      ],
      errorElement:<Error />,
    },

    // {
    //   path:"/about",
    //   element:<About />,
    // },

    // {
    //   path:"/contact",
    //   element:<Contact />,
    // },
  ])

const test = ReactDOM.createRoot(document.getElementById("root"));
test.render(<RouterProvider router={appRouter} />);
