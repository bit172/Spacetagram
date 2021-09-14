import { createGlobalStyle } from 'styled-components';
import media from './media';

const GlobalStyles = createGlobalStyle`
  :root {
  --white: #FFFFFF;
  --off-white: #F5F5F5; 
  --black: #000000;
  --bg-primary: #e3e3e3;
  --instagram-purple: #9e33b6;
  --header-z-index: 20;
  --header-height: 100px;
  --header-mobile-height: 63px;
  }
  html {
    background: var(--bg-primary);
    font-size: 16px;
  }
  body {
    font-size: 1.1rem;
  }
  img {
    max-width: 100%;
  }
  main {
    min-height: 1000px;
    margin-bottom: 1rem;
  }
  .container {
    margin: 0 auto;
    max-width: 768px;
    padding: 0 10px;
    
    ${media.greaterThan('laptop')`
      padding: 0 50px
    `}
  }
`;

export default GlobalStyles;
