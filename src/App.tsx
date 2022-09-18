import React from "react";
import { Counter } from "./components/Counter";
import './index.scss';

const App = () => {
  return (
    <div className="app">
      This is app component
      <Counter />
    </div>
  );
};

export default App;