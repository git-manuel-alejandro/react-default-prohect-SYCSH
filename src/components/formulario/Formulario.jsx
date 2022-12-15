import React from "react";
import style from "./formulario.module.scss";

export const Formulario = () => {
  return (
    <>
      <div className="">
        <h2 className={`${style["title"]} center`}>Seguimiento de Pacientes</h2>
        <p className={`${style["description"]} bold-700 center`}>
          Añade pacientes y <span className="indigo">Administralos</span>
        </p>

        <form className={`${style["form"]} shadow`}>
          <div className={`${style["form__item"]}`}>
            <label htmlFor="mascota" className={style["form__label"]}>
              Nombre Mascota
            </label>
            <input
              type="text"
              id="mascota"
              placeholder="Nombre Mascota"
              className={style["form__input"]}
              autoComplete="off"
            />
          </div>
        </form>
      </div>
    </>
  );
};
