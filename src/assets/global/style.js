import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        cursor: url(https://www.cursor.cc/cursor/12/193/cursor.png), default;
    }
    
    *::selection {
        background-color: #BDECB6;
        color: #878787;
    }
    
    body {
        background: linear-gradient(149deg, #628E75 0%, #1A4855 100%) center center no-repeat fixed;
        overflow: hidden;
    }
`;