import React, { useState, useEffect } from "react";
import { generarId } from "../../utilities/utilities";
import { Error } from "../error/Error";
import style from "./formulario.module.scss";

export const Formulario = ({ data, setData, paciente , setPaciente }) => {
  const [nombre, setNombre] = useState("");
  const [propietario, setPropietario] = useState("");
  const [email, setEmail] = useState("");
  const [ingreso, setIngreso] = useState("");
  const [sintomas, setSintomas] = useState("");
  const [error, setError] = useState(false);

  useEffect(() => {
    setNombre(paciente.nombre);
    setPropietario(paciente.propietario);
    setEmail(paciente.email);
    setIngreso(paciente.ingreso);
    setSintomas(paciente.sintomas);
  }, [paciente]);

  const handleSubmit = (e) => {
    e.preventDefault();

    const newPaciente = {
    
      nombre,
      propietario,
      email,
      ingreso,
      sintomas,
    };


    if ([nombre, propietario, email, ingreso, sintomas].includes("")) {
      return setError(true);
    } else {

      if(paciente.id){
        newPaciente.id = paciente.id
        
        const pacientesActualizados = data.map( pacienteState => pacienteState.id === paciente.id ? newPaciente : pacienteState)

        setData(pacientesActualizados)
        setNombre("");
        setPropietario("");
        setEmail("");
        setIngreso("");
        setSintomas("");
        setError(false);
        setPaciente({})

      }else{
        // console.log('agregando')

        newPaciente.id =  generarId(),
        setData([...data, newPaciente]);
  
        setError(false);
        setNombre("");
        setPropietario("");
        setEmail("");
        setIngreso("");
        setSintomas("");
      }

     
    }
  };

  return (
    <>
      <div className={`${style["container"]}`}>
        <h2 className={`${style["title"]} center`}>Ingreso</h2>
        <p className={`${style["description"]} bold-700 center`}>
          Añade pacientes y <span className="indigo">administralos</span>
        </p>

        <form className={`${style["form"]} shadow`} onSubmit={handleSubmit}>
          <div className={`${style["form__item"]}`}>
            {error && (
              <Error
                mensaje={"Todos los campos son obligatorios"}
                tipo={"error"}
              />
            )}
          </div>

          <div className={`${style["form__item"]}`}>
            <label htmlFor="mascota" className={style["form__label"]}>
              Nombre Mascota : {nombre}
            </label>
            <input
              type="text"
              id="mascota"
              value={nombre}
              placeholder="Nombre Mascota"
              className={style["form__input"]}
              autoComplete="off"
              onChange={(e) => {
                setNombre(e.target.value);
              }}
            />
          </div>

          <div className={`${style["form__item"]}`}>
            <label htmlFor="propietario" className={style["form__label"]}>
              Nombre Propietario
            </label>
            <input
              type="text"
              id="propietario"
              value={propietario}
              placeholder="Nombre Propietario"
              className={style["form__input"]}
              autoComplete="off"
              onChange={(e) => {
                setPropietario(e.target.value);
              }}
            />
          </div>

          <div className={`${style["form__item"]}`}>
            <label htmlFor="email" className={style["form__label"]}>
              Email
            </label>
            <input
              type="email"
              id="email"
              value={email}
              placeholder="email@mail.com"
              className={style["form__input"]}
              autoComplete="off"
              onChange={(e) => {
                setEmail(e.target.value);
              }}
            />
          </div>

          <div className={`${style["form__item"]}`}>
            <label htmlFor="ingreso" className={style["form__label"]}>
              Fecha Ingreso
            </label>
            <input
              type="date"
              id="ingreso"
              value={ingreso}
              className={style["form__input"]}
              autoComplete="off"
              onChange={(e) => {
                setIngreso(e.target.value);
              }}
            />
          </div>

          <div className={`${style["form__item"]}`}>
            <label htmlFor="sintomas" className={style["form__label"]}>
              Sintomas
            </label>

            <textarea
              id="sintomas"
              value={sintomas}
              placeholder="Describe los síntomas"
              className={style["form__input"]}
              autoComplete="off"
              rows="6"
              onChange={(e) => {
                setSintomas(e.target.value);
              }}
            />

            <input
              type="submit"
              value={paciente.id ? "Editar" : "Guardar"}
              className={`${style["form__btn"]}`}
            />
          </div>
        </form>
      </div>
    </>
  );
};
