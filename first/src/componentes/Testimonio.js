import React from "react";
import '../style-sheets/Testimonio.css'

function Testimonio(props) {
    return(
      <div className='contenedor-testimonio'>
        <img className="imagen" src={require(`../imagenes/${props.imagen}`)} alt={props.alt} />
      
      <div className="contenedor">
        <p className="game">
          <strong>{props.nombre}</strong></p>
        <p className="desarrollador">{props.estudio}</p>
        <p className="resume">{props.resume}</p>
      </div>
      </div>
    );
}

export default Testimonio;