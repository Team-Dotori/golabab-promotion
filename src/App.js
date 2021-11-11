import './App.css';
import {createGlobalStyle} from 'styled-components';
import MainPage from './Main';

const GlobalStyle = createGlobalStyle`
  *{
    margin: 0;
    padding: 0;
    box-sizing:border-box;
  }
`;


function App() {
  return (
    <>
     <GlobalStyle />
     <MainPage/>
    </>
  );
}

export default App;
