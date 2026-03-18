import { useState, useRef, useCallback } from "react";
import Banner from "../Banner";
import Board from "../Board";
import GuessInput from "../GuessInput";
import Keyboard from "../Keyboard";
import { initAnswer, initGuessList, formatChars } from "../../utils";
import { WORDS } from "../../data";

const INPUT_NAME = "guess-input";

function Game({ size }) {
  const [guessList, setGuessList] = useState(() => initGuessList(size));
  const [gameStatus, setGameStatus] = useState("playing"); // 'won', 'lost'

  // we can put all the elements inside of the form to avoide ref,
  // but it's just an example where we need to controll the form
  // outside of it (handleKeyBoard)
  const form = useRef();
  const answer = useRef(initAnswer(WORDS));
  const currentGuess = useRef(0);

  function handleSubmit(e) {
    e.preventDefault();
    if (gameStatus !== "playing") {
      restartGame();
      return;
    }

    const guess = e.target.elements[INPUT_NAME].value.toUpperCase();
    if (!guess.trim()) return;

    e.target.elements[INPUT_NAME].value = "";

    setGuessList((state) => {
      const newState = [...state];
      newState[currentGuess.current] = formatChars(guess, answer.current);
      currentGuess.current++;

      if (guess === answer.current) {
        setGameStatus("won");
        window.addEventListener("keypress", restartGame, { once: true });
        return newState;
      }
      if (currentGuess.current >= size) {
        setGameStatus("lost");
        window.addEventListener("keypress", restartGame, { once: true });
      }

      return newState;
    });
  }

  function restartGame() {
    setGameStatus("playing");
    setGuessList(initGuessList(size));
    answer.current = initAnswer(WORDS);
    currentGuess.current = 0;

    // another way to reach input outside
    form.current.elements[INPUT_NAME].focus();
  }

  const handleKeyBoard = useCallback(
    (char) => {
      const input = form.current.elements[INPUT_NAME];

      // control input value in react is possible only via native setter
      const nativeSetter = Object.getOwnPropertyDescriptor(
        window.HTMLInputElement.prototype,
        "value"
      ).set;
      nativeSetter.call(input, input.value + char);

      // trigger event
      input.dispatchEvent(new Event("change", { bubbles: true }));
      input.focus();
    },
    [form, INPUT_NAME]
  );

  const handleValidation = useCallback(
    (e) => {
      const curInput = e.target.value;

      // we can't rely on input min/max length, as keyboard component
      // also updates the value and needs validation
      e.target.value = curInput.replace(/[^a-zA-Z]/g, "").slice(0, size);
    },
    [size]
  );

  return (
    <div className="game-wrapper">
      <Board guessList={guessList} />

      <form className="guess-input-wrapper" onSubmit={handleSubmit} ref={form}>
        <GuessInput
          name={INPUT_NAME}
          size={size}
          handleValidation={handleValidation}
        />
        {gameStatus === "won" && (
          <Banner.Happy numGuesses={currentGuess.current} />
        )}
        {gameStatus === "lost" && <Banner.Sad answer={answer.current} />}
      </form>

      <Keyboard guessList={guessList} onClick={handleKeyBoard} />
    </div>
  );
}

export default Game;
