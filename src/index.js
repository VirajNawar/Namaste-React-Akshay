import React from "react";
import ReactDOM from "react-dom/client";
import Header from "./components/Header";
import Body from "./components/Body";
import Footer from "./components/Footer"
import About from "./components/About";
import Error from "./components/Error";
import { createBrowserRouter, Outlet, RouterProvider } from "react-router-dom";
import RestaurantMenu from "./components/RestaurantMenu";


const AppLayout = () => {
  return (
    <div>
      <Header />
      <Outlet />
      <Footer />
    </div>
  );
};



const appRouter = createBrowserRouter([
  {
    path:"/",
    element:<AppLayout />,
    errorElement : <Error />,
    children:[
      {
        path:"/",
        element:<Body />,
      },
      {
        path:"/About",
        element:<About />,
      },
      {
        path:"/restaurant/:restaurantId",
        element:<RestaurantMenu />,
      },
    ]
  },
 
])


const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<RouterProvider  router={appRouter} />);
