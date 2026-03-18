import { ALPHABET } from "../../data";

function Keyboard({ guessList, onClick }) {
  const reducedLeters = guessList.flat().reduce((acc, cur) => {
    if (!cur.value) return acc;

    let keyBoardType = "";
    if (cur.type === "incorrect") {
      keyBoardType = "incorrect";
    } else if (cur.type) {
      keyBoardType = "correct";
    }
    acc.set(cur.value, keyBoardType);
    return acc;
  }, new Map());

  return (
    <div className="keyboad">
      {ALPHABET.map((char) => (
        <div
          className={
            "keyboard-char " + reducedLeters.get(char.toUpperCase()) || ""
          }
          key={char}
          onClick={() => onClick(char)}
        >
          {char}
        </div>
      ))}
    </div>
  );
}

export default Keyboard;
