import styled from "styled-components";
import Grid from "./grid/grid";
import { Tools } from "./tools/tools";

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
    </AppLayout>
  );
}

export default App;
