import './App.css';
import Converter from './components/Converter/Converter';
import { useState, useEffect } from "react";

function App() {
  const [color, setColor] = useState('#242424');

  useEffect(() => {
    document.body.style.backgroundColor = color; 
  }, [color]);

  return <Converter onChangeColor={color => setColor(color)} />
}

export default App;
