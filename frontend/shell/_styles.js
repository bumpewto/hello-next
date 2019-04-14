import { createGlobalStyle } from "styled-components";
import theme from "../styles/_theme";

// Typo rules

const GlobalStyle = createGlobalStyle`

@import url('https://fonts.googleapis.com/css?family=Proza+Libre:400,400i,500,500i,600,600i,700,700i,800,800i');
@import url('https://fonts.googleapis.com/css?family=IBM+Plex+Sans:100,100i,200,200i,300,300i,400,400i,500,500i,600,600i,700,700i');

html, .root {
  font-size: 16px;
  box-sizing: border-box;

  /* line-height: 1.5; */
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
  color:${theme.textColor} ;

  background: ${theme.neutral.n05};
  background-repeat: no-repeat;


}
.h1, h2, h3, h4, h5{
  /* font-family: 'Proza Libre', sans-serif;
  font-display: fallback; */

}
h1, .h1 {
  font-size: 3.3125rem;
}
h2, .h2 {
  font-size: 2.25rem;
  line-height: 3rem;
}
h3, .h3 {
  font-size: 1.5rem;
}

/* Let's make sure all's aligned */
hr, .hr {
  border: ${theme.border};
}
a, b, i, strong, em, small, code {
  line-height: 0;
  text-decoration: none;
}
`;
console.log(theme.textColor);
export default GlobalStyle;
