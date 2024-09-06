import '../Equipo/Equipo.css'
import Colaborador from '../Colaborador'
import hexToRgba from 'hex-to-rgba'

const Equipo = (props) => {

  const { colorPrimario,titulo, id } = props.datos
  const { colaboradores, eliminarColaborador, actualizarColor, like } = props

  const objColor = {
    backgroundColor: hexToRgba(colorPrimario, 0.6)
  }

  return <>
    {
      colaboradores.length > 0 &&

      <section className='equipo' style={objColor}>

        <input
          className='input-color'
          type='color' 
          value={colorPrimario}
          onChange={(e) => {
            actualizarColor(e.target.value, id)
          }}
        >

        </input>
        <h3 style={{ borderColor: colorPrimario }}>{titulo}</h3>

        <div className='colaboradores'>

          {
            colaboradores.map((colaborador, index) => <Colaborador
              datos={colaborador}
              key={colaborador}
              colorPrimario={colorPrimario}
              eliminarColaborador={eliminarColaborador}
              like={like}
            />)
          }

        </div>
      </section>
    }
  </>

}

export default Equipo