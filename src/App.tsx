import { useState } from 'react';
import './App.css';
import Product from './Product';

function App() {
  const [counter, setCounter] = useState<number|string|null>(1)

  return (
    <div className="App">
      <Product pCode={1} pName= {"Apple"} qnty={10}/>
      {counter}
    </div>
  );
}

export default App;
