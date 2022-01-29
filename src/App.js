import InfoArea from "./container/InfoArea";
import styled from 'styled-components';
import Calculator from "./container/Calculator";

const App = () => {
  return (
    <AppBackground>
        <InfoArea>
          <Calculator/>
        </InfoArea>
    </AppBackground>
  );
}

export default App;

const AppBackground = styled.div`
  max-width: 1280px;
  margin: auto;
  padding: 100px 100px;
  display: grid;
  gap: 1.1em;
  column-gap: 40px;
  grid-template: min-content min-content min-content/ 1.26fr 0.6fr 1.25fr;
  grid-template-areas:
    "title title calculator"
    "content content calculator"
    "title2 image calculator"
    "content2 image calculator"
    "list . calculator";
  @media (max-width: 800px) {
    padding: 10px;
    align-items: center;
    gap: 1.5em;
    display: grid;
    grid-template: min-content/1fr;
    grid-template-areas:
      "title"
      "content"
      "calculator"
      "title2"
      "content2"
      "image"
      "list";
  }  
`