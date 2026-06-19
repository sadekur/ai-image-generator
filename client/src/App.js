import styled, { ThemeProvider } from 'styled-components';
import { darkTheme } from './utils/Themes';

const Container = styled.div`
  height: 100%;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: ${(theme) => theme.bg};
  color: ${(theme) => theme.text_primary};
`;

const Wrapper = styled.div`
  height: 100%;
  position: relative;
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-direction: column;
  flex: 3;
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
