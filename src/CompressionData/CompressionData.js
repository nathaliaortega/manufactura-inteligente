import "./CompressionData.css";
import React, { useState } from "react";
import axios from "axios";
import lines from "../icons/lines.png";
import table from "../icons/table.png";
import line_scatter from "../icons/line_scatter.png";
function CompressionData() {
  const [post, setPost] = useState({});
  const [fields, setFields] = useState({});
  const [errors, setErrors] = useState({});
  const [isValid, setIsValid] = useState(true);
  const [loading, setLoading] = useState(false);
  const baseURL =
    "https://p2qmbr4yh5.execute-api.us-east-1.amazonaws.com/staging";

  const columns = [
    'AG GRUESO 3/4IN TRIT PE?A LAV BELLO_Cantidad_Real',
    'AG GRUESO 3/4IN TRIT PE?A LAV BELLO_Humedad',
    'AGR FIN N?4 AMAGA._Cantidad_Real', 'AGR FIN N?4 AMAGA._Humedad',
    'AGR FIN N?4 LAV BELLO._Cantidad_Real',
    'AGR FIN N?4 LAV BELLO._Humedad',
    'AGR FIN N?4 MEZCLADA GIRARDOTA CONCONCRE_Cantidad_Real',
    'AGR FIN N?4 MEZCLADA GIRARDOTA CONCONCRE_Humedad',
    'AGR FIN N?4 NATURAL GIRARDOTA_Cantidad_Real',
    'AGR FIN N?4 NATURAL GIRARDOTA_Humedad',
    'AGR FIN N?4 PARA CONCRETO LAV_Cantidad_Real',
    'AGR FIN N?4 PARA CONCRETO LAV_Humedad',
    'AGR FIN N?4 SANTAFE_Cantidad_Real', 'AGR FIN N?4 SANTAFE_Humedad',
    'AGR FIN RIO PAVIMENTAR_Cantidad_Real',
    'AGR FIN RIO PAVIMENTAR_Humedad',
    'AGR FINO N?4 COMB 50/50 MINCIVIL_Cantidad_Real',
    'AGR FINO N?4 COMB 50/50 MINCIVIL_Humedad',
    'AGR GRU N?57 TM 1IN LAV BELLO_Cantidad_Real',
    'AGR GRU N?57 TM 1IN LAV BELLO_Humedad',
    'AGR GRU R/TM 1IN GIRARDOTA CONCONCRETO_Cantidad_Real',
    'AGR GRU R/TM 1IN GIRARDOTA CONCONCRETO_Humedad',
    'AGR GRU R/TM 1IN GIRARDOTA_Cantidad_Real',
    'AGR GRU R/TM 1IN GIRARDOTA_Humedad',
    'AGR GRU R/TM 1IN R/MEDELLIN_Cantidad_Real',
    'AGR GRU R/TM 3/8IN GIRARDOTA_Cantidad_Real',
    'AGR GRU R/TM 3/8IN GIRARDOTA_Humedad',
    'AGR GRU R/TM 3/8IN MINCIVIL_Cantidad_Real',
    'AGR GRU R/TM 3/8IN MINCIVIL_Humedad',
    'AGR GRU TM 3/8IN LAV BELLO_Cantidad_Real',
    'AGR GRU TM 3/8IN LAV BELLO_Humedad', 'AGUA',
    'CALIZA PULVERIZADA NATURAL UAP', 'CENIZA VOLANTES ENKA',
    'CENIZAS VOLANTES FABRICATO', 'CENIZAS VOLANTES GECELCA',
    'CENIZAS VOLANTES TERMOPAIPA', 'CENIZAS VOLANTES TERMOTASAJERO',
    'CMTO BLANCO CONCRETERO GRANEL ARGOS',
    'CMTO BLANCO THE ASTM C1157 GRANEL ARGOS',
    'CMTO GRIS CONCRETERO GRANEL ARGOS',
    'CMTO GRIS ESTRUCTURAL MAX GRANEL ARGOS',
    'CMTO GRIS PORTL TIIL GRANEL COMPRADO',
    'CMTO GRIS TIPO UG GRANEL ARGOS._Cantidad_Real', 'CODIGO_PLANTA',
    'DELV_QTY', 'PLANT_CODE', 'POLIPROPILENO ZAIRO 1-1/2IN FIBRA SINTET',
    'PRODUCER_QTY', 'REMISION', 'RM_SLUMP', 'SIKA VISCOFLOW 7000',
    'SIKA VISCOFLOW 8300', 'SIKA-AER D SIKA', 'SIKAPLAST 5250 SIKA',
    'SIKAPLAST 5251 SIKA_Cantidad_Real', 'SIKAPLAST AD80', 'SIKAPLAST AD85',
    'SIKATARD 935', 'SIKATARD 935 SIKA', 'SOLD_QTY', 'TEMPERATURA',
    'TKT_CODE', 'TRUCK_CODE'
  ];

  const sendRequest = (e, data) => {
    console.log(data);
    const data_pred = {
      data: {
        compression: true,
        flexion: false,
        asentamiento: false,
        data: true,
        body: data,
      },
    };
    console.log(data_pred);
    setLoading(true);
    axios
      .post(baseURL, data_pred, {
        headers: {
          "Access-Control-Allow-Headers":
            "Access-Control-Allow-Origin,Content-Type,X-Amz-Date,Authorization,X-Api-Key,X-Amz-Security-Token",
          "Access-Control-Allow-Credentials": "true",
          "Access-Control-Allow-Origin": "*",
        },
      })
      .then((response) => {
        setPost(response.data.body);
        setLoading(false);
      });
  };
  const handleChange = (field, e) => {
    let fields_handle = fields;
    fields_handle[field] = e.target.value;
    setFields({ fields });
  };
  const handleValidation = (e) => {
    e.preventDefault();
    let fields_handle = fields;
    let errors_handle = {};
    const re = /^[0-9\b]+$/;
    // columns.map((label_name, i) => {
    //   if (fields_handle[label_name] < 0) {
    //     setIsValid(false);
    //     errors_handle[label_name] = "No puede ser menor a 0";
    //   }
    // });
    // columns.map((label_name, i) => {
    //   if (fields_handle[label_name] == "" || !re.test(e.target.value)) {
    //     setIsValid(false);
    //     errors_handle[label_name] = "No puede estar vacio y debe se run numero";
    //   }
    // });
    // if (fields_handle["TEMPERATURA"] < 10) {
    //   setIsValid(false);
    //   errors_handle["TEMPERATURA"] = "No puede ser menor a 10";
    // }
    // if (fields_handle["TEMPERATURA"] > 35) {
    //   setIsValid(false);
    //   errors_handle["TEMPERATURA"] = "No puede ser mayor a 35";
    // }
    setErrors(errors_handle);

    if (isValid) {
      const data =
        "0.0000000, 0.0000000, 0.0000000, 0.0000000,0.0000000, 0.0000000, 0.0000000, 0.0000000, 0.0000000, 0.0000000, 0.0000000, 0.0000000, 7.0950000, 1.1000000, 0.0000000, 0.0000000, 0.0000000, 0.0000000, 0.0000000, 0.0000000, 0.0000000, 0.0000000, 0.0000000, 0.0000000, 0.0000000, 6.9100000, 0.0000000, 0.0000000, 0.0000000, 0.0000000, 0.0000000, 5.8900000, 0.0000000, 0.0000000, 0.0000000, 0.0000000, 0.0000000, 0.0000000, 0.0000000, 0.0000000, 0.0000000, 2.3390000, 0.0000000, 0.0000000, 1.5020000, 7.0000000, 0.0000000, 0.0000000, 5.0200000, 0.0000000, 7.0000000, 5.5270293, 1.5200000, 1.0980000, 0.0000000, 3.4800000, 0.0000000, 0.0000000, 0.0000000, 1.0720000, 0.0000000, 0.0000000, 0.0000000, 7.0000000";
      let arr_data = [];
      columns.map((label_name, i) => {
        arr_data.push(fields_handle[label_name]);
      });
      arr_data = arr_data.toString();
      sendRequest(e, data);
    }
  };

  return (
    <div className="CompressionData">
      <div className="CompressionData-container">
        <h2>Prediccion del asentamiento</h2>
      </div>
      <div className="CompressionData-main">
        <div className="pred">
          <h3>Predecir con tus propios datos</h3>
          <form onSubmit={(e) => handleValidation(e)}>
            {columns.map((label_name, i) => (
              <label key={i}>
                <label>{label_name}</label>
                <input
                  type="text"
                  name={label_name}
                  onChange={(e) => handleChange(label_name, e)}
                  defaultValue={1}
                />
                <span style={{ color: "red" }}>{errors[label_name]}</span>
              </label>
            ))}

            <br />
            {isValid ? (
              <></>
            ) : (
              <span style={{ color: "red" }}>
                Existen errores en los campos
              </span>
            )}
            <button className="button" type="submit">
              Predecir
            </button>
          </form>
          {!post && loading == true ? (
            <p>cargando...</p>
          ) : post && loading == false ? (
            <>
              <h3>La prediccion para sus datos es:</h3>
              <p className="pred-mape">{post}</p>
              <label>
                Recuerda que esta prediccion puede tener un error de
                aproximadamente el 4%
              </label>
            </>
          ) : (
            <></>
          )}
          <br />
          <br />
        </div>
      </div>
    </div>
  );
}

export default CompressionData;
