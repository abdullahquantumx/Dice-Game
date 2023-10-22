import GamePlay from "./components/GamePlay";
import Startgame from "./components/Firstpage";
import {useState} from "react";

function App() {
  const [isGameStarted, setIsGameStarted] = useState(false);
  const toggleGamePlay = () => {
    setIsGameStarted((prev) => !prev);
  }
  return (
    <>
      {
        isGameStarted ? <GamePlay /> : <Startgame toggle={toggleGamePlay} />
      }

    </>
  );
}

export default App

