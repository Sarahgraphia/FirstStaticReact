import React, { Component } from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import About from "../About/About";
import Contact from "../Contact/Contact";
import Home from "../Home/Home";
import MasterLayout from "../MasterLayout/MasterLayout";
import NotFound from "../Notfound/NotFound";
import Portfolio from "../Portfolio/Portfolio";
import "../css/Style.css";

export default class App extends Component {
  routes = createBrowserRouter([
    {
      path: "/",
      element:<MasterLayout /> ,
      errorElement:<NotFound /> ,
      children: [
        { index: true, element: <Home /> },
        { path: "about", element: <About /> },
        { path: "protfolio", element: <Portfolio /> },
        { path: "Contact", element: <Contact /> },
      ],
    },
  ]);

  render() {
    return (
      <>
        <RouterProvider router={this.routes} />
      </>
    );
  }
}
