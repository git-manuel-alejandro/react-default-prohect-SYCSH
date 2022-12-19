import style from "./paciente.module.scss";

export const Paciente = ({e}) => {
  return (
    <div className={`${style["card"]} shadow`}>
    <p className={`${style["card__name"]}`}>Nombre : <span>{e.nombre}</span></p>
    <p className={`${style["card__name"]}`}>Propietario : <span>{e.propietario}</span></p>
    <p className={`${style["card__name"]}`}>Email : <span>{e.email}</span></p>
    <p className={`${style["card__name"]}`}>Síntomas : <span>{e.sintomas}</span></p>
  </div>
  )
}
