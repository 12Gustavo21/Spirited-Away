import styled, { keyframes } from "styled-components";

export const SlideAnimationLeft = keyframes`
    0% {
        transform: translateX(-12%);
        opacity: 0;
    }

    100% {
        transform: translateX(0%);
        opacity: 1;
    }
`;

export const SlideAnimationRight = keyframes`
    0% {
        transform: translateX(12%);
        opacity: 0;
    }

    100% {
        transform: translateX(0%);
        opacity: 1;
    }
`;

export const Header = styled.header`
    width: 100%;
    height: 20vh;
    user-select: none;  

    @media only screen and (width <= 900px) {
        height: 15vh;
    }
`;

export const HeaderContainer = styled.section`
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: space-evenly;
    align-items: center;

    @media only screen and (width <= 900px) {
        height: 85%;
        padding: 0 1rem;
    }
`;

export const LogoBox = styled.figure`
    width: 80%;
    height: 100%;
    display: flex;
    justify-content: flex-start;
    align-items: center;
    animation: ${SlideAnimationLeft} 2s ease-in-out;

    img {
        width: 50%;
        height: 50%;
        object-fit: contain;
    }   

    @media only screen and (width <= 900px) {
        width: 50%;
        img {
            width: 70%;
            height: 70%;
        }
    }
`;

export const Social = styled.div`
    width: 50%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 2rem;
    animation: ${SlideAnimationRight} 2.5s ease-in-out;

    @media only screen and (width <= 900px) {
        height: 40%;
        align-items: flex-end;
    }

    @media only screen and (width <= 425px) {
        gap: 1.3rem;
    }   
`;

export const SocialLink = styled.a`
    display: flex;
    justify-content: center;
    align-items: center;

    img {
        width: 2rem;
        height: 2rem;
        object-fit: contain;
        transition: all 0.2s ease-in-out;

        &:hover {
            transform: scale(1.1);
            filter: drop-shadow(0 0 .03rem #F9F9F9);
            cursor: url('https://www.cursor.cc/cursor/734/78/cursor.png'), auto !important;
        }
    }

    @media only screen and (width <= 900px) {
        img {
            width: 1.5rem;
            height: 1.5rem;
        }
    }
`;

export const Main = styled.main`
    width: 100%;
    height: 70vh;
`;

export const MainContainer = styled.section`
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;

    @media only screen and (width <= 900px) {
        flex-direction: column-reverse;
        align-items: flex-start;
    }
`;

export const MovieContainer = styled.div`
    width: 75%;
    height: 100%;
    display: flex;
    justify-content: space-evenly;
    align-items: center;
    flex-direction: column;

    @media only screen and (width <= 900px) {
        width: 100%;
    }
`;

export const Movie = styled.div`
    width: 65%;
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: flex-start;

    @media only screen and (width <= 900px) {
        width: 90%;
    }
`;

export const AboutMovie = styled.div`
    width: 70%;
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: flex-start;
    gap: .5rem;

    @media only screen and (width <= 1260px) {
        width: 100%;
    }
`;

export const MovieAuthor = styled.h2`
    font: 700 1.25rem/1.5rem 'Poppins', sans-serif;
    color: #F9F9F9;
    letter-spacing: 0.0375rem;
    text-transform: uppercase;
    padding-left: 0.5rem;
    animation: ${SlideAnimationLeft} 2s ease-in-out;

    @media only screen and (width <= 900px) {
        font: 700 1rem/0.875rem 'Poppins', sans-serif;
    }
`;

export const MovieTittle = styled.h1`
    font: 900 4.25rem/5rem 'Poppins', sans-serif;
    text-transform: uppercase;
    color: #F9F9F9;
    animation: ${SlideAnimationLeft} 2s ease-in-out;

    @media only screen and (width <= 1440px) {
        font-size: 3.5rem;
    }

    @media only screen and (width <= 900px) {
        font: 900 2.5rem/3rem 'Poppins', sans-serif;
    }
`;

export const MovieSynopsis = styled.p`
    font: 400 1rem/2rem 'Poppins', sans-serif;
    color: #F9F9F9;
    animation: ${SlideAnimationLeft} 2.2s ease-in-out;

    @media only screen and (width <= 1440px) {
        font: 400 0.875rem/1.5rem 'Poppins', sans-serif;
    }

    @media only screen and (width <= 500px) {
        font: 400 0.8rem/1.25rem 'Poppins', sans-serif;
    }
`;

