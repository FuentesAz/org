import React from 'react'
import './ListaOpciones.css'

const ListaOpciones = (props) => {

  //Metodo map: arreglo.map( (equipo,index) => <option>{equipo}</option> )
  const { setEquipo } = props

  const manejarCambio = (e) => {
    console.log('valor del equipo', e.target.value)
    setEquipo(e.target.value)
  }

  return (
    <div className='lista-opciones'>
      <label>Equipos</label>
      <select value={props.valor} onChange={manejarCambio}>
        <option value='' disabled defaultValue='' hidden>Seleccionar equipo</option>
        {props.equipos.map((equipo, index) => <option key={index} value={equipo}>{equipo}</option>)}
      </select>
    </div>
  )
}

export default ListaOpciones