import "./Home.css";
import React, { useState } from "react";

function Home() {
  const [file, setFile] = useState();
  const fileReader = new FileReader();
  const handleOnChange = (e) => {
    setFile(e.target.files[0]);
  };

  return (
    <div className="Home">
        <div className="Home-container">
            <h2>
                Nosotros...
            </h2>
        </div>
      {/* <div className="upload-files">
        <p>Importe su archivo csv aqui</p>
        <form>
          <input
            className="read-file"
            type={"file"}
            accept={".csv"}
            onChange={handleOnChange}
          />
          <br />
          <button className="button">Leer CSV</button>
        </form>
      </div> */}
    </div>
  );
}

export default Home;
