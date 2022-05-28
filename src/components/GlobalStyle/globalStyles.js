import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  :root {
    --royalBlueDark: #0A2463;
    --tuftsBlue: #3E92CC;
    --ghostWhite: #FFFAFF;
    --cerise: #D8315B;
    --blackChocolate: #1E1B18;
    --greyLight: #7D879C;
  }

  body {
    margin: 0;
    padding: 0;
    background-color: #F6F9FC;
    font-family: Open-Sans, Helvetica, Sans-Serif;
  }
`;

export default GlobalStyle;
