import { useState, useEffect } from "react";

import style from "./app.module.scss";

import { Formulario } from "./formulario/Formulario";
import { Header } from "./header/Header";
import { Pacientes } from "./pacientes/Pacientes";

export const App = () => {
  const [data, setData] = useState([]);
  const [paciente, setPaciente] = useState({});

  useEffect(() => {}, [paciente]);

  useEffect(() => {
    const getLocalStorage = () => {
      const dataLocal = JSON.parse(localStorage.getItem("pacientes")) ?? [];

      // console.log(dataLocal);

      setData(dataLocal);
    };

    getLocalStorage();
  }, []);

  useEffect(() => {
    localStorage.setItem("pacientes", JSON.stringify(data));
  }, [data]);

  const eliminar = (id) => {
    const pacientesActualizados = data.filter((e) => e.id != id);

    setData(pacientesActualizados);
  };

  return (
    <div className={`${style["bg"]} ${style["container"]}`}>
      <Header />
      <div className={style["grid"]}>
        <Formulario
          data={data}
          setData={setData}
          paciente={paciente}
          setPaciente={setPaciente}
        />

        {data.length >= 1 ? (
          <Pacientes
            data={data}
            eliminar={eliminar}
            setPaciente={setPaciente}
          />
        ) : (
          <h2 className={`${style["grid__msg"]}`}>No hay pacientes</h2>
        )}
      </div>
    </div>
  );
};
