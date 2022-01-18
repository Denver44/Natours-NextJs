import { createGlobalStyle } from 'styled-components';
// import app from './app';
import base from './base';
import normalize from './normalize';
// import theme from './theme';

// -------------------------------------------------------------
// Manifest.
// -------------------------------------------------------------

const NormalizeGlobalStyles = createGlobalStyle`${normalize}`;
// const ThemeGlobalStyles = createGlobalStyle`${theme}`;
const BaseGlobalStyles = createGlobalStyle`${base}`;
// const AppGlobalStyles = createGlobalStyle`${app}`;

const GlobalStyles = () => (
  <>
    <NormalizeGlobalStyles />
    {/* <ThemeGlobalStyles /> */}
    <BaseGlobalStyles />
    {/* <AppGlobalStyles /> */}
  </>
);

export default GlobalStyles;
