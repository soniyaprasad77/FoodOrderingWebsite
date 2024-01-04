import React from "react";
import ReactDOM from "react-dom/client";
import Header from "./components/Header.js";
import Body from "./components/Body.js";

const App = () => {
  return (
    <div>
      <Header />
      <Body />
    </div>
  );
};

// const headingjsx = React.createElement("div", {id:'head'}, React.createElement("h1", {id:"heading"}, "Hi, I am from createReactElement"));

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App></App>);
//root.render(headingjsx)
