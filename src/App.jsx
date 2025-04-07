import { useState } from 'react'
import './App.css'
import React from "react"
import { FileProvider } from './Components/FileContext';


function App() {
  const [count, setCount] = useState(0)

  return (
    <FileProvider>
      <main/>
    </FileProvider>
  )
}

export default App  


