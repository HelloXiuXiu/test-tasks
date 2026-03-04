import Game from "../Game";
import Header from "../Header";

const GRID_SIZE = 5;

function App() {
  return (
    <div className="wrapper">
      <Header />

      <Game size={GRID_SIZE} />
    </div>
  );
}

export default App;
