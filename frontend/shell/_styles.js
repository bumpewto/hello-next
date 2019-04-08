import { createGlobalStyle } from "styled-components";

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
  font-family: 'IBM Plex Sans', sans-serif;
  font-size: 1rem;
  line-height: 1.5rem;
  overflow: auto;
  box-sizing: border-box;
  width: 100%;
  margin: 0;
  padding: 0;
  font-kerning: normal;
  text-align: left;
  font-display: fallback;
  background: linear-gradient(papayawhip, palevioletred);
  background-repeat: no-repeat;


}
.h1, h2, h3, h4, h5{
  font-family: 'Proza Libre', sans-serif;
  font-display: fallback;

}
h1, .h1 {
  font-size: 3.3125rem;
  margin-top: 1.5rem;
  margin-bottom: 3rem;

  font-weight:400;
}
h2, .h2 {
  

  font-size: 2.25rem;
  line-height: 3rem;
  margin-top: 1.5rem;
  margin-bottom: 1.5rem;
}
h3, .h3 {
  

  font-size: 1.5rem;
  line-height: 1.5rem;
  margin-top: 1.5rem;
  margin-bottom: 0rem;
}
h4, .h4 {
  

  font-size: 1rem;
  line-height: 1.5rem;
  margin-top: 1.5rem;
  margin-bottom: 0rem;
}
h5, .h5 {
  font-size: 1rem;
  line-height: 1.5rem;
  margin-top: 1.5rem;
  margin-bottom: 0rem;
}
p, ul, ol, pre, table, blockquote  {
  margin-top: 0rem;
  margin-bottom: 1.5rem;
}
ul ul, ol ol, ul ol, ol ul {
  margin-top: 0rem;
  margin-bottom: 0rem;
}

/* Let's make sure all's aligned */
hr, .hr {
  border: 1px solid;
  margin: -1px 0;
}
a, b, i, strong, em, small, code {
  line-height: 0;
  text-decoration: none;
  color: black
}
sub, sup {
  line-height: 0;
  position: relative;
  vertical-align: baseline;
}
sup {
  top: -0.5em;
}
sub {
  bottom: -0.25em;
}`;

export default GlobalStyle;
