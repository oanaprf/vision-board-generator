import { UserInput } from "./components";
import { AppContainer, Flex } from "./styled";

function App() {
  return (
    <AppContainer>
      <Flex>
        <UserInput />
      </Flex>
      <Flex>
        <div></div>
      </Flex>
    </AppContainer>
  );
}

export default App;
