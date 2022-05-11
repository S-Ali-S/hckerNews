import { useState } from "react";

function App() {
  const [count, setCount] = useState(85);
  const [open, setOpen] = useState(false);
  const [input, setInput] = useState("");

  function increment() {
    setCount(count + 1);
  }

  return (
    <div className="flex flex-col">
      <button onClick={() => setOpen(!open)} className="bg-yellow-400">
        {open ? "thsi shit is open" : "this shit is closed"}
      </button>
      <div>{count}</div>
      <button className="bg-blue-500" onClick={increment}>
        This is a cool button!
      </button>
      <div>text is:{input}</div>

      <input onChange={(event) => setInput(event.target.value)} className='bg-gray-200'/>

    </div>
  );
}

export default App;
