import styled from "styled-components";

export const Header = styled.header`
    width: 100%;
    height: 20vh;
`;

export const HeaderContainer = styled.section`
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: space-evenly;
    align-items: center;
`;

export const LogoBox = styled.figure`
    width: 50%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: flex-start;

    img {
        width: 70%;
        height: 70%;
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

export const SocialBox = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;

    svg {
        width: 2.5rem;
        height: 2.5rem;
        object-fit: contain;
        stroke: #F9F9F9;
    }
`;  