import styled, { ThemeProvider } from 'styled-components';
import {darkTheme} from './theme';

const Container = styled.div`
  height: 100%;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: ${(theme) => theme.bg};
  // color: ${(theme) => theme.text};
`;

const Wrapper = styled.div`
  background-color: ${(theme) => theme.card};
  padding: 20px;
  border-radius: 10px;
`;
function App() {
  return <ThemeProvider theme={darkTheme}>
    <Container>
      <Wrapper>
        Hello World!
      </Wrapper>
    </Container>
  </ThemeProvider>;
}

export default App;
