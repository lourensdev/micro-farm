import styled from "styled-components";
import Grid from "./grid/grid";

const AppLayout = styled.main`
  display: flex;
  align-items: center;
  justify-content: center;
  min-height: 100vh;
`;

function App() {
  return (
    <AppLayout>
      <Grid />
    </AppLayout>
  );
}

export default App;
