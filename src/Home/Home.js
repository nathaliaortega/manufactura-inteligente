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
            <p>
            En el sector de la manufactura de concreto, se cuenta con un gran volumen de datos los 
            cuales son utilizados para medir la calidad de la producción entregada y para otros 
            procesos internos de la compañía, sin embargo, estos datos no son utilizados en 
            procesos como la minería de datos para la predicción de características del concreto 
            como asentamiento, resistencia a la compresión o resistencia a la flexión.<br/> <br/> 
            La minería de datos es una rama de la analítica que permite el descubrimiento de 
            información en grandes volúmenes de datos a través de técnicas predictivas que permite 
            predecir eventos futuros, y técnicas descriptivas que permiten encontrar relaciones 
            en el comportamiento de las variables estudiadas.  <br/><br/> 
            La herramienta MANUFACTURA INTELIGENTE DE LOS DATOS, es una herramienta que 
            permite realizar la predicción de la resistencia a la compresión, asentamiento
             y predicción de la resistencia a la flexión, basándose en los datos estructurados 
             provenientes de las bases de datos de concreto. Esta herramienta, facilita su 
             implementación en el sector de la manufactura para experimentos, nuevos desarrollos o desarrollos existentes.<br/><br/> 

            </p>
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
