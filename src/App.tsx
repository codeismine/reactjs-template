import React from "react";
import HomeComponent from "./components/home";
import DefaultLayout from "./components/layout/DefaultLayout";

const App: React.FC = () => {
  return (
    <DefaultLayout>
      <HomeComponent />
    </DefaultLayout>
  );
};

export default App;
