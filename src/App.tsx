import {GlobalStyle} from "./global.styles";
import {ThemeProvider} from "styled-components";
import {defaultTheme} from "./theme/defaultTheme";

export function App() {
  return (
    <ThemeProvider theme={defaultTheme}>
      <GlobalStyle/>
      <div>Hello Word</div>
    </ThemeProvider>
  );
  
}
