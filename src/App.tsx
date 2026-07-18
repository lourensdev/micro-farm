import styled from "styled-components";
import Grid from "./grid/grid";
import { Tools } from "./tools/tools";
import { Score } from "./score/score";

const AppWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  min-height: 100vh;
`;

const BORDER_WIDTH = 6;

const AppLayout = styled.main`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  padding: 20px;
  background-color: var(--brown-color);

  &:before {
    position: absolute;
    content: "";
    border-top: ${BORDER_WIDTH}px solid var(--dark-green-color);
    border-bottom: ${BORDER_WIDTH}px solid var(--dark-green-color);
    width: 100%;
    height: calc(100% + ${BORDER_WIDTH * 2}px);
    pointer-events: none;
  }

  &:after {
    position: absolute;
    content: "";
    border-left: ${BORDER_WIDTH}px solid var(--dark-green-color);
    border-right: ${BORDER_WIDTH}px solid var(--dark-green-color);
    width: calc(100% + ${BORDER_WIDTH * 2}px);
    height: 100%;
    pointer-events: none;
  }
`;

function App() {
  return (
    <AppWrapper>
      <AppLayout>
        <Grid />
        <Tools />
        <Score />
      </AppLayout>
    </AppWrapper>
  );
}

export default App;
