import { createGlobalStyle } from 'styled-components'

const GlobalStyle = createGlobalStyle`

    :root {
        font-size: 60%;
    }

    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }
    
    body, input, textarea, button, a{
        outline: none;
        font-family: "Beaufort W01 Heavy Italic";
        font-weight: 600 !important;
        text-transform: uppercase;
    }


    a {
        text-decoration: none;
    }
`

export default GlobalStyle;
