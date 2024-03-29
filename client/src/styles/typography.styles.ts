import { createGlobalStyle } from 'styled-components';

const Typography = createGlobalStyle`
  html {
    font-family: 'Open Sans', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Helvetica Neue', sans-serif;
    color: var(--black);
  }
  h1,h2,h3,h4,h5,h6 {
    margin: 0;
  }
  p {
    letter-spacing: 1.03px;
    line-height: 1.6
  }
`;

export default Typography;
