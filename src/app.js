import React, { lazy, Suspense } from "react";
import ReactDOM from "react-dom/client";
import {Header} from "./components/Header";
import Body from "./components/Body";
import { createBrowserRouter, RouterProvider, Outlet} from "react-router-dom";
import About from "./components/About";
import Contact from "./components/contact";
import Error from "./components/error";
import RestaurantMenu from "./components/RestaurantMenu";
// import Grocery from "./components/Grocery";


const Grocery = lazy(() => import("./components/Grocery"));

const AppLayout = () => {
  return (
    <div className="app">
      <Header />
      <Outlet />
    </div>
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
