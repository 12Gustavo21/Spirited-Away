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