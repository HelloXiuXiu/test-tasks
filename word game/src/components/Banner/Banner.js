function Banner({ type = "happy", numGuesses, answer }) {
  return (
    <div className={`banner ${type}`}>
      {type === "happy" && (
        <p>
          <strong>Congratulations!</strong> Got it in{" "}
          <strong>
            {numGuesses} guess{numGuesses > 1 && "es"}
          </strong>
          .
        </p>
      )}
      {type === "sad" && (
        <p>
          Sorry, the correct answer is <strong>{answer}</strong>.
        </p>
      )}
      <button type="submit" className="restart-btn">
        Play Again
      </button>
    </div>
  );
}

export default Banner;
