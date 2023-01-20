
import './App.css';
import React, { useState } from "react";

function App() {
  const [file, setFile] = useState();

    const fileReader = new FileReader();
  const handleOnChange = (e) => {
    setFile(e.target.files[0]);
};

  return (
    <div className="App">
      <header className="App-header">
        <h1>Manufactura Inteligente del concreto</h1>
      </header>
      <div className='upload-files'>
        <p>Importe su archivo csv aqui</p>
      <form>
                <input className='read-file' type={"file"} accept={".csv"} 
                onChange={handleOnChange}/><br/>
                <button className='button'>Leer CSV</button>
            </form>
      </div>
    </div>
  );
}

export default App;
