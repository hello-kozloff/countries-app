import 'reset-css'
import '@arcgis/core/assets/esri/themes/light/main.css'
import { createGlobalStyle } from 'styled-components'
import { transparentize } from 'polished'

export default createGlobalStyle`
  @import url('https://fonts.googleapis.com/css2?family=Manrope:wght@200;300;400;500;600;700;800&display=swap');

  :root {
    --color: #000000;
    --background-color: #F7F6F9;
    --plate-color: #ffffff;
    --border-color: ${transparentize(0.8, '#000000')};
    --accent-color: '#F7F6F9';
  }

  body {
    color: var(--color);
    font-family: 'Manrope', sans-serif;
    font-size: 16px;

    direction: ltr;
    background-color: var(--background-color);
  }
`
