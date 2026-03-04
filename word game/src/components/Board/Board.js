import Char from "../Char";

function Board({ guessList }) {
  return (
    <div className="guess-results">
      {guessList.map((guess, ind) => (
        <p className="guess" key={ind}>
          {guess.map((char, i) => (
            <Char charObj={char} key={i} animDelay={i / 10} />
          ))}
        </p>
      ))}
    </div>
  );
}

export default Board;
