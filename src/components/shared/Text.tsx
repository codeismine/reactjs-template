import styled from "styled-components";

export const H1 = styled.h1`
  font-weight: ${({ theme }) => theme.typography.h1.fontWeight};
  font-size: ${({ theme }) => theme.typography.h1.fontSize};
  line-height: ${({ theme }) => theme.typography.h1.lineHeight};
  letter-spacing: ${({ theme }) => theme.typography.h1.letterSpacing};
`;

export const H2 = styled.h2`
  font-weight: ${({ theme }) => theme.typography.h2.fontWeight};
  font-size: ${({ theme }) => theme.typography.h2.fontSize};
  line-height: ${({ theme }) => theme.typography.h2.lineHeight};
  letter-spacing: ${({ theme }) => theme.typography.h2.letterSpacing};
`;

export const H3 = styled.h3`
  font-weight: ${({ theme }) => theme.typography.h3.fontWeight};
  font-size: ${({ theme }) => theme.typography.h3.fontSize};
  line-height: ${({ theme }) => theme.typography.h3.lineHeight};
  letter-spacing: ${({ theme }) => theme.typography.h3.letterSpacing};
`;

export const H4 = styled.h4`
  font-weight: ${({ theme }) => theme.typography.h4.fontWeight};
  font-size: ${({ theme }) => theme.typography.h4.fontSize};
  line-height: ${({ theme }) => theme.typography.h4.lineHeight};
  letter-spacing: ${({ theme }) => theme.typography.h4.letterSpacing};
`;

export const H5 = styled.h5`
  font-weight: ${({ theme }) => theme.typography.h5.fontWeight};
  font-size: ${({ theme }) => theme.typography.h5.fontSize};
  line-height: ${({ theme }) => theme.typography.h5.lineHeight};
  letter-spacing: ${({ theme }) => theme.typography.h5.letterSpacing};
`;

export const H6 = styled.h6`
  font-weight: ${({ theme }) => theme.typography.h6.fontWeight};
  font-size: ${({ theme }) => theme.typography.h6.fontSize};
  line-height: ${({ theme }) => theme.typography.h6.lineHeight};
  letter-spacing: ${({ theme }) => theme.typography.h6.letterSpacing};
`;

export const Body1 = styled.p`
  font-weight: ${({ theme }) => theme.typography.body1.fontWeight};
  font-size: ${({ theme }) => theme.typography.body1.fontSize};
  line-height: ${({ theme }) => theme.typography.body1.lineHeight};
  letter-spacing: ${({ theme }) => theme.typography.body1.letterSpacing};
`;

export const Body2 = styled.p`
  font-weight: ${({ theme }) => theme.typography.body2.fontWeight};
  font-size: ${({ theme }) => theme.typography.body2.fontSize};
  line-height: ${({ theme }) => theme.typography.body2.lineHeight};
  letter-spacing: ${({ theme }) => theme.typography.body2.letterSpacing};
`;

export const Caption = styled.p`
  font-weight: ${({ theme }) => theme.typography.caption.fontWeight};
  font-size: ${({ theme }) => theme.typography.caption.fontSize};
  line-height: ${({ theme }) => theme.typography.caption.lineHeight};
  letter-spacing: ${({ theme }) => theme.typography.caption.letterSpacing};
`;
