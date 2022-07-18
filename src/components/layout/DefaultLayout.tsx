import React from "react";
import styled from "styled-components";
import App from "../app";

interface DefaultLayoutProps {
  children: React.ReactNode;
}

const Container = styled.div`
  width: 100%;
`;

const DefaultLayout: React.FC<DefaultLayoutProps> = (props) => {
  const { children } = props;
  return (
    <App>
      <Container>{children}</Container>
    </App>
  );
};

export default DefaultLayout;
