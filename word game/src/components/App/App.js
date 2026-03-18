import Game from "../Game";
import Header from "../Header";
import { GRID_SIZE } from "../../constants";

function App() {
  return (
    <div className="wrapper">
      <Header />
      <Game size={GRID_SIZE} />
    </div>
  );
}

export default App;
