import React from 'react';

import NoFace from '../../assets/img/NoFaceLoading.webp';

//Style
import styled from 'styled-components';
import { GlobalStyle } from '../../assets/global/style';

const Main = styled.main`
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100vh;
    background-color: #000;

    p {
        font: bold 4rem 'Poppins', sans-serif;
        color: #fff;
        text-align: center;
    }
`;

export default function index() {
    return (
        <>
            <GlobalStyle />
            <Main>
                <section>
                    <p>Carregando ...</p>
                    <img src={NoFace} alt="Loading" />
                </section>
            </Main>
        </>
    )
}
