import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`
    body {
  font-family: 'Open Sans Condensed';
  padding: 0 40px;

  @media screen and (max-width: 1100px){
    padding: 10px;  
    }
}

a {
  text-decoration: none;
  color: black;
}

* {
  box-sizing: border-box;
}

`;
