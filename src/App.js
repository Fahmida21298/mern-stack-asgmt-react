import logo from './logo.svg';
import './App.css';
import { useState } from 'react';

function App() {

  const [counter, setcounter] = useState(0)

  const increaseHandler = (a) => {
      setcounter(counter + a)

  }
  const decreaseHandler = (b) => {
      setcounter(counter - b)
  }
  const remove = () => {
    setcounter(0)

  }
  return (
    <div className="App">
      <header className="App-header">
        <h1>The value of the counter is {counter} </h1>
        <div className='calbtn'>
          <button className='btn btn-info' onClick={()=>increaseHandler(1)} >Add by 1</button>
          <button className='btn btn-success' onClick={()=>decreaseHandler(1)} >subtract by  1</button>
          <button className='btn btn-info' onClick={()=>increaseHandler(100)} >Add by 100</button>
          <button className='btn btn-success' onClick={()=>decreaseHandler(100)} >subtract by 100</button>
          <button className='btn btn-info' onClick={()=>increaseHandler(1000)} >Add by 1000</button>
         
          <button className='btn btn-success' onClick={()=>decreaseHandler(1000)} >subtract by 1000</button>
        </div>
        <button className='btn btn-danger' onClick={remove} >Remove All</button>

       

      </header>
    </div>
  );
}

export default App;
