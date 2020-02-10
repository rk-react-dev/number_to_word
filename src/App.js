import React, {useState} from 'react';
import './App.css';
import numberToWord from './numberToWord'

function App() {
  const [word, setWord] = useState("");

  const onChangeEvent = value => {
    let word = numberToWord(value.target.value);    
    setWord(word);
  };

  return (
    <div className="App">      
     <h1>Convert Number into words</h1>     
     <input onChange={onChangeEvent} id="input-number"></input>
     <h2>{word}</h2>
    </div>
  );
}

export default App;
