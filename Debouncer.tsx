import React, { useState, useEffect } from "react";

const Debouncer = () => {
  const [inputText, setInputState] = useState("");
  const handleInput = e => {
    setInputState(e.target.value);
  };

  let timers;

  useEffect(() => {
    if (inputText) {
      timers = setTimeout(() => {
        console.log(`make API call after 3000ms for this input ${inputText}`);
      }, 300);
    }
    return () => {
      clearTimeout(timers);
    };
  }, [inputText]);

  return (
    <div>
      {`hello, enterted text is ${inputText}. Example of debounce`}
      <br />
      <input type="text" onChange={handleInput} />
    </div>
  );
};

export default Debouncer;
