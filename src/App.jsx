import { useState } from 'react';
import './App.css'
// const newWorker = new Worker(new URL('./answer.js', import.meta.url));
const newWorker = new Worker('answer2.js');

function App() {
  const [count, setCount] = useState(0);
  const [canGetLoan, setCanGetLoan] = useState(false);

  function getLoanToLife() {
    if (newWorker) {
      newWorker.postMessage("start");
      newWorker.onmessage = ev => {
        console.log(ev);
        setCanGetLoan(ev.data)
      }
    }
  }

  return (
    <>
      <h2>Can I get a Loan : {canGetLoan ? "Yes, Bro but we do not recommend it" : "No"}</h2>
      <h4>Count to 10, we will give it {") : " + count}</h4>
      <div className='btns'>
        <button onClick={() => setCount(count + 1)}> +1 </button>
        <button onClick={getLoanToLife}> Get Loan </button>
      </div>
    </>
  )
}

export default App
