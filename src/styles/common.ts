import styled, { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
    @font-face {
        font-family: 'Ownglyph_meetme-Rg';
        src: url('https://fastly.jsdelivr.net/gh/projectnoonnu/noonfonts_2402_1@1.0/Ownglyph_meetme-Rg.woff2') format('woff2');
        font-weight: normal;
        font-style: normal;
    }
    * {
        font-family: 'Ownglyph_meetme-Rg';
    }
    body {
        margin: 0;
    }
    a {
        color: black;
        text-decoration: none;
    }
    #today {
        background-color: #e4f0e8;
    }
`

export const Container = styled.div`
    width: 100%;
    height: 100vh;

    display: flex;
    align-items: center;
    justify-content: center;

    background-color: #4F5152;

    background-image: url("/images/background.jpg");
    background-size: cover;
    background-blend-mode: exclusion;
`

export const GitHub = styled.div`
    width: 2rem;
    height: 2rem;

    background-color: white;
    border-radius: 0.5rem;
    padding: 0.2rem;

    background-image: url("/images/GitHub_Logo.svg");
    background-size: 2rem;
    background-position: center;
    background-repeat: no-repeat;

    position: fixed;
    right: 2rem;
    bottom: 2rem;

    cursor: pointer;
`