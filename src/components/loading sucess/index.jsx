import React from 'react';

import NoFace from '../../assets/img/NoFaceLoading.webp';

//Style
import styled from 'styled-components';
import { GlobalStyle } from '../../assets/global/style';

const Main = styled.main`
    display: grid;
    place-items: center;
    width: 100%;
    height: 100vh;
    background-color: #000;

    p {
        font: bold 4rem 'Poppins', sans-serif;
        color: #fff;
        text-align: center;
        overflow: hidden; 
        border-right: .15em solid #4F8264;
        white-space: nowrap;
        margin: 0 auto;
        letter-spacing: .15em;
        animation: typing 1s steps(40, end), blink-caret 500ms step-end infinite;

        @keyframes typing {
            0% { 
                width: 0 
            }
            100% { 
                width: 100% 
            }
        }

        @keyframes blink-caret {
            0%, 100% { 
                border-color: transparent 
            }
            50% { 
                border-color: #4F8264; 
            }
        }
    }

    figure {
        width: 100%;
        height: 100%;
        display: grid;
        place-items: center;

        img {
            width: 20rem;
            height: 20rem;
        }
    }

    @media only screen and (width <= 900px) {
        p {
            font-size: 2rem;
        }
    }

    @media only screen and (width <= 500px) {
        p {
            font-size: 1.5rem;
        }
    }
`;

export default function index() {
    return (
        <>
            <GlobalStyle />
            <Main>
                <section>
                    <p>Carregando ...</p>
                    <figure>
                        <img src={NoFace} alt="Loading" />
                    </figure>
                </section>
            </Main>
        </>
    )
}
