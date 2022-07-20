import React from "react";
import styled from "styled-components";
import { H1 } from "../../components/shared/Text";

const Container = styled.div`
    width: 100%;
    height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
`;

const NotFoundPage: React.FC = () => {
    return (
        <Container>
            <H1>404 - Not Found!</H1>
        </Container>
    );
}

export default NotFoundPage;