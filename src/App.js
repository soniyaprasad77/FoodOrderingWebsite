import React, {Suspense, lazy} from "react";
import ReactDOM from "react-dom/client";
import Header from "./components/Header.js";
import Body from "./components/Body.js";
import {createBrowserRouter, RouterProvider, Outlet} from 'react-router-dom';
import About from "./components/About.js";
import Contact from "./components/Contact.js";
import Error  from "./components/Error.js";
import RestaurantMenu from "./components/RestaurantMenu.js";
import ShimmerUI from "./components/ShimmerUI.js";

const Grocery = lazy(()=>import("./components/Grocery.js"));


const App = () => {

  return (
    <div>
      <Header />
      <Outlet />
    </div>
  );
};

const appRouter = createBrowserRouter([
  {
    path: '/',
    element: <App/>,
    errorElement: <Error/>,
    children:[
    {
     path: '/',
     element:<Body/>
    },
    {
      path: '/about',
      element: <About/>
    },
    {
      path: '/contact',
      element: <Contact/>
    }
    , 
    {
      path: 'restaurants/:resId',
      element: <RestaurantMenu/>
    }
    , 
    {
      path: '/grocery',
      element:<Suspense fallback={<h1>Hey.. its loading buddy</h1>}> <Grocery/></Suspense>
    }
    , 
    ]
}
])
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <RouterProvider router={appRouter}>
    
  </RouterProvider>
);

