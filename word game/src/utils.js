export function initAnswer(arr) {
  return arr[Math.floor(Math.random() * arr.length)];
}

export function initGuessList(size) {
  return Array.from({ length: size }, () =>
    Array.from({ length: size }, () => ({ value: "", type: "" }))
  );
}

function getCharType(char, ind, answer) {
  if (!answer.includes(char)) return "incorrect";
  if (answer[ind] === char) return "correct";
  return "misplaced";
}

export function formatChars(guess, answer) {
  return [...guess].map((char, ind) => ({
    value: char,
    type: getCharType(char, ind, answer),
  }));
}

// export const range = (start, end, step = 1) => {
//   let output = [];
//   if (typeof end === "undefined") {
//     end = start;
//     start = 0;
//   }
//   for (let i = start; i < end; i += step) {
//     output.push(i);
//   }
//   return output;
// };
