import React, { useRef, useState } from "react";

const App = () => {
  const [value, setValue] = useState("");
  const [login, setLogin] = useState("");
  const inputRef = useRef<HTMLInputElement | null>(null);

  const handleChange = () => {
    setValue(inputRef.current!.value);
  };

  const handleKeyUp = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.code == "Enter") handleClick();
  };

  const handleClick = () => {
    setLogin(value);
    setValue("");
  };

  return (
    <div data-testid="appComp">
      <h1>Enter the data:</h1>

      <input
        type="text"
        value={value}
        onChange={handleChange}
        onKeyUp={handleKeyUp}
        ref={inputRef}
        data-testid="inputElem"
      />
      <button onClick={handleClick} data-testid="btnElem">
        Send
      </button>

      {login && (
        <div>
          <p data-testid="loginField">{login}</p>
        </div>
      )}
    </div>
  );
};

export default App;
