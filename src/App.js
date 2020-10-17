import React, { useState } from "react";

import "./App.css";
import Title from "./components/Title";

function App() {
  const [input, setInput] = useState([
    {
      name: "Name",
      content: "Rasha Zayed",
      index: 0,
      clicked: false
    },
    {
      name: "Nationalinty",
      content: "Egyptian",
      index: 1,
      clicked: false
    },
    {
      name: "Hobbies",
      content: "Travel , Photography , Baking",
      index: 2,
      clicked: false
    },
  ]);
  return <div className="App">
    <Title  input={input}  setInput={setInput}/>



  </div>;
}

export default App;
