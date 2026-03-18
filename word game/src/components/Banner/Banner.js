const Banner = {};

function Base({ type, children }) {
  return (
    <div className={`banner ${type}`}>
      {children}
      <button type="submit" className="restart-btn">
        Play Again
      </button>
    </div>
  );
}

function Happy({ numGuesses }) {
  return (
    <Base type="happy">
      <p>
        <strong>Congratulations!</strong> Got it in{" "}
        <strong>
          {numGuesses} guess{numGuesses > 1 && "es"}
        </strong>
        .
      </p>
    </Base>
  );
}

function Sad({ answer }) {
  return (
    <Base type="sad">
      <p>
        Sorry, the correct answer is <strong>{answer}</strong>.
      </p>
    </Base>
  );
}

Banner.Happy = Happy;
Banner.Sad = Sad;

export default Banner;
