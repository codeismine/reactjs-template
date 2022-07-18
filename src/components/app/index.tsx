import React from "react";
import { ThemeProvider } from "styled-components";
import { defaultTheme } from "../theme";
import GlobalStyle from "../theme/GlobalStyle";

const App: React.FC<{
  children: React.ReactNode;
}> = (props) => {
  return (
    <ThemeProvider theme={defaultTheme}>
      <GlobalStyle />
      {props.children}
    </ThemeProvider>
  );
};

export default App;
