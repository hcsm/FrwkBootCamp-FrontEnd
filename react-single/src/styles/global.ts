import styled, { createGlobalStyle } from 'styled-components'

export const GlobalStyle = createGlobalStyle`
body {
    background-color: #fff;
    margin: 0;
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen',
      'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue',
      sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }

  code {
    font-family: source-code-pro, Menlo, Monaco, Consolas, 'Courier New',
      monospace;
  }
  `
export const Button = styled.button`
  display: inline-block;
  font-weight: thin;
  text-align: center;
  border-radius: 3px;
  border: 1pt solid #0af585;
  color: #0af585;
  font-size: 1em;
  padding: 0.25em 1em;
  background: transparent;
  margin-top: 5px;
  &:hover {
    background-color: #24006f;
    color: #fff;
  }
`
export const Logo = styled.h1`
  color: #fff;
  font-weight: 700;
  font-size: 4em;
  margin-bottom: 20px;
  text-shadow: 0px 0px 28px rgb(228 228 228 / 40%);
`
export const SubTitle = styled.h4`
  color: #fff;
  font-weight: 700;
  margin-bottom: 20px;
  text-shadow: 0px 0px 28px rgb(228 228 228 / 40%);
`
export const H5 = styled.h5`
  color: white;
  line-height: 26px;
  cursor: pointer;
  -webkit-touch-callout: none; /* iOS Safari */
    -webkit-user-select: none; /* Safari */
     -khtml-user-select: none; /* Konqueror HTML */
       -moz-user-select: none; /* Old versions of Firefox */
        -ms-user-select: none; /* Internet Explorer/Edge */
            user-select: none; /* Non-prefixed version, currently
                                  supported by Chrome, Edge, Opera and Firefox */
`
