import React from "react";
import ReactDOM from "react-dom/client";
import {Header} from "./components/Header";
import Body from "./components/Body";


const AppLayout = () => {
  return (
    <div className="app">
      <Header />
      <Body />
    </div>
  );
};

const test = ReactDOM.createRoot(document.getElementById("root"));
test.render(<AppLayout />);
