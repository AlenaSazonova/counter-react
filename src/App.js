import './App.css';
import GlobalStyle from './GlobalStyles';
import ProjectTitle from '../src/components/titleCounter/TitleCounter';
import NumberCounter from '../src/components/numberCounter/NumberCounter';


function App() {
  return (
    <>
        <GlobalStyle />
        <ProjectTitle />
        <NumberCounter />
    </>
    
  );
}

export default App;
