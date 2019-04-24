import { createGlobalStyle } from "styled-components";
import theme from "./_theme";

// Typo rules

const GlobalStyle = createGlobalStyle`

@import url('https://fonts.googleapis.com/css?family=Proza+Libre:400,400i,500,500i,600,600i,700,700i,800,800i');
@import url('https://fonts.googleapis.com/css?family=IBM+Plex+Sans:100,100i,200,200i,300,300i,400,400i,500,500i,600,600i,700,700i');

@font-face {
  font-family: 'IBM Plex Sans';
  src: url(https://fonts.googleapis.com/css?family=IBM+Plex+Sans:100,100i,200,200i,300,300i,400,400i,500,500i,600,600i,700,700i) format(woff2);
  font-display: fallback;
  font-weight: 400;
}
html, .root {
  font-size: 16px;
  box-sizing: border-box;
  
  @media ${theme.device.tablet}{
    font-size: 18px;
  }
  @media ${theme.device.desktop}{
    font-size: 21px;
  }
}

body {
  overflow: auto;
  box-sizing: border-box;
  margin: 0;
  padding: 0;
  text-align: left;

  font-family: ${theme.font.family1};
  font-size: 1rem;
  line-height: ${theme.font.lineHeight};
  font-kerning: normal;
  font-display: fallback;
  color: ${theme.textColor.default};

  background: ${theme.neutral.n05};
  background-repeat: no-repeat;


}
.h1, h2, h3, h4, h5{
  /* font-family: 'Proza Libre', sans-serif;*/
}
h1, .h1 {
  font-size: 3.3125rem;
  font-weight: 600;
}
h2, .h2 {
  font-size: 2.25rem;
  font-weight: 300;
}
h3, .h3 {
  font-size: 1.5rem;
  font-weight:300;
}
h4, .h4{
  font-size: 1.25rem;
  font-weight: 400;
}
/* Let's make sure all's aligned */
hr, .hr {
  border: ${theme.borderM};
}
a, b, i, strong, em, small, code {
  line-height: 0;
  text-decoration: none;
}

`;
export default GlobalStyle;
