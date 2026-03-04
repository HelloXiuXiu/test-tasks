function GuessInput({ name, size, handleValidation }) {
  function handleValidation(e) {
    const curInput = e.target.value;
    e.target.value = curInput.replace(/[^a-zA-Z]/g, ""); //.slice(0, size);
  }

  return (
    <>
      <label htmlFor={name}>Enter guess:</label>
      <input
        title="5 letters"
        id={name}
        pattern={`\\w{${size},${size}}`}
        minLength={size}
        maxLength={size}
        type="text"
        onChange={handleValidation}
        autoFocus
      />
    </>
  );
}

export default GuessInput;
