import React from "react";
import DefaultLayout from "./components/layout/DefaultLayout";
import Routers from "./routes";

const App: React.FC = () => {
  return (
    <DefaultLayout>
      <Routers />
    </DefaultLayout>
  );
};

export default App;
