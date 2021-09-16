import { createGlobalStyle } from 'styled-components';
import media from './media';

const GlobalStyles = createGlobalStyle`
  :root {
  --white: #FFFFFF;
  --off-white: #F5F5F5; 
  --black: #000000;
  --bg-primary: #e3e3e3;
  --rdp-cell-size: 40px;
  --rdp-accent-color: #4583ff;
  --rdp-outline: 2px solid var(--black);
  }
  html {
    background: var(--bg-primary);
    font-size: 16px;
  }

  /* Scroll Bar Styles */
  body::-webkit-scrollbar {
    width: 12px;
  }
  html {
    scrollbar-width: thin;
    scrollbar-color: var(--black) var(--white);
  }
  body::-webkit-scrollbar-track {
    background: var(--white);
  }
  body::-webkit-scrollbar-thumb {
    background-color: var(--black) ;
    border-radius: 6px;
    border: 3px solid var(--white);
  }

  body {
    margin: 30px 0;
    font-size: 1.1rem;
  }
  img {
    max-width: 100%;
  }
  main {
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
   /* Day Picker Styles  */
  .rdp {
    background: var(--white);
    border-radius: 10px;
    padding: 10px;
  }
`;

export default GlobalStyles;
