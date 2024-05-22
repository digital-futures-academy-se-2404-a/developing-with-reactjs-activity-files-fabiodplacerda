import { useState } from "react";
import MyComponent from "./MyComponent.jsx";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <MyComponent />
    </>
  );
}

export default App;
