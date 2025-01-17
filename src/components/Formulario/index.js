import './Formulario.css'
import React from 'react'
import Campo from '../CampoTexto'
import ListaOpciones from '../ListaOpciones'
import Boton from '../Boton'
import { useState } from 'react'

const Formulario = (props) => {

  const [nombre, setNombre] = useState("")
  const [puesto, setPuesto] = useState("")
  const [foto, setFoto] = useState("")
  const [equipo, setEquipo] = useState('')

  const [titulo, setTitulo] = useState('')
  const [color, setColor] = useState('')


  const { registrarColaborador, crearEquipo } = props

  const manejarEnvio = (e) => {
    e.preventDefault()
    console.log('Manejer el envio', equipo)
    let datosAEnviar = {
      nombre,
      puesto,
      foto,
      equipo
    }
    registrarColaborador(datosAEnviar)
  }

  const manejarNuevoEquipo = (e) =>{
    e.preventDefault()
    crearEquipo({titulo,colorPrimario: color})
  }

  return (
    <section className='formulario'>
      <form onSubmit={manejarEnvio}>
        <h2>Rellena el formulario para crear el colaborador.</h2>
        <Campo
          titulo='Nombre'
          placeholder='Ingrese su nombre'
          required
          valor={nombre}
          setValor={setNombre}
        />

        <Campo
          titulo='Puesto'
          placeholder='Ingrese su puesto'
          required
          valor={puesto}
          setValor={setPuesto}
        />

        <Campo
          titulo='Foto'
          placeholder='Ingrese el url de su foto'
          required
          valor={foto}
          setValor={setFoto}
        />

        <ListaOpciones
          valor={equipo}
          setEquipo={setEquipo}
          equipos={props.equipos}
        />

        <Boton>
          Crear
        </Boton>
      </form>
      <form onSubmit={manejarNuevoEquipo}>
        <h2>Rellena el formulario para crear el equipo.</h2>
        <Campo
          titulo='Titulo'
          placeholder='Ingresar titulo'
          required
          valor={titulo}
          setValor={setTitulo}
        />

        <Campo
          titulo='Color'
          placeholder='Ingresar color en Hex...'
          required
          valor={color}
          setValor={setColor}
          type={'color'}
        />

        <Boton>
          Registrar equipo
        </Boton>
      </form>
    </section>
  )
}

export default Formulario