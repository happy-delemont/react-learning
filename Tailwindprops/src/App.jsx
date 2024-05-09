import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Card from "./components/Card";

function App() {
  const [count, setCount] = useState(0);
  let myObj = {
    username: "Happy",
    age: "21",
  };
  let myArr = [1, 2, 3, 4];
  return (
    <>
      <h1 className="bg-green-300 text-black p-4 rounded-xl mb-4">
        Tailwind Test
      </h1>
      <Card username="hello" newArr={myArr} btnText="visit me" />
      <Card username={"happy"} btnText="click me" />
    </>
  );
}

export default App;
