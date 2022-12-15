import style from "./app.module.scss";

import { Formulario } from "./formulario/Formulario";
import { Header } from "./header/Header";
import { Pacientes } from "./pacientes/Pacientes";

export const App = () => {
  return (
    <div className={`${style["bg"]} ${style["container"]}`}>
      <Header />

      <div className={style["grid"]}>
        <Formulario />
        <Pacientes />
      </div>
    </div>
  );
};
