import { createGlobalStyle } from 'styled-components'
import 'reset-css'

export default createGlobalStyle`
  @import url('https://fonts.googleapis.com/css2?family=Manrope:wght@200;300;400;500;600;700;800&display=swap');

  :root {
    --color: #000000;
    --background-color: #F7F6F9;
    --plate-color: #ffffff;
  }

  body {
    color: var(--color);
    font-family: 'Manrope', sans-serif;
    font-size: 16px;

    direction: ltr;
    background-color: var(--background-color);
  }
`
