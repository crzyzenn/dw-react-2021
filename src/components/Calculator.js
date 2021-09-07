import React, { useState } from "react";

export default function Calculator() {
  const [result, setResult] = useState(0);
  const [input1, setInput1] = useState(0);
  const [input2, setInput2] = useState(0);

  const [variableName, setVariableName] = useState(0);
  const [color, setColor] = useState("red");
  const [firstName, setFirstName] = useState("John");

  return (
    <div>
      <h1>Calculator</h1>
      <p>{variableName}</p>
      <p>{firstName}</p>
      <p>{color}</p>
      {/* Input fields */}
      <input
        placeholder="First number"
        type="number"
        onChange={(e) => {
          setInput1(e.target.value);
        }}
        value={input1}
      />
      <input
        placeholder="Second number"
        type="number"
        onChange={(e) => {
          console.log(e);
          setInput2(e.target.value);
        }}
        value={input2}
      />

      <div>
        <button
          onClick={() => {
            setResult(+input1 + +input2);
          }}
        >
          +
        </button>
      </div>
      {/* Output */}
      <div>{result}</div>
    </div>
  );
}
