import "./Compression.css";
import React, { useState } from "react";

function Compression() {
  const [file, setFile] = useState();
  const fileReader = new FileReader();
  const handleOnChange = (e) => {
    setFile(e.target.files[0]);
  };

  return (
    <div className="Compression">
        <div className="Compression-container">
            <h2>
                Prediccion de la resistencia a la compresion (28d)
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

export default Compression;
