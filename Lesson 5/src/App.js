import React from "react";
import ReactDOM from "react-dom/client";
import { Footer } from "./components/Footer";
import Body from "./components/Body";
// default imports
import { Header } from "./components/Header";
// named imports

const AppLayout = () => {
  return (
    <>
      <Header />
      <Body />
      <Footer />
    </>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<AppLayout />);
