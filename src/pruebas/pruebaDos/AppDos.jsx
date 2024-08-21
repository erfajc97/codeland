import React, { useState } from "react";

const style = {
  letterContainer: {
    marginBottom: "10px",
  },
  letter: {
    width: "50px",
    height: "50px",
    margin: "5px",
    textAlign: "center",
    lineHeight: "50px",
    borderRadius: "5px",
    border: "1px solid #ccc",
    cursor: "pointer",
  },
};

const AppDos = () => {
  const [outputString, setOutputString] = useState("");

  const alphabet = Array.from({ length: 26 }, (_, i) =>
    String.fromCharCode(65 + i)
  );

  const handleLetterClick = (letter) => {
    let newOutputString = outputString + letter;

    // Reemplazar tres letras consecutivas iguales con un guion bajo
    newOutputString = newOutputString.replace(/(.)\1\1/g, "_");
    newOutputString = newOutputString.replace(/(.)\1\1\1\1\1/g, "__");

    setOutputString(newOutputString);

    setOutputString(newOutputString);
  };
  return (
    <section>
      <div style={style.letterContainer} id="letterContainer">
        {alphabet.map((letter, index) => (
          <Tile
            key={index}
            letter={letter}
            onClick={() => handleLetterClick(letter)}
          />
        ))}
      </div>
      <div id="outputString">{outputString}</div>
    </section>
  );
};

export default AppDos;

function Tile(props) {
  return (
    <button style={style.letter} onClick={props.onClick}>
      {props.letter}
    </button>
  );
}
