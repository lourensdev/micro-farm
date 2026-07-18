import styled from "styled-components";
import Grid from "./grid/grid";
import { Tools } from "./tools/tools";
import { Score } from "./score/score";

const AppLayout = styled.main`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  min-height: 100vh;
`;

function App() {
  return (
    <AppLayout>
      <Grid />
      <Tools />
      <Score />
    </AppLayout>
  );
}

export default App;
