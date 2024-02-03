import { useState } from "react";
import "./App.css";
import NavBar from "./componenets/NavBar";
import Hero from "./componenets/Hero";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <NavBar />
      <Hero/>
    </>
  );
}

export default App;
