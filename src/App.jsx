import './App.css';
import Converter from './components/Converter/Сonverter';
import { useState, useEffect } from "react";

function App() {
  const [color, setColor] = useState('#242424');

  useEffect(() => {
    document.body.style.backgroundColor = color; 
  });

  return (
    <Converter onChangeColor={color => setColor(color)} />
  )
}


export default App;
