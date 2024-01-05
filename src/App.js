import React from "react";
import ReactDOM from "react-dom/client";
import Header from "./components/Header.js";
import Body from "./components/Body.js";
import {createBrowserRouter, RouterProvider} from 'react-router-dom';
import About from "./components/About.js";
import Contact from "./components/Contact.js";
import Error from "./components/Error.js";


const App = () => {

  return (
    <div>
      <Header />
      <Body />
    </div>
  );
};

const appRouter = createBrowserRouter([
  {
    path: '/',
    element: <App/>,
    errorElement: <Error/>
  },
  {
    path: '/about',
    element: <About/>
  },
  {
    path: '/contact',
    element: <Contact/>
  }
])
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <RouterProvider router={appRouter}>
    
  </RouterProvider>
);

