import "./Compression.css";
import React, { useState } from "react";
import axios from "axios";
import lines from '../icons/lines.png'
import table from '../icons/table.png'
import line_scatter from '../icons/line_scatter.png'
function Compression() {
  const [post, setPost] = useState();
  const [loading, setLoading] = useState(false);
  const baseURL =
    "https://p2qmbr4yh5.execute-api.us-east-1.amazonaws.com/staging";
  const data_pred = {
    data: {
      compression: true,
      flexion: false,
      asentamiento: false,
      data: false,
    },
  };

  const sendRequest = (e) => {
    setLoading(true)
    axios.post(baseURL, data_pred, {
  headers:{"Access-Control-Allow-Headers" : "Access-Control-Allow-Origin,Content-Type,X-Amz-Date,Authorization,X-Api-Key,X-Amz-Security-Token",
  "Access-Control-Allow-Credentials" : 'true',
  "Access-Control-Allow-Origin" : "*"}
}).then((response) => {
      setPost(response.data.body);
      setLoading(false)
    });
  };

  return (
    <div className="Compression">
      <div className="Compression-container">
        <h2>Prediccion de la resistencia a la compresion (28d)</h2>
      </div>
      <div className="Compression-main">
        <div className="pred">
          <h3>Predecir el MAPE del modelo</h3>
          {(!post && loading==true)?
          <p>cargando...</p>
          :(post && loading==false)? (
            <>
              <p className="pred-mape">{post}</p>
              <p className="mape-desc">MAPE. El error porcentual absoluto medio (MAPE) <br/>expresa la exactitud como un porcentaje del error. Debido a que el MAPE es un porcentaje, puede ser más fácil de entender que otros estadísticos de medición de exactitud. Por ejemplo, si el MAPE es 5, en promedio, el pronóstico está errado en un 5%.</p>
              <button className="button" onClick={sendRequest}>Re-entrenar</button>
              <img src={lines}/>
              <img src={table}/>
              <p>Scatter plot del mejor modelo:</p>
              <img src={line_scatter}/>
            </>
          ) : (
            <button className="button" onClick={sendRequest}>Re-entrenar</button>
          )}
        </div>
        <div className="data">
          <h3>Predecir con tus propios datos la resistencia a la compresion</h3>
        </div>
      </div>
    </div>
  );
}

export default Compression;
