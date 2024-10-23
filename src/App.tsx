import React from 'react';
import logo from './logo.svg';
import './App.css';
import Product from './Product';

function App() {
  return (
    <div className="App">
      <Product pCode={1} pName= {"Apple"} qnty={10}/>
    </div>
  );
}

export default App;
