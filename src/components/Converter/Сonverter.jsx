import { useState } from "react";

export default function Сonverter({ onChangeColor }) {
  const [value, setValue] = useState('#');
  const hexLen = 7;
  const regHex = /^#[0-9A-F]{6}$/i;
  let output = '';
  let outputClass = '';

  const hundleChange = ({ target: { value } }) => {
    setValue(value);

    if (value.length === hexLen) {
      regHex.test(value) ? onChangeColor(value) : onChangeColor('#ff0000');
    }
  }

  const toRGB = (hexCode) => {
    const r = parseInt(hexCode.slice(1, 3), 16);
    const g = parseInt(hexCode.slice(3, 5), 16);
    const b = parseInt(hexCode.slice(5, 7), 16);
    
    return `rgb(${r}, ${g}, ${b})`;
  }

  if (value.length === hexLen) {
    output = regHex.test(value) ? toRGB(value) : 'Ошибка!';
    outputClass = 'converter__output';
  }

  return (
    <div className="converter">
      <h1 className="converter__title">Конвертер цветов из HEX в RGB</h1>
      <form className="converter__form" action="#">
        <label htmlFor="hex"></label>
        <input 
          className="converter__field"
          type="text" 
          id="hex" 
          name="hex" 
          maxLength={hexLen} 
          onChange={hundleChange} 
          value={value}
        />
      </form>
      <div className={outputClass}>{output}</div>
    </div>
  );
}
