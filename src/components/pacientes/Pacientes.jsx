import React from "react";
import { Paciente } from "./paciente/Paciente";
import style from "./pacientes.module.scss";

export const Pacientes = ({data}) => {

  // console.log(data)
  return (
    <>
     <div className={style["container"]}>
      <h2 className={style["title"]}>Pacientes</h2>

      <p className={style["subtitle"]}>Administra tus  <span className="indigo">pacientes y citas</span></p>


      

      { data.map((e, key)=>{
        return(
          <Paciente key={key} e={e}/>
        )
      })}
   


     </div>
    </>
  );
};
