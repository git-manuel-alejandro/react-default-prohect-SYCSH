import { useState , useEffect } from "react";
import style from "./app.module.scss";

import { Formulario } from "./formulario/Formulario";
import { Header } from "./header/Header";
import { Pacientes } from "./pacientes/Pacientes";

export const App = () => {

  const [data , setData] = useState([])
  
  
  
  return (
    <div className={`${style["bg"]} ${style["container"]}`}>
      <Header />

      <div className={style["grid"]}>
        <Formulario data={data}  setData={setData}/>
        <Pacientes data={data}/>
      </div>
    </div>
  );
};
