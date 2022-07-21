import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
    * {
        margin: 0px;
        padding: 0px;
        box-sizing: border-box;
    }
    body {
        font-family: ${({ theme }) => theme.typography.fontFamily};
        font-size: ${({ theme }) => theme.typography.fontSize};
        line-height: ${({ theme }) => theme.typography.lineHeight};
        color: ${({ theme }) => theme.palette.common.white};
        background-color: ${({ theme }) => theme.custom.primary.main};
    }
`;

export default GlobalStyle;