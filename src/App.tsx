import { useState } from 'react';
import './App.css';
import Product from './Product';

function App() {
  const [counter, setCounter] = useState<number>(1)
  const [txt,setTxt] = useState<string>('')

  const handler = (e:React.MouseEvent<HTMLButtonElement>):void =>{ //element type + output type
    setCounter(counter + 1)
  }

  const inputChangeHandler = (e:React.ChangeEvent<HTMLInputElement>):void => {
    setTxt(e.target.value)
  }
  const inputSelectHandler = (e:React.ChangeEvent<HTMLSelectElement>):void => {
    setTxt(e.target.value)
  }
  
  return (
    <div className="App">
      <Product pCode={1} pName= {"Apple"} qnty={10}/>
      <h1>{counter}</h1>
      <hr/>
        <button onClick={handler}>Increment</button>
      <hr/>
        <p>{txt}</p>
      <hr/>
        <input type = "text" onChange={inputChangeHandler}/>
      <hr/>
        <select onChange={inputSelectHandler}>
          <option value = 'Apple'>Apple</option>
          <option value = 'Grapes'>Grapes</option>
          <option value = 'Orange'>Orange</option>
        </select>
    </div>
  );
}

export default App;
