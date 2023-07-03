import styled from "styled-components";

export const Header = styled.header`
    width: 100%;
    height: 20vh;
    user-select: none;  
`;

export const HeaderContainer = styled.section`
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: space-evenly;
    align-items: center;
`;

export const LogoBox = styled.figure`
    width: 80%;
    height: 100%;
    display: flex;
    justify-content: flex-start;
    align-items: center;

    img {
        width: 50%;
        height: 50%;
        object-fit: contain;
    }   
`;

export const Social = styled.div`
    width: 50%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 2rem;
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
`;

export const MovieContainer = styled.div`
    width: 75%;
    height: 100%;
    display: flex;
    justify-content: space-evenly;
    align-items: center;
    flex-direction: column;
`;

export const Movie = styled.div`
    width: 65%;
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: flex-start;
`;

export const AboutMovie = styled.div`
    width: 70%;
    height: 50%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: flex-start;
    gap: 1rem;
`;

export const MovieAuthor = styled.h2`
    font: 700 1.25rem/1.5rem 'Poppins', sans-serif;
    color: #F9F9F9;
    letter-spacing: 0.0375rem;
    text-transform: uppercase;
    padding-left: 0.5rem;
`;

export const MovieTittle = styled.h1`
    font: 900 4.25rem/5rem 'Poppins', sans-serif;
    text-transform: uppercase;
    color: #F9F9F9;
`;

export const MovieSynopsis = styled.p`
    font: 400 1rem/2rem 'Poppins', sans-serif;
    color: #F9F9F9;
`;

export const MovieButtons = styled.div`
    width: 65%;
    height: 50%;
    display: flex;
    justify-content: flex-start;
    align-items: flex-start;
    gap: 1rem;

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
    }

    a button:hover {
        background: #4F8264;
        border-color: #4F8264;
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
    cursor: pointer;
    transition: all 0.2s ease-in-out;
    overflow: hidden;

    p, img {
        transform: skew(24deg);
        color: #F9F9F9;
        font-size: 1rem;
        font-family: 'Poppins', sans-serif;
        font-style: normal;
        font-weight: 500;
        line-height: 180%;
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
`;

export const NoFaces = styled.figure`
    width: 50%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    position: relative;
    bottom: 10%;
    right: 5%;

    img {
        width: 100%;
        height: 100%;
        object-fit: contain;
        animation: 2s ease-in-out 0s infinite alternate none running floating;

        @keyframes floating {
            0% {
                transform: translateY(1%);
            }

            100% {
                transform: translateY(5%);
            }
        }
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
`;