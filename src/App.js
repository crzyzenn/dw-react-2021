import "./App.css";
import Calculator from "./components/Calculator";
import Counter from "./components/Counter";

// Concepts covered:
// state
// events
// hooks
// render jsx

function App() {
  return (
    // JSX
    <div className="App">
      <header className="App-header">
        {/* <Counter /> */}
        <Calculator />
      </header>
    </div>
  );
}

export default App;
