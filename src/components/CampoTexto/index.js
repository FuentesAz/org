import React from 'react'
import './CampoTexto.css'

const Campo = (props) => {
  const placeholderModificado = `${props.placeholder}...`

  const manejarCambio = (e) => {
    props.setValor(e.target.value)
  }

  const {type = 'text'} = props

  return (
    <div className={`campo campo-${type}`}>
      <label>{props.titulo}</label>
      <input
        placeholder={placeholderModificado}
        required={props.required}
        value={props.valor}
        onChange={manejarCambio}
        type={type}
      />
    </div>
  )
}

export default Campo