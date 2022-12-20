import Input from "./Input";
import Square from "./Square";
import { useState } from 'react';

function App() {
  const [colorValue, setColorValue] = useState('')
  const [hexValue, setHexValue] = useState('')
  const [isDarkTxt, setIsDarkTxt] = useState('')
  return (
    <div className="App">
      <Square colorValue={colorValue}
        hexValue={hexValue}
        isDarkTxt={isDarkTxt} />
      <Input colorValue={colorValue}
        setColorValue={setColorValue}
        hexValue={hexValue}
        setHexValue={setHexValue}
        isDarkTxt={isDarkTxt}
        setIsDarkTxt={setIsDarkTxt} />
    </div>
  );
}

export default App;
