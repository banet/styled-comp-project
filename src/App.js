import { ThemeProvider } from 'styled-components';
import {Container} from './components/styles/Container.styled'
import Header from './components/Header';
import GlobalStyles from './components/styles/Globals'


const theme = {
  colors: {
    header:'#ebfbff',
    body: '#fff',
    footer: '#003333',
    color: "#333"
  }
}

function App() {

  return (
    <ThemeProvider theme={theme}>
      <>
        <GlobalStyles />
        <Header />
        <Container>
        <h1>Hello world test</h1>
        </Container>    
      </>
    </ThemeProvider>

  );
}

export default App
