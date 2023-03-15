import "./App.css";
import Header from "./components/Header";
import Figure from "./components/Figure";
import WrongLetters from "./components/WrongLetters";
import Word from "./components/Word";
import Popup from "./components/Popup";
import Notification from "./components/Notification";
import { useEffect, useState } from "react";

const words = ["hive", "team", "swisscom", "engagiert", "neugierig", "vertrauenswuerdig"];
let selectedWord = words[Math.floor(Math.random() * words.length)];

function App() {

  const [playable, setPlayable] = useState(true);
  const [correctLetters, setCorrectLetter] = useState([]);
  const [wrongLetters, setWrongLetters] = useState([]);

  useEffect(() => {
    const handleKeydown = (event) => {
      const { key, keyCode } = event;
      if (playable && keyCode > 65 && keyCode < 90) {
        const letter = key.toLowerCase();

        if (selectedWord.includes(letter)) {
          if (!correctLetters.includes(letter)) {
            setCorrectLetter((currentLetters) => [...currentLetters, letter]);
          } else {
            //notification
          }
        } else {
          if (!wrongLetters.includes(letter)) {
            setWrongLetters((wrongLetters) => [...wrongLetters, letter]);
          } else {
            //notification
          }
        }
      }
    };
    window.addEventListener("keydown", handleKeydown);

    return () => window.removeEventListener("keydown", handleKeydown);
  }, [correctLetters, wrongLetters, playable]);

  return (
    <>
      <Header />
      <div className="game-container"></div>
      <Figure wrongLetters={wrongLetters}/>
      <WrongLetters wrongLetters={wrongLetters} />
      <Word selectedWord={selectedWord} correctLetters={correctLetters} />
      <Popup />
      <Notification />
    </>
  );
}

export default App;
