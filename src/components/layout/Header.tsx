import React from "react";
import styled from "styled-components";
import Navbar from "./Navbar";

const HeaderContainer = styled.div`
  width: 100%;
  background-color: ${({ theme }) => theme.custom.primary.dark};
  position: fixed;
  top: 0px;
  left: 0px;
`;

const Header: React.FC = () => {
  return (
    <HeaderContainer>
      <Navbar />
    </HeaderContainer>
  );
};

export default Header;
