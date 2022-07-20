import React from "react";
import HomePage from "../pages/home";
import AboutPage from "../pages/about";
import ContactPage from "../pages/contact";

export interface BaseRouteObject {
  path: string;
  element: React.ReactNode;
  key: string;
}

export const routes: BaseRouteObject[] = [
  {
    path: "/home",
    element: <HomePage />,
    key: "home",
  },
  {
    path: "/about",
    element: <AboutPage />,
    key: "about",
  },
  {
    path: "/contact",
    element: <ContactPage />,
    key: "contact",
  },
];
