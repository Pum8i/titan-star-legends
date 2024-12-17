import "./App.scss";
import PlayingBoard from "./components/playing-board";
import { GameProvider } from "./contexts/GameContext";
import { Toaster } from "react-hot-toast";

function App() {
  return (
    <GameProvider>
      <Toaster
        toastOptions={{
          style: {
            color: "white",
            backgroundColor: "#0c1015",
            border: "1px solid #2c3c4e",
            padding: "16px",
            borderRadius: 0,
          },
          success: {
            iconTheme: {
              primary: "#006b2c",
              secondary: "white",
            },
          },
          error: {
            iconTheme: {
              primary: "#6b0000",
              secondary: "white",
            },
          },
        }}
      />
      <PlayingBoard />
    </GameProvider>
  );
}

export default App;
