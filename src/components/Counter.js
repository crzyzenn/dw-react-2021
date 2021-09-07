import { useState } from "react";
// Concepts covered:
// state
// events
// hooks
// render jsx

function Counter() {
  const [counterValue, setCounterValue] = useState(0);

  return (
    <>
      {/* Buttons */}
      <div>
        <button
          onClick={() => {
            if (counterValue > 0) {
              setCounterValue(counterValue - 1);
            } else {
              alert("Cannot go below 0.");
            }
          }}
        >
          -
        </button>
        <button
          onClick={() => {
            setCounterValue(counterValue + 1);
          }}
        >
          +
        </button>
      </div>
      {/* Counter value */} <p>{counterValue}</p>
    </>
  );
}

export default Counter;
