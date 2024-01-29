import React, { Suspense, lazy, useEffect } from "react";
import ReactDOM from "react-dom/client";
import Header from "./components/Header.js";
import Body from "./components/Body.js";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import { useState } from "react";
import About from "./components/About.js";
import Contact from "./components/Contact.js";
import Error from "./components/Error.js";
import RestaurantMenu from "./components/RestaurantMenu.js";
import ShimmerUI from "./components/ShimmerUI.js";
import UserContext from "../utils/UserContext.js";
const Grocery = lazy(() => import("./components/Grocery.js"));
import { Provider } from "react-redux";
import appStore from "../utils/appStore.js";
import AddtoCart from "./components/AddtoCart.js";

const App = () => {
  const [userName, setUserName] = useState();
  useEffect(() => {
    const data = {
      name: "Soniya prasad",
    };
    setUserName(data.name);
  }, []);

  return (
    <Provider store={appStore}>
    <UserContext.Provider value={{loggedInUser:userName, setUserName}}>
      <div>
        <Header />
        <Outlet />
      </div>
    </UserContext.Provider>
    </Provider>
  );
};

const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <Error />,
    children: [
      {
        path: "/",
        element: <Body />,
      },
      {
        path: "/about",
        element: <About />,
      },
      {
        path: "/contact",
        element: <Contact />,
      },
      {
        path: "restaurants/:resId",
        element: <RestaurantMenu />,
      },
      {
       path:"cart",
       element: <AddtoCart/>
      },

      {
        path: "/grocery",
        element: (
          <Suspense fallback={<h1>Hey.. its loading buddy</h1>}>
            {" "}
            <Grocery />
          </Suspense>
        ),
      },
    ],
  },
]);
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={appRouter}></RouterProvider>);
