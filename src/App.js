import React from "react";
import Counter from "./Counter";
import CounterStore from "./store/CounterStore";

const myCounter = new CounterStore();

function App() {
  return (
    <div>
      <header>
        <Counter counter={myCounter} />
      </header>
    </div>
  );
}

export default App;
