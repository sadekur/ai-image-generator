import styled, { ThemeProvider } from 'styled-components';
import { darkTheme } from './utils/Themes';
import Home from './pages/Home';
import CreatePost from './pages/CreatePost';

const Container = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  background: ${({ theme }) => theme.bg};
  color: ${({ theme }) => theme.text_primary};
  overflow-x: hidden;
  overflow-y: hidden;
  transition: all 0.2s ease;
`;

const Wrapper = styled.div`
  height: 100%;
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  flex: 3;
`;
function App() {
  return <ThemeProvider theme={darkTheme}>
    <Container>
      <Wrapper>
        <Home />
        <CreatePost />
      </Wrapper>
    </Container>
  </ThemeProvider>;
}

export default App;
