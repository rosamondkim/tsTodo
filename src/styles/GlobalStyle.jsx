import { createGlobalStyle } from "styled-components";
import reset from "styled-reset";
import "./global.css";

const GlobalStyle = createGlobalStyle`
  ${reset};
  * {
    box-sizing: border-box;
  }
  body {
    color: inherit;
    font-size: 10px;
  }
  a {
    color: inherit;
    text-decoration: none;
  }
  
  button, input, textarea {
    padding: 0;
    border: none;
    background-color: inherit;
  }
  button {
    cursor: pointer;
  }
  ol, ul, li {
    list-style: none;
  }
  img {
    display: block;
    width: 100%;
    height: 100%;
  }
`;

export default GlobalStyle;
