import styled, { ThemeProvider } from 'styled-components';
import {darkTheme} from './theme';
function App() {
  return <ThemeProvider theme={darkTheme}>
    <div>
      Hello World!
    </div>
  </ThemeProvider>;
}

export default App;
