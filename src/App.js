import logo from './logo.svg';
import './App.css';
import { useState } from 'react';

function App() {

  const [counter, setcounter] = useState(0)
  // let counter =0
  const increaseHandler1 =()=>{
    if(counter>=0){

      setcounter(counter +1)
    }
  }
  const increaseHandler100 =()=>{
    if(counter>=0){

      setcounter(counter +100)
    }

  }
  const decreaseHandler1 =()=>{
    if(counter>0){

      setcounter(counter -1)
    }

  }
  const decreaseHandler100 =()=>{
    if(counter>=100){

      setcounter(counter -100)
    }

  }
  const remove =()=>{
    setcounter(0)
  }
  return (
    <div className="App">
      <header className="App-header">
        <h1>The value of the counter is {counter} </h1>
        <div className='calbtn'>
        <button className='btn btn-info' onClick={increaseHandler1} >Add the counter by 1</button>
        <button className='btn btn-success' onClick={decreaseHandler1} >subtract the counter by  1</button>
        <button className='btn btn-info' onClick={increaseHandler100} >Add the counter by 100</button>
        <button className='btn btn-success' onClick={decreaseHandler100} >subtract the counter by 100</button>
        </div>
        <button className='btn btn-danger' onClick={remove} >Remove All</button>

      </header>
    </div>
  );
}

export default App;
