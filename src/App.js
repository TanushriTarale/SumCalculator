import  { useState } from 'react'
import './App.css';

function App() {

  const [num1, setNum1] = useState(0);
  const [num2, setNum2] = useState(0);
  const [add, setAdd] = useState('');


  const calcSum = (event) => {

    event.preventDefault();
    console.log(event);

    if(num1 === 0 || num2 === 0)
    {
      alert("Please Enter The Number(s)")
    }

    else
    {
      let add = parseInt(num1) + parseInt(num2)
      console.log(typeof(add));
      setAdd(parseInt(add))
    }
  }

  let reload = () =>
    {
      alert("While Reloading! Your Data May Lost")
      window.location.reload()
    }

  return (
    <div className="app">
      <div className = 'container'>
        <h2 className = 'center'> Sum Calculator</h2>

        <form onSubmit={calcSum}>
        <div>
          <label>Number 1 </label>
          <input type = "text" placeholder = 'Enter First Number' value={num1} onChange={(e) => setNum1(e.target.value)}/>
        </div>

        <div>
          <label>Number 2 </label>
          <input type = "text" placeholder = 'Enter Second Number' value={num2} onChange={(e) => setNum2(e.target.value)}/>
        </div>
        <div>
           <button className='btn' type='submit'>Submit</button>
        </div>

        <div>
        <button className = 'btntwo' onClick={reload} type="submit"> Reload </button>
        </div>

        <div className = 'center'>
          <h3>Your Sum is : {add}</h3>
        </div>
        </form>
      </div>
    </div>
  );
}

export default App;
