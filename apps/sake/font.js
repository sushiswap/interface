import css from 'styled-jsx/css'

// Use styled-jsx instead of global CSS because global CSS
// does not work for AMP pages: https://github.com/vercel/next.js/issues/10549
export default css.global`
  /* latin */
  @font-face {
    font-family: 'bpdotssquaresbold';
    src: url('/fonts/BPdotsSquareBold-webfont.eot');
    src: url('/fonts/BPdotsSquareBold-webfont.eot?#iefix') format('embedded-opentype'),
      url('/fonts/BPdotsSquareBold-webfont.woff') format('woff'),
      url('/fonts/BPdotsSquareBold-webfont.ttf') format('truetype'),
      url('/fonts/BPdotsSquareBold-webfont.svg#bpdotssquaresbold') format('svg');
    font-weight: normal;
    font-style: normal;
  }
`
