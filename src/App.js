import { useState } from 'react';
import {v4 as uuid } from 'uuid';
import './App.css';
import Header from './components/Header';
import Formulario from './components/Formulario';
import MiOrg from './components/MiOrg';
import Equipo from './components/Equipo';
import Footer from './components/Footer';

function App() {
  const [mostrarFormulario, setFormulario] = useState(false)
  const [equipos, setEquipos] = useState([{
    id: uuid(),
    titulo: 'Programacion',
    colorPrimario: '#57C278',
    colorSecundario: '#D9F7E9'
  },
  {
    id: uuid(),
    titulo: 'Front End',
    colorPrimario: '#82CFFA',
    colorSecundario: '#E8F8FF'
  },
  {
    id: uuid(),
    titulo: 'Data Science',
    colorPrimario: '#A6D157',
    colorSecundario: '#F0F8E2'
  },
  {
    id: uuid(),
    titulo: 'Devops',
    colorPrimario: '#E06B69',
    colorSecundario: '#FDE7E8'
  },
  {
    id: uuid(),
    titulo: 'UX y Diseño',
    colorPrimario: '#DB6EBF',
    colorSecundario: '#FAE9F5'
  },
  {
    id: uuid(),
    titulo: 'Móvil',
    colorPrimario: '#FFBA05',
    colorSecundario: '#FFF5D9'
  },
  {
    id: uuid(),
    titulo: 'Innovación y  Gestión',
    colorPrimario: '#FF8A29',
    colorSecundario: '#FFEEDF'
  },]) 
  const [colaboradores, setColaboradores] = useState([{
    id: uuid(),
    equipo: 'Front End',
    foto: 'https://github.com/FuentesAz.png',
    nombre: 'Angel',
    puesto: 'Estudiante',
    fav: true
  },
  {
    id: uuid(),
    equipo: 'Programacion',
    foto: 'https://github.com/FuentesAz.png',
    nombre: 'Zared',
    puesto: 'Estudiante',
    fav: true
  }
  ])

  const actualizarColor = (color, id) => {
    const equiposActualizados = equipos.map((equipo)=>{
      if(equipo.id === id){
        equipo.colorPrimario = color
      }
      return equipo
    })
    setEquipos(equiposActualizados)
  }

  const registrarColaborador = (colaborador) => {
    console.log('Nuevo colaborador', colaborador);
    setColaboradores([...colaboradores, colaborador])
  }

  const crearEquipo = (nuevoEquipo) =>{
    setEquipos([...equipos, {...nuevoEquipo, id: uuid()}])
  }

  const eliminarColaborador = (id) => {
    console.log('Eliminar colaborador', id)
    const nuevosColaboradores = colaboradores.filter((colaborador) => colaborador.id !== id)
    setColaboradores(nuevosColaboradores)
  }

  const cambiarMostrar = () => {
    setFormulario(!mostrarFormulario)
  }

  const like = (id) =>{
    const colaboradoresActualizados = colaboradores.map((colaborador)=>{
      if(colaborador.id === id){
        colaborador.fav = !colaborador.fav
      }
      return colaborador
    })
    setColaboradores(colaboradoresActualizados)
  }

  return (
    <div className="App">
      <Header />

      {
        mostrarFormulario && <Formulario
          registrarColaborador={registrarColaborador}
          crearEquipo={crearEquipo}
          equipos={equipos.map((equipo) => equipo.titulo)} />
      }

      

      <MiOrg cambiarMostrar={cambiarMostrar} />

      {
        equipos.map((equipo, index) => <Equipo
          eliminarColaborador={eliminarColaborador}
          colaboradores={colaboradores.filter(colaborador => colaborador.equipo === equipo.titulo)} datos={equipo} key={equipo.titulo}
          actualizarColor={actualizarColor}
          like={like}
        />)
      }

      <Footer />
    </div>
  );
}

export default App;
