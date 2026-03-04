import { useState, useRef } from "react";
import Banner from "../Banner";
import Board from "../Board";
import GuessInput from "../GuessInput";
import {
  initAnswer,
  initGuessList,
  formatChars,
  isGameFinished,
} from "../../utils";
import { WORDS } from "../../data";

const INPUT_NAME = "guess-input";

function Game({ size }) {
  const [guessList, setGuessList] = useState(() => initGuessList(size));
  const [answer, setAnswer] = useState(() => initAnswer(WORDS));
  const [finished, setFinished] = useState(false);
  const currentGuess = useRef(0);

  function handleSubmit(e) {
    e.preventDefault();
    if (finished) {
      clearState();
      return;
    }

    const guess = e.target.elements[INPUT_NAME].value.toUpperCase();
    if (!guess.trim()) return;

    e.target.elements[INPUT_NAME].value = "";

    setGuessList((state) => {
      const newState = [...state];
      newState[currentGuess.current] = formatChars(guess, answer);
      currentGuess.current++;

      if (isGameFinished(guess, answer, currentGuess.current, size)) {
        setFinished(true);
        window.addEventListener("keypress", clearState, { once: true });
      }
      return newState;
    });
  }

  function clearState() {
    setGuessList(initGuessList(size));
    setAnswer(initAnswer(WORDS));
    currentGuess.current = 0;
    setFinished(false);
  }

  return (
    <div className="game-wrapper">
      <Board guessList={guessList} />
      <form className="guess-input-wrapper" onSubmit={handleSubmit}>
        {finished ? (
          <Banner
            type={
              answer ===
              guessList[currentGuess.current - 1]
                .map((char) => char.value)
                .join("")
                ? "happy"
                : "sad"
            }
            answer={answer}
            numGuesses={currentGuess.current}
          />
        ) : (
          <GuessInput name={INPUT_NAME} size={size} />
        )}
      </form>
    </div>
  );
}

export default Game;
