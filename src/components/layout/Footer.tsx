import React from "react";
import styled from "styled-components";
import { Body1 } from "../shared/Text";

interface FooterProps {
  copyRightYear: any;
}

const FooterContainer = styled.div`
  width: 100%;
  padding: 4px 0px;
  display: flex;
  justify-content: center;
  background-color: ${({ theme }) => theme.custom.primary.light};
`;

const Footer: React.FC<FooterProps> = (props) => {
  const { copyRightYear, ...rest } = props;
  return (
    <FooterContainer {...rest}>
      <Body1>&copy; {copyRightYear} Copyright Code.Is.Mine</Body1>
    </FooterContainer>
  );
};

export default Footer;
