import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import { details } from "./task";
import { Person } from "./task";

function App() {
  const [count, setCount] = useState(0);

  const a = details("canada", 3);

  const person: Person = {
    name: "John",
    age: 30,
  };

  return (
    <>
      {a}

      <div>
        <p>Name: {person.name}</p>
        <p>Age: {person.age}</p>
      </div>
    </>
  );
}

export default App;
