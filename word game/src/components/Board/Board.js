import Char from "../Char";

function Board({ guessList }) {
  return (
    <div className="guess-results">
      {guessList.map((guess, ind) => (
        <div className="guess" key={ind}>
          {guess.map((char, i) => (
            <Char charObj={char} key={ind + "-" + i} animDelay={i / 10} />
          ))}
        </div>
      ))}
    </div>
  );
}

export default Board;
