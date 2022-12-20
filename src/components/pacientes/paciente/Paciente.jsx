import style from "./paciente.module.scss";

export const Paciente = ({e , setPaciente,  eliminar}) => {

  const editar = (e) =>{
    setPaciente(e)

  }

  const handleEliminar = (id) =>{

    const respuesta = confirm('Deseas eliminar el paciente ?')

    if(respuesta){
      eliminar(id)
    }
  
  }







  return (
    <div className={`${style["card"]} shadow`}>
    <p className={`${style["card__name"]}`}>Nombre : <span>{e.nombre}</span></p>
    <p className={`${style["card__name"]}`}>Propietario : <span>{e.propietario}</span></p>
    <p className={`${style["card__name"]}`}>Email : <span>{e.email}</span></p>
    <p className={`${style["card__name"]}`}>Síntomas : <span>{e.sintomas}</span></p>


   <div className={`${style["botones"]}`}>
   <button type="button" className={`${style["botones__btn"]}`} onClick={ ()=>{editar(e)}}>Editar</button>
    <button type="button" className={`${style["botones__btn"]} ${style["botones__btn__delete"]}`} onClick={ ()=>{handleEliminar(e.id)}}>Eliminar</button>
   </div>
  </div>
  )
}
