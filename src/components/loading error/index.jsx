import React from 'react';

import ChihiroError from '../../assets/img/ChihiroError.webp';

//Style
import { GlobalStyle } from '../../assets/global/style';
import styled from 'styled-components';

const Main = styled.main`
    background: url(${ChihiroError}) no-repeat center/cover;
    height: 100vh;
    position: relative;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;

    &:after {
        content: "";
        position: absolute;
        inset: 0;
        background: rgba(1, 1, 1, .8);
        z-index: 0;
    }

    p {
        font: bold 4rem 'Poppins', sans-serif;
        color: #fff;
        text-align: center;
        z-index: 1;
        text-shadow: 0 0 10px #000;
    }

    @media only screen and (width <= 768px) {
        p {
            font-size: 2rem;
            padding: 0 1rem;
        }
    }
`;

export default function index() {
    return (
        <>
            <GlobalStyle />
            <Main>
                <p>Ops, algo deu errado :(</p>
                <p>Tente novamente mais tarde</p>
            </Main>
        </>
    )
}
