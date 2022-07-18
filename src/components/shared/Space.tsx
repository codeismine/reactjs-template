import React from "react";
import styled from "styled-components";

const SpaceWidthContainer = styled.div`
  width: ${({ theme }) => theme.spacing.width};
`;

const SpaceHeightContainer = styled.div`
  height: ${({ theme }) => theme.spacing.height};
`;

interface SpaceProps {
  style?: React.CSSProperties;
}

export const SpaceWidth: React.FC<SpaceProps> = (props) => {
  const { style, ...rest } = props;
  return <SpaceWidthContainer style={style} {...rest} />;
};

export const SpaceHeight: React.FC<SpaceProps> = (props) => {
  const { style, ...rest } = props;
  return <SpaceHeightContainer style={style} {...rest} />;
};
