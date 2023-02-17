import React, { lazy, Suspense, useContext } from "react";
import ReactDOM from "react-dom/client";
import Header from "./components/Header";
import Body from "./components/Body";
import Footer from "./components/Footer";
import About from "./components/About";
import Error from "./components/Error";
import { createBrowserRouter, Outlet, RouterProvider } from "react-router-dom";
import RestaurantMenu from "./components/RestaurantMenu";
import ShimmerUi from "./components/ShimmerUi";
import GMart from "./components/GMart";
import UserContext from "./utils/userContext";

const Contact = lazy(() => import("./components/Contact"));
const GMart = lazy(()=>import('./components/GMart'))

const AppLayout = () => {
  const {user} = useContext(UserContext)

  return (
    <div>
    <UserContext.Provider value={{user}}>
      <Header />
      <Outlet />
      <Footer />
    </UserContext.Provider>
    </div>
  );
};

const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout />,
    errorElement: <Error />,
    children: [
      {
        path: "/",
        element: <Body />,
      },
      {
        path: "/About",
        element: <About />,
      },
      {
        path: "/restaurant/:restaurantId",
        element: <RestaurantMenu />,
      },
      {
        path: "/contact",
        element: (
          <Suspense fallback={ <ShimmerUi /> } >
            <Contact />
          </Suspense>
        ),
      },
      {
        path: "/gmart",
        element: <Suspense fallback={<ShimmerUi />}>
                    <GMart />
                </Suspense>,
      },
    ],
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<RouterProvider router={appRouter} />);
