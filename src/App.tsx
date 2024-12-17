import "./App.css";
import PlayingBoard from "./components/playing-board";
import { GameProvider } from "./contexts/GameContext";

function App() {
  return (
    <GameProvider>
      <PlayingBoard />
    </GameProvider>
  );
}

export default App;
