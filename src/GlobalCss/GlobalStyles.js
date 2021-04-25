import { createGlobalStyle, css } from "styled-components";

export const GlobalStyles = createGlobalStyle`
* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
  
  html {
    font-size: 10px;
    max-width: 1400px;
    overscroll-behavior-y: contain;
    user-select: none;
    overflow-x: hidden;
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen',
    'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue',
    sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  scroll-behavior: smooth;
    overflow-x: hidden;
  }
`;

export const WrapperStyle = css`
  display: flex;
  font-size: 1.6rem;
`;

export const ThemedWrapperStyle = css`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  font-size: 1.6rem;
  background-color: ${({ theme }) => (theme === true ? "black" : "white")};
  color: ${({ theme }) => (theme === true ? "white" : "black")};
  min-height: 100vh;
`;
