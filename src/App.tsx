import React from "react";
import HomeComponent from "./components/home";
import { BrowserRouter } from "react-router-dom";
import DefaultLayout from "./components/layout/DefaultLayout";
import Routers from "./routes";

const App: React.FC = () => {
  return (
    <DefaultLayout>
      <Routers />
      <HomeComponent />
    </DefaultLayout>
  );
};

export default App;
