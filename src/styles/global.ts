import { createGlobalStyle } from "styled-components";
import githubBackgroundLight from '../assets/github-background-light.svg';
import githubBackgroundDark from '../assets/github-background-dark.svg';

export default createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  body {
    background: ${props => props.theme.title === 'light' ? '#F2F2FA' : '#313134'} 
    url(${props => props.theme.title === 'light' ? githubBackgroundLight : githubBackgroundDark}) 
    no-repeat 70% top;
    -webkit-font-smoothing: antialiased;
  }

  body, input, button {
    font: 16px Roboto, sans-serif;
  }

  #root {
    max-width: 960px;
    margin: 0 auto;
    padding: 40px 20px;
  }

  button {
    cursor: pointer;
  }
`;