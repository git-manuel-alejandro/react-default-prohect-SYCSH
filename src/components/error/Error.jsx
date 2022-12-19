import React from "react";
import style from './error.module.scss'

export const Error = ({mensaje, tipo}) => {

  // tipo === 'error' ? 'error' : 'success'
  return (
    <label className={`${style["form__label"]} center white  ${style["error"]}`   }>
      {mensaje}
    </label>
  );
};
