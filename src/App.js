import React, {useState} from 'react';
import './App.css';

function App() {

  let [add, setAdd] = useState(0);

  return (
    <div className="App">
      <header className="App-header">

          <p>{add}</p>

          <button onClick={() => {setAdd((add) => add + 1) }}>Add</button>
         <div>
         <button onClick={() => {setAdd((add) => add + 1) }}>Add</button>
         </div>
      </header>
    </div>
  );
}

export default App;