export const MovieButtons = styled.div`
    width: 65%;
    height: 50%;
    display: flex;
    justify-content: flex-start;
    align-items: flex-start;
    gap: 1rem;
    animation: ${SlideAnimationLeft} 2.4s ease-in-out;

    button {
        background: #658E76;
        border: none;

        &:active {
            background: #3B6A4B;
        }
    }

    a {
        text-decoration: none;
        background: transparent;
    }

    a:nth-child(2) {
        button {
            background: transparent;
            border: 0.2rem solid #658E76;  
        }

        @media only screen and (width <= 900px) {
            display: none;
        }
    }

    a button:hover {
        background: #4F8264;
        border-color: #4F8264;
    }

    a,
    button,
    img,
    p {
        cursor: url('https://www.cursor.cc/cursor/734/78/cursor.png'), auto !important;
    }

    @media only screen and (width <= 1440px) {
        height: 30%;
    }

    @media only screen and (width <= 900px) {
        width: 90%;
        height: 20%;
        gap: 0;
    }

    @media only screen and (width <= 500px) {
        margin-top: 1rem;
    }
`;

export const MovieButton = styled.button`
    width: 14.5rem;
    height: 3rem;
    display: flex;
    justify-content: center;
    align-items: center;
    gap: .5rem;
    transform: skew(-24deg);
    transition: all 0.2s ease-in-out;
    overflow: hidden;

    p, img {
        font: 500 1rem/1.5rem 'Poppins', sans-serif;
        transform: skew(24deg);
        color: #F9F9F9;
        text-transform: uppercase;
    }

    &:after {
        background: #32A45D;
        content: "";
        height: 10rem;
        left: -10rem;
        opacity: .4;
        position: absolute;
        top: -3.125rem;
        transform: rotate(35deg);
        transition: all 1s cubic-bezier(0.19, 1, 0.22, 1);
        width: 3.125rem;
    }

    &:hover {
        &:after {
            left: 120%;
            transition: all 1s cubic-bezier(0.19, 1, 0.22, 1);
        }
    }

    @media only screen and (width <= 1440px) {
        width: 12rem;
        height: 2.5rem;
    }

    @media only screen and (width <= 900px) {
        width: 11rem;
        p, img {
            font: 500 0.875rem/1.5rem 'Poppins', sans-serif;
        }
    }
`;

export const Floating = keyframes`
    0% {
        transform: translateY(0);
    }

    100% {
        transform: translateY(-2rem);
    }
`;

export const NoFaces = styled.figure`
    width: 50%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    margin: 0 5% 5% 0;
    user-select: none;
    animation: ${SlideAnimationRight} 2s ease-in-out;

    img {
        width: 100%;
        height: 100%;
        object-fit: contain;
        animation: 2s ease-in-out 0s infinite alternate none running ${Floating};
    }

    @media only screen and (width <= 900px) {
        width: 100%;
        height: 70%;
        margin-bottom: 0;
    }

    @media only screen and (width <= 500px) {
        height: 100%;
    }
`;

export const Footer = styled.footer`
    width: 100%;
    height: 10vh;
    display: flex;
    justify-content: flex-start;
    align-items: center;
    padding-left: 10rem;
    font: 400 1rem/1.5rem 'Poppins', sans-serif;
    animation: ${SlideAnimationLeft} 2s ease-in-out;

    p, a {
        color: #F3F5F7;
        text-decoration: none;
        position: absolute;
    }

    a::after {
        position: relative;
        display: block;
        content: "";
        border-bottom: #F3F5F7 0.125rem solid;
        border-radius: 0.125rem;
        transform: scaleX(0.1);
        transform-origin: center;
        transition: transform 300ms ease-in-out;
    }

    a:hover::after {
        transform: scaleX(1);
    }

    a:hover {
        cursor: url('https://www.cursor.cc/cursor/734/78/cursor.png'), auto !important;
    }

    @media only screen and (width <= 1260px) {
        padding-left: 5rem;
    }

    @media only screen and (width <= 900px) {
        height: 15vh;
        padding: 1rem 0 .5rem 2.5rem;
        align-items: flex-end;
    }

    @media only screen and (width <= 768px) {
        padding-left: 1rem;
    }
`;