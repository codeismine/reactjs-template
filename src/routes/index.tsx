import React from "react";
import { Route, Routes } from "react-router-dom";
import { routes } from "./routes";

const Routers: React.FC = () => {
  return (
    <Routes>
      {
        routes.map((item) => (
          <Route path={item.path} key={item.key} element={item.element} />
        ))
      }
    </Routes>
  );
};

export default Routers;
