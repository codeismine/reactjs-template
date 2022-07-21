import React from "react";
import styled from "styled-components";
import App from "../app";
import Footer from "./Footer";
import Header from "./Header";

interface DefaultLayoutProps {
  children: React.ReactNode;
}

const Container = styled.div`
  width: 100%;
  position: relative;
`;

const DefaultLayout: React.FC<DefaultLayoutProps> = (props) => {
  const { children } = props;
  return (
    <App>
      <Container>
        <Header />
        {children}
        <Footer copyRightYear={new Date().getFullYear()} />
      </Container>
    </App>
  );
};

export default DefaultLayout;
