import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}

body {
    font-family: 'Inter', sans-serif;
    font-size: 16px;
    background-color: #f5fbfb;
    color: #2e3057;
}

img, svg {
    display: block;
    vertical-align: middle;
}

img {
    max-width: 100%;
    height: auto;
}
`;

export default GlobalStyle;
