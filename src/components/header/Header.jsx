import React from "react";
import style from "./header.module.scss";

export const Header = () => {
  return (
    <>
      <h1 className={style["title"]}>
        Segimiento Pacientes <span>Veterinaria</span>
      </h1>
    </>
  );
};
