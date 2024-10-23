import { useState } from 'react';
import './App.css';
import Product from './Product';

function App() {
  const [counter, setCounter] = useState<number>(1)

  const handler = (e:React.MouseEvent<HTMLButtonElement>):void =>{
    setCounter(counter + 1)
  }
  return (
    <div className="App">
      <Product pCode={1} pName= {"Apple"} qnty={10}/>
      <h1>{counter}</h1>
      <hr/>
      <button onClick={handler}>Increment</button>
    </div>
  );
}

export default App;
