import React from "react";
import { Paciente } from "./paciente/Paciente";
import style from "./pacientes.module.scss";

export const Pacientes = ({ data, eliminar , setPaciente}) => {
  // console.log(data)
  return (
    <>
      <div className={style["container"]}>
        <h2 className={style["title"]}>Pacientes</h2>

        <p className={style["subtitle"]}>
          Administra tus <span className="indigo">pacientes y citas</span>
        </p>

        {data.map((e) => {
          return <Paciente key={e.id} e={e} setPaciente={setPaciente} eliminar={eliminar}/>;
        })}
      </div>
    </>
  );
};
