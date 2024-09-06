import React from 'react'
import '../MiOrg/MiOrg.css'
import { useState } from 'react'

const MiOrg = (props) => {
    // const [nombre, actualizarNombre] = useState('Angel')
    // console.log(props)
    // const [mostrar, setMostrar] = useState(true)

    // const manejarClic = () => {
    //     console.log("mostrar/Ocultar elemento", !mostrar)
    //     setMostrar(!mostrar)
    // }


    return (
        <section className='orgSection'>
            <h3 className='title'>Mi Organizacion</h3>
            <img src="/img/btn-org.png" alt='add' onClick={props.cambiarMostrar} />
        </section>
    )
}

export default MiOrg