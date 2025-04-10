import { useState } from "react";
import "./App.css";
import React from "react";
import { FileProvider } from "./Components/FileContext";
import { UserProvider } from "./Context/userContext";

function App() {
  const [count, setCount] = useState(0);

  return (
    <UserProvider>
      <FileProvider>
        <main />
      </FileProvider>
    </UserProvider>
  );
}

export default App;
