import React, { useState } from "react";

function Toggle() {
  const [isOn, setIsOn] = useState(false);

  function handleClick() {
    setIsOn((isOn) => !isOn);
  }

  const buttonText = isOn ? "ON" : "OFF";
  const backgroundColor = isOn ? "red" : "white";

  return (
    <button style={{ background: backgroundColor }} onClick={handleClick}>
      {buttonText}
    </button>
  );
}

export default Toggle;
