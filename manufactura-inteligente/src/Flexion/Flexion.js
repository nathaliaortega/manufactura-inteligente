import "./Flexion.css";
import React, { useState } from "react";
import axios from "axios";
import lines from '../icons/lines_flex.png'
import table from '../icons/table_flex.png'
import line_scatter from '../icons/line_scatter_flex.png'
function Flexion() {
  const [post, setPost] = useState();
  const [loading, setLoading] = useState(false);
  const baseURL =
    "https://p2qmbr4yh5.execute-api.us-east-1.amazonaws.com/staging";
  const data_pred = {
    data: {
      compression: false,
      flexion: true,
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
    <div className="Flexion">
      <div className="Flexion-container">
        <h2>Prediccion de la resistencia a la flexión</h2>
      </div>
      <div className="Flexion-main">
        <div className="pred">
          <h3>Predecir el MAPE del modelo</h3>
          {(!post && loading==true)?
          <p>cargando...</p>
          :(post && loading==false)? (
            <>
              <p className="pred-mape">{post}%</p>
              <p className="mape-desc">MAPE. El error porcentual absoluto medio (MAPE) <br/>expresa la exactitud como un porcentaje del error. Debido a que el MAPE es un porcentaje, puede ser más fácil de entender que otros estadísticos de medición de exactitud. Por ejemplo, si el MAPE es 5, en promedio, el pronóstico está errado en un 5%.</p>
              <p className="mape-desc">*Si requiere utilizar el modelo presentado, comuniquese con el administrador</p>
              <button className="button" onClick={sendRequest}>Re-evaluar modelos</button>
              <img src={lines}/>
              <img src={table}/>
              <p>Scatter plot del mejor modelo:</p>
              <img src={line_scatter}/>
            </>
          ) : (
            <button className="button" onClick={sendRequest}>Re-evaluar modelos</button>
          )}
        </div>

      </div>
    </div>
  );
}

export default Flexion;
