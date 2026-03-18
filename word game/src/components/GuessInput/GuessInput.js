function GuessInput({ name, size, handleValidation }) {
  return (
    <>
      <label htmlFor={name}>Enter guess:</label>
      <input
        title="5 letters"
        id={name}
        pattern={`\\w{${size},${size}}`}
        type="text"
        onChange={handleValidation}
        autoFocus
      />
    </>
  );
}

export default GuessInput;
